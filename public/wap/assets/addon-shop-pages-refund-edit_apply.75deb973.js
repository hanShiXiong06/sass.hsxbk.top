import{d as e,r as a,j as l,m as t,o as s,c as r,w as u,b as o,u as d,x as n,y as p,f as i,aN as c,n as x,_ as f,E as m,F as _,G as v,au as y,I as g,a as h,g as b,h as j,i as w,C as k,a4 as C,ai as V,a3 as U,c0 as E,ag as F,V as I,$ as L}from"./index-905183d4.js";import{_ as N}from"./u-icon.86a2aad0.js";import{_ as O}from"./u--image.b5d65e0e.js";import{_ as S}from"./u-upload.54f0d339.js";import{_ as T}from"./u-button.d3798ecb.js";import{_ as z,a as A}from"./u-radio-group.96b59d73.js";import{_ as B}from"./u-popup.e3f6594b.js";import{g as D,b as G,e as M}from"./refund.cd7301d6.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-loading-icon.c376267d.js";/* empty css                                                                 */import"./u-safe-bottom.e94b03c1.js";const Q=P(e({__name:"edit_apply",setup(e){var P;const Q=a(null),R=a({}),$=a(0),q=a(0);let H=a(!1);const J=a({order_id:null==(P=Q.value)?void 0:P.order_id,order_goods_id:$.value,order_refund_no:"",refund_type:"",apply_money:"",reason:"",remark:"",voucher:[]}),K=a([]),W=a("");D().then((({data:e})=>{K.value=e,K.value&&K.value.length&&(W.value=K.value[0])})).catch(),l((e=>{$.value=e.order_goods_id||0,G(e.order_refund_no).then((({data:e})=>{Q.value=e,R.value=e.order_goods,J.value.order_goods_id=e.order_goods_id,J.value.order_id=e.order_id,J.value.order_refund_no=e.order_refund_no,J.value.remark=e.remark,J.value.apply_money=e.apply_money,J.value.reason=e.reason,W.value=e.reason,J.value.voucher=e.voucher})).catch()}));const X=t((()=>{let e=R.value.goods_money-R.value.discount_money;return L(e)})),Y=t((e=>function(e){return""==e||0==e?"60rpx":17*String(e).length+"rpx"})),Z=e=>{J.value.refund_type=e,q.value=1},ee=t((()=>J.value.voucher.map((e=>({url:I(e)}))))),ae=e=>{e.file.forEach((e=>{y({filePath:e.url,name:"file"}).then((e=>{J.value.voucher.length<9&&J.value.voucher.push(e.data.url)})).catch((()=>{}))}))},le=e=>{J.value.voucher.splice(e.index,1)},te=a(!1),se=()=>{if(!J.value.reason)return g({title:"请选择退款原因",icon:"none"}),!1;te.value||(te.value=!0,M(J.value).then((e=>{te.value=!1,setTimeout((()=>{h({url:"/addon/shop/pages/order/detail",param:{order_id:J.value.order_id}})}),1e3)})).catch((()=>{te.value=!1})))},re=()=>{J.value.reason=W.value,H.value=!1};return(e,a)=>{const l=b(j("u-icon"),N),t=b(j("u--image"),O),y=w,g=k,h=C,L=V,D=U,G=b(j("u-upload"),S),M=E,P=b(j("u-button"),T),$=b(j("u-radio"),z),ue=b(j("u-radio-group"),A),oe=b(j("u-popup"),B),de=F;return s(),r(y,{style:x(e.themeColor())},{default:u((()=>[Q.value?(s(),r(de,{key:0,"indicator-dots":!1,autoplay:!1,"disable-touch":!0,current:q.value,class:"h-screen",duration:300},{default:u((()=>[o(L,null,{default:u((()=>[o(h,{"scroll-y":"true",class:"bg-page h-screen"},{default:u((()=>[o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"flex py-[30rpx] border-0 !border-b !border-[#f5f5f5] border-solid"},{default:u((()=>[o(t,{width:"120rpx",height:"120rpx",src:d(I)(R.value.sku_image),model:"aspectFill"},{error:u((()=>[o(l,{name:"photo",color:"#999",size:"50"})])),_:1},8,["src"]),o(y,{class:"flex flex-1 w-0 flex-col justify-between ml-[20rpx]"},{default:u((()=>[o(y,null,{default:u((()=>[o(y,{class:"text-ellipsis text-[#303133] text-sm leading-normal"},{default:u((()=>[n(p(R.value.goods_name),1)])),_:1}),o(y,{class:"mt-[10rpx] text-[26rpx] text-gray-subtitle"},{default:u((()=>[n(p(R.value.sku_name),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"py-[24rpx] flex items-center",onClick:a[0]||(a[0]=e=>Z(1))},{default:u((()=>[o(y,{class:"flex-1"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("仅退款")])),_:1}),o(y,{class:"text-xs mt-[10rpx] text-gray-subtitle"},{default:u((()=>[n("未收到货，或与商家协商一致不用退货只退款")])),_:1})])),_:1}),o(g,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1}),"real"!=R.value.goods_type||R.value.delivery_status&&"wait_delivery"==R.value.delivery_status?i("v-if",!0):(s(),r(y,{key:0,class:"py-[24rpx] flex items-center border-0 !border-t !border-[#f5f5f5] border-solid",onClick:a[1]||(a[1]=e=>Z(2))},{default:u((()=>[o(y,{class:"flex-1"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("退货退款")])),_:1}),o(y,{class:"text-xs mt-[10rpx] text-gray-subtitle"},{default:u((()=>[n("已收到货，需退还收到的货物")])),_:1})])),_:1}),o(g,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1}))])),_:1})])),_:1})])),_:1}),o(L,null,{default:u((()=>[o(h,{"scroll-y":"true",class:"bg-page h-screen"},{default:u((()=>[o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"py-[24rpx] flex justify-between items-center"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("退款原因")])),_:1}),o(y,{class:"flex items-center",onClick:a[2]||(a[2]=e=>c(H)?H.value=!0:H=!0)},{default:u((()=>[o(y,{class:"flex-1 text-right"},{default:u((()=>[o(y,{class:"text-xs text-gray-subtitle truncate w-[460rpx]"},{default:u((()=>[n(p(J.value.reason||"请选择"),1)])),_:1})])),_:1}),o(g,{class:"iconfont iconxiangyoujiantou text-[26rpx] text-gray-subtitle"})])),_:1})])),_:1})])),_:1}),o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"py-[24rpx] flex items-center"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("退款金额")])),_:1}),o(y,{class:"flex-1 text-right"},{default:u((()=>[o(y,{class:"flex justify-end items-center"},{default:u((()=>[o(g,{class:"font-bold text-sm leading-none"},{default:u((()=>[n("￥")])),_:1}),o(D,{type:"number",modelValue:J.value.apply_money,"onUpdate:modelValue":a[3]||(a[3]=e=>J.value.apply_money=e),modelModifiers:{number:!0},class:"font-bold text-sm leading-none",style:x({width:d(Y)(J.value.apply_money)})},null,8,["modelValue","style"])])),_:1}),o(y,{class:"text-xs text-gray-subtitle mt-[10rpx]"},{default:u((()=>[n("最多可输入金额￥"+p(d(X)),1)])),_:1})])),_:1})])),_:1})])),_:1}),o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"py-[24rpx]"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("上传凭证"),o(g,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[n("选填")])),_:1})])),_:1}),o(y,{class:"p-[20rpx] bg-[#f5f5f5] rounded mt-[20rpx]"},{default:u((()=>[o(G,{fileList:d(ee),onAfterRead:ae,onDelete:le,multiple:"",maxCount:9},null,8,["fileList"])])),_:1})])),_:1})])),_:1}),o(y,{class:"m-[24rpx] px-[24rpx] rounded-md bg-white"},{default:u((()=>[o(y,{class:"py-[24rpx]"},{default:u((()=>[o(y,{class:"text-sm"},{default:u((()=>[n("补充描述"),o(g,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[n("选填")])),_:1})])),_:1}),o(y,{class:"p-[20rpx] bg-[#f5f5f5] rounded mt-[20rpx] h-[200rpx]"},{default:u((()=>[o(M,{modelValue:J.value.remark,"onUpdate:modelValue":a[4]||(a[4]=e=>J.value.remark=e),cols:"30",rows:"5",placeholder:"补充描述,有助于更好的处理售后问题","placeholder-class":"text-sm"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),o(y,{class:"mt-[40rpx] m-[24rpx]"},{default:u((()=>[o(P,{type:"primary",shape:"circle",text:"提交",onClick:se,loading:te.value},null,8,["loading"])])),_:1}),i(" 退款原因 "),o(oe,{show:d(H),onClose:e.close,onOpen:e.open},{default:u((()=>[o(y,{class:"px-[30rpx] pb-[30rpx]",onTouchmove:a[7]||(a[7]=f((()=>{}),["prevent","stop"]))},{default:u((()=>[o(y,{class:"flex items-center h-[90rpx] justify-between"},{default:u((()=>[o(g,null,{default:u((()=>[n("退款原因")])),_:1}),o(g,{class:"iconfont iconguanbi",onClick:a[5]||(a[5]=e=>c(H)?H.value=!1:H=!1)})])),_:1}),o(h,{"scroll-y":"true",class:"h-[450rpx] mt-[20rpx]"},{default:u((()=>[o(ue,{modelValue:W.value,"onUpdate:modelValue":a[6]||(a[6]=e=>W.value=e),placement:"column"},{default:u((()=>[(s(!0),m(v,null,_(K.value,((e,a)=>(s(),r($,{activeColor:"var(--primary-color)",customStyle:{marginBottom:"8px"},key:a,label:e,name:e},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(P,{type:"primary",class:"mt-[40rpx]",shape:"circle",onClick:re},{default:u((()=>[n("确定")])),_:1})])),_:1})])),_:1},8,["show","onClose","onOpen"])])),_:1})])),_:1})])),_:1},8,["current"])):i("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-ad74e3e6"]]);export{Q as default};