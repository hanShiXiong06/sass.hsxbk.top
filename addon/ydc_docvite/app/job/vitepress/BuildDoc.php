<?php

namespace addon\ydc_docvite\app\job\vitepress;

use addon\ydc_docvite\app\service\admin\build\VitepressService;

use core\base\BaseJob;

use think\facade\Log;

use Throwable;

/**
 * 构建文档.
 */
class BuildDoc extends BaseJob {
    /**
     * doJob.
     *
     * @throws
     */
    public function doJob(int $site_id, int $vault_id, array $params = []):bool {
        try {
            Log::info('[BuildDoc Job]: receive site {site} vault {id} build job', [
                'site' => $site_id,
                'id'   => $vault_id,
            ]);
            
            $service = new VitepressService();
            $service->build($site_id, $vault_id);
            
            Log::info('[BuildDoc Job]: vault build job done');
            
            return TRUE;
        } catch (Throwable $e) {
            Log::info(
                '[BuildDoc Job]: build job failed, {name}: {code} - {msg}', [
                                                                              'name' => get_class($e),
                                                                              'code' => $e->getCode(),
                                                                              'msg'  => $e->getMessage(),
                                                                          ]
            );
            throw $e;
        }
    }
    
}
