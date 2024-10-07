<?php

require_once dirname(__FILE__) . '../core/common.php';
require_once dirname(__FILE__) . '/../core/YsfApiService.php';
$config = require dirname(__FILE__) . '/../core/config.php';
$ysfApiService = new YsfApiService($config);

// # 电子合同查询签约状态
$result = $ysfApiService->queryContract(time(), '');
return  json_encode($result, true);
