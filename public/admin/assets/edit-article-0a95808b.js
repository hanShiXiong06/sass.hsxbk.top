import{d as F,q as n,r as E,n as L,a2 as $,h as v,c as M,R as _,a0 as f,u as e,a as r,t as m,e as l,w as i,i as g,v as O,s as S,A as q,B as G,b as J,F as W,as as X,at as Y,L as H,bz as K,a1 as Q,M as Z,ab as ee,J as te,ac as le,W as oe,E as ae,X as ne,bv as ie,Y as se}from"./index-f7a01263.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                       *//* empty css                 */import{u as re}from"./diy-b7806205.js";import{g as de}from"./article-212044f9.js";const me={class:"content-wrap"},pe={class:"edit-attr-item-wrap"},ce={class:"mb-[10px]"},ue={class:"mt-[16px] flex justify-end"},_e={class:"dialog-footer"},ge={class:"style-wrap"},fe={class:"edit-attr-item-wrap"},be={class:"mb-[10px]"},Ce=F({__name:"edit-article",setup(ve,{expose:z}){const o=re();o.editComponent.ignore=[],o.editComponent.verify=d=>{const t={code:!0,message:""};return o.value[d].sources==="diy"&&o.value[d].articleIds.length===0&&(t.code=!1,t.message=n("selectArticleTip")),t};const u=E(!1),R=()=>{u.value=!0},s=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",category_id:"",is_show:1}}),b=(d=1)=>{s.loading=!0,s.page=d,de({page:s.page,limit:s.limit,...s.searchParam}).then(t=>{s.loading=!1,s.data=t.data.data,s.total=t.data.total}).catch(()=>{s.loading=!1})};b();const h=E([]),T=d=>{h.value=d},k=()=>{o.editComponent.articleIds=[],h.value.forEach(d=>{o.editComponent.articleIds.push(d.id)}),u.value=!1};return z({}),(d,t)=>{const w=X,I=Y,p=H,C=K,A=$("ArrowRight"),B=Q,y=Z,c=ee,U=te,D=le,N=oe,x=ae,P=ne,V=ie,j=se;return v(),M(W,null,[_(r("div",me,[r("div",pe,[r("h3",ce,m(e(n)("articleData")),1),l(y,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[l(p,{label:e(n)("dataSources")},{default:i(()=>[l(I,{modelValue:e(o).editComponent.sources,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).editComponent.sources=a)},{default:i(()=>[l(w,{label:"initial"},{default:i(()=>[g(m(e(n)("defaultSources")),1)]),_:1}),l(w,{label:"diy"},{default:i(()=>[g(m(e(n)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),_(l(p,{label:e(n)("articleNum")},{default:i(()=>[l(C,{modelValue:e(o).editComponent.count,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).editComponent.count=a),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:1,max:30},null,8,["modelValue"])]),_:1},8,["label"]),[[f,e(o).editComponent.sources=="initial"]]),_(l(p,{label:e(n)("manualSelectionSources"),class:"flex"},{default:i(()=>[r("span",{onClick:R,class:O(["cursor-pointer flex-1",{"text-primary":e(o).editComponent.articleIds.length>0}])},m(e(o).editComponent.articleIds.length>0?e(n)("selected")+e(o).editComponent.articleIds.length+e(n)("piece"):e(n)("selectPlaceholder")),3),l(B,null,{default:i(()=>[l(A)]),_:1})]),_:1},8,["label"]),[[f,e(o).editComponent.sources=="diy"]])]),_:1})]),l(P,{modelValue:u.value,"onUpdate:modelValue":t[6]||(t[6]=a=>u.value=a),title:e(n)("selectArticleTips"),width:"60%","close-on-press-escape":!1,"close-on-click-modal":!1},{footer:i(()=>[r("span",_e,[l(x,{onClick:t[5]||(t[5]=a=>u.value=!1)},{default:i(()=>[g(m(e(n)("cancel")),1)]),_:1}),l(x,{type:"primary",onClick:k},{default:i(()=>[g(m(e(n)("confirm")),1)]),_:1})])]),default:i(()=>[r("div",null,[_((v(),S(D,{data:s.data,size:"large",onSelectionChange:T},{empty:i(()=>[r("span",null,m(s.loading?"":e(n)("emptyData")),1)]),default:i(()=>[l(c,{type:"selection",width:"55"}),l(c,{prop:"title","show-overflow-tooltip":!0,label:e(n)("articleTitle"),width:"140"},null,8,["label"]),l(c,{label:e(n)("articleImage"),"min-width":"120",align:"center"},{default:i(({row:a})=>[a.image?(v(),S(U,{key:0,class:"w-12 h-12",src:e(q)(a.image),fit:"contain"},null,8,["src"])):G("",!0)]),_:1},8,["label"]),l(c,{prop:"category_name",label:e(n)("articleCategoryName"),align:"center","min-width":"140"},null,8,["label"]),l(c,{prop:"summary",label:e(n)("articleSummary"),width:"180","show-overflow-tooltip":!0},null,8,["label"]),l(c,{label:e(n)("createTime"),"min-width":"180",align:"center"},{default:i(({row:a})=>[g(m(a.create_time||""),1)]),_:1},8,["label"])]),_:1},8,["data"])),[[j,s.loading]]),r("div",ue,[l(N,{"current-page":s.page,"onUpdate:current-page":t[2]||(t[2]=a=>s.page=a),"page-size":s.limit,"onUpdate:page-size":t[3]||(t[3]=a=>s.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:t[4]||(t[4]=a=>b()),onCurrentChange:b},null,8,["current-page","page-size","total"])])])]),_:1},8,["modelValue","title"])],512),[[f,e(o).editTab=="content"]]),_(r("div",ge,[r("div",fe,[r("h3",be,m(e(n)("articleStyle")),1),l(y,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[l(p,{label:e(n)("articleBgColor")},{default:i(()=>[l(V,{modelValue:e(o).editComponent.elementBgColor,"onUpdate:modelValue":t[7]||(t[7]=a=>e(o).editComponent.elementBgColor=a),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(p,{label:e(n)("textColor")},{default:i(()=>[l(V,{modelValue:e(o).editComponent.textColor,"onUpdate:modelValue":t[8]||(t[8]=a=>e(o).editComponent.textColor=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(p,{label:e(n)("topRounded")},{default:i(()=>[l(C,{modelValue:e(o).editComponent.topElementRounded,"onUpdate:modelValue":t[9]||(t[9]=a=>e(o).editComponent.topElementRounded=a),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),l(p,{label:e(n)("bottomRounded")},{default:i(()=>[l(C,{modelValue:e(o).editComponent.bottomElementRounded,"onUpdate:modelValue":t[10]||(t[10]=a=>e(o).editComponent.bottomElementRounded=a),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),J(d.$slots,"style")],512),[[f,e(o).editTab=="style"]])],64)}}});const Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Je as _};
