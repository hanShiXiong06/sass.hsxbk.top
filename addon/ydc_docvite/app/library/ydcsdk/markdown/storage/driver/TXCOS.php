<?php
/*
 *
 * // +----------------------------------------------------------------------
 * // | 易东云文档发布应用
 * // +----------------------------------------------------------------------
 * // | 官方网址：https://web.ydc.show
 * // +----------------------------------------------------------------------
 * // | 易东云团队 版权所有 开源版本可自由商用
 * // +----------------------------------------------------------------------
 * // | Author: YiDong Cloud Team
 * // +----------------------------------------------------------------------
 */

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\storage\driver;

use addon\ydc_docvite\app\library\ydcsdk\markdown\error\TextCheckException;

use Exception;
use GuzzleHttp\Command\Result;
use Qcloud\Cos\Client;
use Qcloud\Cos\Exception\ServiceResponseException;

use think\facade\Log;

/**
 * 腾讯云 COS  存储驱动.
 *
 * @package ydcsdk\library\markdown\storage\driver
 */
class TXCOS implements StorageDriver {
    
    protected ?Client $_cos_client = NULL;
    
    protected array $_config = [
        'secretId'  => '',
        'secretKey' => '',
        'region'    => '',
        'bucket'    => '',
        'domain'    => NULL,// 可选的域名.
        // 参考：https://cloud.tencent.com/document/product/436/13324#.E6.96.87.E4.BB.B6.E5.A4.B9.E5.92.8C.E7.9B.AE.E5.BD.95
        'path'      => '',// 保存相对目录.
        'prefix'    => '',// 可选的前缀. 附加到path之前.
    ];
    
    /**
     * __construct.
     *
     * @throws
     */
    public function __construct(array $config = []) {
        if (empty($config['region'])) {
            throw new Exception('TXCOS: invalid region');
        }
        if (empty($config['secretId'])) {
            throw new Exception('TXCOS: invalid secretId');
        }
        if (empty($config['secretKey'])) {
            throw new Exception('TXCOS: invalid secretKey');
        }
        if (empty($config['bucket'])) {
            throw new Exception('TXCOS: invalid bucket');
        }
        if (empty($config['path'])) {
            throw new Exception('TXCOS: invalid path');
        }
        $this->_config     = array_merge($this->_config, $config);
        $this->_cos_client = new Client(
            [
                'region'      => $this->_config['region'],
                'schema'      => 'https',
                'domain'      => $this->_config['domain'] ?? NULL,
                'credentials' => [
                    'secretId'  => $this->_config['secretId'],
                    'secretKey' => $this->_config['secretKey'],
                ],
            
            ]
        );
    }
    
    /**
     * @inheritDoc
     */
    public function save(string $filename, string $content):bool {
        $key = $this->_getSaveKey($filename);
        $this->_cos_client->PutObject(
            [
                'Bucket'  => $this->_config['bucket'],
                'Key'     => $key,
                'Body'    => $content,
                'Options' => [
                    'Metadata' => [
                        'key' => $key,
                    ],
                ],
            ]
        );
        
        return TRUE;
    }
    
    protected function _getSaveKey(string $key):string {
        if (isset($this->_config['prefix']) && $this->_config['prefix'] !== '') {
            return sprintf(
                '%s/%s/%s',
                trim($this->_config['prefix'], '/'),
                trim($this->_config['path'], '/'),
                $key
            );
        }
        
        return sprintf(
            '%s/%s',
            trim($this->_config['path'], '/'),
            $key
        );
    }
    
    /**
     * @inheritDoc
     */
    public function getURL(string $filename):string {
        return $this->_cos_client->getObjectUrlWithoutSign(
            $this->_config['bucket'],
            $this->_getSaveKey($filename)
        );
    }
    
    /**
     * @inheritDoc
     */
    public function get(string $filename):string {
        return '';
    }
    
    /**
     * @inheritDoc
     */
    public function getList(int $start, int $limit = 30, array $filter = [], array $order = []):array {
        return [];
    }
    
    /**
     * @inheritDoc
     */
    public function remove(string $filename):void {
        $this->_cos_client->DeleteObject(
            [
                'Bucket' => $this->_config['bucket'],
                'Key'    => $this->_getSaveKey($filename),
            ]
        );
        
    }
    
    /**
     * @inheritDoc
     */
    public function getVolumeSize(string $path = ''):int {
        return 0;
    }
    
    /**
     * @inheritDoc
     */
    public function exists(string $filename):bool {
        return $this->_cos_client->doesObjectExist(
            $this->_config['bucket'],
            $this->_getSaveKey($filename),
        
        );
    }
    
    /**
     * @inheritDoc
     */
    public function checkText(string $content):bool {
        try {
            
            /**
             * @var $rs Result
             */
            if (config('app.debug')) {
                Log::info('_parseChkTextResult: request text -> ' . var_export($content, TRUE));
            }
            $rs = $this->_cos_client->DetectText([
                                                     'Bucket' => $this->_config['bucket'],
                                                     'Input'  => [
                                                         'Content' => base64_encode($content),
                                                     ],
                                                 ]);
            
            return $this->_parseChkTextResult($rs);
        } catch (ServiceResponseException $e) {
            Log::error('COS DetectText error: ' . $e->getMessage());
            
            return FALSE;
        }
    }
    
    /**
     * _parseChkTextResult.
     *
     * @param \GuzzleHttp\Command\Result $result
     *
     * @return bool
     * @throws
     */
    protected function _parseChkTextResult(Result $result):bool {
        if (config('app.debug')) {
            Log::info('_parseChkTextResult: result -> ' . var_export($result->toArray(), TRUE));
        }
        
        $result = $result->toArray();
        if (!isset($result['JobsDetail'], $result['JobsDetail']['Label'])) {
            throw new Exception('detail not found');
        }
        $detail        = $result['JobsDetail'];
        $errorLabelMap = [
            'Politics' => '政治',
            'Porn'     => '色情',
            'Ads'      => '营销广告',
            'Illegal'  => '违法',
            'Abuse'    => '谩骂',
        ];
        if ($detail['Label'] === 'Normal') {
            return TRUE;
        }
        
        $hitKeywords = $this->_parseChkTextHitKeywords($detail['Section'] ?? []);
        
        throw new TextCheckException(
            sprintf(
                '文本关键词 \'%s\' 含有 %s 内容',
                $hitKeywords,
                $errorLabelMap[ $detail['Label'] ] ?? $detail['Label']
            )
        );
    }
    
    protected function _parseChkTextHitKeywords(array $section):string {
        // array (
        //      0 =>
        //      array (
        //        'StartByte' => '0',
        //        'Label' => 'Politics',
        //        'Result' => '1',
        //        'PornInfo' =>
        //        array (
        //          'HitFlag' => '0',
        //          'Score' => '3',
        //          'Keywords' => '',
        //          'SubLabel' => '',
        //        ),
        //        'TerrorismInfo' =>
        //        array (
        //          'HitFlag' => '0',
        //          'Score' => '1',
        //          'Keywords' => '',
        //          'SubLabel' => '',
        //        ),
        //        'PoliticsInfo' =>
        //        array (
        //          'HitFlag' => '1',
        //          'Score' => '99',
        //          'Keywords' => '习&大大,习&近&平,习近平',
        //          'SubLabel' => 'ChinesePresident',
        //        ),
        //        'AdsInfo' =>
        //        array (
        //          'HitFlag' => '0',
        //          'Score' => '0',
        //          'Keywords' => '',
        //          'SubLabel' => '',
        //        ),
        //        'IllegalInfo' =>
        //        array (
        //          'HitFlag' => '0',
        //          'Score' => '0',
        //          'Keywords' => '',
        //          'SubLabel' => '',
        //        ),
        //        'AbuseInfo' =>
        //        array (
        //          'HitFlag' => '0',
        //          'Score' => '3',
        //          'Keywords' => '',
        //          'SubLabel' => '',
        //        ),
        //      ),
        //    ),
        //  ),
        if (!isset($section[0], $section[0]['Label']) || $section[0]['Label'] === 'Normal') {
            return '';
        }
        $section  = $section[0];
        $keywords = [];
        foreach (
            [
                'PornInfo',
                'TerrorismInfo',
                'PoliticsInfo',
                'AdsInfo',
                'IllegalInfo',
                'AbuseInfo',
            ] as $sectionKey
        ) {
            if (isset($section[ $sectionKey ], $section[ $sectionKey ]['HitFlag'], $section[ $sectionKey ]['Keywords'])) {
                if ($section[ $sectionKey ]['HitFlag'] > 0 && $section[ $sectionKey ]['Keywords'] !== '') {
                    $keywords[] = $section[ $sectionKey ]['Keywords'];
                }
            }
        }
        
        return implode(', ', $keywords);
    }
}