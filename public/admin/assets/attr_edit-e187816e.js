import{d as ge,x as ye,f as be,r as _,n as M,l as W,q as e,h as m,c as g,e as o,w as r,u as a,s as U,a as w,t as i,i as v,B as I,R as P,F as L,T as Z,v as Ve,b_ as j,a0 as we,a3 as F,a5 as xe,ap as ke,U as G,aQ as Ae,a7 as Ne,aM as Ce,E as Ee,aN as Te,ac as Be,K as De,ad as Me,L as Ue,M as Re,X as Se,ab as $e,aC as Ie,Y as Pe}from"./index-5a756a51.js";/* empty css                   *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css               *//* empty css                *//* empty css                   *//* empty css                       */import{i as Oe,e as qe,j as J}from"./goods-d1f9b95c.js";const Le={class:"main-container"},je={class:"ml-[10px]"},Fe={class:"ml-[10px]"},Ge={key:0},Je={key:1},Ke={key:2},ze={key:1},He={class:"dialog-footer"},Qe={class:"dialog-footer"},bt=ge({__name:"attr_edit",setup(Xe){const R=ye(),ee=be(),te=R.meta.title;R.query.attr_id=R.query.attr_id||0;const S=_(R.query.attr_id),s=M({}),ae=_(30),k=M({loading:!0,data:[]}),E=()=>{Oe(S.value).then(d=>{Object.assign(s,d.data),s.attr_value_format?s.attr_value_format=JSON.parse(s.attr_value_format):s.attr_value_format=[],k.data=F(s.attr_value_format),k.data.sort((l,c)=>c.sort-l.sort),k.loading=!1})};E();const T=_(!1),A=_(!1),K=_(),h=M({attr_id:0,attr_name:"",sort:0}),le=W(()=>({attr_name:[{required:!0,message:e("attrNamePlaceholder"),trigger:"blur"}]})),oe=d=>{h.attr_id=s.attr_id,h.attr_name=s.attr_name,h.sort=s.sort,T.value=!0},re=async d=>{A.value||!d||await d.validate(async l=>{l&&(A.value=!0,qe(h).then(c=>{A.value=!1,T.value=!1,E()}).catch(c=>{A.value=!1}))})},ne=d=>{xe.confirm(e("goodsAttrDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{if(y.value)return;y.value=!0,s.attr_value_format.splice(d,1);let l={attr_id:S.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(l).then(c=>{y.value=!1,E()}).catch(c=>{y.value=!1})})},N=_(!1),C=_(!1),z=_(),O=_(""),n=M({attr_value_id:0,attr_value_name:"",type:"radio",sort:0,child:[]}),se=M([{label:"单选",value:"radio"},{label:"多选",value:"checkbox"},{label:"输入",value:"text"}]),H=()=>Math.floor(new Date().getSeconds())+Math.floor(new Date().getMilliseconds()),ue=()=>{n.attr_value_id=s.attr_value_format.length+H(),n.attr_value_name="",n.type="radio",n.sort=0,n.child=[],N.value=!0,O.value=e("addShopGoodsAttr"),$.value=-1},de=ke((d,l)=>{if(isNaN(d)||!/^\d{0,10}$/.test(d)){G({type:"warning",message:`${e("sortTips")}`});return}for(let u=0;u<s.attr_value_format.length;u++)if(s.attr_value_format[u].attr_value_id==l.attr_value_id){s.attr_value_format[u].sort=d;break}let c={attr_id:S.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(c).then(u=>{E()}).catch(u=>{})}),ie=()=>{n.child.push({id:n.child.length+H(),name:"",sort:0})},me=(d,l)=>{O.value=e("updateShopGoodsAttr"),$.value=d.attr_value_id,Object.assign(n,F(d)),N.value=!0},pe=W(()=>({attr_value_name:[{required:!0,message:e("attrValueNamePlaceholder"),trigger:"blur"}]})),$=_(-1),y=_(!1),ce=async d=>{C.value||!d||await d.validate(async l=>{if(l){if(n.type!="text"){if(n.child.length==0){G({type:"warning",message:`${e("attrValueNamePlaceholder")}`});return}for(let u=0;u<n.child.length;u++)if(n.child[u].name==""){G({type:"warning",message:`${e("attrValueNamePlaceholder")}`});break}}if(y.value)return;if(y.value=!0,n.child.sort((u,B)=>B.sort-u.sort),C.value=!0,$.value==-1)s.attr_value_format.push(n);else for(let u=0;u<s.attr_value_format.length;u++)if(s.attr_value_format[u].attr_value_id==$.value){s.attr_value_format[u]=F(n);break}let c={attr_id:S.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(c).then(u=>{C.value=!1,N.value=!1,y.value=!1,E()}).catch(u=>{C.value=!1,y.value=!1})}})},_e=(d,l)=>{n.child.splice(l,1)};return(d,l)=>{const c=Ae,u=Ne,B=Ce,f=Ee,fe=Te,b=Be,x=De,Q=Me,D=Ue,X=Re,Y=Se,ve=$e,he=Ie,q=Pe;return m(),g("div",Le,[o(u,{class:"card !border-none mb-[15px]",shadow:"never"},{default:r(()=>[o(c,{content:a(te),icon:d.ArrowLeft,onBack:l[0]||(l[0]=t=>a(ee).push("/shop/goods/attr"))},null,8,["content","icon"])]),_:1}),o(u,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[Object.keys(s).length?(m(),U(fe,{key:0,gutter:20,class:"text-[14px]"},{default:r(()=>[o(B,{span:8},{default:r(()=>[w("label",null,i(a(e)("attrName"))+"：",1),w("span",je,i(s.attr_name),1)]),_:1}),o(B,{span:6},{default:r(()=>[w("label",null,i(a(e)("sort"))+"：",1),w("span",Fe,i(s.sort),1)]),_:1}),o(B,{span:6},{default:r(()=>[o(f,{type:"primary",link:"",onClick:oe},{default:r(()=>[v(i(a(e)("edit")),1)]),_:1})]),_:1})]),_:1})):I("",!0),o(f,{type:"primary",onClick:ue,class:"my-[15px]"},{default:r(()=>[v(i(a(e)("addShopGoodsAttr")),1)]),_:1}),P((m(),U(Q,{data:k.data,size:"large"},{empty:r(()=>[w("span",null,i(k.loading?"":a(e)("emptyData")),1)]),default:r(()=>[o(b,{prop:"attr_value_name",label:a(e)("attrValueName"),"min-width":"200","show-overflow-tooltip":!0},null,8,["label"]),o(b,{prop:"type",label:a(e)("attrValueType"),"min-width":"100","show-overflow-tooltip":!0},{default:r(({row:t})=>[t.type=="radio"?(m(),g("span",Ge,i(a(e)("attrValueTypeRadio")),1)):t.type=="checkbox"?(m(),g("span",Je,i(a(e)("attrValueTypeCheckbox")),1)):I("",!0),t.type=="text"?(m(),g("span",Ke,i(a(e)("attrValueTypeText")),1)):I("",!0)]),_:1},8,["label"]),o(b,{prop:"child",label:a(e)("attrValueChild"),"min-width":"320","show-overflow-tooltip":!0},{default:r(({row:t})=>[t.type!="text"?(m(!0),g(L,{key:0},Z(t.child,(p,V)=>(m(),g("span",{class:Ve({"mr-[5px]":V+1!=t.child.length})},i(p.name),3))),256)):(m(),g("span",ze,"-"))]),_:1},8,["label"]),o(b,{prop:"sort",label:a(e)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:t,$index:p})=>[o(x,{modelValue:t.sort,"onUpdate:modelValue":V=>t.sort=V,modelModifiers:{trim:!0},class:"w-[70px]",maxlength:"10",onInput:V=>a(de)(V,t)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),o(b,{label:a(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:t,$index:p})=>[o(f,{type:"primary",link:"",onClick:V=>me(t,p)},{default:r(()=>[v(i(a(e)("edit")),1)]),_:2},1032,["onClick"]),o(f,{type:"primary",link:"",onClick:V=>ne(p)},{default:r(()=>[v(i(a(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[q,k.loading]])]),_:1}),o(Y,{modelValue:T.value,"onUpdate:modelValue":l[6]||(l[6]=t=>T.value=t),title:a(e)("updateShopGoodsAttr"),width:"500px","destroy-on-close":!0},{footer:r(()=>[w("span",He,[o(f,{onClick:l[4]||(l[4]=t=>T.value=!1)},{default:r(()=>[v(i(a(e)("cancel")),1)]),_:1}),o(f,{type:"primary",loading:A.value,onClick:l[5]||(l[5]=t=>re(K.value))},{default:r(()=>[v(i(a(e)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[P((m(),U(X,{model:h,"label-width":"120px",ref_key:"formRef",ref:K,rules:a(le),class:"page-form"},{default:r(()=>[o(D,{label:a(e)("attrName"),prop:"attr_name"},{default:r(()=>[o(x,{modelValue:h.attr_name,"onUpdate:modelValue":l[1]||(l[1]=t=>h.attr_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:a(e)("attrNamePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(D,{label:a(e)("sort")},{default:r(()=>[o(x,{modelValue:h.sort,"onUpdate:modelValue":l[2]||(l[2]=t=>h.sort=t),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:a(e)("sortPlaceholder"),class:"input-width",onKeyup:l[3]||(l[3]=t=>a(j)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[q,A.value]])]),_:1},8,["modelValue","title"]),o(Y,{modelValue:N.value,"onUpdate:modelValue":l[14]||(l[14]=t=>N.value=t),title:O.value,width:"700px","destroy-on-close":!0},{footer:r(()=>[w("span",Qe,[o(f,{onClick:l[12]||(l[12]=t=>N.value=!1)},{default:r(()=>[v(i(a(e)("cancel")),1)]),_:1}),o(f,{type:"primary",loading:C.value,onClick:l[13]||(l[13]=t=>ce(z.value))},{default:r(()=>[v(i(a(e)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[P((m(),U(X,{model:n,"label-width":"120px",ref_key:"formAttrValueRef",ref:z,rules:a(pe),class:"page-form"},{default:r(()=>[o(D,{label:a(e)("attrValueName"),prop:"attr_value_name"},{default:r(()=>[o(x,{modelValue:n.attr_value_name,"onUpdate:modelValue":l[7]||(l[7]=t=>n.attr_value_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:a(e)("attrValueNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(D,{label:a(e)("attrValueType")},{default:r(()=>[o(he,{modelValue:n.type,"onUpdate:modelValue":l[8]||(l[8]=t=>n.type=t),class:"!w-[150px]",disabled:d.actionAttrValueIndex>-1},{default:r(()=>[(m(!0),g(L,null,Z(se,t=>(m(),U(ve,{label:t.label,value:t.value},null,8,["label","value"]))),256))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),o(D,{label:a(e)("sort")},{default:r(()=>[o(x,{modelValue:n.sort,"onUpdate:modelValue":l[9]||(l[9]=t=>n.sort=t),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:a(e)("sortPlaceholder"),class:"!w-[150px]",onKeyup:l[10]||(l[10]=t=>a(j)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n.type!="text"?(m(),g(L,{key:0},[o(Q,{data:n.child,size:"large"},{empty:r(()=>[w("span",null,i(n.child.length==0?a(e)("emptyData"):""),1)]),default:r(()=>[o(b,{prop:"name",label:a(e)("attrValueName"),"min-width":"200"},{default:r(({row:t})=>[o(x,{modelValue:t.name,"onUpdate:modelValue":p=>t.name=p,modelModifiers:{trim:!0},class:"input-width",maxlength:"20",placeholder:a(e)("attrValueNamePlaceholder"),clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(b,{prop:"name",label:a(e)("sort"),"min-width":"120"},{default:r(({row:t})=>[o(x,{modelValue:t.sort,"onUpdate:modelValue":p=>t.sort=p,modelModifiers:{trim:!0},class:"!w-[150px]",maxlength:"6",placeholder:a(e)("sortPlaceholder"),clearable:"","show-word-limit":"",onKeyup:l[11]||(l[11]=p=>a(j)(p))},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(b,{label:a(e)("operation"),fixed:"right",align:"right","min-width":"60"},{default:r(({row:t,$index:p})=>[o(f,{type:"primary",link:"",onClick:V=>_e(t,p)},{default:r(()=>[v(i(a(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),P(o(f,{type:"primary",plain:"",onClick:ie,class:"my-[10px]"},{default:r(()=>[v(i(a(e)("addAttrValue")),1)]),_:1},512),[[we,n.child.length<ae.value]])],64)):I("",!0)]),_:1},8,["model","rules"])),[[q,C.value]])]),_:1},8,["modelValue","title"])])}}});export{bt as default};
