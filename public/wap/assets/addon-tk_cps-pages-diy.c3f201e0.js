import{d as a,r as e,a_ as o,p as t,m as l,j as r,a9 as s,a$ as i,s as p,b0 as g,b1 as u,a6 as n,o as m,c as d,w as j,b as c,e as b,v,f,u as h,n as _,U as y,g as S,h as x,i as C,V as k}from"./index-905183d4.js";import{_ as B}from"./u-loading-page.7aa0a449.js";import{d as w,f as $}from"./index.87fd7657.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";import"./u-icon.86a2aad0.js";import"./u-popup.e3f6594b.js";import"./u-safe-bottom.e94b03c1.js";import"./u-avatar.c19cb462.js";import"./u-text.86301043.js";import"./u-parse.b0851c53.js";import"./tabbar.f4383367.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./coupon.a8cf1167.js";import"./u--image.b5d65e0e.js";import"./u-image.44c969ef.js";import"./goods.2e1a20de.js";import"./point.d005bfc9.js";import"./article.f9f175f7.js";import"./goods.49c2730c.js";import"./u--input.f049e512.js";import"./u-input.07f64251.js";import"./technician.9275e072.js";import"./fenxiao.dacba751.js";import"./share-poster.cfed5f32.js";import"./tourism.31e9949d.js";import"./tkjhkd.782633fc.js";import"./u-line.9e44f7cf.js";import"./u-row.5e746937.js";import"./goto.721ffbf7.js";import"./u-tag.da740c15.js";import"./u-line-progress.374f35c8.js";import"./mescroll-uni.3ba4fad9.js";import"./mescroll-body.b8d008ed.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";import"./useMescroll.26ccf5de.js";import"./mescroll-empty.f9bce990.js";/* empty css                                                                       */import"./bwc.52cb1d07.js";import"./common.743280f8.js";import"./top-tabbar.634b3261.js";import"./manifest.78a5c925.js";import"./isArrayLike.512b2e7f.js";const E=D(a({__name:"diy",setup(a){const{setShare:D,onShareAppMessage:E,onShareTimeline:M}=y();E(),M();const A=e(!0),T=o(),I=e(0);let R=e(!1);const G=t({pageMode:"diy",title:"",global:{},value:[]}),H=l((()=>"decorate"==T.mode?T:G)),J=e(0),U=e("DIY_TK_CPS_DIY"),z=e("");r((a=>{T.mode=a.mode||"","decorate"==T.mode&&(A.value=!1),J.value=a.id||"",z.value=a.template||""})),s((()=>{"decorate"==T.mode?T.init():i({id:J.value,name:U.value,template:z.value}).then((a=>{if(a.data.value){let e=a.data;G.pageMode=e.mode,G.title=e.title;let o=JSON.parse(e.value);G.global=o.global,G.value=o.value,G.value.forEach(((a,e)=>{a.pageStyle="",a.pageStartBgColor&&(a.pageStartBgColor&&a.pageEndBgColor?a.pageStyle+=`background:linear-gradient(${a.pageGradientAngle},${a.pageStartBgColor},${a.pageEndBgColor});`:a.pageStyle+="background-color:"+a.pageStartBgColor+";"),a.margin&&(a.pageStyle+="padding-top:"+2*a.margin.top+"rpx;",a.pageStyle+="padding-bottom:"+2*a.margin.bottom+"rpx;",a.pageStyle+="padding-right:"+2*a.margin.both+"rpx;",a.pageStyle+="padding-left:"+2*a.margin.both+"rpx;")})),R.value=G.value.some((a=>a&&a.position&&"top_fixed"==a.position)),p({title:G.title})}let e=a.data.share?JSON.parse(a.data.share):null;D(e),A.value=!1}))}));const N=l((()=>{var a="";return H.value.global.pageStartBgColor&&H.value.global.pageEndBgColor?a+=`background:linear-gradient(${H.value.global.pageGradientAngle},${H.value.global.pageStartBgColor},${H.value.global.pageEndBgColor});`:a+="background-color:"+H.value.global.pageStartBgColor+";",a+="min-height:calc(100vh - 50px);",H.value.global.bgUrl&&(a+=`background-image:url('${k(H.value.global.bgUrl)}');`),H.value.global.bgHeightScale&&(a+=`background-size: 100% ${H.value.global.bgHeightScale}%;`),a}));return g((()=>{I.value++,u()})),n((a=>{T.scrollTop=a.scrollTop})),(a,e)=>{const o=S(x("u-loading-page"),B),t=C;return m(),d(t,{style:_(a.themeColor())},{default:j((()=>[c(o,{loading:A.value,loadingText:"","bg-color":"#f7f7f7"},null,8,["loading"]),b(c(t,null,{default:j((()=>[f(" 自定义模板渲染 "),"fixed"!=h(H).pageMode?(m(),d(t,{key:0,class:"diy-template-wrap bg-index",style:_(h(N))},{default:j((()=>[c(w,{data:h(H),pullDownRefreshCount:I.value},null,8,["data","pullDownRefreshCount"])])),_:1},8,["style"])):f("v-if",!0),f(" 固定模板渲染 "),"fixed"==h(H).pageMode?(m(),d(t,{key:1,class:"fixed-template-wrap"},{default:j((()=>[c($,{data:h(H),pullDownRefreshCount:I.value},null,8,["data","pullDownRefreshCount"])])),_:1})):f("v-if",!0)])),_:1},512),[[v,!A.value]])])),_:1},8,["style"])}}}),[["__scopeId","data-v-0bf29936"]]);export{E as default};
