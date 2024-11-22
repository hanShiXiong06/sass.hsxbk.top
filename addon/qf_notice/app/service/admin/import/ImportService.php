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

namespace addon\qf_notice\app\service\admin\import;

use addon\qf_notice\app\dict\type\TypeDict;
use addon\qf_notice\app\job\importuser\ImportUser;
use addon\qf_notice\app\model\addon\Addon;
use addon\qf_notice\app\model\user\User;
use addon\qf_notice\app\service\core\SendNoticeService;
use app\model\member\MemberLevel;
use core\base\BaseAdminService;
use core\exception\CommonException;
use PhpOffice\PhpSpreadsheet\IOFactory;


/**
 * 群发应用服务层
 * Class AddonService
 * @package addon\qf_notice\app\service\admin\addon
 */
class ImportService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Notes:导入用户手机号/邮箱(邮箱备用)
     * @Interface import
     * @param $data
     * @return array
     * @author: TK
     * @Time: 2024/11/13   下午3:31
     */
    public function import($data)
    {
        $filePath = $data['file_url'];
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);
        if ($extension !== 'xlsx') {
            unlink($filePath);
            throw new CommonException("暂只支持xlsx格式文件");
        }
        $spreadsheet = IOFactory::load($filePath);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
        $headers = array_shift($sheetData);
        $cleanHeaders = array_map(function ($header) {
            return strtolower(preg_replace('/\s+/', '', $header));
        }, $headers);
        $finalData = array_map(function ($row) use ($cleanHeaders) {
            return array_combine($cleanHeaders, $row);
        }, $sheetData);
        if (count($finalData) > $data['num']) {
            unlink($filePath);
            throw new CommonException("单次最多导入" . $data['num'] . "条数据，请分次导入");
        }
        ImportUser::dispatch([
            'site_id'=>$this->site_id,
            'cat_id'=>$data['cat_id'],
            'data'=>$finalData
        ]);
//        $userModel=new User();
//        foreach ($finalData as $key => $value) {
//            $info = [
//                'site_id'=>$this->site_id,
//                'nickname' => $value['昵称'] ?? '默认昵称',
//                'mobile' => $value['电话'] ?? '',
//                'email' => $value['邮箱'] ?? '',
//                'cat_id'=>$data['cat_id']??'',
//                'num'=>0,
//            ];
//            //手机号唯一性去重
//            $res=$userModel->where(['site_id'=>$this->site_id,'mobile'=>$info['mobile']])->findOrEmpty();
//            if($res->isEmpty()){
//                $userModel->create($info);
//            }else{
//                $userModel->where(['site_id'=>$this->site_id,'mobile'=>$info['mobile']])->update($info);
//            }
//        }
        unlink($filePath);
        return [];
    }
}
