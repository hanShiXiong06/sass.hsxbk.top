import{d as Ae,r as F,n as $,Q as J,l as oe,b9 as Ue,G as ze,U as ne,ao as C,A as z,h as s,c as m,a as d,e as o,u as n,q as i,w as l,v as B,t as u,F as T,T as D,s as h,i as k,B as g,ba as Oe,R as se,a0 as Se,ap as ie,bb as Le,bc as je,a5 as ce,bd as Fe,be as Be,bf as Te,K as Re,bg as De,bh as Ne,bi as Pe,V as Me,E as qe,bj as Ge,aM as Je,aN as Ke,J as Qe,aU as We,av as Xe,W as Ye,ab as He,aC as Ze,L as et,M as tt,X as at,bk as lt,Y as ot,p as nt,g as st,bl as it,bm as ct,bn as dt,bo as rt}from"./index-2a89d409.js";/* empty css                   */import{_ as ut}from"./index.vue_vue_type_script_setup_true_lang-bee04220.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                  *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import{_ as pt}from"./index.vue_vue_type_script_setup_true_lang-f1303253.js";import{_ as mt}from"./index.vue_vue_type_script_setup_true_lang-4e818418.js";import{_ as ft}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                   */const _t=""+new URL("no_attachment-6030c8d3.png",import.meta.url).href,ht=r=>(nt("data-v-24c9abf1"),r=r(),st(),r),vt={class:"group-wrap w-[180px] p-[15px] h-full border-r border-color flex flex-col"},gt={class:"group-list flex-1 my-[10px] h-0"},yt=["onClick"],xt={key:0,class:"leading-none operate py-[10px]"},bt={class:"text-center w-full"},kt={class:"attachment-list-wrap flex flex-col p-[15px] flex-1 overflow-hidden"},wt={class:"flex"},Ct={key:1},Vt={class:"flex-1 my-[15px] h-0"},Et={key:0,class:"flex flex-wrap"},$t=["onClick"],It=["src"],At={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60"},Ut={class:"file-box-active absolute z-[1] bottom-0 right-0 w-full h-full"},zt={class:"absolute bottom-[2px] right-[2px] text-white z-[2] leading-none"},Ot={class:"flex items-center"},St={class:"truncate my-[10px] cursor-pointer text-base flex-1 text-center"},Lt={class:"text-center w-full"},jt={class:"text-center w-full"},Ft={class:"text-center w-full"},Bt={class:"text-center w-full"},Tt={key:1,class:"flex flex-wrap"},Rt={class:"attachment-wrap w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center h-[120px]"},Dt=["src"],Nt={class:"flex items-center"},Pt={class:"truncate my-[10px] cursor-pointer text-base flex-1 text-center"},Mt={key:2,class:"flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center"},qt={key:0,class:"flex flex-col items-center"},Gt=ht(()=>d("img",{src:_t,class:"max-w-[130px] max-h-[130px] mb-[15px]"},null,-1)),Jt={class:"text-[var(--el-text-color-secondary)] text-[14px]"},Kt={class:"flex items-center"},Qt={class:"flex h-full justify-end items-center"},Wt={class:"dialog-footer"},Xt=Ae({__name:"attachment",props:{limit:{type:Number,default:1},type:{type:String,default:"image"},scene:{type:String,default:"select"}},setup(r,{expose:de}){const p=r,N=F(""),O=F(!1),f=$({}),b=$([]),I=$({data:[]}),c=$({loading:!0,page:1,total:0,limit:p.scene=="select"?10:20,data:[]});p.scene=="select"?(c.limit=10,p.type=="icon"&&(c.limit=20)):(c.limit=20,p.type=="icon"&&(c.limit=30));const P=$({name:""}),V=$({real_name:"",cate_id:0}),M=ie(()=>{(p.type=="icon"?it:ct)({type:p.type,...P}).then(e=>{I.data=e.data}).catch(()=>{})});M();const A=ie((a=1)=>{const e=p.type=="icon"?dt:rt;c.loading=!0,c.page=a,e({page:c.page,limit:c.limit,att_type:p.type,...V}).then(y=>{if(c.data=y.data.data,c.total=y.data.total,c.loading=!1,p.scene=="attachment"&&Q(),p.type!="icon")for(let v=0;v<c.data.length;v++)c.data[v].image_list=[],c.data[v].image_list.push(z(y.data.data[v].url))}).catch(()=>{c.loading=!1})});A(),J(()=>V.cate_id,()=>{A()});const re=a=>{Le({type:p.type,name:a}).then(e=>{N.value="",M(1)}).catch(()=>{})},ue=(a,e)=>{je({id:I.data[e].id,name:a}).then(y=>{I.data[e].name=a}).catch(()=>{})},pe=a=>{ce.confirm(i("upload.deleteCategoryTips"),i("warning"),{confirmButtonText:i("confirm"),cancelButtonText:i("cancel"),type:"warning"}).then(()=>{Fe(I.data[a].id).then(()=>{I.data.splice(a,1)}).catch(()=>{})})},K=F(null),me=oe(()=>{const a={};return a.token=Ue(),a["site-id"]=ze.get("siteId")||0,{action:`${"/adminapi/".substr(-1)=="/"?"/adminapi/":"/adminapi//"}sys/${p.type}`,multiple:!0,data:{cate_id:V.cate_id},headers:a,onSuccess:(y,v,G)=>{var E;y.code>=1?(A(),(E=K.value)==null||E.handleRemove(v)):(v.status="fail",ne({message:y.msg,type:"error"}))}}}),S=F(!1);J(S,()=>{if(S.value){const a=Object.keys(C(f));c.data.forEach(e=>{a.includes(e.att_id)||(f[e.att_id]=C(e),b.push(e.att_id))})}else Q()});const Q=()=>{const a=Object.keys(C(f));a.length&&(a.forEach(e=>{delete f[e],b.splice(b.indexOf(e),1)}),S.value=!1)},fe=a=>{if(f[a.att_id])delete f[a.att_id],b.splice(b.indexOf(a.att_id),1);else if(p.scene=="select"){const e=Object.keys(C(f)),y=e.length;if(p.limit==1&&y==p.limit)delete f[e[0]],b.splice(b.indexOf(e[0]),1);else if(y>=p.limit){ne.info(i("upload.triggerUpperLimit"));return}f[a.att_id]=C(a),b.push(a.att_id)}else f[a.att_id]=C(a),b.push(a.att_id)},_e=a=>{let e=b.indexOf(a);return e==-1?0:e+1},W=(a=null)=>{const e=a===null?Object.keys(C(f)):[c.data[a].att_id];ce.confirm(i("upload.deleteAttachmentTips"),i("warning"),{confirmButtonText:i("confirm"),cancelButtonText:i("cancel"),type:"warning"}).then(()=>{Be({att_ids:e}).then(()=>{A()}).catch(()=>{})})},_=$({cateId:"",loading:!1,visible:!1}),X=(a=null)=>{const e=a===null?Object.keys(C(f)):[c.data[a].att_id];_.visible=!0,_.cateId=I.data[0].id,_.confirm=()=>{_.loading=!0,Te({cate_id:_.cateId,att_ids:e}).then(()=>{_.visible=!1,_.loading=!1,A()}).catch(()=>{_.loading=!1})}},q=F(!0);J(f,()=>{q.value=Object.keys(C(f)).length==0});const L=$({show:!1,index:0}),he=a=>{L.show=!0,L.index=a},ve=oe(()=>C(c.data).map(a=>z(a.url))),j=$({visible:!1,src:""}),ge=a=>{j.visible=!0,j.src=z(c.data[a].url)};return de({selectedFile:f,selectedFileIndex:b}),(a,e)=>{const y=Re,v=mt,G=pt,E=De,Y=Ne,H=Pe,Z=Me,U=qe,ye=Ge,R=Je,ee=Ke,te=Qe,ae=We,xe=Xe,be=Ye,ke=He,we=Ze,Ce=et,Ve=tt,le=at,Ee=lt,$e=ut,Ie=ot;return s(),m("div",{class:B(["flex border-t border-b main-wrap border-color w-full",r.scene=="select"?"h-[40vh]":"h-full"])},[d("div",vt,[o(y,{modelValue:P.name,"onUpdate:modelValue":e[0]||(e[0]=t=>P.name=t),class:"m-0",placeholder:n(i)("upload.attachmentCategoryPlaceholder"),clearable:"","prefix-icon":"Search",onInput:e[1]||(e[1]=t=>n(M)())},null,8,["modelValue","placeholder"]),d("div",gt,[o(Z,null,{default:l(()=>[d("div",{class:B(["group-item p-[10px] leading-none text-xs rounded cursor-pointer",{active:V.cate_id==0}]),onClick:e[2]||(e[2]=t=>V.cate_id=0)},u(n(i)("selectPlaceholder")),3),(s(!0),m(T,null,D(I.data,(t,x)=>(s(),m("div",{class:B(["group-item px-[10px] text-xs rounded cursor-pointer flex",{active:V.cate_id==t.id}]),key:x},[d("div",{class:"flex-1 leading-none truncate py-[10px]",onClick:w=>V.cate_id=t.id},u(t.name),9,yt),r.scene=="attachment"&&p.type!="icon"?(s(),m("div",xt,[r.scene=="attachment"?(s(),h(H,{key:0,"hide-on-click":!1},{dropdown:l(()=>[o(Y,null,{default:l(()=>[o(E,{class:"text-center"},{default:l(()=>[o(G,{placeholder:n(i)("upload.attachmentCategoryPlaceholder"),onConfirm:w=>ue(w,x),modelValue:t.name,"onUpdate:modelValue":w=>t.name=w},{default:l(()=>[d("span",null,u(n(i)("edit")),1)]),_:2},1032,["placeholder","onConfirm","modelValue","onUpdate:modelValue"])]),_:2},1024),o(E,{onClick:w=>pe(x)},{default:l(()=>[d("div",bt,u(n(i)("delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:l(()=>[o(v,{name:"element MoreFilled",class:"cursor-pointer ml-[10px]",size:"14px"}),k(" "+u(t.name)+" ",1)]),_:2},1024)):g("",!0)])):g("",!0)],2))),128))]),_:1})]),p.type!="icon"?(s(),h(G,{key:0,placeholder:n(i)("upload.attachmentCategoryPlaceholder"),onConfirm:re,modelValue:N.value,"onUpdate:modelValue":e[3]||(e[3]=t=>N.value=t)},{default:l(()=>[o(U,null,{default:l(()=>[k(u(n(i)("upload.addAttachmentCategory")),1)]),_:1})]),_:1},8,["placeholder","modelValue"])):g("",!0)]),d("div",kt,[o(ee,{gutter:15,class:"h-[32px]"},{default:l(()=>[o(R,{span:10},{default:l(()=>[d("div",wt,[p.type!="icon"?(s(),h(ye,Oe({key:0},n(me),{ref_key:"uploadRef",ref:K}),{default:l(()=>[o(U,{type:"primary"},{default:l(()=>[k(u(n(i)("upload.upload"+r.type))+" "+u(a.isOpen),1)]),_:1})]),_:1},16)):g("",!0),r.scene=="attachment"&&p.type!="icon"?(s(),m("div",Ct,[O.value===!1?(s(),h(U,{key:0,class:"ml-[10px]",type:"primary",onClick:e[4]||(e[4]=t=>O.value=!0)},{default:l(()=>[k(u(n(i)("edit")),1)]),_:1})):(s(),h(U,{key:1,class:"ml-[10px]",type:"primary",onClick:e[5]||(e[5]=t=>O.value=!1)},{default:l(()=>[k(u(n(i)("complete")),1)]),_:1}))])):g("",!0)])]),_:1}),o(R,{span:14,class:"text-right"},{default:l(()=>[o(y,{modelValue:V.real_name,"onUpdate:modelValue":e[6]||(e[6]=t=>V.real_name=t),class:"m-0 !w-[200px]",clearable:"",placeholder:n(i)("upload.placeholder"+r.type+"Name"),"prefix-icon":"Search",onInput:e[7]||(e[7]=t=>n(A)())},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),se((s(),m("div",Vt,[o(Z,null,{default:l(()=>[c.data.length&&(O.value===!0||r.scene!="attachment")?(s(),m("div",Et,[(s(!0),m(T,null,D(c.data,(t,x)=>(s(),m("div",{class:B(["attachment-item mr-[10px]",r.scene=="select"?"w-[100px]":"w-[120px]"]),key:x},[d("div",{class:B(["attachment-wrap w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center",r.scene=="select"?"h-[100px]":"h-[120px]"]),onClick:w=>fe(t)},[r.type=="image"?(s(),h(te,{key:0,src:n(z)(t.url),fit:"contain"},null,8,["src"])):r.type=="video"?(s(),m("video",{key:1,src:n(z)(t.url)},null,8,It)):r.type=="icon"?(s(),h(v,{key:2,name:t.url,size:"24px"},null,8,["name"])):g("",!0),se(d("div",At,[o(v,{name:"element Select",color:"#fff",size:"40px"}),d("div",Ut,[d("span",zt,u(_e(t.att_id)),1)])],512),[[Se,f[t.att_id]]])],10,$t),d("div",Ot,[o(ae,{placement:"top"},{content:l(()=>[k(u(t.real_name),1)]),default:l(()=>[d("div",St,u(t.real_name),1)]),_:2},1024),r.scene=="attachment"?(s(),h(H,{key:0,"hide-on-click":!1,class:"attachment-action hidden"},{dropdown:l(()=>[o(Y,null,{default:l(()=>[t.att_type=="image"?(s(),h(E,{key:0,class:"text-center",onClick:w=>he(x)},{default:l(()=>[d("div",Lt,u(n(i)("lookOver")),1)]),_:2},1032,["onClick"])):g("",!0),t.att_type=="video"?(s(),h(E,{key:1,class:"text-center",onClick:w=>ge(x)},{default:l(()=>[d("div",jt,u(n(i)("lookOver")),1)]),_:2},1032,["onClick"])):g("",!0),o(E,{class:"text-center",onClick:w=>X(x)},{default:l(()=>[d("div",Ft,u(n(i)("upload.move")),1)]),_:2},1032,["onClick"]),o(E,{onClick:w=>W(x)},{default:l(()=>[d("div",Bt,u(n(i)("delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:l(()=>[o(v,{name:"element MoreFilled",class:"cursor-pointer ml-[8px]",size:"14px"})]),_:2},1024)):g("",!0)])],2))),128))])):c.data.length&&O.value===!1?(s(),m("div",Tt,[(s(!0),m(T,null,D(c.data,(t,x)=>(s(),m("div",{class:"attachment-item mr-[10px] w-[120px]",key:x},[d("div",Rt,[r.type=="image"?(s(),h(te,{key:0,src:n(z)(t.url),fit:"contain","preview-src-list":t.image_list},null,8,["src","preview-src-list"])):r.type=="video"?(s(),m("video",{key:1,src:n(z)(t.url)},null,8,Dt)):r.type=="icon"?(s(),h(v,{key:2,name:t.url,size:"24px"},null,8,["name"])):g("",!0)]),d("div",Nt,[o(ae,{placement:"top"},{content:l(()=>[k(u(t.real_name),1)]),default:l(()=>[d("div",Pt,u(t.real_name),1)]),_:2},1024)])]))),128))])):(s(),m("div",Mt,[c.loading?g("",!0):(s(),m("div",qt,[Gt,d("span",Jt,u(r.type=="icon"?n(i)("upload.iconEmpty"):n(i)("upload.attachmentEmpty")),1)]))]))]),_:1})])),[[Ie,c.loading]]),o(ee,{gutter:20},{default:l(()=>[r.scene=="attachment"&&O.value===!0?(s(),h(R,{key:0,span:8},{default:l(()=>[d("div",Kt,[o(xe,{modelValue:S.value,"onUpdate:modelValue":e[8]||(e[8]=t=>S.value=t),label:n(i)("selectAll"),size:"large"},null,8,["modelValue","label"]),o(U,{class:"ml-[15px]",disabled:q.value,onClick:e[9]||(e[9]=t=>W())},{default:l(()=>[k(u(n(i)("delete")),1)]),_:1},8,["disabled"]),o(U,{disabled:q.value,onClick:e[10]||(e[10]=t=>X())},{default:l(()=>[k(u(n(i)("upload.move")),1)]),_:1},8,["disabled"])])]),_:1})):g("",!0),o(R,{span:24},{default:l(()=>[d("div",Qt,[o(be,{"current-page":c.page,"onUpdate:current-page":e[11]||(e[11]=t=>c.page=t),small:!0,"page-size":c.limit,"onUpdate:page-size":e[12]||(e[12]=t=>c.limit=t),"page-sizes":[10,20,30,40,60],layout:"total, sizes, prev, pager, next, jumper",total:c.total,onSizeChange:e[13]||(e[13]=t=>n(A)()),onCurrentChange:n(A)},null,8,["current-page","page-size","total","onCurrentChange"])])]),_:1})]),_:1})]),r.scene=="attachment"?(s(),m(T,{key:0},[o(le,{modelValue:_.visible,"onUpdate:modelValue":e[17]||(e[17]=t=>_.visible=t),title:n(i)("upload.moveCategory"),width:"350px"},{footer:l(()=>[d("span",Wt,[o(U,{onClick:e[15]||(e[15]=t=>_.visible=!1)},{default:l(()=>[k(u(n(i)("cancel")),1)]),_:1}),o(U,{type:"primary",loading:_.loading,onClick:e[16]||(e[16]=t=>_.confirm())},{default:l(()=>[k(u(n(i)("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[o(Ve,{"label-width":"60px"},{default:l(()=>[o(Ce,{label:n(i)("upload.moveTo"),style:{"margin-bottom":"0"}},{default:l(()=>[o(we,{modelValue:_.cateId,"onUpdate:modelValue":e[14]||(e[14]=t=>_.cateId=t),class:"input-width"},{default:l(()=>[(s(!0),m(T,null,D(I.data,(t,x)=>(s(),h(ke,{label:t.name,value:t.id,key:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"]),L.show?(s(),h(Ee,{key:0,"url-list":n(ve),onClose:e[18]||(e[18]=t=>L.show=!1),"initial-index":L.index,"zoom-rate":1},null,8,["url-list","initial-index"])):g("",!0),o(le,{modelValue:j.visible,"onUpdate:modelValue":e[19]||(e[19]=t=>j.visible=t),width:"50%","align-center":"","destroy-on-close":!0,"custom-class":"video-preview"},{default:l(()=>[o($e,{src:j.src,width:"100%"},null,8,["src"])]),_:1},8,["modelValue"])],64)):g("",!0)],2)}}});const Va=ft(Xt,[["__scopeId","data-v-24c9abf1"]]);export{Va as default};
