import{d as e,r as a,p as t,J as l,o as s,c as r,w as o,u as i,O as n,b as p,y as u,z as d,P as g,f as x,n as m,Y as c,i as _,D as b,g as f,h as y,F as h}from"./index-2882a2d8.js";import{_ as v}from"./u-parse.40683feb.js";import{_ as j}from"./u-loading-page.8280c7ab.js";import{c as S}from"./article.fc8fb11d.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-transition.4448d2e5.js";const w=e({__name:"detail",setup(e){const{setShare:w,onShareAppMessage:T,onShareTimeline:z}=c();T(),z();let k=a([]),A=a(!0),C={h2:"margin-bottom: 15px;",p:"margin-bottom: 10px;line-height: 1.5;",img:"margin: 10px 0;vertical-align: top;"};return t((e=>{A.value=!0,S(e.id).then((e=>{k.value=e.data,A.value=!1;let a={title:k.value.title,desc:k.value.intro,url:k.value.image};l({title:k.value.title}),w({wechat:{...a},weapp:{...a}})}))})),(e,a)=>{const t=_,l=b,c=f(y("u-parse"),v),S=f(y("u-loading-page"),j);return s(),r(t,{class:"bg-white",style:m(e.themeColor())},{default:o((()=>[i(A)?x("v-if",!0):(s(),n(g,{key:0},[p(t,{class:"border-solid border-t-0 border-l-0 border-r-0 border-b-[1px] border-gray-200 p-[10px]"},{default:o((()=>[p(t,{class:"text-[16px]"},{default:o((()=>[u(d(i(k).title),1)])),_:1}),p(t,{class:"flex align-center justify-between text-[12px] text-gray-400 mt-[15px]"},{default:o((()=>[p(l,null,{default:o((()=>[u(d(i(k).create_time),1)])),_:1})])),_:1})])),_:1}),p(t,{class:"mx-[10px] my-[10px] bg-gray-100 p-[8px] text-[14px] rounded-[5px] leading-[1.3]"},{default:o((()=>[u(d(i(h)("abstract"))+"："+d(i(k).summary),1)])),_:1}),p(t,{class:"px-[10px] pd-[10px]"},{default:o((()=>[p(c,{content:i(k).content,tagStyle:i(C)},null,8,["content","tagStyle"])])),_:1})],64)),p(S,{"bg-color":"rgb(248,248,248)",loading:i(A),fontSize:"16",color:"#333",loadingText:i(h)("loadingText")},null,8,["loading","loadingText"])])),_:1},8,["style"])}}});export{w as default};
