import{d as e,r as a,p as t,a1 as l,K as r,j as o,o as s,c as d,w as u,b as i,u as n,y as p,z as c,f as x,A as m,P as f,a7 as v,Q as _,n as g,av as y,t as h,a as b,B as w,g as j,h as k,i as C,D as V,a6 as N,ag as A,c2 as D,C as z,ae as E,E as F}from"./index-7bf68536.js";import{_ as P}from"./u--image.b3bf1d5c.js";import{_ as S}from"./u-upload.ab11cc5c.js";import{_ as B,a as I}from"./u-radio-group.2aeaf438.js";import{_ as L}from"./u-popup.be4bfacd.js";import{a as M}from"./order.3552570e.js";import{g as T,a as U,b as K}from"./refund.15be903a.js";import{_ as Q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-loading-icon.b37701e7.js";/* empty css                                                                 */import"./u-safe-bottom.908eeae4.js";const R=Q(e({__name:"apply",setup(e){var Q;const R=a(null),W=a({}),Y=a(0),q=a(0),G=a(!1),H=a({order_id:null==(Q=R.value)?void 0:Q.order_id,order_goods_id:Y.value,refund_type:"",apply_money:"",reason:"",remark:"",voucher:[]}),J=a({}),O=a([]),X=a("");T().then((({data:e})=>{O.value=e,O.value&&O.value.length&&(X.value=O.value[0])})),t((e=>{if(Y.value=e.order_goods_id||0,H.value.order_goods_id=Y.value,H.value.order_id=e.order_id||0,e.order_id&&e.order_goods_id)M(e.order_id).then((({data:e})=>{R.value=e,R.value.order_goods.forEach(((e,a)=>{Y.value==e.order_goods_id&&(W.value=e)})),H.value.apply_money=l(J.value.refund_money)})),U({order_goods_id:e.order_goods_id}).then((e=>{J.value=e.data}));else{r({url:"/addon/shop/pages/order/list",title:"缺少订单id"})}})),o((e=>function(e){return""==e||0==e?"70rpx":17*String(e).length+"rpx"}));const Z=e=>{H.value.refund_type=e,q.value=1},$=o((()=>H.value.voucher.map((e=>({url:F(e)}))))),ee=e=>{e.file.forEach((e=>{y({filePath:e.url,name:"file"}).then((e=>{H.value.voucher.length<9&&H.value.voucher.push(e.data.url)}))}))},ae=e=>{H.value.voucher.splice(e.index,1)},te=a(!1),le=()=>H.value.reason?Number(H.value.apply_money).toFixed(2)<0?(h({title:"退款金额不能为0,保留两位小数",icon:"none"}),!1):Number(H.value.apply_money)>Number(J.value.refund_money)?(h({title:"退款金额不能大于可退款总额",icon:"none"}),!1):void(te.value||(te.value=!0,K(H.value).then((e=>{te.value=!1,setTimeout((()=>{b({url:"/addon/shop/pages/order/detail",param:{order_id:H.value.order_id}})}),1e3)})).catch((()=>{te.value=!1})))):(h({title:"请选择退款原因",icon:"none"}),!1),re=()=>{H.value.reason=X.value,G.value=!1};return(e,a)=>{const t=w,l=j(k("u--image"),P),r=C,o=V,y=N,h=A,b=j(k("u-upload"),S),M=D,T=z,U=j(k("u-radio"),B),K=j(k("u-radio-group"),I),Q=j(k("u-popup"),L),Y=E;return s(),d(r,{style:g(e.themeColor())},{default:u((()=>[R.value?(s(),d(Y,{key:0,"indicator-dots":!1,autoplay:!1,"disable-touch":!0,current:q.value,class:"h-screen",duration:300},{default:u((()=>[i(h,null,{default:u((()=>[i(y,{"scroll-y":"true",class:"bg-page min-h-screen overflow-hidden"},{default:u((()=>[i(r,{class:"m-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"flex"},{default:u((()=>[i(r,{class:"w-[120rpx] h-[120rpx] flex items-center justify-center"},{default:u((()=>[i(l,{radius:"var(--goods-rounded-small)",width:"120rpx",height:"120rpx",src:n(F)(W.value.sku_image.split(",")[0]),model:"aspectFill"},{error:u((()=>[i(t,{class:"w-[120rpx] h-[120rpx] rounded-[var(--goods-rounded-small)] overflow-hidden",src:n(F)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:1},8,["radius","src"])])),_:1}),i(r,{class:"flex-1 w-0 ml-[20rpx]"},{default:u((()=>[i(r,{class:"text-ellipsis text-[28rpx] leading-normal truncate"},{default:u((()=>[p(c(W.value.goods_name),1)])),_:1}),W.value.sku_name?(s(),d(r,{key:0,class:"mt-[6rpx] text-[24rpx] leading-[1.3] text-[var(--text-color-light9)] truncate"},{default:u((()=>[p(c(W.value.sku_name),1)])),_:1})):x("v-if",!0)])),_:1})])),_:1})])),_:1}),i(r,{class:"my-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"py-[var(--pad-top-m)] flex items-center",onClick:a[0]||(a[0]=e=>Z(1))},{default:u((()=>[i(r,{class:"flex-1"},{default:u((()=>[i(r,{class:"text-[30rpx]"},{default:u((()=>[p("仅退款")])),_:1}),"real"==W.value.goods_type?(s(),d(r,{key:0,class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[p("未收到货，或与商家协商一致不用退货只退款")])),_:1})):"virtual"==W.value.goods_type?(s(),d(r,{key:1,class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[p("与商家协商一致不用退货只退款")])),_:1})):x("v-if",!0)])),_:1}),i(o,{class:"nc-iconfont nc-icon-youV6xx text-[28rpx] text-[var(--text-color-light9)]"})])),_:1}),"real"!=W.value.goods_type||W.value.delivery_status&&"wait_delivery"==W.value.delivery_status?x("v-if",!0):(s(),d(r,{key:0,class:"py-[var(--pad-top-m)] flex items-center border-0 !border-t !border-[#f5f5f5] border-solid",onClick:a[1]||(a[1]=e=>Z(2))},{default:u((()=>[i(r,{class:"flex-1"},{default:u((()=>[i(r,{class:"text-[30rpx]"},{default:u((()=>[p("退货退款")])),_:1}),i(r,{class:"text-[24rpx] mt-[20rpx] text-[var(--text-color-light9)]"},{default:u((()=>[p("已收到货，需退还收到的货物")])),_:1})])),_:1}),i(o,{class:"nc-iconfont nc-icon-youV6xx text-[28rpx] text-[var(--text-color-light9)]"})])),_:1}))])),_:1})])),_:1})])),_:1}),i(h,null,{default:u((()=>[i(y,{"scroll-y":"true",class:"bg-page min-h-screen overflow-hidden"},{default:u((()=>[i(r,{class:"my-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"py-[var(--pad-top-m)] flex justify-between items-center"},{default:u((()=>[i(r,{class:"text-[28rpx]"},{default:u((()=>[p("退款原因")])),_:1}),i(r,{class:"flex ml-[auto] items-center h-[30rpx]",onClick:a[2]||(a[2]=e=>G.value=!0)},{default:u((()=>[i(o,{class:"text-[26rpx] text-[var(--text-color-light9)] truncate max-w-[460rpx]"},{default:u((()=>[p(c(H.value.reason||"请选择"),1)])),_:1}),i(o,{class:"nc-iconfont nc-icon-youV6xx pt-[4rpx] text-[24rpx] text-[var(--text-color-light9)]"})])),_:1})])),_:1})])),_:1}),i(r,{class:"my-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"py-[var(--pad-top-m)]"},{default:u((()=>[i(r,{class:"flex items-center justify-between"},{default:u((()=>[i(r,{class:"text-[28rpx] font-500"},{default:u((()=>[p("退款金额")])),_:1}),i(r,{class:"flex justify-end items-center text-[var(--price-text-color)] price-font"},{default:u((()=>[i(o,{class:"font-500 text-[36rpx] leading-none"},{default:u((()=>[p("￥")])),_:1}),x(' <input type="digit" v-model.number="formData.apply_money" class="font-500 text-[36rpx] leading-none" :style="{ width: inputWidth(formData.apply_money) }" @blur="handleInput"> '),i(o,{class:"font-500 text-[36rpx] leading-none"},{default:u((()=>[p(c(H.value.apply_money),1)])),_:1})])),_:1})])),_:1}),i(r,{class:"text-right text-[24rpx] text-[var(--text-color-light9)] mt-[10rpx]"},{default:u((()=>[x(" <text>最多可退￥{{ refundMoney.refund_money }}</text> "),1===J.value.is_refund_delivery&&Number(J.value.refund_delivery_money)>0?(s(),d(o,{key:0,class:"ml-[10rpx]"},{default:u((()=>[p("(包含运费￥"+c(J.value.refund_delivery_money)+")",1)])),_:1})):x("v-if",!0)])),_:1})])),_:1})])),_:1}),i(r,{class:"my-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"pt-[var(--pad-top-m)] pb-[14rpx]"},{default:u((()=>[i(r,{class:"text-[28rpx] flex items-center"},{default:u((()=>[i(o,{class:"font-500"},{default:u((()=>[p("上传凭证")])),_:1}),i(o,{class:"text-[24rpx] text-[var(--text-color-light9)] ml-[10rpx]"},{default:u((()=>[p("选填")])),_:1})])),_:1}),i(r,{class:"mt-[30rpx]"},{default:u((()=>[i(b,{fileList:n($),onAfterRead:ee,onDelete:ae,multiple:"",maxCount:9},null,8,["fileList"])])),_:1})])),_:1})])),_:1}),i(r,{class:"my-[var(--top-m)] sidebar-margin px-[var(--pad-sidebar-m)] rounded-[var(--rounded-big)] bg-white"},{default:u((()=>[i(r,{class:"py-[var(--pad-top-m)]"},{default:u((()=>[i(r,{class:"text-[28rpx] flex items-center"},{default:u((()=>[i(o,{class:"font-500"},{default:u((()=>[p("补充描述")])),_:1}),i(o,{class:"text-[24rpx] text-[var(--text-color-light9)] ml-[10rpx]"},{default:u((()=>[p("选填")])),_:1})])),_:1}),i(r,{class:"mt-[30rpx] h-[200rpx]"},{default:u((()=>[i(M,{class:"leading-[1.5] h-[100%] w-[100%] text-[28rpx]",modelValue:H.value.remark,"onUpdate:modelValue":a[3]||(a[3]=e=>H.value.remark=e),cols:"30",rows:"5",placeholder:"补充描述,有助于更好的处理售后问题","placeholder-class":"text-[26rpx] text-[var(--text-color-light9)]"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(r,{class:"w-full"},{default:u((()=>[i(r,{class:"py-[var(--top-m)] px-[var(--sidebar-m)] box-border"},{default:u((()=>[i(T,{class:"primary-btn-bg !text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] font-500",loading:te.value,onClick:le},{default:u((()=>[p("提交")])),_:1},8,["loading"])])),_:1})])),_:1}),x(" 退款原因 "),i(Q,{show:G.value,onClose:a[6]||(a[6]=e=>G.value=!1)},{default:u((()=>[i(r,{class:"popup-common",onTouchmove:a[5]||(a[5]=m((()=>{}),["prevent","stop"]))},{default:u((()=>[i(r,{class:"title"},{default:u((()=>[p("退款原因")])),_:1}),i(y,{"scroll-y":"true",class:"h-[450rpx] px-[30rpx] box-border"},{default:u((()=>[i(K,{modelValue:X.value,"onUpdate:modelValue":a[4]||(a[4]=e=>X.value=e),placement:"column",iconPlacement:"right"},{default:u((()=>[(s(!0),f(_,null,v(O.value,((e,a)=>(s(),d(U,{activeColor:"var(--primary-color)",labelSize:"30rpx",labelColor:"#333",customStyle:{marginBottom:"34rpx"},key:a,label:e,name:e},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(r,{class:"btn-wrap"},{default:u((()=>[i(T,{class:"primary-btn-bg btn",onClick:re},{default:u((()=>[p("确定")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1})])),_:1})])),_:1},8,["current"])):x("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-06ff1c94"]]);export{R as default};
