import{d as N,x as T,f as L,c0 as R,r as v,R as q,h as a,c as o,e as i,w as x,u as n,aP as A,a as e,t,q as l,F as d,T as m,s as P,A as S,U as $,aQ as j,a6 as z,ab as G,ac as H,Y as M}from"./index-f7a01263.js";/* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                   *//* empty css                       */import{f as O}from"./verify-6dd22db0.js";const Q={class:"main-container"},U={class:"panel-title !text-sm"},Y={class:"flex items-center mt-[15px]"},J={class:"text-[14px] w-[130px] text-right mr-[20px]"},K={class:"text-[14px] text-[#666666]"},W={class:"flex items-center mt-[15px]"},X={class:"text-[14px] w-[130px] text-right mr-[20px]"},Z=e("span",{class:"text-[14px] text-[#666666]"}," 已核销 ",-1),I={class:"flex items-center mt-[15px]"},ee={class:"text-[14px] w-[130px] text-right mr-[20px]"},te={class:"text-[14px] text-[#666666]"},se={class:"flex items-center mt-[15px]"},ae={class:"text-[14px] w-[130px] text-right mr-[20px]"},ne={class:"text-[14px] text-[#666666]"},oe={class:"text-[14px] w-[130px] text-right mr-[20px]"},le={class:"text-[14px] text-[#666666]"},re={class:"text-[14px] w-[130px] text-right mr-[20px]"},ie={class:"text-[14px] text-[#666666]"},ce={class:"panel-title !text-sm"},xe={class:"text-[14px] w-[130px] text-right mr-[20px]"},pe={class:"text-[14px] text-[#666666]"},_e={class:"panel-title !text-sm"},de={class:"flex"},me={class:"flex items-center shrink-0"},ue=["src"],he={class:"flex flex-col"},ve={class:"multi-hidden text-[14px]"},Re=N({__name:"verify_detail",setup(fe){const b=T(),E=L(),B=b.meta.title;R();const u=v(!0),w=b.query.code,c=v({}),f=v({}),y=v([]);return(async()=>{if(u.value=!0,w){const r=await(await O(w)).data;if(!r||Object.keys(r).length==0)return $.error(l("memberNull")),setTimeout(()=>{E.go(-1)},2e3),!1;c.value=r,f.value=r.value.content||{},y.value=r.value.list||[],u.value=!1}else u.value=!1})(),(r,k)=>{const C=j,h=z,D=G,V=H,F=M;return q((a(),o("div",Q,[i(h,{class:"card !border-none",shadow:"never"},{default:x(()=>[i(C,{content:n(B),icon:n(A),onBack:k[0]||(k[0]=s=>r.$router.back())},null,8,["content","icon"])]),_:1}),i(h,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:x(()=>[e("h3",U,t(n(l)("核销信息")),1),e("div",Y,[e("span",J,t(n(l)("核销类型")),1),e("span",K,t(c.value.type_name),1)]),e("div",W,[e("span",X,t(n(l)("核销状态")),1),Z]),e("div",I,[e("span",ee,t(n(l)("核销人员")),1),e("span",te,t(c.value.member?c.value.member.nickname:"--"),1)]),e("div",se,[e("span",ae,t(n(l)("核销时间")),1),e("span",ne,t(c.value.create_time),1)]),(a(!0),o(d,null,m(f.value.fixed,(s,p)=>(a(),o("div",{class:"flex items-center mt-[15px]",key:p},[e("span",oe,t(s.title),1),e("span",le,t(s.value),1)]))),128)),(a(!0),o(d,null,m(c.value.verify_info,(s,p)=>(a(),o("div",{key:p},[(a(!0),o(d,null,m(s,(_,g)=>(a(),o("div",{class:"flex items-center mt-[15px]",key:g},[e("span",re,t(_.name),1),e("span",ie,t(_.value),1)]))),128))]))),128))]),_:1}),(a(!0),o(d,null,m(f.value.diy,(s,p)=>(a(),P(h,{class:"box-card mt-[15px] !border-none",shadow:"never",key:p},{default:x(()=>[e("h3",ce,t(s.title),1),(a(!0),o(d,null,m(s.list,(_,g)=>(a(),o("div",{class:"flex items-center mt-[15px]",key:g},[e("span",xe,t(_.title),1),e("span",pe,t(_.value),1)]))),128))]),_:2},1024))),128)),i(h,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:x(()=>[e("h3",_e,t(n(l)("商品信息")),1),i(V,{data:y.value,size:"large"},{default:x(()=>[i(D,{label:n(l)("商品名称"),align:"left",width:"300"},{default:x(({row:s})=>[e("div",de,[e("div",me,[e("img",{class:"w-[50px] h-[50px] mr-[10px]",src:n(S)(s.cover)},null,8,ue)]),e("div",he,[e("p",ve,t(s.name),1)])])]),_:1},8,["label"]),i(D,{prop:"num",label:n(l)("数量"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"])]),_:1})])),[[F,u.value]])}}});export{Re as default};
