import{d as g,f as B,r as u,aP as $,h as D,c as q,e,w as a,i as n,u as b,a as N,U as f,a5 as V,af as M,ag as I,a7 as P,E as R,ad as S,ae as U}from"./index-99f00cf3.js";/* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                *//* empty css                             */import{b as j,e as z,c as A,d as F,f as G}from"./tkdevtool-9ad61f04.js";const H={class:"main-container p-4"},J={class:"mt-4"},le=g({__name:"database",setup(K){const d=B(),p=u();u(!1);const k=t=>{d.push("/tk_devtool_admin_database_edit?name="+t.name)},y=async t=>{const o=await z({name:t.name});E(o.data)},v=async t=>{const o=await A({name:t.name});window.open(o.data,"_blank")},{copy:C,isSupported:x,copied:L}=$(),E=t=>{x.value||f({message:"当前浏览器不支持一键复制",type:"warning"}),C(t),f({message:"复制sql成功",type:"success"})},w=async t=>{try{await V.confirm("确定删除数据表"+t.name+"吗?---请谨慎操作---","确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await F({name:t.name}),m()}catch{}},m=async()=>{const t=await G();p.value=t.data};return m(),(t,o)=>{const i=M,h=I,_=P,s=R,c=S,T=U;return D(),q("div",H,[e(_,null,{default:a(()=>[e(h,{title:"数据库管理操作说明",column:"1"},{default:a(()=>[e(i,{label:"备份数据库"},{default:a(()=>[n("执行本操作会备份数据库到niucloud/backup/sql目录下")]),_:1}),e(i,{label:"新建表"},{default:a(()=>[n("执行本操作可以快速新建数据表")]),_:1}),e(i,{label:"复制语句/导出表"},{default:a(()=>[n("这里的操作是直接获取表结构和数据且已经替换好前缀,可以快速复制到插件inatll.sql")]),_:1})]),_:1})]),_:1}),e(_,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[e(s,{type:"primary",plain:"",onClick:b(j)},{default:a(()=>[n("备份数据库")]),_:1},8,["onClick"]),e(s,{type:"primary",onClick:o[0]||(o[0]=l=>b(d).push({path:"/tk_devtool_admin_database_edit"}))},{default:a(()=>[n("新建表")]),_:1}),N("div",J,[e(T,{data:p.value,style:{width:"100%"}},{default:a(()=>[e(c,{prop:"name",label:"数据表",width:"240"}),e(c,{prop:"comment",label:"描述",width:"240"}),e(c,{label:"操作",width:"480"},{default:a(({row:l})=>[e(s,{type:"danger",link:"",onClick:r=>w(l)},{default:a(()=>[n("删除")]),_:2},1032,["onClick"]),e(s,{type:"primary",link:"",onClick:r=>k(l)},{default:a(()=>[n("编辑")]),_:2},1032,["onClick"]),e(s,{type:"primary",link:"",onClick:r=>v(l)},{default:a(()=>[n("导出表")]),_:2},1032,["onClick"]),e(s,{type:"primary",link:"",onClick:r=>y(l)},{default:a(()=>[n("复制语句")]),_:2},1032,["onClick"])]),_:1}),n("/> ")]),_:1},8,["data"])])]),_:1})])}}});export{le as default};
