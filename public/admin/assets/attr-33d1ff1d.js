import{d as W,x as X,f as Y,n as P,r as v,l as H,q as o,h as w,c as J,e as r,w as s,a as h,t as m,u as t,i as u,R as A,s as $,c1 as O,a4 as Q,ao as Z,U as ee,E as te,K as ae,L as oe,M as le,a6 as re,ab as ne,ac as se,W as ie,X as de,Y as me}from"./index-f7a01263.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  */import{d as pe,e as ue,f as ce,h as fe,m as _e}from"./goods-d18d2d10.js";const ge={class:"main-container"},he={class:"flex justify-between items-center"},ve={class:"text-lg"},be={class:"mt-[10px]"},ye={class:"mt-[16px] flex justify-end"},xe={class:"dialog-footer"},Ge=W({__name:"attr",setup(we){const U=X(),B=Y(),D=U.meta.title;let n=P({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{attr_name:"",order:"",sort:""}});const C=v(),c=v(!1),f=v(!1),y=v(""),i=P({attr_id:0,attr_name:"",sort:0}),k=v(),R=H(()=>({attr_name:[{required:!0,message:o("attrNamePlaceholder"),trigger:"blur"}]})),S=l=>{let e="";l.order=="ascending"?e="asc":l.order=="descending"&&(e="desc"),e&&(n.searchParam.order=l.prop,n.searchParam.sort=e),p()},p=(l=1)=>{n.loading=!0,n.page=l,pe({page:n.page,limit:n.limit,...n.searchParam}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};p();const T=()=>{i.attr_id=0,i.attr_name="",i.sort=0,y.value=o("addShopGoodsAttr"),c.value=!0},z=l=>{i.attr_id=l.attr_id,i.attr_name=l.attr_name,i.sort=l.sort,y.value=o("updateShopGoodsAttr"),c.value=!0},F=async l=>{if(f.value||!l)return;const e=i.attr_id?ue:ce;await l.validate(async d=>{d&&(f.value=!0,e(i).then(_=>{f.value=!1,c.value=!1,p()}).catch(_=>{f.value=!1}))})},I=l=>{B.push("/shop/goods/attr_edit?attr_id="+l.attr_id)},L=l=>{Q.confirm(o("goodsAttrDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{fe(l).then(()=>{p()}).catch(()=>{})})},M=Z((l,e)=>{if(isNaN(l)||!/^\d{0,10}$/.test(l)){ee({type:"warning",message:`${o("sortTips")}`});return}_e({attr_id:e.attr_id,sort:l}).then(d=>{})}),G=l=>{l&&(l.resetFields(),p())};return(l,e)=>{const d=te,_=ae,b=oe,V=le,E=re,x=ne,j=se,q=ie,K=de,N=me;return w(),J("div",ge,[r(E,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[h("div",he,[h("span",ve,m(t(D)),1),r(d,{type:"primary",onClick:T},{default:s(()=>[u(m(t(o)("addShopGoodsAttr")),1)]),_:1})]),r(E,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[r(V,{inline:!0,model:t(n).searchParam,ref_key:"searchFormRef",ref:C},{default:s(()=>[r(b,{label:t(o)("attrName"),prop:"attr_name"},{default:s(()=>[r(_,{modelValue:t(n).searchParam.attr_name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(n).searchParam.attr_name=a),placeholder:t(o)("attrNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(b,null,{default:s(()=>[r(d,{type:"primary",onClick:e[1]||(e[1]=a=>p())},{default:s(()=>[u(m(t(o)("search")),1)]),_:1}),r(d,{onClick:e[2]||(e[2]=a=>G(C.value))},{default:s(()=>[u(m(t(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),h("div",be,[A((w(),$(j,{data:t(n).data,size:"large",onSortChange:S},{empty:s(()=>[h("span",null,m(t(n).loading?"":t(o)("emptyData")),1)]),default:s(()=>[r(x,{prop:"attr_name",label:t(o)("attrName"),"min-width":"320","show-overflow-tooltip":!0},null,8,["label"]),r(x,{prop:"sort",label:t(o)("sort"),"min-width":"120",sortable:"custom"},{default:s(({row:a})=>[r(_,{modelValue:a.sort,"onUpdate:modelValue":g=>a.sort=g,class:"!w-[100px]",maxlength:"10",onInput:g=>t(M)(g,a)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),r(x,{label:t(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:a})=>[r(d,{type:"primary",link:"",onClick:g=>I(a)},{default:s(()=>[u(m(t(o)("manage")),1)]),_:2},1032,["onClick"]),r(d,{type:"primary",link:"",onClick:g=>z(a)},{default:s(()=>[u(m(t(o)("edit")),1)]),_:2},1032,["onClick"]),r(d,{type:"primary",link:"",onClick:g=>L(a.attr_id)},{default:s(()=>[u(m(t(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,t(n).loading]]),h("div",ye,[r(q,{"current-page":t(n).page,"onUpdate:current-page":e[3]||(e[3]=a=>t(n).page=a),"page-size":t(n).limit,"onUpdate:page-size":e[4]||(e[4]=a=>t(n).limit=a),layout:"total, sizes, prev, pager, next, jumper",total:t(n).total,onSizeChange:e[5]||(e[5]=a=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1}),r(K,{modelValue:c.value,"onUpdate:modelValue":e[11]||(e[11]=a=>c.value=a),title:y.value,width:"500px","destroy-on-close":!0},{footer:s(()=>[h("span",xe,[r(d,{onClick:e[9]||(e[9]=a=>c.value=!1)},{default:s(()=>[u(m(t(o)("cancel")),1)]),_:1}),r(d,{type:"primary",loading:f.value,onClick:e[10]||(e[10]=a=>F(k.value))},{default:s(()=>[u(m(t(o)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[A((w(),$(V,{model:i,"label-width":"120px",ref_key:"formRef",ref:k,rules:t(R),class:"page-form"},{default:s(()=>[r(b,{label:t(o)("attrName"),prop:"attr_name"},{default:s(()=>[r(_,{modelValue:i.attr_name,"onUpdate:modelValue":e[6]||(e[6]=a=>i.attr_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:t(o)("attrNamePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(b,{label:t(o)("sort")},{default:s(()=>[r(_,{modelValue:i.sort,"onUpdate:modelValue":e[7]||(e[7]=a=>i.sort=a),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:t(o)("sortPlaceholder"),class:"input-width",onKeyup:e[8]||(e[8]=a=>t(O)(a))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[N,f.value]])]),_:1},8,["modelValue","title"])])}}});export{Ge as default};
