import{d as ie,x as ne,r as c,n as N,l as se,q as i,h as p,c as v,a as g,t as _,u as n,e as o,w as t,b_ as I,i as u,F as L,T as R,s as h,C as re,R as de,a$ as me,a3 as ue,K as pe,L as ge,at as ce,au as _e,ab as be,aC as fe,ak as ve,E as he,M as Ve,a7 as xe,ac as we,ad as ye,W as ke,X as Pe,Y as Ce,p as Ee,g as Te}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       *//* empty css                 */import Le from"./index-92c2e799.js";import"./el-form-item-4ed993c7.js";import{b as Ue,c as Fe,d as Ie,f as Re,h as je}from"./technician-87774a10.js";import{k as qe}from"./goods-6afc29a0.js";import{_ as De}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./sortable.esm-be94e56d.js";const G=k=>(Ee("data-v-722b17f3"),k=k(),Te(),k),Me={class:"main-container"},ze={class:"detail-head"},Be=G(()=>g("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),Se={class:"ml-[1px]"},$e=G(()=>g("span",{class:"adorn"},"|",-1)),Ke={key:0,class:"right"},Ne={key:1,class:"right"},Ge={class:"!w-[200px] border-[1px] border-[#e4e4e4] border-solid px-[11px] h-[30px]"},Oe={class:"fixed-footer-wrap"},We={class:"fixed-footer"},Xe={class:"mt-[16px] flex justify-end"},Ye=ie({__name:"edit",setup(k){const O=ne(),V=parseInt(O.query.id),P=c(!1),j={id:V??"",name:"",headimg:"",age:"",sex:1,mobile:"",working_age:"",status:"1",position_id:"",position_name:"",label:[],goods_ids:[],member_nickname:"",member_id:"",images:"",desc:""},a=N({...j}),U=c(!1),x=c(""),q=c(),W=r=>{a.label.splice(a.label.indexOf(r),1)},X=()=>{U.value=!0,me(()=>{q.value.input.focus()})},D=()=>{x.value&&a.label.push(x.value),U.value=!1,x.value=""};V&&(async(r=0)=>{Object.assign(a,j);const e=await(await Ue(r)).data;Object.keys(a).forEach(s=>{e[s]!=null&&(a[s]=e[s]),e[s]!=null&&s=="label"&&(e[s]!=""?a[s]=e[s].split(","):a[s]=[])}),a.member_nickname=e.member.nickname,e.goods.length&&(a.goods_ids=e.goods.map(s=>s.goods_id))})(V);const C=c([]);(()=>{Fe().then(r=>{C.value=r.data})})();const M=c([]);(()=>{qe().then(r=>{M.value=r.data})})();const d=N({page:1,limit:10,total:0,loading:!1,data:[]}),F=(r=1)=>{d.loading=!0,d.page=r,Ie({page:d.page,limit:d.limit}).then(e=>{d.loading=!1,d.total=e.data.total,d.data=e.data.data})};F();const E=c(!1),Y=r=>{a.member_id=r.member_id,a.member_nickname=r.nickname,E.value=!1},z=c(),A=(r,e,s)=>{const m=/^1[3456789]\d{9}$/;return e?m.test(e)?s():s(new Error("联系电话格式不正确")):s(new Error("请输入联系电话"))},H=se(()=>({name:[{required:!0,message:i("technicianNamePlaceholder"),trigger:"blur"}],headimg:[{required:!0,message:i("headimgPlaceholder"),trigger:"change"}],age:[{required:!0,message:i("agePlaceholder"),trigger:"blur"}],position_name:[{required:!0,message:i("positionPlaceholder"),trigger:"change"}],working_age:[{required:!0,message:i("seniorityPlaceholder"),trigger:"blur"}],mobile:[{required:!0,validator:A,trigger:"blur"}],goods_ids:[{required:!0,message:i("projectPlaceholder"),trigger:"change"}],member_id:[{required:!0,message:i("memberPlaceholder"),trigger:"blur"}]})),J=async r=>{P.value||!r||await r.validate(async e=>{if(e){P.value=!0,C.value.length>0&&C.value.forEach(w=>{(w.id=a.position_id)&&(a.position_name=w.name)});const s=ue(a);s.label=s.label.join(","),s.goods_ids=s.goods_ids.toString(),(V?Re:je)(s).then(w=>{P.value=!1,history.back()}).catch(()=>{P.value=!1})}})},B=()=>{history.back()};return(r,e)=>{const s=pe,m=ge,w=Le,b=ce,S=_e,$=be,K=fe,Q=ve,y=he,Z=Ve,ee=xe,T=we,le=ye,ae=ke,oe=Pe,te=Ce;return p(),v(L,null,[g("div",Me,[g("div",ze,[g("div",{class:"left",onClick:e[0]||(e[0]=l=>B())},[Be,g("span",Se,_(n(i)("returnToPreviousPage")),1)]),$e,n(V)?(p(),v("span",Ke,_(n(i)("editTechnician")),1)):(p(),v("span",Ne,_(n(i)("addTechnician")),1))]),o(ee,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[o(Z,{model:a,"label-width":"90px",ref_key:"formRef",ref:z,rules:n(H),class:"page-form"},{default:t(()=>[o(m,{label:n(i)("technicianName"),prop:"name"},{default:t(()=>[o(s,{modelValue:a.name,"onUpdate:modelValue":e[1]||(e[1]=l=>a.name=l),modelModifiers:{trim:!0},clearable:"",placeholder:n(i)("technicianNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("headimg"),prop:"headimg"},{default:t(()=>[o(w,{modelValue:a.headimg,"onUpdate:modelValue":e[2]||(e[2]=l=>a.headimg=l)},null,8,["modelValue"])]),_:1},8,["label"]),o(m,{label:n(i)("age"),prop:"age"},{default:t(()=>[o(s,{modelValue:a.age,"onUpdate:modelValue":e[3]||(e[3]=l=>a.age=l),modelModifiers:{trim:!0},placeholder:n(i)("agePlaceholder"),onKeyup:e[4]||(e[4]=l=>n(I)(l)),class:"input-width",onBlur:e[5]||(e[5]=l=>a.age=l.target.value),maxlength:"8"},{append:t(()=>[u("岁")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("sex")},{default:t(()=>[o(S,{modelValue:a.sex,"onUpdate:modelValue":e[6]||(e[6]=l=>a.sex=l)},{default:t(()=>[o(b,{label:1},{default:t(()=>[u("男")]),_:1}),o(b,{label:2},{default:t(()=>[u("女")]),_:1}),o(b,{label:0},{default:t(()=>[u("保密")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(m,{label:n(i)("mobile"),prop:"mobile"},{default:t(()=>[o(s,{modelValue:a.mobile,"onUpdate:modelValue":e[7]||(e[7]=l=>a.mobile=l),modelModifiers:{trim:!0},clearable:"",placeholder:n(i)("mobilePlaceholder"),onKeyup:e[8]||(e[8]=l=>n(I)(l)),class:"input-width",onBlur:e[9]||(e[9]=l=>a.mobile=l.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("seniority"),prop:"working_age"},{default:t(()=>[o(s,{modelValue:a.working_age,"onUpdate:modelValue":e[10]||(e[10]=l=>a.working_age=l),modelModifiers:{trim:!0},placeholder:n(i)("seniorityPlaceholder"),onKeyup:e[11]||(e[11]=l=>n(I)(l)),class:"input-width",onBlur:e[12]||(e[12]=l=>a.working_age=l.target.value)},{append:t(()=>[u("年")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("status")},{default:t(()=>[o(S,{modelValue:a.status,"onUpdate:modelValue":e[13]||(e[13]=l=>a.status=l)},{default:t(()=>[o(b,{label:"1"},{default:t(()=>[u("在职")]),_:1}),o(b,{label:"-1"},{default:t(()=>[u("离职")]),_:1}),o(b,{label:"0"},{default:t(()=>[u("休息中")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(m,{label:n(i)("position"),prop:"position"},{default:t(()=>[o(K,{modelValue:a.position_id,"onUpdate:modelValue":e[14]||(e[14]=l=>a.position_id=l),"value-key":"id",placeholder:n(i)("positionPlaceholder"),class:"input-width"},{default:t(()=>[(p(!0),v(L,null,R(C.value,(l,f)=>(p(),h($,{key:f,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("label")},{default:t(()=>[g("div",null,[(p(!0),v(L,null,R(a.label,(l,f)=>(p(),h(Q,{key:f,class:"mx-1",closable:"","disable-transitions":!1,onClose:Qe=>W(l)},{default:t(()=>[u(_(l),1)]),_:2},1032,["onClose"]))),128)),U.value?(p(),h(s,{key:0,ref_key:"InputRef",ref:q,modelValue:x.value,"onUpdate:modelValue":e[15]||(e[15]=l=>x.value=l),modelModifiers:{trim:!0},class:"ml-1 !w-20",size:"small",onKeyup:re(D,["enter"]),onBlur:D},null,8,["modelValue","onKeyup"])):(p(),h(y,{key:1,class:"button-new-tag ml-1",size:"small",onClick:X},{default:t(()=>[u(" 新增标签 ")]),_:1}))])]),_:1},8,["label"]),o(m,{label:n(i)("project"),prop:"goods_ids"},{default:t(()=>[o(K,{modelValue:a.goods_ids,"onUpdate:modelValue":e[16]||(e[16]=l=>a.goods_ids=l),multiple:"",placeholder:n(i)("projectPlaceholder"),class:"input-width"},{default:t(()=>[(p(!0),v(L,null,R(M.value,(l,f)=>(p(),h($,{label:l.goods_name,value:l.goods_id,key:f},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:n(i)("member"),prop:"member_id"},{default:t(()=>[g("div",Ge,_(a.member_nickname),1),o(y,{class:"ml-[10px]",type:"primary",onClick:e[17]||(e[17]=l=>E.value=!0)},{default:t(()=>[u("选择会员")]),_:1})]),_:1},8,["label"]),o(m,{label:n(i)("desc"),prop:"desc"},{default:t(()=>[o(s,{modelValue:a.desc,"onUpdate:modelValue":e[18]||(e[18]=l=>a.desc=l),modelModifiers:{trim:!0},autosize:{minRows:2,maxRows:4},type:"textarea",clearable:"",placeholder:n(i)("labelPlaceholder"),class:"input-width",maxlength:"200"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),g("div",Oe,[g("div",We,[o(y,{type:"primary",onClick:e[19]||(e[19]=l=>J(z.value))},{default:t(()=>[u(_(n(i)("save")),1)]),_:1}),o(y,{onClick:e[20]||(e[20]=l=>B())},{default:t(()=>[u(_(n(i)("cancel")),1)]),_:1})])])]),o(oe,{modelValue:E.value,"onUpdate:modelValue":e[23]||(e[23]=l=>E.value=l),title:"请选择会员",width:"600px"},{default:t(()=>[de((p(),h(le,{data:d.data,class:"member-table"},{empty:t(()=>[g("span",null,_(d.loading?"":n(i)("emptyData")),1)]),default:t(()=>[o(T,{prop:"nickname",label:"昵称",width:"180"}),o(T,{prop:"username",label:"用户名"}),o(T,{prop:"mobile",label:"手机号",width:"180"}),o(T,{label:n(i)("operation"),fixed:"right","min-width":"50",align:"right"},{default:t(({row:l})=>[o(y,{type:"primary",link:"",onClick:f=>Y(l)},{default:t(()=>[u("确定")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[te,d.loading]]),g("div",Xe,[o(ae,{"current-page":d.page,"onUpdate:current-page":e[21]||(e[21]=l=>d.page=l),"page-size":d.limit,"onUpdate:page-size":e[22]||(e[22]=l=>d.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:d.total,onSizeChange:F,onCurrentChange:F},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue"])],64)}}});const zl=De(Ye,[["__scopeId","data-v-722b17f3"]]);export{zl as default};