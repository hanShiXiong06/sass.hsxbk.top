import{d as M,aQ as Q,o as R,r as x,n as X,Y as y,h as k,c as Y,e,w as a,i as l,a as s,u as q,s as z,B as G,P as K,al as O,am as W,a0 as Z,E as ee,X as ae,aD as le,az as te,J as ne,ag as oe,aE as se,U as de,p as ie,g as ce}from"./index-17984968.js";/* empty css                   *//* empty css                    *//* empty css               *//* empty css                 *//* empty css                 *//* empty css                *//* empty css                  *//* empty css                *//* empty css                             */import{f as ue,h as me,i as pe,m as re,j as fe}from"./tkdevtool-868cee66.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";const c=f=>(ie("data-v-64489122"),f=f(),ce(),f),be={class:"main-container p-4"},ve={class:"flex items-center mt-6"},he=c(()=>s("span",{class:"ml-8 relative flex h-3 w-3 mb"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-400"})],-1)),we=c(()=>s("div",{class:"pt-2"},"1、同步内容",-1)),xe=c(()=>s("div",{class:"pt-2"},"2、安装依赖",-1)),ye=c(()=>s("div",{class:"pt-2"},"3、打包后端",-1)),ke=c(()=>s("div",{class:"pt-2"},"1、同步内容",-1)),Ve=c(()=>s("div",{class:"pt-2"},"2、安装依赖",-1)),Ce=c(()=>s("div",{class:"pt-2"},"3、编译H5",-1)),Ee=c(()=>s("div",{style:{"font-size":"medium","margin-bottom":"12px"}}," 自定义命令操作 ",-1)),ge=M({__name:"index",setup(f){let _=null;const V=()=>{_=setInterval(()=>{S()},1e3)},C=()=>{_&&(clearInterval(_),_=null)};Q(()=>{V()}),R(()=>{C()});const b=x(!1),S=async()=>{const m=await(await me()).data;console.log(m),m.code==0?b.value=!0:(b.value=!1,C())},t=X({path:"admin",cmd:"npm run build"}),E=x("admin"),u=x(!1),T=()=>{r()},D=async()=>{u.value=!0,(await pe({})).code==1&&(u.value=!1,b.value=!0,V())},N=()=>{t.path="admin",t.cmd="npm run build",r()},H=()=>{t.path="admin",t.cmd="npm install",r()},P=()=>{t.path="uni-app",t.cmd="npm install",r()},$=()=>{t.path="uni-app",t.cmd="npm run build:h5",r()},j=async()=>{u.value=!0,(await re({})).code==1&&(u.value=!1)},r=async()=>{u.value=!0,(await fe(t)).code==1&&(u.value=!1)};return(m,n)=>{const o=O,g=W,i=Z,v=ee,B=y("Switch"),p=ae,I=y("Download"),U=y("Sort"),h=le,w=te,A=ne,F=oe,J=se,L=de;return k(),Y("div",be,[e(i,null,{default:a(()=>[e(g,{title:"构建工具使用说明"},{default:a(()=>[e(o,{label:"同步内容"},{default:a(()=>[l("此操作步骤会初始化打包环境、合并文件")]),_:1}),e(o,{label:"安装依赖"},{default:a(()=>[l("执行npm install")]),_:1}),e(o,{label:"打包操作"},{default:a(()=>[l("打包操作会自动完成打包、修改配置、移动文件到对应目录")]),_:1}),e(o,{label:"自定义命令"},{default:a(()=>[l(" 选择对应目录可便捷执行，npm、composer命令(环境需要安装正确) ")]),_:1}),e(o,{label:"温馨提示"},{default:a(()=>[l(" 使用构建工具必须确保您的环境：npm -v 能返回版本号 ")]),_:1}),e(o,{label:"文件权限"},{default:a(()=>[l(" 为保证程序能正常运行，设置站点所有文件权限为755，所有者为www ")]),_:1}),e(o,{label:"一键打包"},{default:a(()=>[l(" 一键打包需要配合队列功能，请先开启队列，请勿重新执行，尽量在服务器空闲执行 ")]),_:1})]),_:1})]),_:1}),s("div",ve,[e(v,{class:"",type:"primary",onClick:n[0]||(n[0]=d=>q(ue)())},{default:a(()=>[l("一键打包")]),_:1}),b.value==!0?(k(),z(v,{key:0},{default:a(()=>[l(" 正在执行编译任务，预计3-5分钟完成 "),he]),_:1})):G("",!0)]),K((k(),z(i,{"element-loading-text":"执行中,请稍后...",class:"box-card !border-none mt-6",shadow:"never"},{default:a(()=>[e(J,{modelValue:E.value,"onUpdate:modelValue":n[6]||(n[6]=d=>E.value=d),onTabClick:m.handleClick},{default:a(()=>[e(h,{label:"后端构建",name:"admin",class:"flex"},{default:a(()=>[e(i,{class:"d-card mr-4",onClick:D},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(B)]),_:1}),we]),_:1}),e(i,{class:"d-card mr-4",onClick:H},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(I)]),_:1}),xe]),_:1}),e(i,{class:"d-card",onClick:N},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(U)]),_:1}),ye]),_:1})]),_:1}),e(h,{label:"前端构建",name:"uni-app-cli",class:"flex"},{default:a(()=>[e(i,{class:"d-card mr-4",onClick:j},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(B)]),_:1}),ke]),_:1}),e(i,{class:"d-card mr-4",onClick:P},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(I)]),_:1}),Ve]),_:1}),e(i,{class:"d-card mr-4",onClick:$},{default:a(()=>[e(p,{size:"35",color:"#ffffff",class:"no-inherit mr-2"},{default:a(()=>[e(U)]),_:1}),Ce]),_:1})]),_:1}),e(h,{label:"自定义命令",name:"other"},{default:a(()=>[e(i,{style:{width:"720px"}},{default:a(()=>[Ee,s("div",null,[e(w,{modelValue:t.path,"onUpdate:modelValue":n[1]||(n[1]=d=>t.path=d),label:"admin"},{default:a(()=>[l("admin目录")]),_:1},8,["modelValue"]),e(w,{modelValue:t.path,"onUpdate:modelValue":n[2]||(n[2]=d=>t.path=d),label:"uni-app"},{default:a(()=>[l("uni-app目录")]),_:1},8,["modelValue"]),e(w,{modelValue:t.path,"onUpdate:modelValue":n[3]||(n[3]=d=>t.path=d),label:"niucloud"},{default:a(()=>[l("niucloud目录")]),_:1},8,["modelValue"]),e(F,{span:14,class:"mt-4 mb-4 flex"},{default:a(()=>[e(A,{modelValue:t.cmd,"onUpdate:modelValue":n[4]||(n[4]=d=>t.cmd=d),placeholder:"请输入命令"},null,8,["modelValue"])]),_:1}),e(v,{type:"primary",onClick:n[5]||(n[5]=d=>T())},{default:a(()=>[l("确认操作")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue","onTabClick"])]),_:1})),[[L,u.value]]),e(i,{class:"ml-5",style:{width:"720px"}},{default:a(()=>[e(g,{column:"1",title:"命令参考"},{default:a(()=>[e(o,{label:"npm install"},{default:a(()=>[l("安装依赖，admin和uni-app目录可用")]),_:1}),e(o,{label:"npm run build"},{default:a(()=>[l("打包后端,admin目录可用")]),_:1}),e(o,{label:"npm run build:h5"},{default:a(()=>[l("打包H5,uni-app目录可用")]),_:1}),e(o,{label:"npm run build:mp-weixin"},{default:a(()=>[l("打包微信小程序,uni-app目录可用")]),_:1}),e(o,{label:"composer install"},{default:a(()=>[l("安装后端站点依赖,composer目录可用")]),_:1}),e(o,{label:"说明"},{default:a(()=>[l("1、只列举常用命令,如需更多自定义请在代码后台放行；2、需便捷构建前端按照对应顺序执行即可，如遇报错请按照报错排查；3、构建一般在所有插件都安装完成后再执行，没必要安装一个插件执行一次 4、请确保站点有完整的admin,uni-app,niucloud目录 ")]),_:1})]),_:1})]),_:1})])}}});const Ae=_e(ge,[["__scopeId","data-v-64489122"]]);export{Ae as default};
