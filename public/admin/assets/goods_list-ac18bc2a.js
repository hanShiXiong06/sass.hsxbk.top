import{d as O,x as q,f as H,n as J,r as x,h as d,c as f,e as n,w as l,a as c,t as i,u as a,i as m,q as t,F as K,T as W,s as h,R as Q,A as X,B as b,a5 as V,E as Z,K as ee,L as te,ab as ae,aC as oe,bO as le,M as ne,a7 as se,J as ie,ac as re,ad as ce,W as de,Y as pe}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as B}from"./goods_default-664bb559.js";import{_ as me}from"./goods-spread-popup.vue_vue_type_script_setup_true_lang-cd73d2f9.js";import{a as ue,b as _e,A as ge,B as he}from"./marketing-ce45fa4b.js";/* empty css                  *//* empty css                   */import"./browser-a1ac24ac.js";const fe={class:"main-container"},ve={class:"flex justify-between items-center"},xe={class:"text-page-title"},be={class:"mt-[10px]"},ke={class:"flex items-center cursor-pointer"},ye={class:"min-w-[60px] h-[60px] flex items-center justify-center"},Ee=c("div",{class:"image-slot"},[c("img",{class:"w-[60px] h-[60px]",src:B})],-1),Ce={key:1,class:"w-[70px] h-[60px]",src:B,fit:"contain"},Pe={class:"ml-2"},Te=["title"],Ve={key:0},Be={key:1},we={class:"mt-[16px] flex justify-end"},lt=O({__name:"goods_list",setup(Fe){const w=q(),k=H(),F=w.meta.title,o=J({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{names:"",status:"",create_time:[]}}),y=x(),u=(r=1)=>{o.loading=!0,o.page=r,ue({page:o.page,limit:o.limit,...o.searchParam}).then(s=>{o.loading=!1,o.data=s.data.data,o.total=s.data.total}).catch(()=>{o.loading=!1})};u();const E=x([]);(()=>{_e().then(r=>{E.value=r.data})})();const S=()=>{k.push("/shop/marketing/exchange/goods_add")},A=r=>{k.push({path:"/shop/marketing/exchange/goods_edit",query:{id:r}})},C=x(null),D=r=>{C.value.show(r,"point")},P=(r,s)=>{V.confirm(s?t("upTips"):t("downTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ge({id:r,status:s}).then(()=>{u()}).catch(()=>{})})},$=r=>{V.confirm(t("deleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{he(r).then(()=>{u()}).catch(()=>{})})},N=r=>{r&&(r.resetFields(),u())};return(r,s)=>{const p=Z,R=ee,v=te,U=ae,z=oe,L=le,M=ne,T=se,Y=ie,g=re,j=ce,G=de,I=pe;return d(),f("div",fe,[n(T,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[c("div",ve,[c("span",xe,i(a(F)),1),n(p,{type:"primary",onClick:S},{default:l(()=>[m(i(a(t)("addGoods")),1)]),_:1})]),n(T,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[n(M,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:y},{default:l(()=>[n(v,{label:a(t)("goodsName"),prop:"names"},{default:l(()=>[n(R,{modelValue:o.searchParam.names,"onUpdate:modelValue":s[0]||(s[0]=e=>o.searchParam.names=e),modelModifiers:{trim:!0},placeholder:a(t)("goodsNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(v,{label:a(t)("status"),prop:"status"},{default:l(()=>[n(z,{modelValue:o.searchParam.status,"onUpdate:modelValue":s[1]||(s[1]=e=>o.searchParam.status=e),clearable:"",placeholder:a(t)("statusPlaceholder"),class:"input-item"},{default:l(()=>[(d(!0),f(K,null,W(E.value,(e,_)=>(d(),h(U,{key:_,label:e,value:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(v,{label:a(t)("createTime"),prop:"create_time"},{default:l(()=>[n(L,{modelValue:o.searchParam.create_time,"onUpdate:modelValue":s[2]||(s[2]=e=>o.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(t)("startDate"),"end-placeholder":a(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),n(v,null,{default:l(()=>[n(p,{type:"primary",onClick:s[3]||(s[3]=e=>u())},{default:l(()=>[m(i(a(t)("search")),1)]),_:1}),n(p,{onClick:s[4]||(s[4]=e=>N(y.value))},{default:l(()=>[m(i(a(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",be,[Q((d(),h(j,{data:o.data,size:"large"},{empty:l(()=>[c("span",null,i(o.loading?"":a(t)("emptyData")),1)]),default:l(()=>[n(g,{label:a(t)("goods"),"min-width":"130"},{default:l(({row:e})=>[c("div",ke,[c("div",ye,[e.goods_cover_thumb_small?(d(),h(Y,{key:0,class:"w-[60px] h-[60px]",src:a(X)(e.goods_cover_thumb_small),fit:"contain"},{error:l(()=>[Ee]),_:2},1032,["src"])):(d(),f("img",Ce))]),c("div",Pe,[c("span",{title:e.names,class:"multi-hidden"},i(e.names),9,Te)])])]),_:1},8,["label"]),n(g,{label:a(t)("exchangePrice"),"min-width":"130"},{default:l(({row:e})=>[e.point?(d(),f("p",Ve,i(e.point)+i(a(t)("pointUnit")),1)):b("",!0),e.price?(d(),f("p",Be,i(e.price)+i(a(t)("priceUnit")),1)):b("",!0)]),_:1},8,["label"]),n(g,{label:a(t)("redeemedAndSurplus"),"min-width":"130"},{default:l(({row:e})=>[c("span",null,i(e.total_exchange_num)+"/"+i(e.stock),1)]),_:1},8,["label"]),n(g,{prop:"create_time",label:a(t)("createTime"),"min-width":"150"},{default:l(({row:e})=>[c("div",null,i(e.create_time),1)]),_:1},8,["label"]),n(g,{prop:"status_name",label:a(t)("status"),"min-width":"130"},null,8,["label"]),n(g,{label:a(t)("operation"),fixed:"right",align:"right","min-width":"160"},{default:l(({row:e})=>[n(p,{type:"primary",link:"",onClick:_=>A(e.id)},{default:l(()=>[m(i(a(t)("edit")),1)]),_:2},1032,["onClick"]),n(p,{type:"primary",link:"",onClick:_=>D(e)},{default:l(()=>[m(i(a(t)("spreadGoods")),1)]),_:2},1032,["onClick"]),e.status?(d(),h(p,{key:0,type:"primary",link:"",onClick:_=>P(e.id,0)},{default:l(()=>[m(i(a(t)("down")),1)]),_:2},1032,["onClick"])):(d(),h(p,{key:1,type:"primary",link:"",onClick:_=>P(e.id,1)},{default:l(()=>[m(i(a(t)("up")),1)]),_:2},1032,["onClick"])),e.status?b("",!0):(d(),h(p,{key:2,type:"primary",link:"",onClick:_=>$(e.id)},{default:l(()=>[m(i(a(t)("delete")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"])]),_:1},8,["data"])),[[I,o.loading]]),c("div",we,[n(G,{"current-page":o.page,"onUpdate:current-page":s[5]||(s[5]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":s[6]||(s[6]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:s[7]||(s[7]=e=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1}),n(me,{ref_key:"goodsSpreadPopupRef",ref:C},null,512)])}}});export{lt as default};
