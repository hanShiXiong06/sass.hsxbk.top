import{d as O,r as m,n as q,h as c,s as v,w as o,a as r,e as n,i as P,t as i,u as s,q as l,c as b,F as J,T as K,R as W,A as X,B as w,a$ as Y,U as H,K as Q,L as Z,ab as ee,aC as te,E as ae,M as oe,ac as le,J as se,ad as ne,W as ie,X as re,Y as pe}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as F}from"./goods_default-665e448a.js";import{a as ce,b as me}from"./marketing-2b39c14b.js";const de={class:"mt-[10px]"},ue={class:"flex items-center cursor-pointer"},ge={class:"min-w-[60px] h-[60px] flex items-center justify-center"},_e=r("div",{class:"image-slot"},[r("img",{class:"w-[60px] h-[60px]",src:F})],-1),fe={key:1,class:"w-[70px] h-[60px]",src:F,fit:"contain"},he={class:"ml-2"},ve=["title"],Pe={key:0},be={key:1},Se={class:"mt-[16px] flex justify-end"},xe={class:"dialog-footer"},Je=O({__name:"goods-select-popup",props:{max:{type:Number,default:0},min:{type:Number,default:0}},emits:["select"],setup(D,{expose:G,emit:N}){const S=D,d=m(!1),u=m(),t=q({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{name:"",status:"",create_time:[]}}),k=m(),g=(p=1)=>{t.loading=!0,t.page=p,ce({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total,x.value.length&&Y(()=>{t.data.forEach(_=>{x.value.includes(_.id)&&u.value.toggleRowSelection(_,!0)})})}).catch(()=>{t.loading=!1})},C=m([]);(()=>{me().then(p=>{C.value=p.data})})();const x=m([]),U=p=>{x.value=p,d.value=!0,g()},y=m([]),$=p=>{y.value=p},z=()=>{if(S.min&&y.value.length<S.min){H({type:"warning",message:`${l("goodsSelectPopupGoodsMinTip")}${S.min}${l("goodsSelectPopupPiece")}`});return}N("select",y.value),d.value=!1,u.value&&u.value.clearSelection()};return G({show:U}),(p,a)=>{const _=Q,E=Z,B=ee,R=te,f=ae,T=oe,h=le,A=se,L=ne,I=ie,M=re,j=pe;return c(),v(M,{modelValue:d.value,"onUpdate:modelValue":a[8]||(a[8]=e=>d.value=e),title:s(l)("goodsSelectPopupSelectGoodsDialog"),width:"60%","destroy-on-close":!0},{footer:o(()=>[r("span",xe,[n(f,{onClick:a[7]||(a[7]=e=>d.value=!1)},{default:o(()=>[P(i(s(l)("cancel")),1)]),_:1}),n(f,{type:"primary",onClick:z},{default:o(()=>[P(i(s(l)("confirm")),1)]),_:1})])]),default:o(()=>[n(T,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:k},{default:o(()=>[n(E,{label:s(l)("goodsSelectPopupGoodsName"),prop:"active_name"},{default:o(()=>[n(_,{modelValue:t.searchParam.name,"onUpdate:modelValue":a[0]||(a[0]=e=>t.searchParam.name=e),modelModifiers:{trim:!0},placeholder:s(l)("goodsSelectPopupGoodsNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(E,{label:s(l)("status"),prop:"status"},{default:o(()=>[n(R,{modelValue:t.searchParam.status,"onUpdate:modelValue":a[1]||(a[1]=e=>t.searchParam.status=e),clearable:"",placeholder:s(l)("goodsSelectPopupGoodsStatusPlaceholder"),class:"input-item"},{default:o(()=>[(c(!0),b(J,null,K(C.value,(e,V)=>(c(),v(B,{key:V,label:e,value:V},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(E,null,{default:o(()=>[n(f,{type:"primary",onClick:a[2]||(a[2]=e=>g())},{default:o(()=>[P(i(s(l)("search")),1)]),_:1}),n(f,{onClick:a[3]||(a[3]=e=>p.resetForm(k.value))},{default:o(()=>[P(i(s(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),r("div",de,[W((c(),v(L,{data:t.data,ref_key:"tableRef",ref:u,"row-key":"id",size:"large",onSelectionChange:$},{empty:o(()=>[r("span",null,i(t.loading?"":s(l)("emptyData")),1)]),default:o(()=>[n(h,{type:"selection",width:"55","reserve-selection":""}),n(h,{label:s(l)("goodsSelectPopupGoodsInfo"),"min-width":"130"},{default:o(({row:e})=>[r("div",ue,[r("div",ge,[e.image?(c(),v(A,{key:0,class:"w-[60px] h-[60px]",src:s(X)(e.image),fit:"contain"},{error:o(()=>[_e]),_:2},1032,["src"])):(c(),b("img",fe))]),r("div",he,[r("span",{title:e.names,class:"multi-hidden"},i(e.names),9,ve)])])]),_:1},8,["label"]),n(h,{label:s(l)("goodsSelectPopupPrice"),"min-width":"130"},{default:o(({row:e})=>[e.point?(c(),b("p",Pe,i(e.point)+i(s(l)("goodsSelectPopupGoodsPointUnit")),1)):w("",!0),e.price?(c(),b("p",be,i(e.price)+i(s(l)("goodsSelectPopupGoodsPriceUnit")),1)):w("",!0)]),_:1},8,["label"]),n(h,{label:s(l)("goodsSelectPopupStock"),"min-width":"130",align:"right"},{default:o(({row:e})=>[r("span",null,i(e.stock),1)]),_:1},8,["label"])]),_:1},8,["data"])),[[j,t.loading]]),r("div",Se,[n(I,{"current-page":t.page,"onUpdate:current-page":a[4]||(a[4]=e=>t.page=e),"page-size":t.limit,"onUpdate:page-size":a[5]||(a[5]=e=>t.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[6]||(a[6]=e=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])])]),_:1},8,["modelValue","title"])}}});export{Je as _};
