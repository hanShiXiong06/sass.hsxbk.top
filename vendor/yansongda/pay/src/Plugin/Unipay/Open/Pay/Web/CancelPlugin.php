<?php

declare(strict_types=1);

namespace Yansongda\Pay\Plugin\Unipay\Open\Pay\Web;

use Closure;
use Yansongda\Artful\Contract\PluginInterface;
use Yansongda\Artful\Exception\ContainerException;
use Yansongda\Artful\Exception\ServiceNotFoundException;
use Yansongda\Artful\Logger;
use Yansongda\Artful\Packer\QueryPacker;
use Yansongda\Artful\Rocket;

use function Yansongda\Pay\get_unipay_config;

/**
 * @see https://open.unionpay.com/tjweb/acproduct/APIList?acpAPIId=755&apiservId=448&version=V2.2&bussType=0
 */
class CancelPlugin implements PluginInterface
{
    /**
     * @throws ContainerException
     * @throws ServiceNotFoundException
     */
    public function assembly(Rocket $rocket, Closure $next): Rocket
    {
        Logger::debug('[Unipay][Pay][Web][CancelPlugin] 插件开始装载', ['rocket' => $rocket]);

        $params = $rocket->getParams();
        $config = get_unipay_config($params);
        $payload = $rocket->getPayload();

        $rocket->setPacker(QueryPacker::class)
            ->mergePayload([
                '_url' => 'gateway/api/backTransReq.do',
                'encoding' => 'utf-8',
                'signature' => '',
                'bizType' => $payload?->get('bizType') ?? '000000',
                'accessType' => $payload?->get('accessType') ?? '0',
                'merId' => $config['mch_id'] ?? '',
                'channelType' => $payload?->get('channelType') ?? '07',
                'signMethod' => '01',
                'txnType' => $payload?->get('txnType') ?? '31',
                'txnSubType' => $payload?->get('txnSubType') ?? '00',
                'backUrl' => $payload?->get('backUrl') ?? $config['notify_url'] ?? '',
                'version' => '5.1.0',
            ]);

        Logger::info('[Unipay][Pay][Web][CancelPlugin] 插件装载完毕', ['rocket' => $rocket]);

        return $next($rocket);
    }
}
