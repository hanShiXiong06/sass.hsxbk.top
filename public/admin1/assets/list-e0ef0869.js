import{d as S,x as U,n as $,r as D,f as L,h as m,c as g,e as l,w as r,a as _,t as d,u as a,i,q as e,P as R,s as b,B as f,_ as j,E as I,J as q,K as J,L as K,a0 as M,aa as G,aq as H,ac as O,T as Q,U as W}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{b as X,d as Y}from"./shop_address-a51b7e52.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const ee={class:"main-container"},te={class:"flex justify-between items-center"},ae={class:"text-page-title"},le={class:"mt-[10px]"},oe={key:0},se={key:1},re={class:"mt-[16px] flex justify-end"},de=S({__name:"list",setup(ne){const E=U().meta.title,t=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{mobile:"",full_address:""}}),v=D(),p=(n=1)=>{t.loading=!0,t.page=n,X({page:t.page,limit:t.limit,...t.searchParam}).then(s=>{t.loading=!1,t.data=s.data.data,t.total=s.data.total}).catch(()=>{t.loading=!1})};p();const y=L(),w=()=>{y.push("/shop/order/address/edit")},A=n=>{y.push("/shop/order/address/edit?id="+n.id)},P=n=>{j.confirm(e("shopAddressDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{Y(n).then(()=>{p()}).catch(()=>{})})},T=n=>{n&&(n.resetFields(),p())};return(n,s)=>{const c=I,x=q,h=J,V=K,k=M,u=G,C=H,B=O,z=Q,F=W;return m(),g("div",ee,[l(k,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[_("div",te,[_("span",ae,d(a(E)),1),l(c,{type:"primary",onClick:w},{default:r(()=>[i(d(a(e)("addShopAddress")),1)]),_:1})]),l(k,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(V,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:v},{default:r(()=>[l(h,{label:a(e)("mobile"),prop:"mobile"},{default:r(()=>[l(x,{modelValue:t.searchParam.mobile,"onUpdate:modelValue":s[0]||(s[0]=o=>t.searchParam.mobile=o),placeholder:a(e)("mobilePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,{label:a(e)("fullAddress"),prop:"full_address"},{default:r(()=>[l(x,{modelValue:t.searchParam.full_address,"onUpdate:modelValue":s[1]||(s[1]=o=>t.searchParam.full_address=o),placeholder:a(e)("fullAddressPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:r(()=>[l(c,{type:"primary",onClick:s[2]||(s[2]=o=>p())},{default:r(()=>[i(d(a(e)("search")),1)]),_:1}),l(c,{onClick:s[3]||(s[3]=o=>T(v.value))},{default:r(()=>[i(d(a(e)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",le,[R((m(),b(B,{data:t.data,size:"large"},{empty:r(()=>[_("span",null,d(t.loading?"":a(e)("emptyData")),1)]),default:r(()=>[l(u,{prop:"contact_name",label:a(e)("contactName"),"min-width":"120"},null,8,["label"]),l(u,{prop:"mobile",label:a(e)("mobile"),"min-width":"120"},null,8,["label"]),l(u,{prop:"full_address",label:a(e)("fullAddress"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(u,{prop:"is_delivery_address",label:a(e)("addressType"),"min-width":"120",align:"left"},{default:r(({row:o})=>[o.is_delivery_address?(m(),g("div",oe,[i(d(a(e)("deliveryAddress"))+" ",1),o.is_default_delivery?(m(),b(C,{key:0,size:"small"},{default:r(()=>[i(d(a(e)("default")),1)]),_:1})):f("",!0)])):f("",!0),o.is_refund_address?(m(),g("div",se,[i(d(a(e)("refundAddress"))+" ",1),o.is_default_refund?(m(),b(C,{key:0,size:"small"},{default:r(()=>[i(d(a(e)("default")),1)]),_:1})):f("",!0)])):f("",!0)]),_:1},8,["label"]),l(u,{label:a(e)("operation"),fixed:"right","min-width":"120",align:"right"},{default:r(({row:o})=>[l(c,{type:"primary",link:"",onClick:N=>A(o)},{default:r(()=>[i(d(a(e)("edit")),1)]),_:2},1032,["onClick"]),l(c,{type:"primary",link:"",onClick:N=>P(o.id)},{default:r(()=>[i(d(a(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,t.loading]]),_("div",re,[l(z,{"current-page":t.page,"onUpdate:current-page":s[4]||(s[4]=o=>t.page=o),"page-size":t.limit,"onUpdate:page-size":s[5]||(s[5]=o=>t.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:s[6]||(s[6]=o=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Ve=Z(de,[["__scopeId","data-v-0ce572a7"]]);export{Ve as default};
