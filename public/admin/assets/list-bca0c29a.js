import{d as R,x as S,n as U,r as E,f as j,h as d,c as g,e as a,w as i,a as p,t as r,u as l,i as u,q as t,F as M,T as q,s as b,R as J,A as K,B as y,a5 as O,E as W,K as Y,L as G,ab as H,aC as Q,M as X,a7 as Z,ac as ee,J as te,ad as ae,W as le,Y as oe}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{h as ie,g as ne,k as re}from"./article-9aafba82.js";const se={class:"main-container"},ce={class:"flex justify-between items-center"},de={class:"text-page-title"},pe={class:"mt-[10px]"},me=["href"],ue={key:0},_e={key:1},ge={class:"mt-[16px] flex justify-end"},Se=R({__name:"list",setup(he){const P=S().meta.title,o=U({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",category_id:""}}),v=E([]),w=E();(async()=>{v.value=await(await ie({})).data})();const m=(s=1)=>{o.loading=!0,o.page=s,ne({page:o.page,limit:o.limit,...o.searchParam}).then(n=>{o.loading=!1,o.data=n.data.data,o.total=n.data.total}).catch(()=>{o.loading=!1})};m();const k=j(),V=()=>{k.push("/cms/article/edit")},B=s=>{k.push(`/cms/article/edit?id=${s.id}`)},T=s=>{O.confirm(t("articleDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{re(s).then(()=>{m()}).catch(()=>{})})},F=s=>{s&&(s.resetFields(),m())};return(s,n)=>{const _=W,L=Y,h=G,C=H,A=Q,N=X,x=Z,c=ee,z=te,D=ae,I=le,$=oe;return d(),g("div",se,[a(x,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[p("div",ce,[p("span",de,r(l(P)),1),a(_,{type:"primary",onClick:V},{default:i(()=>[u(r(l(t)("addArticle")),1)]),_:1})]),a(x,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[a(N,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:w},{default:i(()=>[a(h,{label:l(t)("title"),prop:"title"},{default:i(()=>[a(L,{modelValue:o.searchParam.title,"onUpdate:modelValue":n[0]||(n[0]=e=>o.searchParam.title=e),placeholder:l(t)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:l(t)("categoryName"),prop:"category_id"},{default:i(()=>[a(A,{modelValue:o.searchParam.category_id,"onUpdate:modelValue":n[1]||(n[1]=e=>o.searchParam.category_id=e),clearable:"",placeholder:l(t)("categoryIdPlaceholder"),class:"input-width"},{default:i(()=>[a(C,{label:l(t)("selectPlaceholder"),value:""},null,8,["label"]),(d(!0),g(M,null,q(v.value,(e,f)=>(d(),b(C,{label:e.name,value:e.category_id,key:f},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,null,{default:i(()=>[a(_,{type:"primary",onClick:n[2]||(n[2]=e=>m())},{default:i(()=>[u(r(l(t)("search")),1)]),_:1}),a(_,{onClick:n[3]||(n[3]=e=>F(w.value))},{default:i(()=>[u(r(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),p("div",pe,[J((d(),b(D,{data:o.data,size:"large"},{empty:i(()=>[p("span",null,r(o.loading?"":l(t)("emptyData")),1)]),default:i(()=>[a(c,{prop:"id","show-overflow-tooltip":!0,label:l(t)("ID"),width:"100"},null,8,["label"]),a(c,{prop:"category_name",label:l(t)("categoryName"),width:"120"},null,8,["label"]),a(c,{prop:"title","show-overflow-tooltip":!0,label:l(t)("title"),width:"180"},{default:i(({row:e})=>[p("a",{href:e.article_url.web_url,target:"_blank"},r(e.title),9,me)]),_:1},8,["label"]),a(c,{label:l(t)("image"),"min-width":"120",align:"center"},{default:i(({row:e})=>[e.image_thumb_small?(d(),b(z,{key:0,class:"w-12 h-12",src:l(K)(e.image_thumb_small),fit:"contain"},null,8,["src"])):y("",!0)]),_:1},8,["label"]),a(c,{prop:"visit",label:l(t)("visit"),width:"120",align:"center"},{default:i(({row:e})=>[p("span",null,r(parseInt(e.visit+e.visit_virtual)),1)]),_:1},8,["label"]),a(c,{label:l(t)("isShow"),"min-width":"120",align:"center"},{default:i(({row:e})=>[e.is_show==1?(d(),g("span",ue,r(l(t)("show")),1)):y("",!0),e.is_show==0?(d(),g("span",_e,r(l(t)("hidden")),1)):y("",!0)]),_:1},8,["label"]),a(c,{prop:"sort",label:l(t)("sort"),width:"100",align:"center"},null,8,["label"]),a(c,{label:l(t)("createTime"),"min-width":"180",align:"center"},{default:i(({row:e})=>[u(r(e.create_time||""),1)]),_:1},8,["label"]),a(c,{label:l(t)("operation"),fixed:"right",align:"right",width:"130"},{default:i(({row:e})=>[a(_,{type:"primary",link:"",onClick:f=>B(e)},{default:i(()=>[u(r(l(t)("edit")),1)]),_:2},1032,["onClick"]),a(_,{type:"primary",link:"",onClick:f=>T(e.id)},{default:i(()=>[u(r(l(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,o.loading]]),p("div",ge,[a(I,{"current-page":o.page,"onUpdate:current-page":n[4]||(n[4]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":n[5]||(n[5]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:n[6]||(n[6]=e=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Se as default};