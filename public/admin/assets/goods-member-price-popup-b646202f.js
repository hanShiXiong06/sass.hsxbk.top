import{d as te,r as b,n as T,h as _,c as k,e as s,w as o,a as y,i as v,t as u,u as t,q as n,B as S,s as g,R as X,F as z,T as G,c8 as Y,aI as Q,U as M,at as se,au as ne,L as ie,ac as de,ad as re,av as ue,E as ce,K as _e,M as me,X as pe,Y as fe}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{z as ve,A as be}from"./goods-014ca322.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";const xe={key:0,class:"text-[12px] text-[#999] leading-[20px]"},he={key:1,class:"text-[12px] text-[#999] leading-[20px]"},ke={class:"mb-[10px] flex items-center"},ye={class:"dialog-footer"},Ve={class:"dialog-footer"},Ee=te({__name:"goods-member-price-popup",emits:["load"],setup($e,{expose:W,emit:Z}){const N=b(),f=T({member_discount:""}),P=T({}),x=b(!1),V=b(""),i=T({loading:!0,data:[],member_level:[]}),I=()=>{i.loading=!0,be({goods_id:P.goods_id}).then(r=>{i.loading=!1,i.data=r.data,i.data.forEach((e,l,c)=>{e.sku_name||(c[l].sku_name=P.goods_name),i.member_level.forEach((d,m)=>{if(!e.member_price)c[l][`level_${d.level_id}`]=parseFloat(e.price).toFixed(2);else if(e.member_price){const p=JSON.parse(e.member_price);p[`level_${d.level_id}`]?c[l][`level_${d.level_id}`]=parseFloat(p[`level_${d.level_id}`]).toFixed(2):c[l][`level_${d.level_id}`]=parseFloat(e.price).toFixed(2)}})})}).catch(()=>{i.loading=!1})},w=b([]),A=(r,e)=>{Object.assign(P,r),i.member_level=[],Object.assign(i.member_level,e),f.member_discount=r.member_discount,w.value=Q(e),w.value.forEach((l,c,d)=>{!l.level_benefits||l.level_benefits==null?d[c].level_benefits={discount:{discount:"原价"}}:l.level_benefits&&l.level_benefits!=null&&!l.level_benefits.discount?d[c].level_benefits.discount={discount:"原价"}:l.level_benefits&&l.level_benefits!=null&&l.level_benefits.discount&&!l.level_benefits.discount.discount?d[c].level_benefits.discount.discount="原价":d[c].level_benefits.discount.discount+="折"}),I(),x.value=!0},F=b(),D=b(!1),ee=r=>{D.value=!1,N.value.toggleAllSelection()},h=b([]),R=r=>{h.value=Q(r),F.value=!1,h.value.length>0&&h.value.length<i.data.length?D.value=!0:D.value=!1,h.value.length==i.data.length&&(F.value=!0)},j=b(""),le=r=>{if(!h.value.length)return M({message:"请选择要操作的商品",type:"warning"}),!1;j.value=r,E.value=!0},E=b(!1),oe=()=>{if(!V.value)return M.error("请输入会员价"),!1;const r=h.value.map(e=>e.sku_id);i.data.forEach((e,l,c)=>{r.indexOf(e.sku_id)>-1&&(c[l][`level_${j.value}`]=parseFloat(V.value).toFixed(2))}),V.value="",E.value=!1};let U=!1;const ae=()=>{const r=[];let e=!0;if(f.member_discount=="fixed_price"&&(i.data.forEach((l,c,d)=>{const m={};m.sku_id=l.sku_id,m.member_price={},i.member_level.forEach((p,O)=>{e&&(m.member_price[`level_${p.level_id}`]=l[`level_${p.level_id}`],parseFloat(l[`level_${p.level_id}`])<=0&&(e=!1,M.error(`[${l.sku_name}][${p.level_name}]的指定价格不能小于等于零`)),parseFloat(l[`level_${p.level_id}`])>parseFloat(l.price)&&(e=!1,M.error(`[${l.sku_name}][${p.level_name}]的指定价格不能大于商品原价`)))}),r.push(m)}),!e)||U)return!1;U=!0,ve({goods_id:P.goods_id,member_discount:f.member_discount,sku_list:r}).then(l=>{U=!1,Z("load"),x.value=!1})};return W({showDialog:x,show:A}),(r,e)=>{const l=se,c=ne,d=ie,m=de,p=re,O=ue,$=ce,K=_e,H=me,q=pe,J=fe;return _(),k("div",null,[s(q,{modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=a=>x.value=a),title:t(n)("editMemberPricePopupTitle"),width:"1100px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:o(()=>[y("span",Ve,[s($,{onClick:e[7]||(e[7]=a=>x.value=!1)},{default:o(()=>[v(u(t(n)("cancel")),1)]),_:1}),s($,{type:"primary",onClick:ae},{default:o(()=>[v(u(t(n)("confirm")),1)]),_:1})])]),default:o(()=>[s(H,{model:f,"label-width":"120px",class:"page-form"},{default:o(()=>[s(d,{label:t(n)("memberDiscount")},{default:o(()=>[y("div",null,[s(c,{modelValue:f.member_discount,"onUpdate:modelValue":e[0]||(e[0]=a=>f.member_discount=a)},{default:o(()=>[s(l,{label:""},{default:o(()=>[v(u(t(n)("nonparticipation")),1)]),_:1}),s(l,{label:"discount"},{default:o(()=>[v(u(t(n)("discount")),1)]),_:1}),s(l,{label:"fixed_price"},{default:o(()=>[v(u(t(n)("fixedPrice")),1)]),_:1})]),_:1},8,["modelValue"]),f.member_discount=="discount"?(_(),k("div",xe,u(t(n)("discountHint")),1)):S("",!0),f.member_discount=="fixed_price"?(_(),k("div",he,u(t(n)("fixedPriceHint")),1)):S("",!0)])]),_:1},8,["label"]),f.member_discount=="discount"&&w.value.length?(_(),g(d,{key:0},{default:o(()=>[X((_(),g(p,{data:[{}],size:"large","max-height":"450",onSelectionChange:R},{empty:o(()=>[y("span",null,u(i.loading?"":t(n)("emptyData")),1)]),default:o(()=>[s(m,{fixed:"",prop:"sku_name",label:t(n)("memberLevel"),width:"150"},{default:o(()=>[v(u(t(n)("memberEnjoyDiscount")),1)]),_:1},8,["label"]),(_(!0),k(z,null,G(w.value,(a,C)=>(_(),g(m,{key:C,label:a.level_name},{default:o(({row:L})=>[v(u(a.level_benefits.discount.discount),1)]),_:2},1032,["label"]))),128))]),_:1})),[[J,i.loading]])]),_:1})):S("",!0),f.member_discount=="fixed_price"?(_(),g(d,{key:1},{default:o(()=>[y("div",ke,[s(O,{modelValue:F.value,"onUpdate:modelValue":e[1]||(e[1]=a=>F.value=a),onChange:ee,size:"large",class:"px-[14px]",indeterminate:D.value},null,8,["modelValue","indeterminate"]),(_(!0),k(z,null,G(i.member_level,(a,C)=>(_(),g($,{key:C,size:"small",onClick:L=>le(a.level_id)},{default:o(()=>[v(u(a.level_name),1)]),_:2},1032,["onClick"]))),128))]),X((_(),g(p,{data:i.data,size:"large","max-height":"450",onSelectionChange:R,ref_key:"goodsListTableRef",ref:N},{empty:o(()=>[y("span",null,u(i.loading?"":t(n)("emptyData")),1)]),default:o(()=>[s(m,{type:"selection",width:"55"}),s(m,{fixed:"",prop:"sku_name",label:t(n)("goodsSku"),width:"150"},null,8,["label"]),s(m,{fixed:"",prop:"price",label:t(n)("skuPrice"),width:"120"},null,8,["label"]),(_(!0),k(z,null,G(i.member_level,(a,C)=>(_(),g(m,{key:C,label:a.level_name,width:"190"},{default:o(({row:L})=>[s(K,{modelValue:L[`level_${a.level_id}`],"onUpdate:modelValue":B=>L[`level_${a.level_id}`]=B,modelModifiers:{trim:!0},maxlength:"8",clearable:"",class:"w-full",onKeyup:e[2]||(e[2]=B=>t(Y)(B))},{append:o(()=>[v(u(t(n)("yuanUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]))),128))]),_:1},8,["data"])),[[J,i.loading]])]),_:1})):S("",!0)]),_:1},8,["model"]),s(q,{modelValue:E.value,"onUpdate:modelValue":e[6]||(e[6]=a=>E.value=a),title:t(n)("editMemberPrice"),width:"400px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:o(()=>[y("span",ye,[s($,{onClick:e[5]||(e[5]=a=>E.value=!1)},{default:o(()=>[v(u(t(n)("cancel")),1)]),_:1}),s($,{type:"primary",onClick:oe},{default:o(()=>[v(u(t(n)("confirm")),1)]),_:1})])]),default:o(()=>[s(H,{model:f,"label-width":"80px",class:"page-form"},{default:o(()=>[s(d,{label:t(n)("memberPrice"),prop:"member_price"},{default:o(()=>[s(K,{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=a=>V.value=a),modelModifiers:{trim:!0},placeholder:t(n)("memberPricePlaceholder"),maxlength:"8",clearable:"",onKeyup:e[4]||(e[4]=a=>t(Y)(a))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])]),_:1},8,["modelValue","title"])])}}});const qe=ge(Ee,[["__scopeId","data-v-7385836c"]]);export{qe as default};
