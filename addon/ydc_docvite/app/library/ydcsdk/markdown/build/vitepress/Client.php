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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress;

use addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress\error\VitepressCmdFailedException;

use think\facade\Log;

/**
 * Vitepress 文档构建服务.
 *
 * @package addon\ydc_docvite\app\library\ydcsdk\markdown\build
 */
class Client {
    const CmdBuild      = 'npm run docs:build';
    const CmdInstallDep = 'npm i';
    
    protected ?Config $_config = NULL;
    
    public function __construct(Config $config) {
        $this->_config = $config;
    }
    
    /**
     * Run build.
     *
     * @throws
     */
    public function build():void {
        $this->_run(self::CmdInstallDep);
        $this->_run(self::CmdBuild);
    }
    
    /**
     * run cmd.
     *
     * @param string $cmd
     *
     * @return void
     * @throws
     */
    protected function _run(string $cmd):void {
        [$retCode, $stdout, $stderr] = $this->_runCmd($cmd);
        if ($retCode != 0) {
            Log::error('[YDC Vitepress Build Service]: cmd failed - {code}, {msg}', ['code' => $retCode, 'msg' => $stderr]);
            throw new VitepressCmdFailedException($stderr);
        }
        
        Log::info('[YDC Vitepress Build Service]: cmd success with {msg}', ['msg' => $stdout]);
    }
    
    protected function _runCmd(string $cmd, string $stdin = ''):array {
        putenv("PATH=" . '/usr/bin:/usr/sbin:/usr/local/bin');
        Log::info('[Cmd Client]: running cmd `{cmd}`...', ['cmd' => $cmd]);
        $proc = proc_open(
            $cmd,
            [
                ['pipe', 'r'],
                ['pipe', 'w'],
                ['pipe', 'w'],
            ],
            $pipes,
            $this->_config->workdir
        );
        fwrite($pipes[0], $stdin);
        fclose($pipes[0]);
        
        $stdout = stream_get_contents($pipes[1]);
        fclose($pipes[1]);
        
        $stderr = stream_get_contents($pipes[2]);
        fclose($pipes[2]);
        
        $return_code = proc_close($proc);
        
        return [$return_code, $stdout, $stderr];
    }
}