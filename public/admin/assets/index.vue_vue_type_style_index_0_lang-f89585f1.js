import{d as X,l as Z,r as g,a2 as D,h as d,c as m,a as r,b as Q,e as l,w as o,Z as W,u as s,s as M,q as n,i as O,t as L,F as k,T,v as Y,B,a3 as N,U as V,a1 as ee,K as le,V as ae,L as te,M as oe,E as ne,X as se}from"./index-6f32d09b.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                     *//* empty css                 */import{g as ie}from"./diy-44f366a0.js";const ue=["onClick"],re={class:"flex items-start"},de=["onClick"],pe={class:"mb-[16px]"},ce={class:"mb-[16px]"},ve=r("div",{class:"text-sm text-gray-400 select-text"},"路径必须以“/”开头，例：/app/pages/index/index",-1),me=r("div",{class:"text-sm text-gray-400 select-text"},"跳转外部链接“http”或“https”开头，例：https://baidu.com",-1),_e={class:"mb-[16px]"},fe={class:"mb-[16px]"},he=r("div",{class:"text-sm text-gray-400 select-text"},"仅支持小程序之间的跳转，不支持从其他渠道跳转小程序",-1),xe=r("div",{class:"text-sm text-gray-400 select-text"},"小程序路径格式如：app/pages/index/index",-1),ge={class:"mb-[16px]"},ye=r("div",{class:"text-sm text-gray-400 select-text"},"电话号码支持手机号码和固定电话",-1),be={key:3,class:"flex flex-wrap"},ke=["onClick"],Ve={class:"dialog-footer"},De=X({__name:"index",props:{modelValue:{type:Object,default:()=>{}},ignore:{type:Array,default:[]}},emits:["update:modelValue","confirm","success"],setup(F,{expose:K,emit:y}){const b=F,c=Z({get(){return b.modelValue},set(u){y("update:modelValue",u)}}),_=g(!1),f=g(!1),v=g([]),t=g(""),P=g([]),e=g([]),j=()=>{H(()=>{if(c.value.name!=""){e.value=N(c.value),t.value=e.value.parent;for(let u in v.value)v.value[u].name==t.value&&w(v.value[u])}_.value=!0,f.value=!0,y("confirm",f.value)})},H=(u=null)=>{ie({}).then(i=>{if(v.value=i.data,b.ignore&&b.ignore.length){for(let E in v.value)for(let h=0;h<b.ignore.length;h++)if(E==b.ignore[h]){delete v.value[E];break}}P.value=Object.values(v.value)[0].child_list,c.value.name!=""?e.value=N(c.value):e.value={parent:Object.values(v.value)[0].name},t.value=e.value.parent,u&&u()})},w=u=>{P.value=u.child_list,t.value=u.name},R=u=>{delete u.is_share,Object.assign(e.value,u)},S=()=>{c.value={name:"",parent:"",title:"",url:""}},$=()=>{if(t.value==="DIY_LINK"){if(!e.value.title){V({message:n("diyLinkNameNotEmpty"),type:"warning"});return}if(!e.value.url){V({message:n("diyLinkUrlNotEmpty"),type:"warning"});return}e.value.parent=t.value,e.value.name=t.value,e.value.action="",delete e.value.appid,delete e.value.mobile}else if(t.value=="DIY_PAGE")e.value.name=t.value,e.value.parent=t.value,e.value.action="decorate",delete e.value.appid,delete e.value.mobile;else if(t.value=="DIY_JUMP_OTHER_APPLET"){if(!e.value.appid){V({message:n("diyAppletIdNotEmpty"),type:"warning"});return}if(!e.value.page){V({message:n("diyAppletPageNotEmpty"),type:"warning"});return}e.value.name=t.value,e.value.parent=t.value,e.value.title="微信小程序-"+e.value.appid,e.value.action="",delete e.value.url,delete e.value.mobile}else if(t.value=="DIY_MAKE_PHONE_CALL"){if(!e.value.mobile){V({message:n("diyMakePhoneNotEmpty"),type:"warning"});return}e.value.name=t.value,e.value.parent=t.value,e.value.title="拨打电话："+e.value.mobile,e.value.action="",delete e.value.url,delete e.value.appid}c.value=N(e.value),_.value=!1,f.value=!1,y("confirm",f.value),y("success")},A=()=>{_.value=!1,f.value=!1,y("confirm",f.value)};return K({showDialog:_}),(u,i)=>{const E=D("Close"),h=ee,J=D("ArrowRight"),x=le,I=ae,p=te,q=oe,U=ne,z=se;return d(),m("div",null,[r("div",{onClick:j},[Q(u.$slots,"default",{},()=>[l(x,{modelValue:s(c).title,"onUpdate:modelValue":i[0]||(i[0]=a=>s(c).title=a),placeholder:s(n)("linkPlaceholder"),readonly:"",class:"link-input"},{suffix:o(()=>[r("div",{onClick:W(S,["stop"])},[s(c).name?(d(),M(h,{key:0},{default:o(()=>[l(E)]),_:1})):(d(),M(h,{key:1},{default:o(()=>[l(J)]),_:1}))],8,ue)]),_:1},8,["modelValue","placeholder"])])]),l(z,{modelValue:_.value,"onUpdate:modelValue":i[6]||(i[6]=a=>_.value=a),title:s(n)("selectLinkTips"),width:"40%","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1,onClose:A},{footer:o(()=>[r("span",Ve,[l(U,{onClick:A},{default:o(()=>[O(L(s(n)("cancel")),1)]),_:1}),l(U,{type:"primary",onClick:$},{default:o(()=>[O(L(s(n)("confirm")),1)]),_:1})])]),default:o(()=>[r("div",re,[l(I,{class:"w-[140px] border-r h-[350px]"},{default:o(()=>[(d(!0),m(k,null,T(v.value,(a,C)=>(d(),m("div",{key:C,class:Y(["h-[40px] leading-[40px] cursor-pointer hover:bg-primary-light-9 px-[10px] hover:text-primary",[a.name==t.value?"bg-primary-light-9 text-primary":""]]),onClick:G=>w(a)},L(a.title),11,de))),128))]),_:1}),l(I,{class:"pl-4 h-[350px] flex-1"},{default:o(()=>[l(q,{"label-width":"100px",class:"px-[10px]"},{default:o(()=>[t.value=="DIY_LINK"?(d(),m(k,{key:0},[r("div",pe,[l(p,{label:s(n)("diyLinkName")},{default:o(()=>[l(x,{modelValue:e.value.title,"onUpdate:modelValue":i[1]||(i[1]=a=>e.value.title=a),placeholder:s(n)("diyLinkNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),r("div",ce,[l(p,{label:s(n)("diyLinkUrl")},{default:o(()=>[l(x,{modelValue:e.value.url,"onUpdate:modelValue":i[2]||(i[2]=a=>e.value.url=a),placeholder:s(n)("diyLinkUrlPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(p,{label:" "},{default:o(()=>[ve]),_:1}),l(p,{label:" "},{default:o(()=>[me]),_:1})],64)):B("",!0),t.value=="DIY_JUMP_OTHER_APPLET"?(d(),m(k,{key:1},[r("div",_e,[l(p,{label:s(n)("diyAppletId")},{default:o(()=>[l(x,{modelValue:e.value.appid,"onUpdate:modelValue":i[3]||(i[3]=a=>e.value.appid=a),placeholder:s(n)("diyAppletIdPlaceholder"),clearable:"",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),r("div",fe,[l(p,{label:s(n)("diyAppletPage")},{default:o(()=>[l(x,{modelValue:e.value.page,"onUpdate:modelValue":i[4]||(i[4]=a=>e.value.page=a),placeholder:s(n)("diyAppletPagePlaceholder"),clearable:"",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(p,{label:" "},{default:o(()=>[he]),_:1}),l(p,{label:" "},{default:o(()=>[xe]),_:1})],64)):B("",!0),t.value=="DIY_MAKE_PHONE_CALL"?(d(),m(k,{key:2},[r("div",ge,[l(p,{label:s(n)("diyMakePhone")},{default:o(()=>[l(x,{modelValue:e.value.mobile,"onUpdate:modelValue":i[5]||(i[5]=a=>e.value.mobile=a),placeholder:s(n)("diyMakePhonePlaceholder"),clearable:"",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(p,{label:" "},{default:o(()=>[ye]),_:1})],64)):(d(),m("div",be,[(d(!0),m(k,null,T(P.value,(a,C)=>(d(),m("div",{key:C,class:Y(["border border-br rounded-[3px] mr-[10px] mb-[10px] px-4 h-[32px] leading-[32px] cursor-pointer hover:bg-primary-light-9 px-[10px] hover:text-primary",[a.name==e.value.name?"border-primary text-primary":""]]),onClick:G=>R(a)},L(a.title),11,ke))),128))]))]),_:1})]),_:1})])]),_:1},8,["modelValue","title"])])}}});export{De as _};
