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

namespace addon\sow_community\app\service\api\content;

use addon\sow_community\app\model\Content;
use addon\sow_community\app\model\ContentCollect;
use addon\sow_community\app\service\core\content\CoreContentService;
use addon\sow_community\app\service\core\member\CoreMemberService;
use core\base\BaseApiService;
use core\exception\ApiException;
use think\facade\Db;


/**
 * 社区内容收藏服务层
 * Class ContentCollectService
 * @package addon\sow_community\app\service\api\content
 */
class ContentCollectService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new ContentCollect();
    }

    /**
     * 获取会员是否收藏内容
     * @param int $content_id
     * @return bool
     */
    public function getIsCollect($content_id)
    {
        $count = $this->model->where([ [ 'content_id', "=", $content_id ], [ 'member_id', "=", $this->member_id ], [ 'site_id', "=", $this->site_id ] ])->count();
        return $count > 0;
    }

    /**
     * 获取我收藏的作品
     * @return array
     */
    public function getCollectLists()
    {
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $this->member_id ] ])
            ->with([ 'content' ])
            ->order('create_time desc');
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            foreach ($list[ 'data' ] as $k => $v) {
                if (empty($v[ 'content_cover' ])) unset($list[ 'data' ][ $k ]);
            }
        }
        $list[ 'data' ] = array_values($list[ 'data' ]);
        return $list;
    }

    /**
     * 社区内容收藏
     * @param int $content_id
     * @param int $status
     * @return bool
     */
    public function collect($content_id, $status)
    {
        $content = ( new Content() )->field('member_id')->where([ [ 'content_id', "=", $content_id ], [ 'site_id', "=", $this->site_id ] ])->findOrEmpty()->toArray();
        if (empty($content)) throw new ApiException("CONTENT_NOT_EXIST");
        $is_collect = $this->getIsCollect($content_id);
        Db::startTrans();
        try {
            if ($status == 1) {
                if ($is_collect) {
                    $res = true;
                } else {
                    $res = $this->model->save([
                        'content_id' => $content_id,
                        'member_id' => $this->member_id,
                        'site_id' => $this->site_id
                    ]);
                    ( new CoreContentService() )->editStatNum($content_id, $this->site_id, 'collect_num', 1);//更新内容收藏数
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'collect_num', 1);//更新用户收藏数
                }
            } else {
                if ($is_collect) {
                    $res = $this->model->where([
                        [ 'content_id', "=", $content_id ],
                        [ 'member_id', "=", $this->member_id ],
                        [ 'site_id', "=", $this->site_id ]
                    ])->delete();
                    ( new CoreContentService() )->editStatNum($content_id, $this->site_id, 'collect_num', -1);//更新内容收藏数
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'collect_num', -1);//更新用户收藏数
                } else {
                    $res = true;
                }
            }
            Db::commit();
            return $res;
        } catch (\Exception $e) {
            Db::rollback();
            throw new ApiException($e->getMessage());
        }
    }

}
