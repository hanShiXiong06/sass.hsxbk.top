<?php

namespace addon\ydc_docvite\app\library\ydcsdk\log;

use Monolog\Utils;

/**
 * JSON formatter.
 *
 * @package Ydc\ContainerizesvcSdk\Log
 */
class JsonFormatter extends \Monolog\Formatter\JsonFormatter {
    
    /**
     * Return the JSON representation of a value
     *
     * @param mixed $data
     *
     * @return string            if encoding fails and ignoreErrors is true 'null' is returned
     * @throws \RuntimeException if encoding fails and errors are not ignored
     */
    protected function toJson($data, bool $ignoreErrors = FALSE):string {
        return Utils::jsonEncode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE, $ignoreErrors);
    }
}