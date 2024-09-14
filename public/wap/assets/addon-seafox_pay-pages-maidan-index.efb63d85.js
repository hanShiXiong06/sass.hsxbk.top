import{bu as e,b4 as t,t as s,o as l,c as i,w as a,b as n,n as o,y as r,z as d,f as c,Q as h,A as p,ba as u,O as f,P as y,D as m,i as g,d as _,r as x,p as k,Z as b,B as v,cc as w,g as z,h as S}from"./index-9317da28.js";import{_ as C}from"./pay.b34fbbeb.js";import{_ as K}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.74ac23f6.js";import"./u-icon.5e775659.js";import"./u-transition.65be38eb.js";import"./u-popup.1f2ebcae.js";import"./u-safe-bottom.3546c5bb.js";import"./pay.25e81968.js";const P=K({name:"keyBoard",props:{confirmText:{default:"充值",type:String},btnColor:{default:"#2B76EF",type:String},placeholder:{default:"请输入充值金额",type:String},currency:{default:"￥",type:String},maxNumber:{default:1e11,type:Number},fontSize:{type:[String,Number],default:30},isBold:{type:Boolean,default:!0},isFilter:{type:Boolean,default:!0}},data:()=>({fristShow:!0,isShow:!1,size:0,height:0,allWidth:0,money:""}),created(){this.height=this.fontSize,this.size=this.fontSize;var e=t().in(this);setTimeout((()=>{this.show(),e.select(".keyboard-content").boundingClientRect((e=>{this.allWidth=e.width})).exec()}),200)},watch:{money(e){this.$emit("change",parseFloat(e))}},methods:{show(){this.isShow=!0},hide(){},filterMoney:e=>e?(e=e.replace(/\$\s?|(,*)/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,","):"",_handleKeyPress(e){if(-1==e)return!1;switch(String(e)){case".":this._handleDecimalPoint();break;case"delete":this._handleDeleteKey();break;case"confirm":this._handleConfirmKey();break;default:this._handleNumberKey(e)}},_handleDecimalPoint(){if(this.money.indexOf(".")>-1)return!1;this.money.length?this.money=this.money+".":this.money="0.",t().in(this).select("#text").boundingClientRect((e=>{e.width+Number(this.size)>this.allWidth&&(this.size-=5)})).exec()},_handleDeleteKey(){let e=this.money;if(!e.length)return!1;this.money=e.substring(0,e.length-1),t().in(this).select("#input-text").boundingClientRect((e=>{e.width+20<this.allWidth&&this.size<this.height&&(this.size+=5)})).exec()},_handleNumberKey(e){if(Number(this.money+e)>this.maxNumber)return;let s=this.money;if(s.indexOf(".")>-1&&s.substring(s.indexOf(".")+1).length<2&&(this.money=s+e),!(s.indexOf(".")>-1&&s.substring(s.indexOf(".")+1).length>=2)){if(!(s.indexOf(".")>-1))if(0==e&&0==s.length)this.money="0.";else{if(s.length&&0===Number(s.charAt(0)))return;this.money=s+e}t().in(this).select("#text").boundingClientRect((e=>{e.width+Number(this.size)>this.allWidth&&(this.size-=5)})).exec()}},_handleConfirmKey(){let e=this.money;if(!e.length||0==e)return s({title:this.placeholder,icon:"none",duration:1e3}),!1;e.indexOf(".")>-1&&e.indexOf(".")==e.length-1&&(e=Number(e.substring(0,e.length-1)).toFixed(2)),e=Number(e).toFixed(2),this.$emit("confirm",parseFloat(e))}}},[["render",function(e,t,s,_,x,k){const b=m,v=g;return l(),i(v,{class:"keyboard-main",style:o([{height:x.height+"px"},{background:"#fff",padding:"20rpx"}])},{default:a((()=>[n(b,{style:o([{"margin-top":"10px"},{fontSize:parseInt(s.fontSize/3*2)+"px"}])},{default:a((()=>[r(d(s.currency),1)])),_:1},8,["style"]),n(v,{class:"keyboard-content",style:o({height:x.height+"px"})},{default:a((()=>[x.money?c("v-if",!0):(l(),i(v,{key:0,class:"placeholder",style:o({fontSize:parseInt(s.fontSize/3*2)+"px",height:x.height+"px"})},{default:a((()=>[r(d(s.placeholder),1)])),_:1},8,["style"])),n(v,{class:h(["input",{zIndex:x.isShow}]),style:o({fontSize:x.size+"px",fontWeight:s.isBold?"bold":"initial"}),onClick:p(k.show,["stop"])},{default:a((()=>[u("span",{id:"text",style:{"margin-top":"-12px"}},[s.isFilter?(l(),f(y,{key:0},[r(d(k.filterMoney(x.money)),1)],64)):c("v-if",!0),s.isFilter?c("v-if",!0):(l(),f(y,{key:1},[r(d(x.money),1)],64)),c(' <view class="line" style="margin-top:-212px" :style="{height:parseInt((height/4*3))+\'px\',\'background\':btnColor}"></view> ')])])),_:1},8,["class","style","onClick"])])),_:1},8,["style"]),c(' <view class="mask" @click.stop="hide" v-if="isShow"></view> '),n(v,{class:h(["keyboard",{noPadding:!x.isShow}])},{default:a((()=>[x.isShow?(l(),i(v,{key:0,class:"key-row"},{default:a((()=>[n(v,{class:"key-cell",onClick:t[0]||(t[0]=p((e=>k._handleKeyPress(1)),["stop"]))},{default:a((()=>[r("1")])),_:1}),n(v,{class:"key-cell",onClick:t[1]||(t[1]=p((e=>k._handleKeyPress(2)),["stop"]))},{default:a((()=>[r("2")])),_:1}),n(v,{class:"key-cell",onClick:t[2]||(t[2]=p((e=>k._handleKeyPress(3)),["stop"]))},{default:a((()=>[r("3")])),_:1}),n(v,{class:"key-cell last-child",onClick:t[3]||(t[3]=p((e=>k._handleKeyPress("delete")),["stop"]))},{default:a((()=>[r(" 删除 "),c(' <image class="icon" src="../../static/fx-amountInput/backspace.png" mode="aspectFill"></image> ')])),_:1})])),_:1})):c("v-if",!0),x.isShow?(l(),i(v,{key:1,class:"key-row"},{default:a((()=>[n(v,{class:"key-cell",onClick:t[4]||(t[4]=p((e=>k._handleKeyPress(4)),["stop"]))},{default:a((()=>[r("4")])),_:1}),n(v,{class:"key-cell",onClick:t[5]||(t[5]=p((e=>k._handleKeyPress(5)),["stop"]))},{default:a((()=>[r("5")])),_:1}),n(v,{class:"key-cell",onClick:t[6]||(t[6]=p((e=>k._handleKeyPress(6)),["stop"]))},{default:a((()=>[r("6")])),_:1}),n(v,{class:"key-cell last-child"})])),_:1})):c("v-if",!0),x.isShow?(l(),i(v,{key:2,class:"key-row"},{default:a((()=>[n(v,{class:"key-cell",onClick:t[7]||(t[7]=p((e=>k._handleKeyPress(7)),["stop"]))},{default:a((()=>[r("7")])),_:1}),n(v,{class:"key-cell",onClick:t[8]||(t[8]=p((e=>k._handleKeyPress(8)),["stop"]))},{default:a((()=>[r("8")])),_:1}),n(v,{class:"key-cell",onClick:t[9]||(t[9]=p((e=>k._handleKeyPress(9)),["stop"]))},{default:a((()=>[r("9")])),_:1}),n(v,{class:"key-cell last-child"})])),_:1})):c("v-if",!0),x.isShow?(l(),i(v,{key:3,class:"key-zero-and-point"},{default:a((()=>[n(v,{class:"a zero",onClick:t[10]||(t[10]=p((e=>k._handleKeyPress(0)),["stop"]))},{default:a((()=>[r("0")])),_:1}),n(v,{class:"a point",onClick:t[11]||(t[11]=p((e=>k._handleKeyPress(".")),["stop"]))},{default:a((()=>[r(".")])),_:1}),n(v,{class:"a last-child"})])),_:1})):c("v-if",!0),n(v,{class:h(["key-confirm",{big:x.isShow,frist:x.fristShow}]),style:o({background:s.btnColor}),onClick:t[12]||(t[12]=p((e=>k._handleKeyPress("confirm")),["stop"]))},{default:a((()=>[r(d(s.confirmText),1)])),_:1},8,["class","style"])])),_:1},8,["class"]),c(" <view id=\"input-text\" :style=\"{fontSize:(size+5)+'px',fontWeight:isBold?'bold':'initial'}\">\n\t\t\t{{filterMoney(money)}}\n\t\t</view> ")])),_:1},8,["style"])}],["__scopeId","data-v-c3dfd4e8"]]),N=K(_({__name:"index",setup(t){x({trade_type:"",trade_id:""});const i=x(),o=x(""),h=x({logo:"",name:""});k((e=>{console.log(e,e.merchant_id,"query"),o.value=e.merchant_id||1,u.value=e.amount||"",p()}));const p=()=>{var t;(t={merchant_id:o.value},e.get("seafox_pay/maidan/info",t,{showErrorMessage:!0})).then((e=>{h.value=e.data})).catch((()=>{}))},u=x(""),m=x(!0),_=x(!1);setTimeout((function(){m.value=!1,_.value=!0}),600);const K=e=>{console.log(e),u.value=e+""};b(u,((e,t)=>{var s=e;Number(s)>1e8?u.value=s.slice(0,8):("."==s.slice(0,1)&&(s=""),(s=(s=(s=s.replace(/\.{2,}/g,".")).replace(".","$#$").replace(/\./g,"").replace("$#$",".")).replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")).indexOf("."),u.value=s)}));const N=()=>{var t;(_.value=!0,console.log(u.value),F())&&(t={money:u.value,merchant_id:o.value},e.post("seafox_pay/maidan/order",t,{showErrorMessage:!0})).then((e=>{var t;e.order_id,null==(t=i.value)||t.open(e.data.trade_type,e.data.trade_id,"/addon/seafox_pay/pages/maidan/index")})).catch((()=>{}))},F=()=>{u.value;return!(!Number(u.value)||Number(u.value)<.01)||(s({title:"请输入金额",icon:"none"}),!1)},$=e=>{console.log(e)};return(e,t)=>{const s=v,o=g,p=w,u=z(S("pay"),C);return l(),f(y,null,[n(o,{style:{position:"relative","z-index":"3"}},{default:a((()=>[n(o,{style:{display:"flex","flex-direction":"column",margin:"100rpx 0 50rpx","align-items":"center"}},{default:a((()=>[n(s,{src:h.value.logo||"",style:{"border-radius":"50%",width:"150rpx",height:"150rpx"},mode:"aspectFill"},null,8,["src"]),n(o,{style:{"margin-top":"20rpx","font-size":"16px"}},{default:a((()=>[r(d(h.value.name||""),1)])),_:1})])),_:1}),c(' <view style="background: #fff;margin: 50rpx 3%;padding: 20rpx 3%;flex:1;font-size: 20px;" @click="openKeyboard()">\n\t\t\t<span style="margin-right: 20rpx;">￥</span>\n\t\t\t<span v-if="amount" style="font-weight: bold;">{{amount}}</span>\n\t\t\t<span v-else style="color: #999;">输入金额</span>\n\t\t</view> '),n(P,{confirmText:"支付",placeholder:"请输入金额",fontSize:30,isFilter:!0,onConfirm:N,onChange:K}),n(p,{url:"/addon/seafox_pay/pages/maidan/order",style:{"text-align":"center","margin-top":"150rpx",color:"#1677ff","font-size":"14px"}},{default:a((()=>[r("买单记录")])),_:1})])),_:1}),c(' <button @click="openKeyboard" v-if="!loading&&!showKeyboard">支付</button> '),c(' <tn-keyboard mode="digit" z-index="0" :vibrate="false" :overlay-closeable="false" v-model="amount" v-model:show="showKeyboard" @confirm="topay" /> '),n(u,{ref_key:"payRef",ref:i,onClose:$},null,512)],64)}}}),[["__scopeId","data-v-308d4965"]]);export{N as default};
