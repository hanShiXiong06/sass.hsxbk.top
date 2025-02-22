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

namespace addon\phone_shop\app\service\admin\goods;

use addon\phone_shop\app\model\goods\Attr;
use addon\phone_shop\app\model\site\Site;
use core\base\BaseAdminService;


/**
 * 商品参数服务层
 * Class AttrService
 * @package addon\phone_shop\app\service\admin\goods
 */
class AttrService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Attr();
    }

    /**
     * 获取商品参数分页列表
     * @param array $where
     * @param string $field
     * @param string $order
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getPage(array $where = [], $field = 'attr_id,site_id,attr_name,sort')
    {
        $order = 'sort desc attr_id desc';
        if (!empty($where[ 'order' ])) {
            $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
        }
        if($this->site_id !== 0 ){
            $sites =  (new Site())-> field('brand_status')->where([['site_id','=', $this->site_id]]) ->findOrEmpty()->toArray();
            
        }
        
        $site_id = empty($sites['brand_status'] ) ? $this->site_id : $this->site_id.",0";
       
        $search_model = $this->model->where([ [ 'site_id', 'in', "{$site_id}" ] ])->withSearch([ "attr_id", "attr_name" ], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商品参数列表
     * @param array $where
     * @param string $field
     * @return mixed
     */
    public function getList(array $where = [], $field = 'attr_id,site_id,attr_name,sort')
    {
        $order = 'sort desc attr_id desc';
        if (!empty($where[ 'order' ])) {
            $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
        }
           if($this->site_id !== 0 ){
            $sites =  (new Site())-> field('brand_status')->where([['site_id','=', $this->site_id]]) ->findOrEmpty()->toArray();
            
        }
        
        $site_id = empty($sites['brand_status'] ) ? $this->site_id : $this->site_id.",0";
        return $this->model->where([ [ 'site_id', 'in', "{$site_id}" ] ])->withSearch([ "attr_id", "attr_name" ], $where)->field($field)->order($order)->select()->toArray();
    }

    /**
     * 获取商品参数信息
     * @param int $id
     * @param string $field
     * @return mixed
     */
    public function getInfo(int $id, $field = 'attr_id,site_id,attr_name,attr_value_format,sort')
    {
        $info = $this->model->field($field)->where([ [ 'attr_id', "=", $id ] ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加商品参数
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $res = $this->model->create($data);
        return $res->attr_id;
    }

    /**
     * 商品参数编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $this->model->where([ [ 'attr_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->update($data);
        return true;
    }

    /**
     * 删除商品参数
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([ [ 'attr_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->find();
        $res = $model->delete();
        return $res;
    }

    /**
     * 修改商品参数排序号
     * @param $data
     * @return mixed
     */
    public function modifySort($data)
    {
        return $this->model->where([
            [ 'attr_id', '=', $data[ 'attr_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'sort' => $data[ 'sort' ] ]);
    }

    /**
     * 修改商品参数名称
     * @param $data
     * @return mixed
     */
    public function modifyAttrName($data)
    {
        return $this->model->where([
            [ 'attr_id', '=', $data[ 'attr_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'attr_name' => $data[ 'attr_name' ] ]);
    }

    /**
     * 修改商品参数值
     * @param $data
     * @return mixed
     */
    public function modifyAttrValueFormat($data)
    {
        return $this->model->where([
            [ 'attr_id', '=', $data[ 'attr_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'attr_value_format' => $data[ 'attr_value_format' ] ]);
    }

}
