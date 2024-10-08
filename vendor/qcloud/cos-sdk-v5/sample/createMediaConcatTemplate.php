<?php

require dirname(__FILE__, 2) . '/vendor/autoload.php';

$secretId = "SECRETID"; //替换为用户的 secretId，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
$secretKey = "SECRETKEY"; //替换为用户的 secretKey，请登录访问管理控制台进行查看和管理，https://console.cloud.tencent.com/cam/capi
$region = "ap-beijing"; //替换为用户的 region，已创建桶归属的region可以在控制台查看，https://console.cloud.tencent.com/cos5/bucket
$cosClient = new Qcloud\Cos\Client(
    array(
        'region' => $region,
        'schema' => 'https', //协议头部，默认为http
        'credentials'=> array(
            'secretId'  => $secretId ,
            'secretKey' => $secretKey)));
try {
    // https://cloud.tencent.com/document/product/436/54041 新增拼接模板
    $result = $cosClient->createMediaConcatTemplate(array(
        'Bucket' => 'examplebucket-125000000', //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.cloud.tencent.com/cos5/bucket
        'Tag' => 'Concat',
        'Name' => 'Concat-Template-Name',
        'ConcatTemplate' => array(
            'ConcatFragments' => array(
                array(
                    'Mode' => 'Start',
                    'Url' => 'https://examplebucket-125000000.cos.ap-guangzhou.myqcloud.com/video01.mp4',
                ),
                array(
                    'Mode' => 'End',
                    'Url' => 'https://examplebucket-125000000.cos.ap-guangzhou.myqcloud.com/video02.mp4',
                ),
            ),
            'Audio' => array(
                'Codec' => 'aac',
                'Samplerate' => '',
                'Bitrate' => '',
                'Channels' => '',
            ),
            'Video' => array(
                'Codec' => 'h.264',
                'Width' => '',
                'Height' => '',
                'Fps' => '',
                'Bitrate' => '',
                'Remove' => 'false',
            ),
            'Container' => array(
                'Format' => 'mp4',
            ),
        ),
    ));
    // 请求成功
    print_r($result);
} catch (\Exception $e) {
    // 请求失败
    echo($e);
}
