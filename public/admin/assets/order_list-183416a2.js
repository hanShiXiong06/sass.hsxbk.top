import{d as q,x as A,f as G,r as g,n as K,h as d,c as p,e as a,w as r,a as m,t as n,u as t,q as o,F as v,T as V,s as P,i as x,R as W,A as J,B as N,ab as Q,aC as X,K as Z,L as ee,bO as ae,E as te,M as le,a7 as oe,ax as se,ay as re,ac as ne,ad as de,W as ie,Y as pe}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{_ as me}from"./goods_default-665e448a.js";import{g as _e,a as ce,b as ue,c as be}from"./order-dc33c81d.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";const fe={class:"main-container"},ye={class:"flex justify-between items-center"},ge={class:"text-page-title"},xe={class:"text-[14px]"},ve={class:"flex cursor-pointer"},Ve={class:"flex items-center min-w-[50px] mr-[10px]"},ke=["src"],Pe={key:1,class:"w-[50px] h-[50px]",src:me,alt:""},we={class:"flex flex-col"},De={class:"multi-hidden text-[14px]"},Ee={class:"text-[12px] text-[#999]"},Te={class:"flex flex-col"},Ce={key:0,class:"text-[14px]"},Fe={key:0},Ne={key:1,class:"text-[13px]"},Ue={class:"text-[13px] mt-[5px]"},Ye={key:0,class:"text-[14px]"},Be={key:0},Me={key:1,class:"text-[14px]"},Oe={class:"text-[14px]"},ze={class:"text-[14px]"},Se={class:"mt-[16px] flex justify-end"},Le=q({__name:"order_list",setup(Re){const U=A(),Y=G(),B=U.meta.title,w=g(""),M=g([]),D=g([]),E=g([]);(async()=>{M.value=await(await _e()).data,D.value=await(await ce()).data,E.value=await(await ue()).data})();const l=K({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",pay_type:"",order_from:"",status:"",create_time:[],pay_time:[],activity_type:"exchange"}}),T=g(),b=(_=1)=>{l.loading=!0,l.page=_,be({page:l.page,limit:l.limit,...l.searchParam}).then(s=>{l.loading=!1,l.data=s.data.data.map(c=>(c.order_goods.forEach(f=>{f.rowNum=c.order_goods.length}),c)),l.total=s.data.total}).catch(()=>{l.loading=!1})};b();const O=_=>{l.searchParam.status=_,b()},z=_=>{Y.push("/phone_shop/order/detail?order_id="+_.order_id)},S=_=>{_&&(_.resetFields(),b())};return(_,s)=>{const c=Q,f=X,L=Z,h=ee,C=ae,k=te,R=le,F=oe,y=se,H=re,u=ne,I=de,$=ie,j=pe;return d(),p("div",fe,[a(F,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[m("div",ye,[m("span",ge,n(t(B)),1)]),a(F,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[a(R,{inline:!0,model:l.searchParam,ref_key:"searchFormRef",ref:T},{default:r(()=>[a(h,{label:t(o)("orderInfo"),prop:"search_name"},{default:r(()=>[a(f,{modelValue:l.searchParam.search_type,"onUpdate:modelValue":s[0]||(s[0]=e=>l.searchParam.search_type=e),clearable:"",class:"input-item"},{default:r(()=>[a(c,{label:t(o)("orderNo"),value:"order_no"},null,8,["label"]),a(c,{label:t(o)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),a(L,{class:"input-item ml-3",modelValue:l.searchParam.search_name,"onUpdate:modelValue":s[1]||(s[1]=e=>l.searchParam.search_name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),a(h,{label:t(o)("payType"),prop:"pay_type"},{default:r(()=>[a(f,{modelValue:l.searchParam.pay_type,"onUpdate:modelValue":s[2]||(s[2]=e=>l.searchParam.pay_type=e),clearable:"",class:"input-item"},{default:r(()=>[(d(!0),p(v,null,V(D.value,(e,i)=>(d(),P(c,{key:i,label:e.name,value:e.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(h,{label:t(o)("fromType"),prop:"from_type"},{default:r(()=>[a(f,{modelValue:l.searchParam.order_from,"onUpdate:modelValue":s[3]||(s[3]=e=>l.searchParam.order_from=e),clearable:"",class:"input-item"},{default:r(()=>[(d(!0),p(v,null,V(E.value,(e,i)=>(d(),P(c,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(h,{label:t(o)("createTime"),prop:"create_time"},{default:r(()=>[a(C,{modelValue:l.searchParam.create_time,"onUpdate:modelValue":s[4]||(s[4]=e=>l.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(o)("startDate"),"end-placeholder":t(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(h,{label:t(o)("payTime"),prop:"pay_time"},{default:r(()=>[a(C,{modelValue:l.searchParam.pay_time,"onUpdate:modelValue":s[5]||(s[5]=e=>l.searchParam.pay_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(o)("startDate"),"end-placeholder":t(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(h,null,{default:r(()=>[a(k,{type:"primary",onClick:s[6]||(s[6]=e=>b())},{default:r(()=>[x(n(t(o)("search")),1)]),_:1}),a(k,{onClick:s[7]||(s[7]=e=>S(T.value))},{default:r(()=>[x(n(t(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(H,{modelValue:w.value,"onUpdate:modelValue":s[8]||(s[8]=e=>w.value=e),class:"demo-tabs",onTabChange:O},{default:r(()=>[a(y,{label:t(o)("all"),name:""},null,8,["label"]),a(y,{label:t(o)("toBeShipped"),name:"2"},null,8,["label"]),a(y,{label:t(o)("shipped"),name:"3"},null,8,["label"]),a(y,{label:t(o)("completed"),name:"5"},null,8,["label"]),a(y,{label:t(o)("closed"),name:"-1"},null,8,["label"])]),_:1},8,["modelValue"]),W((d(),P(I,{data:l.data,size:"large"},{empty:r(()=>[m("span",null,n(l.loading?"":t(o)("emptyData")),1)]),default:r(()=>[a(u,{label:t(o)("orderNo"),"min-width":"250"},{default:r(({row:e})=>[m("span",xe,n(e.order_no),1)]),_:1},8,["label"]),a(u,{label:t(o)("orderGoods"),"min-width":"350"},{default:r(({row:e})=>[(d(!0),p(v,null,V(e.order_goods,i=>(d(),p("div",ve,[m("div",Ve,[i.goods_image_thumb_small?(d(),p("img",{key:0,class:"w-[50px] h-[50px]",src:t(J)(i.goods_image_thumb_small),alt:""},null,8,ke)):(d(),p("img",Pe))]),m("div",we,[m("p",De,n(i.goods_name),1),m("span",Ee,n(i.sku_name),1)])]))),256))]),_:1},8,["label"]),a(u,{label:t(o)("goodsPriceNumber"),"min-width":"200"},{default:r(({row:e})=>[(d(!0),p(v,null,V(e.order_goods,i=>(d(),p("div",Te,[e.activity_type=="exchange"?(d(),p("span",Ce,[x(n(i.extend.point)+n(t(o)("point"))+" ",1),parseFloat(i.extend.price)?(d(),p("span",Fe,"+￥"+n(i.extend.price),1)):N("",!0)])):(d(),p("span",Ne,"￥"+n(i.price),1)),m("span",Ue,n(i.num)+n(t(o)("piece")),1)]))),256))]),_:1},8,["label"]),a(u,{label:t(o)("orderMoney"),"min-width":"200"},{default:r(({row:e})=>[e.activity_type=="exchange"?(d(),p("span",Ye,[x(n(e.point)+n(t(o)("point"))+" ",1),parseFloat(e.order_money)?(d(),p("span",Be,"+￥"+n(e.order_money),1)):N("",!0)])):(d(),p("span",Me,"￥"+n(e.order_money),1))]),_:1},8,["label"]),a(u,{label:t(o)("createTime"),"min-width":"200"},{default:r(({row:e})=>[m("span",Oe,n(e.create_time),1)]),_:1},8,["label"]),a(u,{label:t(o)("orderStatus"),"min-width":"100"},{default:r(({row:e})=>[m("span",ze,n(e.status_name.name),1)]),_:1},8,["label"]),a(u,{label:t(o)("操作"),fixed:"right",align:"right","min-width":"100"},{default:r(({row:e})=>[a(k,{type:"primary",link:"",onClick:i=>z(e)},{default:r(()=>[x(n(t(o)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[j,l.loading]]),m("div",Se,[a($,{"current-page":l.page,"onUpdate:current-page":s[9]||(s[9]=e=>l.page=e),"page-size":l.limit,"onUpdate:page-size":s[10]||(s[10]=e=>l.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:s[11]||(s[11]=e=>b()),onCurrentChange:b},null,8,["current-page","page-size","total"])])]),_:1})])}}});const pa=he(Le,[["__scopeId","data-v-451cc551"]]);export{pa as default};
