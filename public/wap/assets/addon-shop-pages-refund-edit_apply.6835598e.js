import{d as e,r as a,p as t,a0 as l,j as r,o,c as s,w as u,b as d,u as n,y as i,z as p,f as c,A as x,O as m,a6 as _,P as v,n as f,au as g,t as y,a as h,B as b,g as w,h as j,i as k,D as C,a5 as V,af as D,c0 as N,C as F,ad as O,E as P}from"./index-2882a2d8.js";import{_ as S}from"./u--image.d52c0594.js";import{_ as z}from"./u-upload.1bc71a50.js";import{_ as A,a as B}from"./u-radio-group.2437dc20.js";import{_ as E}from"./u-popup.2abbe959.js";import{g as I,c as L,d as T,e as U}from"./refund.bc37381a.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.46ebbbc1.js";import"./u-icon.1104ad2f.js";import"./u-transition.4448d2e5.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       *//* empty css                                                                 */import"./u-overlay.1a317a4e.js";import"./u-safe-bottom.f13b01b8.js";const M=$(e({__name:"edit_apply",setup(e){var $;const M=a(null),R=a({}),W=a(0),q=a(0),G=a(!1),H=a({order_id:null==($=M.value)?void 0:$.order_id,order_goods_id:W.value,order_refund_no:"",refund_type:"",apply_money:"",reason:"",remark:"",voucher:[]}),J=a({}),K=a([]),Q=a("");I().then((({data:e})=>{K.value=e,K.value&&K.value.length&&(Q.value=K.value[0])})),t((e=>{W.value=e.order_goods_id||0,L(e.order_refund_no).then((({data:e})=>{M.value=e,R.value=e.order_goods,H.value.order_goods_id=e.order_goods_id,H.value.order_id=e.order_id,H.value.order_refund_no=e.order_refund_no,H.value.remark=e.remark,H.value.reason=e.reason,Q.value=e.reason,H.value.voucher=e.voucher})),T({order_refund_no:e.order_refund_no}).then((e=>{J.value=e.data,H.value.apply_money=l(J.value.refund_money)}))})),r((e=>function(e){return""==e||0==e?"70rpx":17*String(e).length+"rpx"}));const X=e=>{H.value.refund_type=e,q.value=1},Y=r((()=>H.value.voucher.map((e=>({url:P(e)}))))),Z=e=>{e.file.forEach((e=>{g({filePath:e.url,name:"file"}).then((e=>{H.value.voucher.length<9&&H.value.voucher.push(e.data.url)})).catch((()=>{}))}))},ee=e=>{H.value.voucher.splice(e.index,1)},ae=a(!1),te=()=>H.value.reason?Number(H.value.apply_money).toFixed(2)<0?(y({title:"退款金额不能为0,保留两位小数",icon:"none"}),!1):Number(H.value.apply_money)>Number(J.value.refund_money)?(y({title:"退款金额不能大于可退款总额",icon:"none"}),!1):void(ae.value||(ae.value=!0,U(H.value).then((e=>{ae.value=!1,setTimeout((()=>{h({url:"/addon/shop/pages/order/detail",param:{order_id:H.value.order_id}})}),1e3)})).catch((()=>{ae.value=!1})))):(y({title:"请选择退款原因",icon:"none"}),!1),le=()=>{H.value.reason=Q.value,G.value=!1};return(e,a)=>{const t=b,l=w(j("u--image"),S),r=k,g=C,y=V,h=D,I=w(j("u-upload"),z),L=N,T=F,U=w(j("u-radio"),A),$=w(j("u-radio-group"),B),W=w(j("u-popup"),E),re=O;return o(),s(r,{style:f(e.themeColor())},{default:u((()=>[M.value?(o(),s(re,{key:0,"indicator-dots":!1,autoplay:!1,"disable-touch":!0,current:q.value,class:"h-screen",duration:300},{default:u((()=>[d(h,null,{default:u((()=>[d(y,{"scroll-y":"true",class:"bg-page min-h-screen overflow-hidden"},{default:u((()=>[d(r,{class:"m-[var(--top-m)] sidebar-marign px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[d(r,{class:"flex"},{default:u((()=>[d(l,{radius:"var(--goods-rounded-small)",width:"120rpx",height:"120rpx",src:n(P)(R.value.sku_image.split(",")[0]),model:"aspectFill"},{error:u((()=>[d(t,{class:"w-[120rpx] h-[120rpx]",radius:"var(--goods-rounded-small)",src:n(P)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["radius","src"])])),_:1},8,["radius","src"]),d(r,{class:"flex-1 w-0 ml-[20rpx]"},{default:u((()=>[d(r,{class:"text-ellipsis text-[28rpx] leading-normal truncate"},{default:u((()=>[i(p(R.value.goods_name),1)])),_:1}),R.value.sku_name?(o(),s(r,{key:0,class:"mt-[6rpx] text-[24rpx] leading-[1.3] text-[var(--text-color-light9)] truncate"},{default:u((()=>[i(p(R.value.sku_name),1)])),_:1})):c("v-if",!0)])),_:1})])),_:1})])),_:1}),d(r,{class:"my-[var(--top-m)] sidebar-marign px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[d(r,{class:"py-[var(--pad-top-m)] flex items-center",onClick:a[0]||(a[0]=e=>X(1))},{default:u((()=>[d(r,{class:"flex-1"},{default:u((()=>[d(r,{class:"text-[30rpx]"},{default:u((()=>[i("仅退款")])),_:1}),"real"==R.value.goods_type?(o(),s(r,{key:0,class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[i("未收到货，或与商家协商一致不用退货只退款")])),_:1})):"virtual"==R.value.goods_type?(o(),s(r,{key:1,class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[i("与商家协商一致不用退货只退款")])),_:1})):c("v-if",!0)])),_:1}),d(g,{class:"nc-iconfont nc-icon-youV6xx text-[28rpx] text-[var(--text-color-light9)]"})])),_:1}),"real"!=R.value.goods_type||R.value.delivery_status&&"wait_delivery"==R.value.delivery_status?c("v-if",!0):(o(),s(r,{key:0,class:"py-[var(--pad-top-m)] flex items-center border-0 !border-t !border-[#f5f5f5] border-solid",onClick:a[1]||(a[1]=e=>X(2))},{default:u((()=>[d(r,{class:"flex-1"},{default:u((()=>[d(r,{class:"text-[30rpx]"},{default:u((()=>[i("退货退款")])),_:1}),d(r,{class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[i("已收到货，需退还收到的货物")])),_:1})])),_:1}),d(g,{class:"nc-iconfont nc-icon-youV6xx text-[28rpx] text-[var(--text-color-light9)]"})])),_:1}))])),_:1})])),_:1})])),_:1}),d(h,null,{default:u((()=>[d(y,{"scroll-y":"true",class:"bg-page min-h-screen overflow-hidden"},{default:u((()=>[d(r,{class:"my-[var(--top-m)] sidebar-marign px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[d(r,{class:"py-[var(--pad-top-m)] flex justify-between items-center"},{default:u((()=>[d(r,{class:"text-[28rpx]"},{default:u((()=>[i("退款原因")])),_:1}),d(r,{class:"flex ml-[auto] items-center h-[30rpx]",onClick:a[2]||(a[2]=e=>G.value=!0)},{default:u((()=>[d(g,{class:"text-[26rpx] text-[var(--text-color-light9)] truncate max-w-[460rpx]"},{default:u((()=>[i(p(H.value.reason||"请选择"),1)])),_:1}),d(g,{class:"nc-iconfont nc-icon-youV6xx pt-[4rpx] text-[24rpx] text-[var(--text-color-light9)]"})])),_:1})])),_:1})])),_:1}),d(r,{class:"my-[var(--top-m)] sidebar-marign px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[d(r,{class:"py-[var(--pad-top-m)]"},{default:u((()=>[d(r,{class:"flex items-center justify-between"},{default:u((()=>[d(r,{class:"text-[28rpx] font-500"},{default:u((()=>[i("退款金额")])),_:1}),d(r,{class:"flex justify-end items-center text-[var(--price-text-color)] price-font"},{default:u((()=>[d(g,{class:"font-500 text-[36rpx] leading-none"},{default:u((()=>[i("￥")])),_:1}),d(g,{class:"font-500 text-[36rpx] leading-none"},{default:u((()=>[i(p(H.value.apply_money),1)])),_:1}),c(' <input type="digit" v-model.number="formData.apply_money" class="font-500 text-[36rpx] leading-none" :style="{ width: inputWidth(formData.apply_money) }" @blur="handleInput"> ')])),_:1})])),_:1}),d(r,{class:"text-right text-[24rpx] text-[var(--text-color-light9)] mt-[10rpx]"},{default:u((()=>[c(" <text>最多可退￥{{ refundMoney.refund_money }}</text> "),1===J.value.is_refund_delivery&&Number(J.value.refund_delivery_money)>0?(o(),s(g,{key:0,class:"ml-[10rpx]"},{default:u((()=>[i("(包含运费￥"+p(J.value.refund_delivery_money)+")",1)])),_:1})):c("v-if",!0)])),_:1})])),_:1})])),_:1}),d(r,{class:"my-[var(--top-m)] sidebar-marign px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[d(r,{class:"pt-[var(--pad-top-m)] pb-[14rpx]"},{default:u((()=>[d(r,{class:"text-[28rpx] flex items-center"},{default:u((()=>[d(g,{class:"font-500"},{default:u((()=>[i("上传凭证")])),_:1}),d(g,{class:"text-[24rpx] text-[var(--text-color-light9)] ml-[10rpx]"},{default:u((()=>[i("选填")])),_:1})])),_:1}),d(r,{class:"mt-[30rpx]"},{default:u((()=>[d(I,{fileList:n(Y),onAfterRead:Z,onDelete:ee,multiple:"",maxCount:9},null,8,["fileList"])])),_:1})])),_:1})])),_:1}),d(r,{class:"my-[24rpx] sidebar-marign px-[24rpx] rounded-md bg-white"},{default:u((()=>[d(r,{class:"py-[var(--pad-top-m)]"},{default:u((()=>[d(r,{class:"text-[28rpx] flex items-center"},{default:u((()=>[d(g,{class:"font-500"},{default:u((()=>[i("补充描述")])),_:1}),d(g,{class:"text-[24rpx] text-[var(--text-color-light9)] ml-[10rpx]"},{default:u((()=>[i("选填")])),_:1})])),_:1}),d(r,{class:"mt-[30rpx] h-[200rpx]"},{default:u((()=>[d(L,{class:"leading-[1.5] h-[100%] w-[100%] text-[28rpx]",modelValue:H.value.remark,"onUpdate:modelValue":a[3]||(a[3]=e=>H.value.remark=e),cols:"30",rows:"5",placeholder:"补充描述,有助于更好的处理售后问题","placeholder-class":"text-[26rpx] text-[var(--text-color-light9)]"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(r,{class:"w-full"},{default:u((()=>[d(r,{class:"py-[var(--top-m)] px-[var(--sidebar-m)] box-border"},{default:u((()=>[d(T,{class:"primary-btn-bg !text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] font-500",loading:ae.value,onClick:te},{default:u((()=>[i("提交")])),_:1},8,["loading"])])),_:1})])),_:1}),c(" 退款原因 "),d(W,{show:G.value,onClose:a[6]||(a[6]=e=>G.value=!1),onOpen:e.open,closeable:!0},{default:u((()=>[d(r,{class:"popup-common",onTouchmove:a[5]||(a[5]=x((()=>{}),["prevent","stop"]))},{default:u((()=>[d(r,{class:"title"},{default:u((()=>[i("退款原因")])),_:1}),d(y,{"scroll-y":"true",class:"h-[450rpx] px-[30rpx] box-border"},{default:u((()=>[d($,{modelValue:Q.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Q.value=e),placement:"column",iconPlacement:"right"},{default:u((()=>[(o(!0),m(v,null,_(K.value,((e,a)=>(o(),s(U,{activeColor:"var(--primary-color)",labelSize:"30rpx",labelColor:"#333",customStyle:{marginBottom:"34rpx"},key:a,label:e,name:e},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(r,{class:"btn-wrap"},{default:u((()=>[d(T,{class:"primary-btn-bg btn",onClick:le},{default:u((()=>[i("确定")])),_:1})])),_:1})])),_:1})])),_:1},8,["show","onOpen"])])),_:1})])),_:1})])),_:1},8,["current"])):c("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-c2f64ab8"]]);export{M as default};
