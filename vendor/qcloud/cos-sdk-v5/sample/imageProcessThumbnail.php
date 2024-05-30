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
    // 图片处理-缩放 https://cloud.tencent.com/document/product/460/36540
    $imageRule = new Qcloud\Cos\ImageParamTemplate\ImageMogrTemplate();
    $imageRule->thumbnailByScale(50); // /thumbnail/!<Scale>p
    $imageRule->thumbnailByWidthScale(50); // /thumbnail/!<Scale>px
    $imageRule->thumbnailByHeightScale(50); // /thumbnail/!x<Scale>p
    $imageRule->thumbnailByWidth(60); // /thumbnail/<Width>x
    $imageRule->thumbnailByHeight(60); // /thumbnail/x<Height>
    $imageRule->thumbnailByMaxWH(100, 100); // /thumbnail/<Width>x<Height>
    $imageRule->thumbnailByMinWH(30, 30); // /thumbnail/!<Width>x<Height>r
    $imageRule->thumbnailByWH(50, 50); // /thumbnail/<Width>x<Height>!
    $imageRule->thumbnailByPixel(10000); // /thumbnail/<Area>@
    $imageRule->thumbnailEqualRatioReduceByWH(300, 300); // /thumbnail/<Width>x<Height>>
    $imageRule->thumbnailEqualRatioEnlargeByWH(300, 300); // /thumbnail/<Width>x<Height><
    $imageRule->pad(1); // /pad/1
    $imageRule->color('#3D3D3D'); // /color/IzNEM0QzRA
    $imageRule->ignoreError(); // /ignore-error/1

    $picOperations = new Qcloud\Cos\ImageParamTemplate\PicOperationsTransformation();
    $picOperations->setIsPicInfo(1); // is_pic_info
    $picOperations->addRule($imageRule, "output.png"); // rules

    // -------------------- 1. 下载时处理 -------------------- //
//    $downloadUrl = $cosClient->getObjectUrl('examplebucket-125000000', 'xxx.jpg'); // 获取下载链接
    $downloadUrl = 'https://examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/xxx.jpg'; // 私有图片处理方式同上，仅增加签名部分，并与图片处理参数以“&”连接
    $rule = $imageRule->queryString();
    echo "{$downloadUrl}?{$rule}";
//    echo "{$downloadUrl}&{$rule}"; // 携带签名的图片地址以“&”连接
    // -------------------- 1. 下载时处理 -------------------- //

    // -------------------- 2. 上传时处理 -------------------- //
    $result = $cosClient->putObject(array(
        'Bucket' => 'examplebucket-125000000', //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.cloud.tencent.com/cos5/bucket
        'Key' => 'object.jpg',
        'Body' => fopen('/tmp/local.jpg', 'rb'), // 本地文件
        'PicOperations' => $picOperations->queryString(),
    ));
    // 请求成功
    print_r($result);
    // -------------------- 2. 上传时处理 -------------------- //

    // -------------------- 3. 云上数据处理 -------------------- //
    $result = $cosClient->ImageProcess(array(
        'Bucket' => 'examplebucket-1250000000', //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.cloud.tencent.com/cos5/bucket
        'Key' => 'test.png',
        'PicOperations' => $picOperations->queryString(),
    ));
    // 请求成功
    print_r($result);
    // -------------------- 3. 云上数据处理 -------------------- //
} catch (\Exception $e) {
    // 请求失败
    echo($e);
}
