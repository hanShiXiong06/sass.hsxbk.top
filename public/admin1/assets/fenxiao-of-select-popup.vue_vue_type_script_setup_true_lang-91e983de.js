import{d as R,r as v,n as q,h as d,c as y,e as o,w as l,i as u,t as r,u as s,q as n,B as k,P as A,s as x,a as i,A as G,bs as J,a$ as K,R as M,J as O,K as H,E as Q,L as W,aa as X,I as Y,ac as Z,T as ee,a1 as te,U as ae}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as P}from"./default_headimg-a897263d.js";import{g as le}from"./fenxiao-75a63893.js";const oe={class:"flex items-center cursor-pointer"},se={class:"min-w-[50px] h-[50px] flex items-center justify-center"},ne=i("div",{class:"image-slot"},[i("img",{class:"w-[50px] h-[50px]",src:P})],-1),ie={key:1,class:"w-[50px] h-[50px]",src:P,fit:"contain"},re={class:"ml-2"},me=["title"],pe={class:"text-primary text-[12px]"},ce={class:"cursor-pointer price-wrap"},de={class:"mt-[16px] flex justify-end"},ue={key:0,class:"dialog-footer"},Ue=R({__name:"fenxiao-of-select-popup",props:{title:{type:String,default:""},max:{type:Number,default:1},params:{type:Object,default:()=>({is_agent:"all"})}},emits:["load"],setup(D,{expose:S,emit:C}){const p=D,c=v(!1),t=q({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search:""}}),_=(m=1)=>{t.loading=!0,t.page=m;const a=J(t.searchParam);le({page:t.page,limit:t.limit,...p.params,...a}).then(h=>{t.loading=!1,t.data=h.data.data,t.total=h.data.total}).catch(()=>{t.loading=!1})};let E=v();const F=m=>{m&&(t.searchParam.search="",_())};let b=v([]);const L=m=>{b.value=m},$=m=>{K(()=>{_(),c.value=!0})},z=()=>{if(b.value.length>p.max){M.error(`最多选择${p.max}个分销商`);return}C("load",b.value),c.value=!1},B=m=>{C("load",m),c.value=!1};return S({showDialog:c,show:$}),(m,a)=>{const h=O,V=H,f=Q,I=W,g=X,N=Y,T=Z,U=ee,j=te,w=ae;return d(),y("div",null,[o(j,{modelValue:c.value,"onUpdate:modelValue":a[7]||(a[7]=e=>c.value=e),title:p.title,width:"800px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:l(()=>[p.max>1?(d(),y("span",ue,[o(f,{onClick:a[6]||(a[6]=e=>c.value=!1)},{default:l(()=>[u(r(s(n)("cancel")),1)]),_:1}),o(f,{type:"primary",onClick:z},{default:l(()=>[u(r(s(n)("confirm")),1)]),_:1})])):k("",!0)]),default:l(()=>[o(I,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:E},{default:l(()=>[o(V,{label:s(n)("memberInfo")},{default:l(()=>[o(h,{modelValue:t.searchParam.search,"onUpdate:modelValue":a[0]||(a[0]=e=>t.searchParam.search=e),placeholder:s(n)("fenxiaoNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(V,null,{default:l(()=>[o(f,{type:"primary",onClick:a[1]||(a[1]=e=>_())},{default:l(()=>[u(r(s(n)("search")),1)]),_:1}),o(f,{onClick:a[2]||(a[2]=e=>F(s(E)))},{default:l(()=>[u(r(s(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),A((d(),x(T,{data:t.data,size:"large","max-height":"400",onSelectionChange:L},{empty:l(()=>[i("span",null,r(t.loading?"":s(n)("emptyData")),1)]),default:l(()=>[p.max>1?(d(),x(g,{key:0,type:"selection",width:"55"})):k("",!0),o(g,{prop:"goods_id",label:s(n)("memberInfo"),"min-width":"200"},{default:l(({row:e})=>[i("div",oe,[i("div",se,[e.member&&e.member.headimg?(d(),x(N,{key:0,class:"w-[50px] h-[50px]",src:s(G)(e.member.headimg),fit:"contain"},{error:l(()=>[ne]),_:2},1032,["src"])):(d(),y("img",ie))]),i("div",re,[i("span",{title:e.member&&e.member.nickname||e.member&&e.member.username,class:"multi-hidden"},r(e.member&&e.member.nickname||e.member&&e.member.username),9,me),i("span",pe,r(e.member&&e.member.mobile),1)])])]),_:1},8,["label"]),o(g,{label:s(n)("fenxiaoLevel"),"min-width":"120"},{default:l(({row:e})=>[i("div",ce,[i("span",null,r(e.fenxiaoLevel?e.fenxiaoLevel.level_name:"--"),1)])]),_:1},8,["label"]),o(g,{prop:"sort",label:s(n)("currentState"),"min-width":"100"},{default:l(({row:e})=>[u(r(e.status_name),1)]),_:1},8,["label"]),p.max==1?(d(),x(g,{key:1,label:s(n)("operation"),fixed:"right",align:"right"},{default:l(({row:e})=>[o(f,{type:"primary",onClick:_e=>B(e)},{default:l(()=>[u(r(s(n)("select")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])):k("",!0)]),_:1},8,["data"])),[[w,t.loading]]),i("div",de,[o(U,{"current-page":t.page,"onUpdate:current-page":a[3]||(a[3]=e=>t.page=e),"page-size":t.limit,"onUpdate:page-size":a[4]||(a[4]=e=>t.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[5]||(a[5]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});export{Ue as _};
