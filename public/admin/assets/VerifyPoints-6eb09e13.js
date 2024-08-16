import{r as F,a as R,b as K,c as G}from"./index-611bfc3e.js";import{P as X,r as s,n as m,aJ as Y,h as H,c as I,a as l,$ as A,R as Q,a0 as U,F as Z,T as $,t as V,a_ as ee,a$ as te}from"./index-2a89d409.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const ie={name:"VerifyPoints",props:{mode:{type:String,default:"fixed"},captchaType:{type:String},vSpace:{type:Number,default:5},imgSize:{type:Object,default(){return{width:"310px",height:"155px"}}},barSize:{type:Object,default(){return{width:"310px",height:"40px"}}}},setup(N,f){const{mode:_,captchaType:e,vSpace:L,imgSize:q,barSize:c}=X(N),{proxy:n}=ee(),h=s(""),z=s(3),p=m([]),a=m([]),o=s(1),O=s(""),w=m([]),v=s(""),u=m({imgHeight:0,imgWidth:0,barHeight:0,barWidth:0}),y=m([]),d=s(""),b=s(void 0),x=s(void 0),j=s(!0),C=s(!0),J=()=>{p.splice(0,p.length),a.splice(0,a.length),o.value=1,B(),te(()=>{const{imgHeight:i,imgWidth:t,barHeight:g,barWidth:r}=F(n);u.imgHeight=i,u.imgWidth=t,u.barHeight=g,u.barWidth=r,n.$parent.$emit("ready",n)})};Y(()=>{J(),n.$el.onselectstart=function(){return!1}});const S=s(null),D=i=>{if(a.push(k(S,i)),o.value==z.value){o.value=T(k(S,i));const t=M(a,u);a.length=0,a.push(...t),setTimeout(()=>{const g=h.value?R(v.value+"---"+JSON.stringify(a),h.value):v.value+"---"+JSON.stringify(a),r={captchaType:e.value,captcha_code:h.value?R(JSON.stringify(a),h.value):JSON.stringify(a),captcha_key:v.value};K(r).then(W=>{W.code==1?(b.value="#4cae4c",x.value="#5cb85c",d.value="验证成功",C.value=!1,_.value=="pop"&&setTimeout(()=>{n.$parent.clickShow=!1,P()},1500),n.$parent.$emit("success",{captchaVerification:g})):(n.$parent.$emit("error",n),b.value="#d9534f",x.value="#d9534f",d.value="验证失败",setTimeout(()=>{P()},700))})},400)}o.value<z.value&&(o.value=T(k(S,i)))},k=function(i,t){const g=t.offsetX,r=t.offsetY;return{x:g,y:r}},T=function(i){return y.push(Object.assign({},i)),o.value+1},P=function(){y.splice(0,y.length),b.value="#000",x.value="#ddd",C.value=!0,p.splice(0,p.length),a.splice(0,a.length),o.value=1,B(),d.value="验证失败",j.value=!0};function B(){const i={captchaType:e.value};G(i).then(t=>{t.code==1?(O.value=t.data.originalImageBase64,v.value=t.data.token,h.value=t.data.secretKey,w.value=t.data.wordList,d.value="请依次点击【"+w.value.join(",")+"】"):d.value=t.msg})}const M=function(i,t){return i.map(r=>{const W=Math.round(310*r.x/parseInt(t.imgWidth)),E=Math.round(155*r.y/parseInt(t.imgHeight));return{x:W,y:E}})};return{secretKey:h,checkNum:z,fontPos:p,checkPosArr:a,num:o,pointBackImgBase:O,pointTextList:w,backToken:v,setSize:u,tempPoints:y,text:d,barAreaColor:b,barAreaBorderColor:x,showRefresh:j,bindingClick:C,init:J,canvas:S,canvasClick:D,getMousePos:k,createPoint:T,refresh:P,getPictrue:B,pointTransfrom:M}}},ne={style:{position:"relative"}},se={class:"verify-img-out"},oe=l("i",{class:"iconfont icon-refresh"},null,-1),re=[oe],ce=["src"],le={class:"verify-msg"};function he(N,f,_,e,L,q){return H(),I("div",ne,[l("div",se,[l("div",{class:"verify-img-panel",style:A({width:e.setSize.imgWidth,height:e.setSize.imgHeight,"background-size":e.setSize.imgWidth+" "+e.setSize.imgHeight,"margin-bottom":_.vSpace+"px"})},[Q(l("div",{class:"verify-refresh",style:{"z-index":"3"},onClick:f[0]||(f[0]=(...c)=>e.refresh&&e.refresh(...c))},re,512),[[U,e.showRefresh]]),l("img",{src:"data:image/png;base64,"+e.pointBackImgBase,ref:"canvas",alt:"",style:{width:"100%",height:"100%",display:"block"},onClick:f[1]||(f[1]=c=>e.bindingClick?e.canvasClick(c):void 0)},null,8,ce),(H(!0),I(Z,null,$(e.tempPoints,(c,n)=>(H(),I("div",{key:n,class:"point-area",style:A({"background-color":"#1abd6c",color:"#fff","z-index":9999,width:"20px",height:"20px","text-align":"center","line-height":"20px","border-radius":"50%",position:"absolute",top:parseInt(c.y-10)+"px",left:parseInt(c.x-10)+"px"})},V(n+1),5))),128))],4)]),l("div",{class:"verify-bar-area",style:A({width:e.setSize.imgWidth,color:this.barAreaColor,"border-color":this.barAreaBorderColor,"line-height":this.barSize.height})},[l("span",le,V(e.text),1)],4)])}const fe=ae(ie,[["render",he]]);export{fe as default};
