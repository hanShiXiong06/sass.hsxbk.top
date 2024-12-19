<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\service\admin\recycle_order;

use addon\phone_shop_price\app\model\recycle_order\RecycleDevice;
use core\base\BaseAdminService;
use think\db\exception\DbException;
use think\facade\Db;

/**
 * 回收订单设备服务层
 */
class RecycleDeviceService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new RecycleDevice();
    }

    /**
     * 获取设备列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,order_id,imei,model,initial_price,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_at';
        $order = 'create_at desc';
        
        $search_model = $this->model->where([['site_id', '=', $this->site_id]])->withSearch([
            'order_id',
            'imei',
            'model',
            'status'
        ], $where)->field($field)->order($order);
        
        return $this->pageQuery($search_model);
    }

    /**
     * 获取设备详情
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,order_id,imei,model,initial_price,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_at';
        return $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->field($field)->findOrEmpty()->toArray();
    }

    /**
     * 获取订单下的设备列表
     * @param int $order_id
     * @return array
     */
    public function getOrderDevices(int $order_id)
    {
        $field = 'id,order_id,imei,model,initial_price,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_at';
        $list = $this->model->where([
            ['order_id', '=', $order_id],
            ['site_id', '=', $this->site_id]
        ])->field($field)->order('create_at desc')->select()->toArray();

        return ['list' => $list];
    }

    /**
     * 添加设备
     * @param array $data
     * @return int
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $data['status'] = 1;
        $data['check_status'] = 0;
        
        Db::startTrans();
        try {
            // 创建设备
            $device_id = $this->model->create($data)->id;
            
            // 更新订单设备数量
            $this->updateOrderDeviceCount($data['order_id']);
            
            Db::commit();
            return $device_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new DbException($e->getMessage());
        }
    }

    /**
     * 编辑设备
     * @param array $data
     * @return bool
     */
    public function edit(array $data)
    {
        $device = $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->findOrEmpty();
        
        if ($device->isEmpty()) {
            throw new DbException('设备不存在');
        }

        if ($device['status'] !== 1) {
            throw new DbException('只有待验证状态的设备可以编辑');
        }

        return $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->update($data) !== false;
    }

    /**
     * 删除设备
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $device = $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->findOrEmpty();
        
        if ($device->isEmpty()) {
            throw new DbException('设备不存在');
        }

        if ($device['status'] !== 1) {
            throw new DbException('只有待验证状态的设备可以删除');
        }

        Db::startTrans();
        try {
            // 删除设备
            $this->model->where([
                ['id', '=', $id],
                ['site_id', '=', $this->site_id]
            ])->delete();
            
            // 更新订单设备数量
            $this->updateOrderDeviceCount($device['order_id']);
            
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new DbException($e->getMessage());
        }
    }

    /**
     * 更新设备状态
     * @param array $data
     * @return bool
     */
    public function editStatus(array $data)
    {
        $device = $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->findOrEmpty();
        
        if ($device->isEmpty()) {
            throw new DbException('设备不存在');
        }

        if ($device['status'] >= 5) {
            throw new DbException('设备已完成或已退回，无法更新状态');
        }

        $update = [
            'status' => $data['status'],
            'check_result' => $data['check_result'],
            'check_at' => time()
        ];

        // 根据状态设置质检状态
        if ($data['status'] === 3) {
            $update['check_status'] = 1;
        } elseif ($data['status'] === 4) {
            $update['check_status'] = 2;
        }

        return $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->update($update) !== false;
    }

    /**
     * 更新设备价格
     * @param array $data
     * @return bool
     */
    public function editPrice(array $data)
    {
        $device = $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->findOrEmpty();
        
        if ($device->isEmpty()) {
            throw new DbException('设备不存在');
        }

        if ($device['status'] !== 3) {
            throw new DbException('只有验证通过的设备可以调整价格');
        }

        return $this->model->where([
            ['id', '=', $data['id']],
            ['site_id', '=', $this->site_id]
        ])->update([
            'final_price' => $data['final_price'],
            'price_remark' => $data['price_remark']
        ]) !== false;
    }

    /**
     * 更新订单设备数量
     * @param int $order_id
     * @return bool
     */
    protected function updateOrderDeviceCount(int $order_id)
    {
        $count = $this->model->where([
            ['order_id', '=', $order_id],
            ['site_id', '=', $this->site_id]
        ])->count();

        return Db::name('recycle_order')->where([
            ['id', '=', $order_id],
            ['site_id', '=', $this->site_id]
        ])->update(['count' => $count]) !== false;
    }
} 