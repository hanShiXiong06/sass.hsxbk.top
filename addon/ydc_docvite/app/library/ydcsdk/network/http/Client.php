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

namespace addon\ydc_docvite\app\library\ydcsdk\network\http;

use Exception;

use GuzzleHttp\Client as GClient;
use GuzzleHttp\Handler\CurlHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Psr7\Utils;

use Monolog\Handler\StreamHandler;
use Monolog\Logger;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

use addon\ydc_docvite\app\library\ydcsdk\log\JsonFormatter;

/**
 * HTTP请求客户端.
 *
 * @package ydcsdk\network
 */
class Client {
    
    /**
     * @var GClient $_client
     */
    private GClient $_client;
    
    private Logger $_logger;
    
    private array $_config = [
        'name'                  => 'DEFAULT',
        'address'               => '',
        'timeout'               => 30,
        'isDebug'               => FALSE,
        'responseCheck'         => '',
        'responseFatalErrCheck' => '',
        
        'enableCert' => FALSE,
        'cert'       => '',
        'cert_key'   => '',
        'cert_ca'    => '',
    ];
    
    /**
     *  Constructor.
     *
     * @param array $config
     *
     * @throws \Exception
     */
    public function __construct(array $config) {
        if (empty($config['address'])) {
            throw new Exception('address is empty');
        }
        $this->_config['address'] = $config['address'];
        
        if (isset($config['name'])) {
            $this->_config['name'] = $config['name'];
        }
        
        if (isset($config['enableCert'])) {
            $this->_config['enableCert'] = $config['enableCert'] == TRUE;
        }
        if (isset($config['cert'])) {
            $this->_config['cert'] = $config['cert'];
        }
        if (isset($config['cert_key'])) {
            $this->_config['cert_key'] = $config['cert_key'];
        }
        if (isset($config['cert_ca'])) {
            $this->_config['cert_ca'] = $config['cert_ca'];
        }
        if ($this->_config['enableCert']) {
            if (!is_file($this->_config['cert']) || !is_file($this->_config['cert_key']) || !is_file($this->_config['cert_ca'])) {
                throw new Exception('enableCert requires cert file, cert key file and CA file');
            }
        }
        
        if (isset($config['timeout'])) {
            $this->_config['timeout'] = $config['timeout'];
        }
        
        if (isset($config['isDebug'])) {
            $this->_config['isDebug'] = $config['isDebug'] == TRUE;
        }
        
        if (isset($config['logPath'])) {
            $this->_config['logPath'] = $config['logPath'];
        }
        
        if (isset($config['responseCheck']) && is_callable($config['responseCheck'])) {
            $this->_config['responseCheck'] = $config['responseCheck'];
        }
        if (isset($config['responseFatalErrCheck']) && is_callable($config['responseFatalErrCheck'])) {
            $this->_config['responseFatalErrCheck'] = $config['responseFatalErrCheck'];
        }
        
        $this->_logger = new Logger('YDC HTTP CLIENT: ' . $this->_config['name']);
        $logFile       = sprintf(
            "%s/ydcsdk-httpclient-%s.log",
            $this->_config['logPath'] ?? '/tmp',
            $this->_config['name'],
        );
        $handler       = new StreamHandler(
            $logFile, Logger::DEBUG
        );
        $handler->setFormatter(new JsonFormatter());
        $this->_logger->pushHandler($handler);
        
        $this->_client = new GClient(
            [
                'base_uri' => $this->_config['address'],
                'timeout'  => $this->_config['timeout'],
                'handler'  => $this->_setUpHandlerStack(),
            ]
        );;
    }
    
    /**
     * Setup handler stack.
     *
     * @return \GuzzleHttp\HandlerStack
     */
    protected function _setUpHandlerStack():HandlerStack {
        $handler_stack = new HandlerStack();
        $handler_stack->setHandler(new CurlHandler());
        $handler_stack->push(
            Middleware::mapRequest(
                function(RequestInterface $request) {
                    
                    if ($this->_config['isDebug']) {
                        $body       = $request->getBody()
                                              ->getContents();
                        $newRequest = new Request(
                            $request->getMethod(), $request->getUri(), $request->getHeaders(), $body
                        );
                        
                        $bodyPrint = var_export($body, TRUE);
                        if (strlen($bodyPrint) > 1024) {
                            $bodyPrint = substr($bodyPrint, 0, 1024) . '... omitted';
                        }
                        $this->_logger->debug(
                            'Request', [
                                         'Target'  => 'Sending request',
                                         'request' => [
                                             'uri'     => $request->getUri(),
                                             'headers' => $request->getHeaders(),
                                             'body'    => $bodyPrint,
                                         ],
                                     ]
                        );
                        
                        return $newRequest;
                    }
                    
                    return $request;
                }
            )
        );
        
        $handler_stack->push(
            Middleware::mapResponse(
                function(ResponseInterface $response) {
                    
                    if ($this->_config['isDebug']) {
                        $body        = $response->getBody()
                                                ->getContents();
                        $newResponse = new Response(
                            $response->getStatusCode(), $response->getHeaders(), $body
                        );
                        $bodyPrint   = var_export($body, TRUE);
                        if (strlen($bodyPrint) > 1024) {
                            $bodyPrint = substr($bodyPrint, 0, 1024) . '... omitted';
                        }
                        $this->_logger->debug(
                            'Response', [
                                          'Target'   => 'Receiving response',
                                          'response' => [
                                              'status'  => $response->getStatusCode(),
                                              'headers' => $response->getHeaders(),
                                              'body'    => $bodyPrint,
                                          ],
                                      ]
                        );
                        
                        return $newResponse;
                    }
                    
                    return $response;
                }
            )
        );
        
        return $handler_stack;
    }
    
    /**
     * POST request with JSON.
     *
     * @param string $endpoint
     * @param array  $json
     * @param array  $query
     * @param array  $headers
     * @param int    $timeout
     *
     * @return string[]
     * @throws
     */
    public function PostJSON(
        string $endpoint,
        array  $json = [],
        array  $query = [],
        array  $headers = [],
        int    $timeout = -1,
    ):array {
        $opt = [
            'query'   => $query,
            'json'    => $json,
            'headers' => $headers,
        ];
        if ($timeout > 0) {
            $opt['timeout'] = $timeout;
        }
        $this->_addDefaultOpt($opt);
        $rsp = $this->_client->post($endpoint, $opt);
        
        return $this->_readRsp($rsp);
    }
    
    /**
     * POST request with Form.
     *
     * @param string $endpoint
     * @param array  $form
     * @param array  $query
     * @param array  $headers
     * @param int    $timeout
     *
     * @return string[]
     * @throws
     */
    public function PostForm(
        string $endpoint,
        array  $form = [],
        array  $query = [],
        array  $headers = [],
        int    $timeout = -1,
    ):array {
        $opt = [
            'query'       => $query,
            'form_params' => $form,
            'headers'     => $headers,
        ];
        if ($timeout > 0) {
            $opt['timeout'] = $timeout;
        }
        $this->_addDefaultOpt($opt);
        $rsp = $this->_client->post($endpoint, $opt);
        
        return $this->_readRsp($rsp);
    }
    
    /**
     * POST request with multipart form.
     *
     * @param string $endpoint
     * @param array  $multipart
     * @param array  $query
     * @param array  $headers
     * @param int    $timeout
     *
     * @return string[]
     * @throws
     */
    public function PostMultipart(
        string $endpoint,
        array  $multipart = [],
        array  $query = [],
        array  $headers = [],
        int    $timeout = -1,
    ):array {
        $opt = [
            'query'     => $query,
            'multipart' => $multipart,
            'headers'   => $headers,
        ];
        if ($timeout > 0) {
            $opt['timeout'] = $timeout;
        }
        $this->_addDefaultOpt($opt);
        $rsp = $this->_client->post($endpoint, $opt);
        
        return $this->_readRsp($rsp);
    }
    
    protected function _addDefaultOpt(array &$opt):void {
        if ($this->_config['enableCert']) {
            $opt['cert']    = $this->_config['cert'];
            $opt['ssl_key'] = $this->_config['cert_key'];
            $opt['verify']  = $this->_config['cert_ca'];
        }
    }
    
    /**
     * Read response.
     *
     * @param \Psr\Http\Message\ResponseInterface $response
     *
     * @return array
     * @throws \Exception
     */
    protected function _readRsp(ResponseInterface $response):array {
        if ($response->getStatusCode() != 200) {
            if (!empty($this->_config['responseFatalErrCheck'])) {
                return $this->_config['responseFatalErrCheck']($response);
            }
            
            if ($this->_checkRspJSON($response)) {
                $json = $this->_parseJSON($response);
                
                return is_callable($this->_config['responseCheck']) ? $this->_config['responseCheck']($json) : $json;
            }
            
            throw new Exception('unexpected status code: ' . $response->getStatusCode());
        }
        
        if (!$this->_checkRspJSON($response)) {
            return [
                'RAW_BODY' => (string)$response->getBody(),
            ];
        }
        
        $json = $this->_parseJSON($response);
        
        return !empty($this->_config['responseCheck']) ? $this->_config['responseCheck']($json) : $json;
        
    }
    
    /**
     * Parse JSON.
     *
     * @param \Psr\Http\Message\ResponseInterface $response
     *
     * @return array
     * @throws \Exception
     */
    protected function _parseJSON(ResponseInterface $response):array {
        $body = (string)$response->getBody();
        $json = json_decode($body, TRUE);
        if ($json === NULL) {
            throw new Exception('invalid JSON data');
        }
        
        return $json;
    }
    
    protected function _checkRspJSON(ResponseInterface $response):bool {
        if (!$response->hasHeader('Content-Type') && !$response->hasHeader('content-type')) {
            throw new Exception('no Content-Type header');
        }
        
        $contentType = '';
        if ($response->hasHeader('Content-Type')) {
            $contentType = $response->getHeader('Content-Type')[0] ?? '';
        }
        if ($response->hasHeader('content-type')) {
            $contentType = $response->getHeader('Content-Type')[0] ?? '';
        }
        
        return strpos(strtolower($contentType), 'application/json') !== FALSE;
    }
    
    /**
     * GET request.
     *
     * @param string $endpoint
     * @param array  $param
     * @param array  $headers
     *
     * @param int    $timeout
     *
     * @return string[]
     * @throws
     */
    public function Get(string $endpoint, array $param = [], array $headers = [], int $timeout = -1):array {
        $opt = [
            'query'   => $param,
            'headers' => $headers,
        ];
        if ($timeout > 0) {
            $opt['timeout'] = $timeout;
        }
        $this->_addDefaultOpt($opt);
        $rsp = $this->_client->get($endpoint, $opt);
        
        return $this->_readRsp($rsp);
    }
    
    /**
     * POST request with JSON and file.
     *
     * @param string      $endpoint
     * @param string      $jsonFieldName
     * @param mixed|array $param
     * @param string      $filepath
     * @param int         $timeout
     *
     * @return string[]
     * @throws
     */
    public function PostJSONAndFile(
        string $endpoint,
        string $jsonFieldName = 'createParam',
        array  $param = [],
        string $filepath = '',
        int    $timeout = -1
    ):array {
        $opt = [
            'multipart' => [
                [
                    'name'     => $jsonFieldName,
                    'contents' => json_encode($param, JSON_UNESCAPED_UNICODE),
                ],
            ],
        ];
        if ($timeout > 0) {
            $opt['timeout'] = $timeout;
        }
        if (is_file($filepath)) {
            $opt['multipart'][] = [
                'name'     => 'file',
                'contents' => Utils::tryFopen($filepath, 'r'),
            ];
        }
        $this->_addDefaultOpt($opt);
        $rsp = $this->_client->post($endpoint, $opt);
        
        return $this->_readRsp($rsp);
    }
}