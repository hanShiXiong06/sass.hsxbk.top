import{d as he,x as ge,f as ye,r as f,n as B,l as W,q as e,h as m,c as g,a as p,u as t,t as u,e as o,w as r,s as D,i as v,B as M,P as R,F as q,Q as X,v as Ve,bZ as j,a6 as be,bs as J,_ as xe,av as we,R as L,ag as ke,E as Ae,ah as Ne,aa as Ce,J as Ee,ac as Te,a0 as Be,K as De,L as Ue,a1 as Pe,ak as Ie,aI as Me,U as Re}from"./index-17984968.js";/* empty css                   *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css               */import{i as Se,e as $e,j as z}from"./goods-e571a7e7.js";const Oe={class:"main-container"},qe={class:"detail-head"},je=p("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),Je={class:"ml-[1px]"},Le=p("span",{class:"adorn"},"|",-1),ze={class:"right"},Fe={class:"ml-[10px]"},Ge={class:"ml-[10px]"},Ke={key:0},Qe={key:1},Ze={key:2},He={key:1},We={class:"dialog-footer"},Xe={class:"dialog-footer"},bt=he({__name:"attr_edit",setup(Ye){const U=ge(),Y=ye(),ee=U.meta.title;U.query.attr_id=U.query.attr_id||0;const P=f(U.query.attr_id),i=B({}),te=f(30);let w=B({loading:!0,data:[]});const C=()=>{Se(P.value).then(d=>{Object.assign(i,d.data),i.attr_value_format?i.attr_value_format=JSON.parse(i.attr_value_format):i.attr_value_format=[],w.data=J(i.attr_value_format),w.data.sort((l,c)=>c.sort-l.sort),w.loading=!1})};C();const E=f(!1),k=f(!1),F=f(),h=B({attr_id:0,attr_name:"",sort:0}),ae=W(()=>({attr_name:[{required:!0,message:e("attrNamePlaceholder"),trigger:"blur"}]})),le=d=>{h.attr_id=i.attr_id,h.attr_name=i.attr_name,h.sort=i.sort,E.value=!0},oe=async d=>{k.value||!d||await d.validate(async l=>{l&&(k.value=!0,$e(h).then(c=>{k.value=!1,E.value=!1,C()}).catch(c=>{k.value=!1}))})},re=d=>{xe.confirm(e("goodsAttrDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{if(y.value)return;y.value=!0,i.attr_value_format.splice(d,1);let l={attr_id:P.value,attr_value_format:JSON.stringify(i.attr_value_format)};z(l).then(c=>{y.value=!1,C()}).catch(c=>{y.value=!1})})},A=f(!1),N=f(!1),G=f(),S=f(""),s=B({attr_value_id:0,attr_value_name:"",type:"radio",sort:0,child:[]}),ne=B([{label:"单选",value:"radio"},{label:"多选",value:"checkbox"},{label:"输入",value:"text"}]),K=()=>Math.floor(new Date().getSeconds())+Math.floor(new Date().getMilliseconds()),se=()=>{s.attr_value_id=i.attr_value_format.length+K(),s.attr_value_name="",s.type="radio",s.sort=0,s.child=[],A.value=!0,S.value=e("addShopGoodsAttr"),I.value=-1},ie=we((d,l)=>{if(isNaN(d)||!/^\d{0,10}$/.test(d)){L({type:"warning",message:`${e("sortTips")}`});return}for(let n=0;n<i.attr_value_format.length;n++)if(i.attr_value_format[n].attr_value_id==l.attr_value_id){i.attr_value_format[n].sort=d;break}let c={attr_id:P.value,attr_value_format:JSON.stringify(i.attr_value_format)};z(c).then(n=>{C()}).catch(n=>{})}),ue=()=>{s.child.push({id:s.child.length+K(),name:"",sort:0})},de=(d,l)=>{S.value=e("updateShopGoodsAttr"),I.value=d.attr_value_id,Object.assign(s,J(d)),A.value=!0},me=W(()=>({attr_value_name:[{required:!0,message:e("attrValueNamePlaceholder"),trigger:"blur"}]})),I=f(-1),y=f(!1),pe=async d=>{N.value||!d||await d.validate(async l=>{if(l){if(s.type!="text"){if(s.child.length==0){L({type:"warning",message:`${e("attrValueNamePlaceholder")}`});return}for(let n=0;n<s.child.length;n++)if(s.child[n].name==""){L({type:"warning",message:`${e("attrValueNamePlaceholder")}`});break}}if(y.value)return;if(y.value=!0,s.child.sort((n,$)=>$.sort-n.sort),N.value=!0,I.value==-1)i.attr_value_format.push(s);else for(let n=0;n<i.attr_value_format.length;n++)if(i.attr_value_format[n].attr_value_id==I.value){i.attr_value_format[n]=J(s);break}let c={attr_id:P.value,attr_value_format:JSON.stringify(i.attr_value_format)};z(c).then(n=>{N.value=!1,A.value=!1,y.value=!1,C()}).catch(n=>{N.value=!1,y.value=!1})}})},ce=(d,l)=>{s.child.splice(l,1)};return(d,l)=>{const c=ke,n=Ae,$=Ne,V=Ce,x=Ee,Q=Te,_e=Be,T=De,Z=Ue,H=Pe,fe=Ie,ve=Me,O=Re;return m(),g("div",Oe,[p("div",qe,[p("div",{class:"left",onClick:l[0]||(l[0]=a=>t(Y).push("/shop/goods/attr"))},[je,p("span",Je,u(t(e)("returnToPreviousPage")),1)]),Le,p("span",ze,u(t(ee)),1)]),o(_e,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[Object.keys(i).length?(m(),D($,{key:0,gutter:20,class:"text-[14px]"},{default:r(()=>[o(c,{span:8},{default:r(()=>[p("label",null,u(t(e)("attrName"))+"：",1),p("span",Fe,u(i.attr_name),1)]),_:1}),o(c,{span:6},{default:r(()=>[p("label",null,u(t(e)("sort"))+"：",1),p("span",Ge,u(i.sort),1)]),_:1}),o(c,{span:6},{default:r(()=>[o(n,{type:"primary",link:"",onClick:le},{default:r(()=>[v(u(t(e)("edit")),1)]),_:1})]),_:1})]),_:1})):M("",!0),o(n,{type:"primary",onClick:se,class:"my-[15px]"},{default:r(()=>[v(u(t(e)("addShopGoodsAttr")),1)]),_:1}),R((m(),D(Q,{data:t(w).data,size:"large"},{empty:r(()=>[p("span",null,u(t(w).loading?"":t(e)("emptyData")),1)]),default:r(()=>[o(V,{prop:"attr_value_name",label:t(e)("attrValueName"),"min-width":"200","show-overflow-tooltip":!0},null,8,["label"]),o(V,{prop:"type",label:t(e)("attrValueType"),"min-width":"100","show-overflow-tooltip":!0},{default:r(({row:a})=>[a.type=="radio"?(m(),g("span",Ke,u(t(e)("attrValueTypeRadio")),1)):a.type=="checkbox"?(m(),g("span",Qe,u(t(e)("attrValueTypeCheckbox")),1)):M("",!0),a.type=="text"?(m(),g("span",Ze,u(t(e)("attrValueTypeText")),1)):M("",!0)]),_:1},8,["label"]),o(V,{prop:"child",label:t(e)("attrValueChild"),"min-width":"320","show-overflow-tooltip":!0},{default:r(({row:a})=>[a.type!="text"?(m(!0),g(q,{key:0},X(a.child,(_,b)=>(m(),g("span",{class:Ve({"mr-[5px]":b+1!=a.child.length})},u(_.name),3))),256)):(m(),g("span",He,"-"))]),_:1},8,["label"]),o(V,{prop:"sort",label:t(e)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:a,$index:_})=>[o(x,{modelValue:a.sort,"onUpdate:modelValue":b=>a.sort=b,modelModifiers:{trim:!0},class:"w-[70px]",maxlength:"10",onInput:b=>t(ie)(b,a)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),o(V,{label:t(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:a,$index:_})=>[o(n,{type:"primary",link:"",onClick:b=>de(a,_)},{default:r(()=>[v(u(t(e)("edit")),1)]),_:2},1032,["onClick"]),o(n,{type:"primary",link:"",onClick:b=>re(_)},{default:r(()=>[v(u(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[O,t(w).loading]])]),_:1}),o(H,{modelValue:E.value,"onUpdate:modelValue":l[6]||(l[6]=a=>E.value=a),title:t(e)("updateShopGoodsAttr"),width:"500px","destroy-on-close":!0},{footer:r(()=>[p("span",We,[o(n,{onClick:l[4]||(l[4]=a=>E.value=!1)},{default:r(()=>[v(u(t(e)("cancel")),1)]),_:1}),o(n,{type:"primary",loading:k.value,onClick:l[5]||(l[5]=a=>oe(F.value))},{default:r(()=>[v(u(t(e)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[R((m(),D(Z,{model:h,"label-width":"120px",ref_key:"formRef",ref:F,rules:t(ae),class:"page-form"},{default:r(()=>[o(T,{label:t(e)("attrName"),prop:"attr_name"},{default:r(()=>[o(x,{modelValue:h.attr_name,"onUpdate:modelValue":l[1]||(l[1]=a=>h.attr_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("attrNamePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(T,{label:t(e)("sort")},{default:r(()=>[o(x,{modelValue:h.sort,"onUpdate:modelValue":l[2]||(l[2]=a=>h.sort=a),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:t(e)("sortPlaceholder"),class:"input-width",onKeyup:l[3]||(l[3]=a=>t(j)(a))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[O,k.value]])]),_:1},8,["modelValue","title"]),o(H,{modelValue:A.value,"onUpdate:modelValue":l[14]||(l[14]=a=>A.value=a),title:S.value,width:"700px","destroy-on-close":!0},{footer:r(()=>[p("span",Xe,[o(n,{onClick:l[12]||(l[12]=a=>A.value=!1)},{default:r(()=>[v(u(t(e)("cancel")),1)]),_:1}),o(n,{type:"primary",loading:N.value,onClick:l[13]||(l[13]=a=>pe(G.value))},{default:r(()=>[v(u(t(e)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[R((m(),D(Z,{model:s,"label-width":"120px",ref_key:"formAttrValueRef",ref:G,rules:t(me),class:"page-form"},{default:r(()=>[o(T,{label:t(e)("attrValueName"),prop:"attr_value_name"},{default:r(()=>[o(x,{modelValue:s.attr_value_name,"onUpdate:modelValue":l[7]||(l[7]=a=>s.attr_value_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("attrValueNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(T,{label:t(e)("attrValueType")},{default:r(()=>[o(ve,{modelValue:s.type,"onUpdate:modelValue":l[8]||(l[8]=a=>s.type=a),class:"!w-[150px]",disabled:d.actionAttrValueIndex>-1},{default:r(()=>[(m(!0),g(q,null,X(ne,a=>(m(),D(fe,{label:a.label,value:a.value},null,8,["label","value"]))),256))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),o(T,{label:t(e)("sort")},{default:r(()=>[o(x,{modelValue:s.sort,"onUpdate:modelValue":l[9]||(l[9]=a=>s.sort=a),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:t(e)("sortPlaceholder"),class:"!w-[150px]",onKeyup:l[10]||(l[10]=a=>t(j)(a))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s.type!="text"?(m(),g(q,{key:0},[o(Q,{data:s.child,size:"large"},{empty:r(()=>[p("span",null,u(s.child.length==0?t(e)("emptyData"):""),1)]),default:r(()=>[o(V,{prop:"name",label:t(e)("attrValueName"),"min-width":"200"},{default:r(({row:a})=>[o(x,{modelValue:a.name,"onUpdate:modelValue":_=>a.name=_,modelModifiers:{trim:!0},class:"input-width",maxlength:"20",placeholder:t(e)("attrValueNamePlaceholder"),clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(V,{prop:"name",label:t(e)("sort"),"min-width":"120"},{default:r(({row:a})=>[o(x,{modelValue:a.sort,"onUpdate:modelValue":_=>a.sort=_,modelModifiers:{trim:!0},class:"!w-[150px]",maxlength:"6",placeholder:t(e)("sortPlaceholder"),clearable:"","show-word-limit":"",onKeyup:l[11]||(l[11]=_=>t(j)(_))},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(V,{label:t(e)("operation"),fixed:"right",align:"right","min-width":"60"},{default:r(({row:a,$index:_})=>[o(n,{type:"primary",link:"",onClick:b=>ce(a,_)},{default:r(()=>[v(u(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),R(o(n,{type:"primary",plain:"",onClick:ue,class:"my-[10px]"},{default:r(()=>[v(u(t(e)("addAttrValue")),1)]),_:1},512),[[be,s.child.length<te.value]])],64)):M("",!0)]),_:1},8,["model","rules"])),[[O,N.value]])]),_:1},8,["modelValue","title"])])}}});export{bt as default};