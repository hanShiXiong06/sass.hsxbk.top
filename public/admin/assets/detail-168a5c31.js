import{d as k,x,f as D,r as u,h as c,c as N,R,s as p,w as t,a,t as l,u as s,q as o,e as i,B,L as C,a6 as F,M as I,Y as M}from"./index-f7a01263.js";/* empty css                   *//* empty css                     *//* empty css                */import{g as E}from"./recharge-b7dc92dd.js";const T={class:"main-container"},V={class:"panel-title"},q={class:"input-width"},L={class:"input-width"},S={class:"input-width"},$={class:"input-width"},O={class:"input-width"},Y={class:"input-width"},j={class:"input-width"},z={class:"input-width"},A={class:"input-width"},G={class:"input-width"},H={class:"input-width"},J={class:"input-width"},ae=k({__name:"detail",setup(K){const f=x(),v=D(),m=parseInt(f.query.order_id),n=u(!0),e=u(null);m?(async(d=0)=>{n.value=!0,e.value=null,await E(d).then(({data:_})=>{e.value=_}).catch(()=>{}),n.value=!1})(m):n.value=!1;const b=u(),h=d=>{v.push(`/member/detail?id=${d}`)};return(d,_)=>{const r=C,w=F,y=I,g=M;return c(),N("div",T,[R((c(),p(y,{model:e.value,"label-width":"150px",ref_key:"formRef",ref:b,class:"page-form"},{default:t(()=>[e.value?(c(),p(w,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[a("h3",V,l(s(o)("orderInfo")),1),i(r,{label:s(o)("orderNo")},{default:t(()=>[a("div",q,l(e.value.order_no),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderMoney")},{default:t(()=>[a("div",L,l(e.value.order_money),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderDiscountMoney")},{default:t(()=>[a("div",S,l(e.value.order_discount_money),1)]),_:1},8,["label"]),i(r,{label:s(o)("member")},{default:t(()=>[a("div",$,[a("div",{class:"flex flex flex-col cursor-pointer",onClick:_[0]||(_[0]=Q=>h(e.value.member_id))},[a("span",null,l(e.value.member.nickname||""),1),a("span",null,l(e.value.member.mobile||""),1)])])]),_:1},8,["label"]),i(r,{label:s(o)("ip")},{default:t(()=>[a("div",O,l(e.value.ip),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderFromName")},{default:t(()=>[a("div",Y,l(e.value.order_from_name),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderStatus")},{default:t(()=>[a("div",j,l(e.value.order_status_info.name),1)]),_:1},8,["label"]),i(r,{label:s(o)("payTypeName")},{default:t(()=>[a("div",z,l(e.value.pay_type_name),1)]),_:1},8,["label"]),i(r,{label:s(o)("createTime")},{default:t(()=>[a("div",A,l(e.value.create_time||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("payTime")},{default:t(()=>[a("div",G,l(e.value.pay_time||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("remark")},{default:t(()=>[a("div",H,l(e.value.remark||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("memberMessage")},{default:t(()=>[a("div",J,l(e.value.member_message||""),1)]),_:1},8,["label"])]),_:1})):B("",!0)]),_:1},8,["model"])),[[g,n.value]])])}}});export{ae as default};
