工具助手使用说明
===============
> 在还没有云编译和uniapp还不支持命令情况下开发的一个辅助工具
> 上传本助手插件，把站点所有目录权限设置为755【非常重要】
> 运行环境要求>=PHP8.0
> 安装node.js且npm -v返回正常版本号
> 删除禁用函数，proc_open、putenv
> npm请使用国内镜像
## 主要新特性

* 傻瓜化打包后端admin文件
* 傻瓜化打包前端wap文件
* 便捷安装/更新各项依赖命令
* 插件/应用数据库安装语句导出，数据库备份，数据表新建等

## 安装

~~~
为了实现后台本地自动编译

在安装时候我们会执行admin项目和uni-app项目
npm install和npm run build

这两个命令将会耗费较长时间
在执行中请勿刷新页面

如长时间为响应
可打开新的页面查看是否编译完成

安装依赖如长时间无响应可直接刷新页面进行打包操作

温馨提示：如服务器安装有多站点，后端管理admin打包总是执行错误
请按照如下排查
1、关闭队列
2、重启服务器
3、检查权限，755所有者www
4、进入相关文件夹执行npm run build查看详细错误

便捷使用方法：
1、您安装一个完成一个需要构建前后端页面的应用，您可以尝试在插件安装方法里面添加如下代码完成构建
   提示：命令执行需要耗费一定时间，请综合考虑，尽量减少命令执行
   //引入队列测试看下速度和执行
   a、引入文件“use addon\tk_devtool\app\service\admin\DevtoolService;”
   b、参考执行命令,您可以根据自己的需要选择命令执行而无需要进入构建工具执行
     //安装admin依赖
     (new DevtoolService())->execute(["path" => "admin", "cmd" => 'npm install']);
      //打包admin
     (new DevtoolService())->execute(["path" => "admin", "cmd" => 'npm run build']);
     //安装wap依赖
     (new DevtoolService())->execute(["path" => "uni-app", "cmd" => 'npm install']);
     //打包H5
     (new DevtoolService())->execute(["path" => "uni-app", "cmd" => 'npm run build:h5']);
     //打包小程序
     (new DevtoolService())->execute(["path" => "uni-app", "cmd" => 'npm run build:mp-weixin']);