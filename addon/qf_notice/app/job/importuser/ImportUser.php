<?php

namespace addon\qf_notice\app\job\importuser;

use addon\qf_notice\app\model\user\User;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 同步商品
 */
class ImportUser extends BaseJob
{
    /**
     * 消费
     * @param $data
     * @return true
     */
    public function doJob($site_id, $cat_id,$data)
    {
        try {
            $userModel = new User();
            foreach ($data as $key => $value) {
                $info = [
                    'site_id' => $site_id,
                    'nickname' => $value['昵称'] ?? '默认昵称',
                    'mobile' => $value['电话'] ?? '',
                    'email' => $value['邮箱'] ?? '',
                    'cat_id' => $cat_id,
                    'num' => 0,
                ];
                //手机号唯一性去重
                $res = $userModel->where(['site_id' => $site_id, 'mobile' => $info['mobile']])->findOrEmpty();
                if ($res->isEmpty()) {
                    $userModel->create($info);
                } else {
                    $userModel->where(['site_id' => $site_id, 'mobile' => $info['mobile']])->update($info);
                }
            }
            return true;
        } catch (\Exception $e) {
            Log::write('--- 批量导入会员 ---错误' . date('Y-m-d H:i:s'));
            Log::write($e);
            return true;
        }
    }


}
