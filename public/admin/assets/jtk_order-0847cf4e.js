import{d as R,x as Y,n as A,r as v,h as g,c as V,e,w as t,a as s,t as i,u as n,F as N,T as S,s as C,i as u,q as _,R as M,ab as H,aC as I,L as J,K as O,bO as q,E as K,M as W,a7 as X,ac as G,ad as Q,W as Z,X as ee,Y as te}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{a as ae,b as le}from"./cps-d6c44039.js";const oe={class:"main-container"},ne={class:"flex justify-between items-center"},se={class:"text-[20px]"},ie={class:"mt-[10px]"},re={class:"mt-[16px] flex justify-end"},de={class:"input-width"},pe={class:"input-width"},me={class:"input-width"},ce={class:"input-width"},ue={class:"input-width"},_e={class:"input-width"},fe={class:"input-width"},he={class:"input-width"},ve={class:"input-width"},ge={class:"dialog-footer"},He=R({__name:"jtk_order",setup(be){const E=Y().meta.title;let l=A({page:1,limit:20,total:0,loading:!0,data:[],searchParam:{act_id:"",order_sn:"",create_time:""}});const w=v(),c=(p=1)=>{l.loading=!0,l.page=p,ae({page:l.page,limit:l.limit,...l.searchParam}).then(a=>{console.log(a.data),l.loading=!1,l.data=a.data.data,l.total=a.data.count}).catch(()=>{l.loading=!1})};c();const P=p=>{p&&(p.resetFields(),c())},y=v([]);(()=>{le().then(p=>{y.value=p.data})})();const f=v(!1),d=v([]),D=p=>{f.value=!0,d.value=p};return(p,a)=>{const T=H,F=I,r=J,L=O,j=q,h=K,k=W,x=X,m=G,z=Q,U=Z,$=ee,B=te;return g(),V("div",oe,[e(x,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[s("div",ne,[s("span",se,i(n(E)),1)]),e(x,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:t(()=>[e(k,{inline:!0,model:n(l).searchParam,ref_key:"searchFormRef",ref:w},{default:t(()=>[e(r,{label:"订单分类",class:"items-center"},{default:t(()=>[e(F,{modelValue:n(l).searchParam.act_id,"onUpdate:modelValue":a[0]||(a[0]=o=>n(l).searchParam.act_id=o),class:"m-2",placeholder:"选择下单分类"},{default:t(()=>[(g(!0),V(N,null,S(y.value,(o,b)=>(g(),C(T,{key:b,label:o,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"订单号",prop:"order_sn"},{default:t(()=>[e(L,{modelValue:n(l).searchParam.order_sn,"onUpdate:modelValue":a[1]||(a[1]=o=>n(l).searchParam.order_sn=o),placeholder:"输入订单号搜索"},null,8,["modelValue"])]),_:1}),e(r,{label:"下单时间",prop:"create_time"},{default:t(()=>[e(j,{modelValue:n(l).searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=o=>n(l).searchParam.create_time=o),onChange:a[3]||(a[3]=o=>p.change_date()),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(h,{type:"primary",onClick:a[4]||(a[4]=o=>c())},{default:t(()=>[u(i(n(_)("search")),1)]),_:1}),e(h,{onClick:a[5]||(a[5]=o=>P(w.value))},{default:t(()=>[u(i(n(_)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",ie,[M((g(),C(z,{data:n(l).data,size:"large"},{empty:t(()=>[s("span",null,i(n(l).loading?"":n(_)("emptyData")),1)]),default:t(()=>[e(m,{prop:"order_title",label:"商品名称","min-width":"180"}),e(m,{prop:"act_name",label:"平台名称","min-width":"120"}),e(m,{prop:"order_sn",label:"订单号","min-width":"180"}),e(m,{prop:"pay_price",label:"付款金额","min-width":"120"}),e(m,{prop:"jtk_share_fee",label:"佣金奖励","min-width":"120"}),e(m,{prop:"status_desc",label:"状态","min-width":"120"}),e(m,{label:"下单时间","min-width":"150",align:"center"},{default:t(({row:o})=>[u(i(o.create_time||""),1)]),_:1}),e(m,{label:n(_)("operation"),fixed:"right","min-width":"120"},{default:t(({row:o})=>[e(h,{type:"primary",link:"",onClick:b=>D(o)},{default:t(()=>[u("查看")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[B,n(l).loading]]),s("div",re,[e(U,{"current-page":n(l).page,"onUpdate:current-page":a[6]||(a[6]=o=>n(l).page=o),"page-size":n(l).limit,"onUpdate:page-size":a[7]||(a[7]=o=>n(l).limit=o),layout:"total, sizes, prev, pager, next, jumper",total:n(l).total,onSizeChange:a[8]||(a[8]=o=>c()),onCurrentChange:c},null,8,["current-page","page-size","total"])])])]),_:1}),e($,{modelValue:f.value,"onUpdate:modelValue":a[10]||(a[10]=o=>f.value=o),title:"订单详情",width:"550px","destroy-on-close":!0},{footer:t(()=>[s("span",ge,[e(h,{type:"primary",onClick:a[9]||(a[9]=o=>f.value=!1)},{default:t(()=>[u(i(n(_)("confirm")),1)]),_:1})])]),default:t(()=>[e(k,{model:d.value,"label-width":"110px",ref:"formRef",class:"page-form"},{default:t(()=>[e(r,{label:"商品名称"},{default:t(()=>[s("div",de,i(d.value.order_title),1)]),_:1}),e(r,{label:"平台名称"},{default:t(()=>[s("div",pe,i(d.value.act_name),1)]),_:1}),e(r,{label:"订单号"},{default:t(()=>[s("div",me,i(d.value.order_sn),1)]),_:1}),e(r,{label:"付款金额"},{default:t(()=>[s("div",ce,i(d.value.pay_price),1)]),_:1}),e(r,{label:"佣金奖励"},{default:t(()=>[s("div",ue,i(d.value.jtk_share_fee),1)]),_:1}),e(r,{label:"佣金结算状态"},{default:t(()=>[s("div",_e,i(d.value.status_desc),1)]),_:1}),e(r,{label:"下单时间"},{default:t(()=>[s("div",fe,i(d.value.create_time),1)]),_:1}),e(r,{label:"付款时间"},{default:t(()=>[s("div",he,i(d.value.pay_time),1)]),_:1}),e(r,{label:"完成时间"},{default:t(()=>[s("div",ve,i(d.value.modified_time),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{He as default};
