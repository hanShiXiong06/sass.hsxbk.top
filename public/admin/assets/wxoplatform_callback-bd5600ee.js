import{d as v,r as u,R as g,c as s,F as l,e as c,i as n,t as y,w as m,B as _,a as p,x as k,E as C,Y as w,h as a}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  */import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import{g as z,a as F}from"./wxoplatform-eba9a07b.js";const N={class:"flex w-screen h-screen flex-col items-center justify-center"},R=p("h3",{class:"text-xl mt-[20px]"},"授权绑定成功",-1),V=p("h3",{class:"text-xl mt-[20px]"},"抱歉，授权绑定失败",-1),b={key:2,class:"text-secondary mt-[5px]"},T=v({__name:"wxoplatform_callback",setup(E){const d=k(),o=u(!0),e=u({result:"fail",msg:""});z(d.query).then(({data:t})=>{e.value.result="success",o.value=!1}).catch(t=>{e.value.msg=t.toString(),o.value=!1});const h=()=>{F().then(({data:t})=>{location.href=t})},f=()=>{window.close()};return(t,A)=>{const r=B,i=C,x=w;return g((a(),s("div",N,[o.value?_("",!0):(a(),s(l,{key:0},[e.value.result=="success"?(a(),s(l,{key:0},[c(r,{name:"element CircleCheckFilled",size:"50px",color:"#0eb118"}),R],64)):(a(),s(l,{key:1},[c(r,{name:"element CircleCloseFilled",size:"50px",color:"#e70000"}),V],64)),e.value.result=="fail"?(a(),s("p",b,[n(y(e.value.msg)+" ",1),c(i,{type:"primary",link:"",onClick:h},{default:m(()=>[n("重新授权")]),_:1})])):_("",!0),c(i,{type:"primary",class:"mt-[20px] w-[150px]",onClick:f},{default:m(()=>[n("确认")]),_:1})],64))])),[[x,o.value]])}}});export{T as default};
