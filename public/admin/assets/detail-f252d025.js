import{d as O,x as V,f as q,r as k,R as $,h as s,c as d,e,w as o,u as a,aP as G,s as N,a as c,t as n,q as t,A as J,i as R,F as m,T as h,v as x,B as E,aQ as S,a7 as j,J as A,L as H,ac as M,ad as Q,M as Y,Y as K}from"./index-2a89d409.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                *//* empty css                   *//* empty css                       */import{g as U}from"./goods-c45d24da.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const X={class:"main-container"},Z={class:"text text-[14px] leading-[25px]"},ee={class:"text text-[14px] leading-[25px]"},ae={class:"w-full"},le={class:"h-[62px] border-box py-[15px]"},oe={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},te={class:"px-[16px] border-box"},re=O({__name:"detail",setup(se){const y=V();q();const P=y.meta.title,v=k(!1),p=k({}),l=k({id:0,is_fenxiao:1,fenxiao_type:1,skuList:[],fenxiao_rule:{}}),T=k(),B=w=>{v.value=!0,U(w).then(b=>{p.value=b.data,l.value.id=y.query.goods_id,l.value.fenxiao_type=b.data.goods_info.fenxiao_type,l.value.is_fenxiao=b.data.goods_info.is_set_fenxiao,l.value.skuList=b.data.goods_info.skuList,l.value.fenxiao_rule=JSON.parse(b.data.goods_info.fenxiaoGoods.fenxiao_rule),v.value=!1}).catch(()=>{v.value=!1})};let C=Number(y.query.goods_id);return B(C),(w,b)=>{const F=S,g=j,I=A,f=H,_=M,L=Q,z=Y,D=K;return $((s(),d("div",X,[e(g,{class:"card !border-none",shadow:"never"},{default:o(()=>[e(F,{content:a(P),icon:a(G),onBack:b[0]||(b[0]=r=>w.$router.back())},null,8,["content","icon"])]),_:1}),e(g,{class:"card mt-[15px] !border-none",shadow:"never"},{default:o(()=>[Object.keys(p.value).length?(s(),N(z,{key:0,class:"page-form","label-width":"200px",ref_key:"formRef",ref:T},{default:o(()=>[c("div",Z,n(a(t)("titleOne")),1),e(g,{class:"card !border-none",shadow:"never"},{default:o(()=>[e(f,{label:a(t)("goodsImage")},{default:o(()=>[e(I,{class:"w-[98px] h-[98px]",fit:"contain",src:a(J)(p.value.goods_info.goods_cover_thumb_small)},null,8,["src"])]),_:1},8,["label"]),e(f,{label:a(t)("goodsName")},{default:o(()=>[R(n(p.value.goods_info.goods_name),1)]),_:1},8,["label"])]),_:1}),l.value.is_fenxiao?(s(),d(m,{key:0},[c("div",ee,n(a(t)("titleTwo")),1),e(g,{class:"card !border-none",shadow:"never"},{default:o(()=>[e(f,{label:a(t)("countPrice")},{default:o(()=>[c("div",ae,[e(L,{data:l.value.skuList,size:"large"},{default:o(()=>[e(_,{prop:"sku_name",label:a(t)("skuName"),"min-width":"120"},{default:o(({row:r})=>[c("span",null,n(r.sku_name||p.value.goods_info.goods_name),1)]),_:1},8,["label"]),e(_,{prop:"price",label:a(t)("skuPrice"),"min-width":"120"},null,8,["label"]),e(_,{prop:"cost_price",label:a(t)("costPrice"),"min-width":"120"},null,8,["label"]),e(_,{label:a(t)("calculatePrice"),"min-width":"120"},{default:o(({row:r,$index:u})=>[c("div",le," ￥"+n(r.calculate_price),1)]),_:1},8,["label"])]),_:1},8,["data"]),c("p",oe,n(a(t)("calculatePriceTip")),1)])]),_:1},8,["label"]),e(f,{label:a(t)("type")},{default:o(()=>[R(n(p.value.goods_info.fenxiao_type==1?a(t)("typeLabelOne"):a(t)("typeLabelTwo")),1)]),_:1},8,["label"]),p.value.goods_info.fenxiao_type==1?(s(),N(f,{key:0},{default:o(()=>[e(L,{data:p.value.rule,size:"large"},{default:o(()=>[e(_,{prop:"level_name",label:a(t)("levelname"),"min-width":"120"},null,8,["label"]),e(_,{prop:"one_rate",label:a(t)("oneRate"),"min-width":"120"},{default:o(({row:r})=>[c("span",null,n(r.one_rate)+"%",1)]),_:1},8,["label"]),e(_,{prop:"two_rate",label:a(t)("twoRate"),"min-width":"120"},{default:o(({row:r})=>[c("span",null,n(r.two_rate)+"%",1)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})):(s(),N(f,{key:1},{default:o(()=>[e(L,{data:p.value.rule,size:"large",class:"rule"},{default:o(()=>[e(_,{label:a(t)("skuName"),"min-width":"120"},{default:o(({row:r})=>[(s(!0),d(m,null,h(l.value.skuList,(u,i)=>(s(),d("p",{class:x(["leading-[62px] px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}]),key:i},n(u.sku_name),3))),128))]),_:1},8,["label"]),e(_,{label:a(t)("price"),"min-width":"120"},{default:o(({row:r})=>[(s(!0),d(m,null,h(l.value.skuList,(u,i)=>(s(),d("p",{class:x(["leading-[62px] px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}]),key:i},"￥"+n(u.price),3))),128))]),_:1},8,["label"]),e(_,{prop:"level_name",label:a(t)("rateName"),"min-width":"120"},{default:o(({row:r})=>[c("p",te,n(r.level_name),1)]),_:1},8,["label"]),e(_,{label:a(t)("oneRate"),"min-width":"120"},{default:o(({row:r})=>[(s(!0),d(m,null,h(l.value.skuList,(u,i)=>(s(),d(m,{key:i},[l.value.fenxiao_rule[u.sku_id][r.level_id].one_rate?(s(),d("div",{key:0,class:x(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}])},n(l.value.fenxiao_rule[u.sku_id][r.level_id].one_rate)+"% ",3)):(s(),d("div",{key:1,class:x(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}])},n(l.value.fenxiao_rule[u.sku_id][r.level_id].one_money)+"元 ",3))],64))),128))]),_:1},8,["label"]),e(_,{prop:"two_rate",label:a(t)("twoRate"),"min-width":"120"},{default:o(({row:r})=>[(s(!0),d(m,null,h(l.value.skuList,(u,i)=>(s(),d(m,{key:i},[l.value.fenxiao_rule[u.sku_id][r.level_id].two_rate?(s(),d("div",{key:0,class:x(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}])},n(l.value.fenxiao_rule[u.sku_id][r.level_id].two_rate)+"% ",3)):(s(),d("div",{key:1,class:x(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":i<l.value.skuList.length-1}])},n(l.value.fenxiao_rule[u.sku_id][r.level_id].two_money)+"元 ",3))],64))),128))]),_:1},8,["label"])]),_:1},8,["data"])]),_:1}))]),_:1})],64)):E("",!0)]),_:1},512)):E("",!0)]),_:1})])),[[D,v.value]])}}});const Ne=W(re,[["__scopeId","data-v-43aec1e6"]]);export{Ne as default};
