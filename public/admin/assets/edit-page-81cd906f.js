import{d as M,Q as T,A as F,r as E,a2 as G,h as f,c as N,R as S,a0 as w,u as l,a as i,t as d,q as s,e as a,w as r,F as A,s as V,B as y,i as g,v as h,K as O,L as W,M as q,aT as K,a1 as Q,au as X,av as J,E as Y,X as Z,bv as ll,bz as el}from"./index-99f00cf3.js";/* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as tl}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";/* empty css                        *//* empty css                  *//* empty css                  *//* empty css                   */import{_ as al}from"./index.vue_vue_type_style_index_0_lang-572087a4.js";/* empty css                       *//* empty css                 */import ol from"./index-015c0c3e.js";/* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";import{u as sl}from"./diy-c8337ab9.js";const rl=""+new URL("nav_style1-05ddbdee.jpg",import.meta.url).href,il=""+new URL("nav_style2-f640437f.jpg",import.meta.url).href,dl=""+new URL("nav_style3-e7edd5cf.jpg",import.meta.url).href,nl=""+new URL("nav_style4-ee5f97a2.jpg",import.meta.url).href,pl={class:"content-wrap"},ml={class:"edit-attr-item-wrap"},ul={class:"mb-[10px]"},bl={class:"text-sm text-gray-400"},gl={class:"edit-attr-item-wrap"},cl={class:"mb-[10px]"},_l={class:"text-sm text-gray-400"},fl={class:"text-sm text-gray-400"},xl={class:"flex"},yl={class:"text-sm text-gray-400 leading-[1.5]"},hl={class:"text-sm text-gray-400 mt-[10px]"},Sl={class:"edit-attr-item-wrap"},wl={class:"mb-[10px]"},Vl={class:"text-sm text-gray-400"},vl={class:"flex flex-wrap"},Bl=i("img",{class:"max-w-[100%] max-h-[100%]",src:rl},null,-1),Cl=[Bl],kl=i("img",{class:"max-w-[100%] max-h-[100%]",src:il},null,-1),Ul=[kl],Tl=i("img",{class:"max-w-[100%] max-h-[100%]",src:dl},null,-1),El=[Tl],Nl=i("img",{class:"max-w-[100%] max-h-[100%]",src:nl},null,-1),Al=[Nl],jl={class:"dialog-footer"},Rl={class:"style-wrap"},Pl={class:"edit-attr-item-wrap"},Il={class:"mb-[10px]"},$l={class:"text-sm text-gray-400 ml-[80px] mb-[10px]"},zl={class:"edit-attr-item-wrap"},Hl={class:"mb-[10px]"},Ll={class:"edit-attr-item-wrap"},Dl={class:"mb-[10px]"},Ml=M({__name:"edit-page",setup(Fl,{expose:j}){const e=sl();T(()=>e.global.bgUrl,(_,t)=>{const m=new Image;m.src=F(e.global.bgUrl),m.onload=async()=>{e.global.imgWidth=m.width,e.global.imgHeight=m.height},e.global.bgUrl||(e.global.imgWidth="",e.global.imgHeight="")});const R=_=>{e.value.forEach((t,m)=>{t.margin.both=_})};T(()=>e.global,(_,t)=>{p.value=_.topStatusBar.style},{deep:!0});const c=E(!1),P=()=>{c.value=!0},p=E("style-1"),I=()=>{switch(p.value){case"style-1":e.global.topStatusBar.styleName="风格1";break;case"style-2":e.global.topStatusBar.styleName="风格2";break;case"style-3":e.global.topStatusBar.styleName="风格3";break;case"style-4":e.global.topStatusBar.styleName="风格4";break}e.global.topStatusBar.style=p.value,c.value=!1};return j({}),(_,t)=>{const m=O,n=W,u=q,v=K,$=G("ArrowRight"),z=Q,B=ol,x=X,C=J,H=al,k=Y,L=Z,b=ll,D=tl,U=el;return f(),N(A,null,[S(i("div",pl,[i("div",ml,[i("h3",ul,d(l(s)("pageContent")),1),a(u,{"label-width":"80px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("diyPageTitle")},{default:r(()=>[a(m,{modelValue:l(e).pageTitle,"onUpdate:modelValue":t[0]||(t[0]=o=>l(e).pageTitle=o),modelModifiers:{trim:!0},placeholder:l(s)("diyPageTitlePlaceholder"),clearable:"",maxlength:"12","show-word-limit":""},null,8,["modelValue","placeholder"]),i("div",bl,d(l(s)("pageTitleTips")),1)]),_:1},8,["label"])]),_:1})]),i("div",gl,[i("h3",cl,d(l(s)("statusBarContent")),1),a(u,{"label-width":"80px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("topStatusBarNav"),class:"display-block"},{default:r(()=>[a(v,{modelValue:l(e).global.topStatusBar.isShow,"onUpdate:modelValue":t[1]||(t[1]=o=>l(e).global.topStatusBar.isShow=o)},null,8,["modelValue"]),i("div",_l,d(l(s)("statusBarSwitchTips")),1)]),_:1},8,["label"]),l(e).global.topStatusBar.isShow?(f(),N(A,{key:0},[a(n,{label:l(s)("diyTitle")},{default:r(()=>[a(m,{modelValue:l(e).global.title,"onUpdate:modelValue":t[2]||(t[2]=o=>l(e).global.title=o),modelModifiers:{trim:!0},placeholder:l(s)("diyTitlePlaceholder"),clearable:"",maxlength:"12","show-word-limit":""},null,8,["modelValue","placeholder"]),i("div",fl,d(l(s)("titleTips")),1)]),_:1},8,["label"]),a(n,{label:l(s)("selectStyle"),class:"display-block"},{default:r(()=>[i("div",xl,[i("span",{class:"text-primary flex-1 cursor-pointer",onClick:P},d(l(e).global.topStatusBar.styleName),1),a(z,null,{default:r(()=>[a($)]),_:1})]),i("div",yl,d(l(s)("styleShowTips")),1)]),_:1},8,["label"]),["style-2","style-3"].indexOf(l(e).global.topStatusBar.style)>-1?(f(),V(n,{key:0,label:l(s)("topStatusBarImg")},{default:r(()=>[a(B,{modelValue:l(e).global.topStatusBar.imgUrl,"onUpdate:modelValue":t[3]||(t[3]=o=>l(e).global.topStatusBar.imgUrl=o),limit:1},null,8,["modelValue"]),i("div",hl,d(l(s)("topStatusBarImgTips")),1)]),_:1},8,["label"])):y("",!0),l(e).global.topStatusBar.style=="style-3"?(f(),V(n,{key:1,label:l(s)("topStatusBarSearchName")},{default:r(()=>[a(m,{modelValue:l(e).global.topStatusBar.inputPlaceholder,"onUpdate:modelValue":t[4]||(t[4]=o=>l(e).global.topStatusBar.inputPlaceholder=o),modelModifiers:{trim:!0},placeholder:l(s)("topStatusBarSearchNamePlaceholder"),clearable:"",maxlength:"12","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):y("",!0),S(a(n,{label:l(s)("textAlign")},{default:r(()=>[a(C,{modelValue:l(e).global.topStatusBar.textAlign,"onUpdate:modelValue":t[5]||(t[5]=o=>l(e).global.topStatusBar.textAlign=o)},{default:r(()=>[a(x,{label:"left"},{default:r(()=>[g(d(l(s)("textAlignLeft")),1)]),_:1}),a(x,{label:"center"},{default:r(()=>[g(d(l(s)("textAlignCenter")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[w,l(e).global.topStatusBar.style=="style-1"]]),["style-2","style-3"].indexOf(l(e).global.topStatusBar.style)>-1?(f(),V(n,{key:2,label:l(s)("link")},{default:r(()=>[a(H,{modelValue:l(e).global.topStatusBar.link,"onUpdate:modelValue":t[6]||(t[6]=o=>l(e).global.topStatusBar.link=o)},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0)],64)):y("",!0)]),_:1})]),i("div",Sl,[i("h3",wl,d(l(s)("bottomNavContent")),1),a(u,{"label-width":"80px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("tabbar"),class:"display-block"},{default:r(()=>[a(v,{modelValue:l(e).global.bottomTabBarSwitch,"onUpdate:modelValue":t[7]||(t[7]=o=>l(e).global.bottomTabBarSwitch=o)},null,8,["modelValue"]),i("div",Vl,d(l(s)("tabbarSwitchTips")),1)]),_:1},8,["label"])]),_:1})]),a(L,{modelValue:c.value,"onUpdate:modelValue":t[13]||(t[13]=o=>c.value=o),title:l(s)("selectStyle"),width:"800px"},{footer:r(()=>[i("span",jl,[a(k,{onClick:t[12]||(t[12]=o=>c.value=!1)},{default:r(()=>[g(d(l(s)("cancel")),1)]),_:1}),a(k,{type:"primary",onClick:I},{default:r(()=>[g(d(l(s)("confirm")),1)]),_:1})])]),default:r(()=>[i("div",vl,[i("div",{class:h(["flex items-center justify-center overflow-hidden w-[32%] h-[100px] mr-[2%] mb-[15px] cursor-pointer border bg-gray-50",{"border-primary":p.value=="style-1"}]),onClick:t[8]||(t[8]=o=>p.value="style-1")},Cl,2),i("div",{class:h(["flex items-center justify-center overflow-hidden w-[32%] h-[100px] mr-[2%] mb-[15px] cursor-pointer border bg-gray-50",{"border-primary":p.value=="style-2"}]),onClick:t[9]||(t[9]=o=>p.value="style-2")},Ul,2),i("div",{class:h(["flex items-center justify-center overflow-hidden w-[32%] h-[100px] mb-[15px] cursor-pointer border bg-gray-50",{"border-primary":p.value=="style-3"}]),onClick:t[10]||(t[10]=o=>p.value="style-3")},El,2),i("div",{class:h(["flex items-center justify-center overflow-hidden w-[32%] h-[100px] mr-[2%] cursor-pointer border bg-gray-50",{"border-primary":p.value=="style-4"}]),onClick:t[11]||(t[11]=o=>p.value="style-4")},Al,2)])]),_:1},8,["modelValue","title"])],512),[[w,l(e).editTab=="content"]]),S(i("div",Rl,[i("div",Pl,[i("h3",Il,d(l(s)("pageStyle")),1),a(u,{"label-width":"115px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("pageBgColor")},{default:r(()=>[a(b,{modelValue:l(e).editComponent.pageStartBgColor,"onUpdate:modelValue":t[14]||(t[14]=o=>l(e).editComponent.pageStartBgColor=o),"show-alpha":"",predefine:l(e).predefineColors},null,8,["modelValue","predefine"]),a(D,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),a(b,{modelValue:l(e).editComponent.pageEndBgColor,"onUpdate:modelValue":t[15]||(t[15]=o=>l(e).editComponent.pageEndBgColor=o),"show-alpha":"",predefine:l(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),a(n,{label:l(s)("bgGradientAngle")},{default:r(()=>[a(C,{modelValue:l(e).editComponent.pageGradientAngle,"onUpdate:modelValue":t[16]||(t[16]=o=>l(e).editComponent.pageGradientAngle=o)},{default:r(()=>[a(x,{label:"to bottom"},{default:r(()=>[g(d(l(s)("topToBottom")),1)]),_:1}),a(x,{label:"to right"},{default:r(()=>[g(d(l(s)("leftToRight")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(n,{label:l(s)("bgHeightScale")},{default:r(()=>[a(U,{modelValue:l(e).global.bgHeightScale,"onUpdate:modelValue":t[17]||(t[17]=o=>l(e).global.bgHeightScale=o),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider"},null,8,["modelValue"])]),_:1},8,["label"]),i("div",$l,d(l(s)("bgHeightScaleTip")),1),a(n,{label:l(s)("bgUrl")},{default:r(()=>[a(B,{modelValue:l(e).global.bgUrl,"onUpdate:modelValue":t[18]||(t[18]=o=>l(e).global.bgUrl=o),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",zl,[i("h3",Hl,d(l(s)("statusBarStyle")),1),a(u,{"label-width":"115px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("topStatusBarBgColor"),class:"display-block"},{default:r(()=>[a(b,{modelValue:l(e).global.topStatusBar.bgColor,"onUpdate:modelValue":t[19]||(t[19]=o=>l(e).global.topStatusBar.bgColor=o),"show-alpha":""},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:l(s)("rollTopStatusBarBgColor"),class:"display-block"},{default:r(()=>[a(b,{modelValue:l(e).global.topStatusBar.rollBgColor,"onUpdate:modelValue":t[20]||(t[20]=o=>l(e).global.topStatusBar.rollBgColor=o),"show-alpha":""},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:l(s)("topStatusBarTextColor"),class:"display-block"},{default:r(()=>[a(b,{modelValue:l(e).global.topStatusBar.textColor,"onUpdate:modelValue":t[21]||(t[21]=o=>l(e).global.topStatusBar.textColor=o),"show-alpha":""},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:l(s)("rollTopStatusBarTextColor"),class:"display-block"},{default:r(()=>[a(b,{modelValue:l(e).global.topStatusBar.rollTextColor,"onUpdate:modelValue":t[22]||(t[22]=o=>l(e).global.topStatusBar.rollTextColor=o),"show-alpha":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",Ll,[i("h3",Dl,d(l(s)("marginSet")),1),a(u,{"label-width":"115px",class:"px-[10px]"},{default:r(()=>[a(n,{label:l(s)("marginBoth")},{default:r(()=>[a(U,{modelValue:l(e).global.template.margin.both,"onUpdate:modelValue":t[23]||(t[23]=o=>l(e).global.template.margin.both=o),"show-input":"",size:"small",onInput:R,class:"ml-[10px] diy-nav-slider"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})])],512),[[w,l(e).editTab=="style"]])],64)}}}),ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ml},Symbol.toStringTag,{value:"Module"}));export{ne as _};
