import{d as e,r as a,p as s,t as o,a as t,s as l,H as i,bw as n,E as u,o as d,c as r,w as p,O as _,b as c,f as m,y as f,P as v,n as g,Y as h,B as y,i as j,C as w,g as b,h as x}from"./index-2882a2d8.js";import{_ as k}from"./u-popup.2abbe959.js";import{_ as C}from"./loading-page.vue_vue_type_script_setup_true_lang.cb99ee23.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-overlay.1a317a4e.js";import"./u-transition.4448d2e5.js";import"./u-icon.1104ad2f.js";import"./u-safe-bottom.f13b01b8.js";import"./u-loading-page.8280c7ab.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */const B=S(e({__name:"promote_code",setup(e){const S=a(!1),B=a(!0),L=()=>{S.value=!1};a(null);const{setShare:O}=h();s((e=>{if(!e.id)return o({title:"缺少参数id",icon:"none"}),void setTimeout((()=>{t({url:"/addon/shop/pages/index",mode:"reLaunch"})}),1e3);if(!l())return void i().setLoginBack({url:"/addon/shop_fenxiao/pages/promote_code",param:{id:e.id,mid:e.mid}});E(e.id);let a={title:"分销推广",desc:"分销推广"};O({wechat:{...a},weapp:{...a}})}));const z=a(""),E=e=>{B.value=!0,n({type:"fenxiao",param:{member_id:e}}).then((e=>{z.value=e.data&&u(e.data)||"",B.value=!1}))};return(e,a)=>{const s=y,o=j,t=w,l=b(x("u-popup"),k),i=b(x("loading-page"),C);return d(),r(o,{class:"container",style:g(e.themeColor())},{default:p((()=>[B.value?m("v-if",!0):(d(),_(v,{key:0},[c(o,{class:"poster-wrap"},{default:p((()=>[z.value?(d(),r(s,{key:0,src:z.value,mode:"widthFix","show-menu-by-longpress":!0},null,8,["src"])):m("v-if",!0)])),_:1}),c(o,{class:"tips"},{default:p((()=>[f("长按识别图中二维码")])),_:1}),c(l,{show:S.value,onClose:a[0]||(a[0]=e=>S.value=!1),mode:"center",round:"var(--rounded-big)","safe-area-inset-bottom":!1,customStyle:{overflow:"hidden"}},{default:p((()=>[c(o,{class:"dialog-popup"},{default:p((()=>[c(o,{class:"title"},{default:p((()=>[f("提示")])),_:1}),c(o,{class:"message"},{default:p((()=>[f("您拒绝了保存图片到相册的授权请求，无法保存图片到相册，如需正常使用，请授权之后再进行操作。")])),_:1}),c(o,{class:"action-wrap"},{default:p((()=>[c(o,{onClick:L},{default:p((()=>[f("取消")])),_:1}),c(o,{class:"flex items-end"},{default:p((()=>[c(t,{type:"default",class:"authorization-btn","open-type":"openSetting",onOpensetting:L,"hover-class":"none"},{default:p((()=>[f("立即授权")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["show","round"])],64)),c(i,{loading:B.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-9fa673a4"]]);export{B as default};