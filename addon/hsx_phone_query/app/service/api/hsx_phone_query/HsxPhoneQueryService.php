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
    // Fetch user points
    $member_field = 'point';
    $member_model = (new Member())->where('member_id', '=', $this->member_id)->field($member_field)->find()->toArray();

    // Fetch category price
    $category_field = 'price';
    $category_model = (new HsxPhoneQueryCategory())->where('id', '=', $where['id'])->field($category_field)->find()->toArray();

    // Check if user has enough points
    $points_needed = $category_model['price'] * 100;
    if ($member_model['point'] < $points_needed) {
        return error('积分不足');
    }

    // Check local database for existing data
    $data = (new HsxPhoneQueryInfo())->where([['sn', '=', $where['imeis']], ['type_id', '=', $where['id']]])->field('info')->select()->toArray();

    if (!empty($data)) {
        // Deduct points and log the transaction
        $this->consumePoints($this->member_id, $points_needed, 'query', [
            'from_type' => 'query',
            'momo' => '积分消费查询',
            'related_id' => $where['id']
        ]);

        return ['code' => 200, 'data' => json_decode($data[0]['info'])];
    }

    // Fetch appid and Secret from config
    $field = 'appid, Secret';
    $config_data = (new HsxPhoneQueryConfig())->where([['site_id', '=', $this->site_id]])->field($field)->select()->toArray();

    if (empty($config_data)) {
        return error('请先配置appid和Secret');
    }

    // Call the external API
    $api_response = json_decode($this->call_api($config_data[0]['appid'], $config_data[0]['Secret'], $where['imeis'], $where['id']), true);

    if ($api_response['code'] != 200) {
        return $api_response;
    } else {
        // Insert the API response into the local database
        $insert_data = [
            'sn' => $where['imeis'],
            'type_id' => $where['id'],
            'info' => json_encode($api_response['data']),
            'create_time' => time()
        ];
        (new HsxPhoneQueryInfo())->insert($insert_data);

        // Deduct points and log the transaction
        $this->consumePoints($this->member_id, $points_needed, 'query', [
            'from_type' => 'hsx_phone_query',
            'momo' => '积分消费查询',
            'related_id' => $where['id']
        ]);

        return $api_response;
    }
}

protected function consumePoints($member_id, $points, $key, $param = [])
{
    // Fetch member data
    $member_model = (new Member())->where('member_id', '=', $member_id)->find();

    if (!$member_model || $member_model->point < $points) {
        return error('积分不足');
    }

    // Deduct points
    $member_model->point -= $points;
    $member_model->save();

    // Log the point deduction
    (new CoreMemberAccountService())->addLog(
        $this->site_id,
        $member_id,
        MemberAccountTypeDict::POINT,
        -$points, // negative to indicate deduction
        $param['from_type'] ?? '',
        $param['momo'] ?? '消费积分',
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


}    