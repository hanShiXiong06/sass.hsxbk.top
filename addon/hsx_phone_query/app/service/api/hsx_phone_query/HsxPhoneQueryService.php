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

    /**
     * 查询手机串号信息
     * @param array $where 查询参数
     * @return array|string
     */
    public function query(array $where = [])
    {
        // 验证必要参数
        if (empty($where['imeis']) || empty($where['id'])) {
            throw new CommonException("参数错误");
            // return error('参数错误');
        }

        // 处理多串号，支持换行符和逗号分隔
        $input = str_replace(["\r\n", "\r", "\n"], ',', $where['imeis']); // 将所有换行符转换为逗号
        $imeis = array_filter(array_map('trim', explode(',', $input))); // 分割并去除空白
        
        if (empty($imeis)) {
            throw new CommonException("请输入有效的串号");
            // return error('请输入有效的串号');
        }

        // 去除重复的串号
        $imeis = array_unique($imeis);

        // 获取查询配置和价格信息
        $queryConfig = $this->getQueryConfig($where['id']);
        if (!is_array($queryConfig)) {
            return $queryConfig; // 返回错误信息
        }

        // 计算总费用并检查用户余额
        $totalCost = $queryConfig['price'] * count($imeis);
        $checkBalance = $this->checkUserBalance($totalCost, $where['payType'] ?? 'point');
        if (!is_array($checkBalance)) {
            return $checkBalance; // 返回错误信息
        }

        $results = [];
        $newQueries = 0;
        
        // 处理每个串号
        foreach ($imeis as $imei) {
            $imei = trim($imei);
            if (empty($imei)) continue;

            // 查询本地数据库
            $localResult = $this->getLocalQueryResult($imei, $where['id']);
            
            if ($localResult) {
                $results[] = $this->processExistingQuery($localResult, $where);
            } else {
                // 调用外部API
                $apiResult = $this->processNewQuery($imei, $where, $queryConfig);
                if (is_array($apiResult)) {
                    $results[] = $apiResult;
                    $newQueries++;
                } else {
                    $results[] = ['sn' => $imei, 'error' => $apiResult];
                }
            }
        }

        // 只在有新查询时扣费
        if ($newQueries > 0) {
            $actualCost = $queryConfig['price'] * $newQueries;
            $this->deductUserBalance($actualCost, $where['payType'] ?? 'point', $where['id']);
        }

        return ['code' => 200, 'data' => $results];
    }

    /**
     * 获取查询配置和价格信息
     */
    protected function getQueryConfig($typeId)
    {
        // 获取查询类别价格
        $category = (new HsxPhoneQueryCategory())->where('id', '=', $typeId)->field('price')->find();
        if (empty($category)) {
            throw new CommonException("查询类型不存在");
            // return error('查询类型不存在');
        }

        // 获取API配置
        $config = (new HsxPhoneQueryConfig())->where([['site_id', '=', $this->site_id]])->field('appid, Secret')->find();
        if (empty($config)) {
            throw new CommonException("请先配置appid和Secret");
            // return error('请先配置appid和Secret');
        }

        return [
            'price' => $category['price'],
            'appid' => $config['appid'],
            'secret' => $config['Secret']
        ];
    }

    /**
     * 检查用户余额是否足够
     */
    protected function checkUserBalance($amount, $payType)
    {
        $field = $payType === 'point' ? 'point' : 'balance';
        $needed = $payType === 'point' ? $amount * 100 : $amount;

        $member = (new Member())->where('member_id', '=', $this->member_id)->field($field)->find();
        if (!$member || $member[$field] < $needed) {
            throw new CommonException($payType === 'point' ? '积分不足' : '余额不足');
            // return error($payType === 'point' ? '积分不足' : '余额不足');
        }

        return ['field' => $field, 'needed' => $needed];
    }

    /**
     * 获取本地查询结果
     */
    protected function getLocalQueryResult($imei, $typeId)
    {
        return (new HsxPhoneQueryInfo())
            ->where([['sn', '=', $imei], ['type_id', '=', $typeId]])
            ->field('info')
            ->find();
    }

    /**
     * 处理已存在的查询记录
     */
    protected function processExistingQuery($result, $where)
    {
        $data = json_decode($result['info'], true);
        
        // 插入新记录，记录当前用户的查询
        (new HsxPhoneQueryInfo())->insert([
            'sn' => $where['imeis'],
            'type_id' => $where['id'],
            'member_id' => $this->member_id,
            'info' => $result['info'],
            'is_look' => 0,
            'pid' => $where['pid'] ?? 0,
            'pay_type' => $where['payType'] ?? 'point',
            'money' => $where['payType'] === 'point' ? 0 : $data['price'] ?? 0,
            'create_time' => time()
        ]);

        return $data;
    }

    /**
     * 处理新的查询请求
     */
    protected function processNewQuery($imei, $where, $config)
    {
        $apiResponse = json_decode($this->call_api($config['appid'], $config['secret'], $imei, $where['id']), true);
        
        if ($apiResponse['code'] != 200) {
            return $apiResponse['msg'] ?? '查询失败';
        }

        // 保存查询结果
        (new HsxPhoneQueryInfo())->insert([
            'sn' => $imei,
            'type_id' => $where['id'],
            'member_id' => $this->member_id,
            'info' => json_encode($apiResponse['data']),
            'is_look' => 0,
            'pid' => $where['pid'] ?? 0,
            'pay_type' => $where['payType'] ?? 'point',
            'money' => $where['payType'] === 'point' ? 0 : $config['price'],
            'create_time' => time()
        ]);

        return $apiResponse['data'];
    }

    /**
     * 扣除用户余额并记录
     */
    protected function deductUserBalance($amount, $payType, $relatedId)
    {
        $needed = $payType === 'point' ? $amount * 100 : $amount;
        
        // 扣除余额或积分
        $member = (new Member())->where('member_id', '=', $this->member_id)->find();
        $field = $payType === 'point' ? 'point' : 'balance';
        $member->$field -= $needed;
        $member->save();

        // 记录消费日志
        $logType = $payType === 'point' ? MemberAccountTypeDict::POINT : MemberAccountTypeDict::BALANCE;
        (new CoreMemberAccountService())->addLog(
            $this->site_id,
            $this->member_id,
            $logType,
            -$needed,
            'hsx_phone_query',
            $payType === 'point' ? '积分消费查询' : '余额消费查询',
            $relatedId
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
    // var_dump($response);
    // 如果返回的数据是JSON，则解析成数组 
    if (is_string($response)) {
        $response = json_decode($response, true);
    }
    
    // 判断返回的 code == 200
    if ($response['code'] != 200) {
        throw new \Exception($response['message']);
    }


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