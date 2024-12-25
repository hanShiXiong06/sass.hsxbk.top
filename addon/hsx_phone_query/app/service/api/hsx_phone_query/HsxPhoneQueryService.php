<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\hsx_phone_query\app\service\api\hsx_phone_query;

use addon\hsx_phone_query\app\model\HsxPhoneQueryConfig;
use addon\hsx_phone_query\app\model\HsxPhoneQueryInfo;
use addon\hsx_phone_query\app\model\HsxPhoneQueryCategory;
use app\service\core\member\CoreMemberAccountService;
use app\dict\member\MemberAccountTypeDict;
use core\exception\CommonException;

// 引入member模型
use app\model\member\Member;

use core\base\BaseApiService;


/**
 * 分类服务层
 * Class HsxPhoneQueryCategoryService
 * @package addon\hsx_phone_query\app\service\admin\hsx_phone_query_category
 */
class HsxPhoneQueryService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        // $this->model = new HsxPhoneQuery();
    }

   // watermark
   public function watermark(){
    return 'watermark';
   }

    public function query(array $where = [])
    {

        //  如果当前用户查询过 则直接返回
        // 条件是
        $data = (new HsxPhoneQueryInfo())->where([['sn', '=', $where['imeis']], ['type_id', '=', $where['id']]])->field('info')->select()->toArray();
        if (!empty($data)) {
            return ['code' => 200, 'data' => $data[0]['info']];
        }

        // 根据支付类型设置查询字段
        $payType = $where['payType'] ?? 'point';
        $member_field = $payType === 'point' ? 'point' : 'balance';
    
        // 获取会员数据
        $member_model = (new Member())->where('member_id', '=', $this->member_id)->field($member_field)->find()->toArray();
    
        // 获取查询类别价格
        $category_model = (new HsxPhoneQueryCategory())->where('id', '=', $where['id'])->field('price')->find()->toArray();
    
        // 根据支付方式设置所需消耗的金额或积分
        $amount_needed = $payType === 'point' ?  $category_model['price']*100 : $category_model['price'] ;
    
        // 检查用户积分或余额是否足够
        if ($member_model[$member_field] < $amount_needed) {
            return ($payType === 'point' ? '积分不足' : '余额不足');
        }
    
        // 检查本地数据库是否有现有数据
        $data = (new HsxPhoneQueryInfo())->where([['sn', '=', $where['imeis']], ['type_id', '=', $where['id']]])->field('info')->select()->toArray();
    
        if (!empty($data)) {
            // 扣除积分或余额并记录日志
            $this->consumeAmount($this->member_id, $amount_needed, $payType, '查询', [
                'from_type' => 'query',
                'momo' => $payType === 'point' ? '积分消费查询' : '余额消费查询',
                'related_id' => $where['id']
            ]);
    
            // 扣除以后把这个$data 数据 重新插入到数据一份 并替换member_id 为 $this->member_id
            $new_data = json_decode($data[0]['info'], true); // Decode existing info to an array
            $new_data['member_id'] = $this->member_id; // Replace member_id with the current member's id
    
            // 将新的数据插入数据库
            (new HsxPhoneQueryInfo())->insert([
                'sn' => $where['imeis'],
                'type_id' => $where['id'],
                'member_id' => $this->member_id,
                'info' => json_encode($new_data), // Re-encode the info with the updated member_id
                // 又加了两个字段 一个是 is_look 一个是 pid  (父级分类id | 前端传过来的)
                'is_look' => 0,
                'pid' => $where['pid']
            ]);
    
            return ['code' => 200, 'data' => $new_data]; // Return the updated info
        }
    
        // 获取外部 API 所需的 appid 和 Secret
        $config_data = (new HsxPhoneQueryConfig())->where([['site_id', '=', $this->site_id]])->field('appid, Secret')->select()->toArray();
    
        if (empty($config_data)) {
            return error('请先配置appid和Secret');
        }
    
        // 调用外部 API
        $api_response = json_decode($this->call_api($config_data[0]['appid'], $config_data[0]['Secret'], $where['imeis'], $where['id']), true);
    
        if ($api_response['code'] != 200) {
            return $api_response;
        } else {
            // 插入API返回数据到本地数据库
            $insert_data = [
                'sn' => $where['imeis'],
                'type_id' => $where['id'],
                'info' => json_encode($api_response['data']),
                'create_time' => time(),
                'member_id'=>$this->member_id,
                'pid' => $where['pid']
            ];
            (new HsxPhoneQueryInfo())->insert($insert_data);
    
            // 扣除积分或余额并记录日志
            $this->consumeAmount($this->member_id, $amount_needed, $payType, '查询', [
                'from_type' => 'hsx_phone_query',
                'momo' => $payType === 'point' ? '积分消费查询' : '余额消费查询',
                'related_id' => $where['id']
            ]);
    
            return $api_response;
        }
    }
    
    protected function consumeAmount($member_id, $amount, $payType, $key, $param = [])
    {
        // 获取会员数据
        $member_model = (new Member())->where('member_id', '=', $member_id)->find();
        
        $field = $payType === 'point' ? 'point' : 'balance';
        
        // 检查积分或余额是否足够
        if (!$member_model || $member_model[$field] < $amount) {
            return error($payType === 'point' ? '积分不足' : '余额不足');
        }
    
        // 扣除积分或余额
        $member_model->$field -= $amount;
        // $member_model->save();
    
        // 记录扣除日志
        $log_type = $payType === 'point' ? MemberAccountTypeDict::POINT : MemberAccountTypeDict::BALANCE;
        $momo_text = $payType === 'point' ? '消费积分' : '消费余额';
    
        (new CoreMemberAccountService())->addLog(
            $this->site_id,
            $member_id,
            $log_type,
            -$amount, // 负数表示扣除
            $param['from_type'] ?? '',
            $param['momo'] ?? $momo_text,
            $param['related_id'] ?? 0
        );
    
        return true;
    }
    


    public function generate_md5_sign($params, $secret)
{
    // Step 1: Sort the parameters by key in ASCII order and build the query string
    ksort($params);
    $queryString = http_build_query(array_filter($params)); // Filter out empty values

    // Step 2: Append the secret key to the query string
    $queryString .= '&secret=' . $secret;

    // Step 3: Generate the MD5 signature
    return md5($queryString);
}
public function call_api($appid, $secret, $code , $id)
{
    // 固定的参数
    $params = [
        'appid' => $appid,
        'code' => $code,
        'key' => $id,  // 固定的接口编码
        'style' => '11',    // 返回文本格式，11表示返回中文
        'time' => time(),   // 当前时间戳
    ];

    // Step 4: Generate the MD5 signature using the separate method
    $params['sign'] = $this->generate_md5_sign($params, $secret);

    // Build the final query string
    $finalQueryString = http_build_query($params);

    // API URL
    $url = "https://api-srv.gkdt.com/inquiry/async";

    // Initialize CURL
    $ch = curl_init();

    // Set CURL options
    curl_setopt($ch, CURLOPT_URL, $url . '?' . $finalQueryString); // Append the query string to the URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout for the request

    // Execute the request
    $response = curl_exec($ch);

    // Check for CURL errors
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        curl_close($ch);
        return "CURL Error: " . $error_msg;
    }

    // Close the CURL session
    curl_close($ch);

    // Return the response
    return $response;
}
    // lists 获取个人用户已经查询后的列表
    public function lists(array $where = [])
    {
        try {
            // 定义需要查询的字段
            $field = 'id,sn,type_id,pid,info,create_time,is_look';

            // 处理时间参数，转换为时间戳
            if (!empty($where['start_time'])) {
                $where['start_time'] = strtotime($where['start_time']);
            }
            if (!empty($where['end_time'])) {
                $where['end_time'] = strtotime($where['end_time'] . ' 23:59:59');
            }

            // 构建基础查询条件
            $search_model = (new HsxPhoneQueryInfo())->where([
                ['member_id', '=', $this->member_id]
            ]);

            // 处理关键词搜索
            if (!empty($where['keyword'])) {
                $search_model->where('sn', 'like', "%{$where['keyword']}%");
            }

            // 处理分类筛选
            if (!empty($where['pid'])) {
                $search_model->where('pid', '=', (int)$where['pid']-1);
            }

            // 处理时间范围
            if (!empty($where['start_time']) && !empty($where['end_time'])) {
                $search_model->whereBetween('create_time', [$where['start_time'], $where['end_time']]);
            }

            // 设置排序规则：未读优先，时间倒序
            $search_model->order([
                'is_look' => 'asc',
                'create_time' => 'desc'
            ]);

            // 设置查询字段和关联数据
            $search_model->field($field)->append(['type_name']);

            // 执行分页查询
            $list = $this->pageQuery($search_model);

            // 格式化数据
            if (!empty($list['data'])) {
                foreach ($list['data'] as &$item) {
                    // 解析JSON数据
                    if (!empty($item['info'])) {
                        $item['info'] = json_decode($item['info'], true);
                    }
                    // 格式化时间
                    if (!empty($item['create_time']) && is_numeric($item['create_time'])) {
                        $item['create_time'] = date('Y-m-d H:i:s', (int)$item['create_time']);
                    }
                }
            }

            return $list;
        } catch (\Exception $e) {
            // 记录错误日志
            \think\facade\Log::error('获取查询记录列表失败：' . $e->getMessage());
            return ['code' => 0, 'msg' => '获取记录失败'];
        }
    }
    
    // detail
    public function detail(array $where = [])
    {
        $field = 'id,sn, type_id, info, create_time,is_look';
        $data = (new HsxPhoneQueryInfo())->where([['member_id', '=', $this->member_id]])
            ->where($where)
            ->field($field)
            ->append(['type_name'])  // 附加 type_name
            ->find()
            ->toArray();
        // 将 $data['info'] 字符串转换为数组
        $data['info'] = json_decode($data['info'], true);
       // 调用这个方法证明用户已查看 则将当前id数据进行更新 is_look = 1
       // 先查询如果is_look 为 1 则直接返回
       $is_look = (new HsxPhoneQueryInfo())->where([['id', '=', $data['id']]])->value('is_look');
       if ($is_look == 1) {
        return $data;
       }

       (new HsxPhoneQueryInfo())->where([['id', '=', $data['id']]])->update(['is_look' => 1]);
        
        return $data;
    }

    // 获取水印配置
    public function getWatermark()
    {
        $config = (new HsxPhoneQueryConfig())->where([
            ['site_id', '=', $this->site_id]
        ])->field('watermark_text, watermark_color, watermark_size, watermark_opacity')->find();

        return [
            'text' => $config['watermark_text'] ?? '仅供参考',
            'color' => $config['watermark_color'] ?? 'rgba(0,0,0,0.03)',
            'size' => $config['watermark_size'] ?? '120',
            'opacity' => $config['watermark_opacity'] ?? '0.03'
        ];
    }

}    