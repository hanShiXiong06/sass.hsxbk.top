import{d as R,x as U,n as O,r as w,h as c,c as j,e,w as a,u as l,q as r,i,t as h,a as x,R as J,s as m,B as f,a5 as E,aW as M,K as W,L as q,ab as K,aC as Y,E as G,M as H,a7 as Q,ac as X,ak as Z,ad as ee,W as te,Y as ae}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 */import{_ as le,d as oe,g as ne,a as re}from"./actitem-edit.vue_vue_type_style_index_0_lang-c9325aa1.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                   */const ie={class:"main-container"},pe={class:"mt-[10px]"},ce={class:"mt-[16px] flex justify-between"},me=R({__name:"actitem",setup(de){U().meta.title;let t=O({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{act_id:"",act_name:"",type:"",h5:"",weapp:"",aliapp:"",share_info:"",create_time:""}});const k=w(),g=w([]),B=s=>{g.value=s.map(o=>o.id),console.log(g.value)},I=async()=>{g.value.length>0?oe(g.value).then(s=>{p()}):E.confirm("请先选择要删除的数据",r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"})},p=(s=1)=>{t.loading=!0,t.page=s,ne({page:t.page,limit:t.limit,...t.searchParam}).then(o=>{t.loading=!1,t.data=o.data.data,t.total=o.data.total}).catch(()=>{t.loading=!1})};p();const v=w(null),T=s=>{v.value.setFormData(s),v.value.showDialog=!0},V=s=>{E.confirm(r("actItemDeleteTips"),r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"}).then(()=>{re(s).then(()=>{p()}).catch(()=>{})})},D=s=>{s&&(s.resetFields(),p())};return(s,o)=>{const N=M,P=W,y=q,b=K,S=Y,d=G,F=H,C=Q,_=X,u=Z,$=ee,z=te,A=ae;return c(),j("div",ie,[e(C,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[e(N,{type:"warning",title:"活动推广详情信息，如遇到推广链接失效，可以删除推广或者在活动列表里面点击立即推广，推广信息将在用户访问或者操作时候更新",closable:!1,"show-icon":""}),e(C,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:a(()=>[e(F,{inline:!0,model:l(t).searchParam,ref_key:"searchFormRef",ref:k},{default:a(()=>[e(y,{label:l(r)("actName"),prop:"act_name"},{default:a(()=>[e(P,{modelValue:l(t).searchParam.act_name,"onUpdate:modelValue":o[0]||(o[0]=n=>l(t).searchParam.act_name=n),placeholder:l(r)("actNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(y,{label:"类型",prop:"type"},{default:a(()=>[e(S,{class:"w-[280px]",modelValue:l(t).searchParam.type,"onUpdate:modelValue":o[1]||(o[1]=n=>l(t).searchParam.type=n),clearable:"",placeholder:"请选择"},{default:a(()=>[e(b,{label:"全部",value:""}),e(b,{label:"聚推客",value:"0"}),e(b,{label:"蚂蚁星球",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(y,null,{default:a(()=>[e(d,{type:"primary",onClick:o[2]||(o[2]=n=>p())},{default:a(()=>[i(h(l(r)("search")),1)]),_:1}),e(d,{onClick:o[3]||(o[3]=n=>D(k.value))},{default:a(()=>[i(h(l(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),x("div",pe,[J((c(),m($,{onSelectionChange:B,data:l(t).data,size:"large"},{empty:a(()=>[x("span",null,h(l(t).loading?"":l(r)("emptyData")),1)]),default:a(()=>[e(_,{type:"selection",width:"55"}),e(_,{prop:"act_name",label:l(r)("actName"),"min-width":"180","show-overflow-tooltip":!0},null,8,["label"]),e(_,{prop:"type",label:l(r)("type"),"min-width":"40","show-overflow-tooltip":!0},{default:a(({row:n})=>[n.type==0?(c(),m(u,{key:0},{default:a(()=>[i(" 聚推客 ")]),_:1})):f("",!0),n.type==1?(c(),m(u,{key:1},{default:a(()=>[i(" 蚂蚁星球 ")]),_:1})):f("",!0)]),_:1},8,["label"]),e(_,{label:"支持渠道","min-width":"120"},{default:a(({row:n})=>[n.h5!=""?(c(),m(u,{key:0,class:"ml-2"},{default:a(()=>[i("h5")]),_:1})):f("",!0),JSON.parse(n.weapp).appid!=""?(c(),m(u,{key:1,class:"ml-2"},{default:a(()=>[i("微信小程序")]),_:1})):f("",!0),JSON.parse(n.aliapp).appid!=""?(c(),m(u,{key:2,class:"ml-2"},{default:a(()=>[i("支付宝小程序")]),_:1})):f("",!0)]),_:1}),e(_,{label:l(r)("operation"),fixed:"right","min-width":"120"},{default:a(({row:n})=>[e(d,{type:"primary",link:"",onClick:L=>T(n)},{default:a(()=>[i("推广信息")]),_:2},1032,["onClick"]),e(d,{type:"primary",link:"",onClick:L=>V(n.id)},{default:a(()=>[i(h(l(r)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[A,l(t).loading]]),x("div",ce,[e(d,{onClick:o[4]||(o[4]=n=>I())},{default:a(()=>[i("删除选中")]),_:1}),e(z,{"current-page":l(t).page,"onUpdate:current-page":o[5]||(o[5]=n=>l(t).page=n),"page-size":l(t).limit,"onUpdate:page-size":o[6]||(o[6]=n=>l(t).limit=n),layout:"total, sizes, prev, pager, next, jumper",total:l(t).total,onSizeChange:o[7]||(o[7]=n=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])]),e(le,{ref_key:"editActItemDialog",ref:v,onComplete:p},null,512)]),_:1})])}}});const Ae=se(me,[["__scopeId","data-v-f269c121"]]);export{Ae as default};