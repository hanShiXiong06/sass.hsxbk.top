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
use addon\sow_community\app\model\ContentLike;
use addon\sow_community\app\service\core\content\CoreContentService;
use addon\sow_community\app\service\core\member\CoreMemberService;
use core\base\BaseApiService;
use core\exception\ApiException;
use think\facade\Db;


/**
 * 社区内容点赞服务层
 * Class ContentLikeService
 * @package addon\sow_community\app\service\api\content
 */
class ContentLikeService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new ContentLike();
    }

    /**
     * 获取会员是否点赞内容
     * @param int $content_id
     * @return bool
     */
    public function getIsLike($content_id)
    {
        $count = $this->model->where([ [ 'content_id', "=", $content_id ], [ 'member_id', "=", $this->member_id ], [ 'site_id', "=", $this->site_id ] ])->count();
        return $count > 0;
    }

    /**
     * 获取我赞过的作品
     * @return array
     */
    public function getLikeLists(array $where = [])
    {
        $member_id = $where[ 'member_id' ] == '' ? $this->member_id : $where[ 'member_id' ];
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $member_id ] ])
            ->with([ 'content' ])
            ->order('create_time desc');
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            foreach ($list[ 'data' ] as $k => $v) {
                $v[ 'content_cover' ] = $v[ 'content_cover_thumb_mid' ] ? : $v[ 'content_cover' ];
                if (empty($v[ 'content_cover' ])) unset($list[ 'data' ][ $k ]);
            }
        }
        $list[ 'data' ] = array_values($list[ 'data' ]);
        return $list;
    }

    /**
     * 社区内容点赞
     * @param int $content_id
     * @param int $status
     * @return bool
     */
    public function like($content_id, $status)
    {
        $content = ( new Content() )->field('member_id')->where([ [ 'content_id', "=", $content_id ], [ 'site_id', "=", $this->site_id ] ])->findOrEmpty()->toArray();
        if (empty($content)) throw new ApiException("CONTENT_NOT_EXIST");
        $is_like = $this->getIsLike($content_id);
        Db::startTrans();
        try {
            if ($status == 1) {
                if ($is_like) {
                    $res = true;
                } else {
                    $res = $this->model->save([
                        'content_id' => $content_id,
                        'member_id' => $this->member_id,
                        'site_id' => $this->site_id
                    ]);
                    ( new CoreContentService() )->editStatNum($content_id, $this->site_id, 'like_num', 1);//更新内容点赞数
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'like_num', 1);//更新用户点赞数
                }
            } else {
                if ($is_like) {
                    $res = $this->model->where([
                        [ 'content_id', "=", $content_id ],
                        [ 'member_id', "=", $this->member_id ],
                        [ 'site_id', "=", $this->site_id ]
                    ])->delete();
                    ( new CoreContentService() )->editStatNum($content_id, $this->site_id, 'like_num', -1);
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'like_num', -1);//更新用户点赞数
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
