import{d as e,r as s,p as a,o as l,c as t,w as r,P as d,a7 as u,Q as c,n as m,f as _,i as f,b as o,u as n,E as x,y as b,z as i,B as p}from"./index-7bf68536.js";import{p as v}from"./vipcard.fb0aea23.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const y=h(e({__name:"card_record",setup(e){const h=s(null),y=s(!0);let g=0;return a((e=>{(null==e?void 0:e.card_id)&&(g=e.card_id),v(g).then((({data:e})=>{h.value=e,y.value=!0})).catch((()=>{y.value=!0}))})),(e,s)=>{const a=p,v=f;return h.value?(l(),t(v,{key:0,class:"bg-[#F6F8FA] min-h-screen pt-3",style:m(e.themeColor())},{default:r((()=>[(l(!0),d(c,null,u(h.value.member_card_item,((e,s)=>(l(),t(v,{class:"p-3 bg-[#fff] mx-3 mb-3 rounded-md",key:s},{default:r((()=>[o(v,{class:"flex border-[#F4F4F4] border-solid border-0 border-b-1 pb-3 mb-3"},{default:r((()=>[o(a,{src:n(x)(e.cover_thumb_small),class:"w-[160rpx] h-[160rpx] mr-4",mode:"aspectFill"},null,8,["src"]),o(v,{class:"flex-1"},{default:r((()=>[o(v,{class:"font-bold text-sm"},{default:r((()=>[b(i(e.goods_name),1)])),_:2},1024),o(v,{class:"text-sm"},{default:r((()=>[b(" 共 "+i(e.num)+"次 ",1)])),_:2},1024),o(v,{class:"text-sm"},{default:r((()=>[b(" 还剩 "+i(e.num-e.use_num)+"次 ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(v,{class:"px-3 bg-page recard-list"},{default:r((()=>[(l(!0),d(c,null,u(e.member_card_verify,((e,s)=>(l(),t(v,{class:"py-2 border-[#eee] border-solid border-0 border-b-1"},{default:r((()=>[o(v,{class:"flex mb-2"},{default:r((()=>[o(v,{class:"text-sm"},{default:r((()=>[b("使用时间")])),_:1}),o(v,{class:"flex-1 text-right text-sm"},{default:r((()=>[b(i(e.create_time),1)])),_:2},1024)])),_:2},1024),o(v,{class:"flex"},{default:r((()=>[o(v,{class:"text-sm"},{default:r((()=>[b("使用次数")])),_:1}),o(v,{class:"flex-1 text-right text-sm"},{default:r((()=>[b(i(e.num)+"次",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),e.member_card_verify.length?_("v-if",!0):(l(),t(v,{key:0,class:"py-2 text-xs"},{default:r((()=>[b("还没有过使用记录")])),_:1}))])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["style"])):_("v-if",!0)}}}),[["__scopeId","data-v-1c56fd70"]]);export{y as default};
