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

    /**
     * 获取分类列表
     * @param array $where
     * @return array
     
    public function query(array $where = [])
    {
        // 获取用户的id $this->member_id 
        // 通过 member_id 查询 member对象 
        $member_field = 'point';
        $member_model = (new Member()) -> where('member_id','=',$this->member_id )->field($member_field)->find()->toArray() ;

        
        $category_field = 'price';
        $category_model=  (new HsxPhoneQueryCategory())-> where('id','=',$where['id'] )->field($category_field)->find()->toArray();
        if($member_model['point'] < $category_model['price']*100){
            return error( '积分不足' );
        }



        // 先通过本地的数据库查询 是否有数据
       $data =  ( new HsxPhoneQueryInfo())->where( [['sn', '=', $where['imeis']],['type_id','=',$where['id'] ]] )->field('info')->select()->toArray();
       
       

       if(!empty($data)){
            // 消费积分 通过 member_id 查询 member对象 
            $member_model = (new Member()) -> where('member_id','=',$this->member_id )->find()->toArray() ;
            $member_model['point'] = $member_model['point'] - $category_model['price']*100;
            (new Member()) -> where('member_id','=',$this->member_id )->update( $member_model );


            return [ 'code'=>200,   'data'=>json_decode( $data[0]['info']) ];
        }
        $field = 'appid, Secret';

        $data = (new HsxPhoneQueryConfig())->where([['site_id', '=', $this->site_id]])->field($field)->select()->toArray();
       
        if(empty($data)){
            return error( '请先配置appid和Secret' );
        }
        

       $data =   json_decode( $this->call_api( $data[0]['appid'], $data[0]['Secret'], $where['imeis'] , $where['id'] ) , true);
    
       if($data['code'] != 200){
           return $data;
       }else{
       // 将$data['data'] 插入数据库 type = $where['id'] , sn = $where['imeis'];
          $insert_data = [
             'sn' => $where['imeis'],
             'type_id' => $where['id'],
             'info' => json_encode( $data['data'] ),
             'create_time' => time()
          ];
          // 将查询处理的数据插入数据库
          (new HsxPhoneQueryInfo())->insert( $insert_data );
          // 消费积分
          $member_model = (new Member()) -> where('member_id','=',$this->member_id )->find()->toArray() ;
          $member_model['point'] = $member_model['point'] - $category_model['price']*100;
          (new Member()) -> where('member_id','=',$this->member_id )->update( $member_model );

           return $data;
       }
   
    }*/

    

    public function query(array $where = [])
    {
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
                'info' => json_encode($new_data) // Re-encode the info with the updated member_id
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
                'member_id'=>$this->member_id
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
    
        // 定义需要查询的字段
        $field = 'id,sn, type_id, info, create_time';
        // 定义排序规则
        $order = 'create_time desc';
    
        // 构建查询条件，过滤当前用户的记录
        $search_model =(new HsxPhoneQueryInfo())
            ->where([['member_id', '=', $this->member_id]])  // 根据用户ID进行过滤
             ->withSearch(['sn', 'type_id'], $where)  // 使用搜索器根据条件进行过滤，比如 sn 和 type_id
             ->append(['type_name'])  // 附加 type_name
            ->field($field)  // 选择需要的字段
            ->order($order); // 按创建时间倒序排列
    
        // 调用分页查询
        $list = $this->pageQuery($search_model);
       

        // 返回查询结果
        return $list;
    }
    
    // detail
    public function detail(array $where = [])
    {
        $field = 'id,sn, type_id, info, create_time';
        $data = (new HsxPhoneQueryInfo())->where([['member_id', '=', $this->member_id]])
            ->where($where)
            ->field($field)
            ->append(['type_name'])  // 附加 type_name
            ->find()
            ->toArray();
        // 将 $data['info'] 字符串转换为数组
        $data['info'] = json_decode($data['info'], true);
        return $data;
    }

}    