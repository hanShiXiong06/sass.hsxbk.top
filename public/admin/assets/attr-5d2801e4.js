import{d as X,x as Y,f as H,n as P,r as v,l as J,q as a,h as y,c as A,e as l,w as s,a as g,t as m,u as r,i as u,R as B,s as $,j as O,B as Q,b_ as Z,a5 as ee,ap as te,U as ae,E as oe,K as le,L as re,M as ne,a7 as se,ac as ie,ad as de,W as me,X as pe,Y as ue}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{d as ce,e as _e,f as fe,h as ge,m as he}from"./goods-014ca322.js";const ve={class:"main-container"},be={class:"flex justify-between items-center"},ye={class:"text-lg"},xe={class:"mt-[10px]"},Ce={key:0},ke={class:"mt-[16px] flex justify-end"},Ve={class:"dialog-footer"},We=X({__name:"attr",setup(we){const U=Y(),S=H(),D=U.meta.title,n=P({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{attr_name:"",order:"",sort:""}}),k=v(),c=v(!1),_=v(!1),x=v(""),i=P({attr_id:0,attr_name:"",sort:0}),V=v(),R=J(()=>({attr_name:[{required:!0,message:a("attrNamePlaceholder"),trigger:"blur"}]})),T=o=>{let e="";o.order=="ascending"?e="asc":o.order=="descending"&&(e="desc"),e&&(n.searchParam.order=o.prop,n.searchParam.sort=e),p()},p=(o=1)=>{n.loading=!0,n.page=o,ce({page:n.page,limit:n.limit,...n.searchParam}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};p();const z=()=>{i.attr_id=0,i.attr_name="",i.sort=0,x.value=a("addShopGoodsAttr"),c.value=!0},F=o=>{i.attr_id=o.attr_id,i.attr_name=o.attr_name,i.sort=o.sort,x.value=a("updateShopGoodsAttr"),c.value=!0},L=async o=>{if(_.value||!o)return;const e=i.attr_id?_e:fe;await o.validate(async d=>{d&&(_.value=!0,e(i).then(f=>{_.value=!1,c.value=!1,p()}).catch(f=>{_.value=!1}))})},M=o=>{S.push("/phone_shop/goods/attr_edit?attr_id="+o.attr_id)},j=o=>{ee.confirm(a("goodsAttrDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{ge(o).then(()=>{p()}).catch(()=>{})})},G=te((o,e)=>{if(isNaN(o)||!/^\d{0,8}$/.test(o)){ae({type:"warning",message:`${a("sortTips")}`});return}o>99999999&&(e.sort=99999999),he({attr_id:e.attr_id,sort:o}).then(d=>{})}),I=o=>{o&&(o.resetFields(),p())};return(o,e)=>{const d=oe,f=le,b=re,w=ne,E=se,C=ie,q=de,K=me,W=pe,N=ue;return y(),A("div",ve,[l(E,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[g("div",be,[g("span",ye,m(r(D)),1),l(d,{type:"primary",onClick:z},{default:s(()=>[u(m(r(a)("addShopGoodsAttr")),1)]),_:1})]),l(E,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[l(w,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:k},{default:s(()=>[l(b,{label:r(a)("attrName"),prop:"attr_name"},{default:s(()=>[l(f,{modelValue:n.searchParam.attr_name,"onUpdate:modelValue":e[0]||(e[0]=t=>n.searchParam.attr_name=t),placeholder:r(a)("attrNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(b,null,{default:s(()=>[l(d,{type:"primary",onClick:e[1]||(e[1]=t=>p())},{default:s(()=>[u(m(r(a)("search")),1)]),_:1}),l(d,{onClick:e[2]||(e[2]=t=>I(k.value))},{default:s(()=>[u(m(r(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),g("div",xe,[B((y(),$(q,{data:n.data,size:"large",onSortChange:T},{empty:s(()=>[g("span",null,m(n.loading?"":r(a)("emptyData")),1)]),default:s(()=>[l(C,{prop:"attr_name",label:r(a)("attrName"),"min-width":"320","show-overflow-tooltip":!0},null,8,["label"]),l(C,{prop:"sort",label:r(a)("sort"),"min-width":"120",sortable:"custom"},{default:s(({row:t})=>[l(f,{modelValue:t.sort,"onUpdate:modelValue":h=>t.sort=h,class:"!w-[100px]",maxlength:"8",onBlur:h=>r(G)(t.sort,t)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(C,{label:r(a)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:t})=>[r(O)().siteInfo.site_id==t.site_id?(y(),A("div",Ce,[l(d,{type:"primary",link:"",onClick:h=>M(t)},{default:s(()=>[u(m(r(a)("manage")),1)]),_:2},1032,["onClick"]),l(d,{type:"primary",link:"",onClick:h=>F(t)},{default:s(()=>[u(m(r(a)("edit")),1)]),_:2},1032,["onClick"]),l(d,{type:"primary",link:"",onClick:h=>j(t.attr_id)},{default:s(()=>[u(m(r(a)("delete")),1)]),_:2},1032,["onClick"])])):Q("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[N,n.loading]]),g("div",ke,[l(K,{"current-page":n.page,"onUpdate:current-page":e[3]||(e[3]=t=>n.page=t),"page-size":n.limit,"onUpdate:page-size":e[4]||(e[4]=t=>n.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[5]||(e[5]=t=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1}),l(W,{modelValue:c.value,"onUpdate:modelValue":e[11]||(e[11]=t=>c.value=t),title:x.value,width:"500px","destroy-on-close":!0},{footer:s(()=>[g("span",Ve,[l(d,{onClick:e[9]||(e[9]=t=>c.value=!1)},{default:s(()=>[u(m(r(a)("cancel")),1)]),_:1}),l(d,{type:"primary",loading:_.value,onClick:e[10]||(e[10]=t=>L(V.value))},{default:s(()=>[u(m(r(a)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[B((y(),$(w,{model:i,"label-width":"120px",ref_key:"formRef",ref:V,rules:r(R),class:"page-form"},{default:s(()=>[l(b,{label:r(a)("attrName"),prop:"attr_name"},{default:s(()=>[l(f,{modelValue:i.attr_name,"onUpdate:modelValue":e[6]||(e[6]=t=>i.attr_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:r(a)("attrNamePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(b,{label:r(a)("sort")},{default:s(()=>[l(f,{modelValue:i.sort,"onUpdate:modelValue":e[7]||(e[7]=t=>i.sort=t),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:r(a)("sortPlaceholder"),class:"input-width",onKeyup:e[8]||(e[8]=t=>r(Z)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[N,_.value]])]),_:1},8,["modelValue","title"])])}}});export{We as default};
