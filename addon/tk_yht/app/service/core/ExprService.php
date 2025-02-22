<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\sys\CoreConfigService;
use core\exception\CommonException;
use core\exception\NoticeException;
use Exception;
use think\facade\Cache;
use addon\tk_yht\app\dict\common\CommonDict;
/**
 * 物流查询
 */
class ExprService extends YhtService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 物流查询
     * @throws Exception
     */
    public function exprQuery(string $num)
    {
        try {
            $res = $this->http_post('v2/expr/query', [
                'num' => $num,
            ], $this->access_token);
            if($res['status']==200){
                return $res;
            }else{
                throw new Exception($res['msg']);
            }
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

}