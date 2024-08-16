import{X as e,Y as a,Z as t,_ as l,a0 as i,g as s,h as r,o as d,c,w as o,b as n,n as u,Q as p,i as v,d as m,r as f,K as h,bq as y,a8 as _,br as g,A as x,y as b,z as k,f as C,e as w,O as S,P as V,ah as z,v as A,ag as j,p as P,bs as $,j as I,aP as q,t as N,u as B,bt as T,bu as U,a as W,D as E,C as M,F as O}from"./index-ef55c51f.js";import{_ as R}from"./u-input.dca6912e.js";import{_ as D,a as F}from"./u-form.a93afe0f.js";import{_ as H}from"./u-loading-icon.26cceccf.js";import{_ as X}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as K}from"./u-popup.eb4425a0.js";import{m as Q}from"./manifest.3a40c0c0.js";import"./u-icon.ea2e3f36.js";import"./u-line.54e03fd2.js";import"./u-transition.f866f84e.js";const Y=X({name:"u-switch",mixins:[a,t,{props:{loading:{type:Boolean,default:()=>e.switch.loading},disabled:{type:Boolean,default:()=>e.switch.disabled},size:{type:[String,Number],default:()=>e.switch.size},activeColor:{type:String,default:()=>e.switch.activeColor},inactiveColor:{type:String,default:()=>e.switch.inactiveColor},modelValue:{type:[Boolean,String,Number],default:()=>e.switch.value},activeValue:{type:[String,Number,Boolean],default:()=>e.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:()=>e.switch.inactiveValue},asyncChange:{type:Boolean,default:()=>e.switch.asyncChange},space:{type:[String,Number],default:()=>e.switch.space}}}],watch:{modelValue:{immediate:!0,handler(e){e!==this.inactiveValue&&this.activeValue}}},data:()=>({bgColor:"#ffffff"}),computed:{isActive(){return this.modelValue===this.activeValue},switchStyle(){let e={};return e.width=l(2*this.size+2),e.height=l(Number(this.size)+2),this.customInactiveColor&&(e.borderColor="rgba(0, 0, 0, 0)"),e.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,e},nodeStyle(){let e={};e.width=l(this.size-this.space),e.height=l(this.size-this.space);const a=this.isActive?l(this.space):l(this.size);return e.transform=`translateX(-${a})`,e},bgStyle(){let e={};return e.width=l(2*Number(this.size)-this.size/2),e.height=l(this.size),e.backgroundColor=this.inactiveColor,e.transform=`scale(${this.isActive?0:1})`,e},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},emits:["update:modelValue","change"],methods:{addStyle:i,clickHandler(){if(!this.disabled&&!this.loading){const e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("update:modelValue",e),this.$nextTick((()=>{this.$emit("change",e)}))}}}},[["render",function(e,a,t,l,i,m){const f=v,h=s(r("u-loading-icon"),H);return d(),c(f,{class:p(["u-switch cursor-pointer",[e.disabled&&"u-switch--disabled"]]),style:u([m.switchStyle,m.addStyle(e.customStyle)]),onClick:m.clickHandler},{default:o((()=>[n(f,{class:"u-switch__bg",style:u([m.bgStyle])},null,8,["style"]),n(f,{class:p(["u-switch__node",[e.modelValue&&"u-switch__node--on"]]),style:u([m.nodeStyle]),ref:"u-switch__node"},{default:o((()=>[n(h,{show:e.loading,mode:"circle",timingFunction:"linear",color:e.modelValue?e.activeColor:"#AAABAD",size:.6*e.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-09bf48b9"]]),Z=m({__name:"area-select",props:{areaId:{type:Number,default:0}},emits:["complete"],setup(e,{expose:a,emit:t}){const l=e,i=f(!1),u=h({province:[],city:[],district:[]}),m=f("province"),P=h({province:null,city:null,district:null});y(0).then((({data:e})=>{u.province=e})).catch(),_((()=>l.areaId),((e,a)=>{e&&!a&&g(e).then((({data:e})=>{e.province&&(P.province=e.province),e.city&&(P.city=e.city),e.district&&(P.district=e.district)}))}),{immediate:!0}),_((()=>P.province),(()=>{y(P.province.id).then((({data:e})=>{if(u.city=e,m.value="city",P.city){let a=!1;for(let t=0;t<e.length;t++)if(P.city.id==e[t].id){a=!0;break}a||(P.city=null)}})).catch()}),{deep:!0}),_((()=>P.city),(e=>{e?y(P.city.id).then((({data:e})=>{if(u.district=e,m.value="district",P.district){let a=!1;for(let t=0;t<e.length;t++)if(P.district.id==e[t].id){a=!0;break}a||(P.district=null)}})).catch():(u.district=[],P.district=null)}),{deep:!0}),_((()=>P.district),(e=>{e&&(m.value="district",t("complete",P),i.value=!1)}),{deep:!0});return a({open:()=>{i.value=!0}}),(e,a)=>{const t=v,l=j,f=s(r("u-popup"),K);return d(),c(f,{show:i.value,onClose:a[4]||(a[4]=e=>i.value=!1),mode:"bottom",round:10},{default:o((()=>[n(t,{onTouchmove:a[3]||(a[3]=x((()=>{}),["prevent","stop"])),class:"popup-common"},{default:o((()=>[n(t,{class:"title"},{default:o((()=>[b("请选择地区")])),_:1}),n(t,{class:"flex p-[30rpx] pt-[0] text-sm font-500"},{default:o((()=>[u.province.length?(d(),c(t,{key:0,class:p(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"province"==m.value}]),onClick:a[0]||(a[0]=e=>m.value="province")},{default:o((()=>[P.province?(d(),c(t,{key:0},{default:o((()=>[b(k(P.province.name),1)])),_:1})):(d(),c(t,{key:1},{default:o((()=>[b("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0),u.city.length?(d(),c(t,{key:1,class:p(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"city"==m.value}]),onClick:a[1]||(a[1]=e=>m.value="city")},{default:o((()=>[P.city?(d(),c(t,{key:0},{default:o((()=>[b(k(P.city.name),1)])),_:1})):(d(),c(t,{key:1},{default:o((()=>[b("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0),u.district.length?(d(),c(t,{key:2,class:p(["flex-1 pr-[10rpx]",{"text-[var(--primary-color)]":"district"==m.value}]),onClick:a[2]||(a[2]=e=>m.value="district")},{default:o((()=>[P.district?(d(),c(t,{key:0},{default:o((()=>[b(k(P.district.name),1)])),_:1})):(d(),c(t,{key:1},{default:o((()=>[b("请选择")])),_:1}))])),_:1},8,["class"])):C("v-if",!0)])),_:1}),n(l,{"scroll-y":"true",class:"h-[50vh]"},{default:o((()=>[n(t,{class:"flex p-[30rpx] pt-0 text-sm"},{default:o((()=>[u.province.length?w((d(),c(t,{key:0},{default:o((()=>[(d(!0),S(V,null,z(u.province,(e=>(d(),c(t,{class:p(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":P.province&&P.province.id==e.id}]),onClick:a=>P.province=e},{default:o((()=>[b(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[A,"province"==m.value]]):C("v-if",!0),u.city.length?w((d(),c(t,{key:1},{default:o((()=>[(d(!0),S(V,null,z(u.city,(e=>(d(),c(t,{class:p(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":P.city&&P.city.id==e.id}]),onClick:a=>P.city=e},{default:o((()=>[b(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[A,"city"==m.value]]):C("v-if",!0),u.district.length?w((d(),c(t,{key:2},{default:o((()=>[(d(!0),S(V,null,z(u.district,(e=>(d(),c(t,{class:p(["h-[80rpx] flex items-center",{"text-[var(--primary-color)]":P.district&&P.district.id==e.id}]),onClick:a=>P.district=e},{default:o((()=>[b(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1},512)),[[A,"district"==m.value]]):C("v-if",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}}),G=X(m({__name:"address_edit",setup(e){const a=f({id:0,name:"",mobile:"",province_id:0,city_id:0,district_id:0,lat:"",lng:"",address:"",address_name:"",full_address:"",is_default:0,area:""}),t=f(),l=f(null),i=f(""),m=f(!1),h=f(!1),y=f("address"),_=f(2);f(null),P((e=>{_.value=e.isSelectMap||"";const t=uni.getStorageSync("selectAddressCallback");if(e.id)$(e.id).then((e=>{e.data&&Object.assign(a.value,e.data),t&&(y.value="express"==t.delivery?"address":"locationAddress")}));else if(e.name){uni.getStorageSync("addressInfo")&&Object.assign(a.value,uni.getStorageSync("addressInfo")),a.value.address=e.name,A(e.latng);var l=j("latng").split(",");a.value.lat=l[0],a.value.lng=l[1]}i.value=e.source||"",t&&(y.value="express"==t.delivery?"address":"locationAddress")}));const g=I((()=>({name:{type:"string",required:!0,message:O("namePlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:O("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,t){/^1[3-9]\d{9}$/.test(a)?t():t(new Error(O("mobileError")))}}],area:{validator(){let e=!0;return uni.$u.test.isEmpty(a.value.area)&&uni.$u.test.isEmpty(a.value.address_name)&&(e=!1),e},message:O("selectAreaPlaceholder")},address:{type:"string",required:!0,message:O("addressPlaceholder"),trigger:["blur","change"]}}))),C=()=>{h.value=!0,t.value.open()},w=e=>{!h.value||a.value.province_id!=e.province.id&&a.value.city_id==e.city.id&&a.value.district_id==e.district.id||(a.value.lat="",a.value.lng=""),a.value.province_id=e.province.id||0,a.value.city_id=e.city.id||0,a.value.district_id=e.district.id||0,a.value.area=`${e.province.name||""}${e.city.name||""}${e.district.name||""}`,h.value=!1},S=f(!1),V=()=>{const e=a.value.id?T:U;l.value.validate().then((()=>{if(!S.value){if(S.value=!0,m.value=!0,a.value.full_address=a.value.area+a.value.address,1==_.value&&!a.value.lat&&!a.value.lng)return N({title:"缺少经纬度，请在地图上重新选点",icon:"none"}),S.value=!1,m.value=!1,!1;e(a.value).then((e=>{S.value=!1,setTimeout((()=>{if(m.value=!1,"shop_order_payment"==i.value){const t=uni.getStorageSync("selectAddressCallback");t&&(t.address_id=e.data.id||a.value.id,uni.setStorage({key:"selectAddressCallback",data:t,success(){W({url:t.back,mode:"redirectTo"})}}))}else W({url:"/app/pages/member/address",mode:"redirectTo",param:{source:i.value}})}),1e3)})).catch((()=>{S.value=!1,m.value=!1}))}}))},z=()=>{var e=a.value;uni.setStorageSync("addressInfo",e);let t=location.origin+location.pathname+"?source="+i.value;_.value&&(t=t+"&isSelectMap="+_.value),window.location.href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl="+encodeURIComponent(t)+"&key="+Q.h5.sdkConfigs.maps.qqmap.key+"&referer=myapp"},A=e=>{q({latlng:e}).then((e=>{e.data?(a.value.full_address="",a.value.full_address+=null!=e.data.province?e.data.province:"",a.value.full_address+=null!=e.data.city?""+e.data.city:"",a.value.full_address+=null!=e.data.district?""+e.data.district:"",a.value.address_name=a.value.full_address.replace(/-/g,""),a.value.area=e.data.province+e.data.city+e.data.district||e.data.full_address,a.value.province_id=null!=e.data.province_id?e.data.province_id:0,a.value.city_id=null!=e.data.city_id?e.data.city_id:0,a.value.district_id=null!=e.data.district_id?e.data.district_id:0):N({title:e.msg,icon:"none"})}))},j=e=>{for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var l=a[t].split("=");if(l[0]==e)return l[1]}return!1};return(e,i)=>{const f=s(r("u-input"),R),h=s(r("u-form-item"),D),A=v,j=E,P=s(r("u-switch"),Y),$=s(r("u-form"),F),I=M,q=s(r("area-select"),Z);return d(),c(A,{class:"bg-[var(--page-bg-color)] min-h-[100vh] overflow-hidden address-edit",style:u(e.themeColor())},{default:o((()=>[n($,{labelPosition:"left",model:a.value,errorType:"toast",rules:B(g),ref_key:"formRef",ref:l},{default:o((()=>[n(A,{class:"sidebar-marign card-template mt-[var(--top-m)] py-[20rpx]"},{default:o((()=>[n(A,{class:""},{default:o((()=>[n(h,{label:B(O)("name"),prop:"name",labelWidth:"200rpx"},{default:o((()=>[n(f,{fontSize:"28rpx",modelValue:a.value.name,"onUpdate:modelValue":i[0]||(i[0]=e=>a.value.name=e),modelModifiers:{trim:!0},border:"none",clearable:"",maxlength:"25",placeholderStyle:"color: #888",placeholder:B(O)("namePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(A,{class:"mt-[16rpx]"},{default:o((()=>[n(h,{label:B(O)("mobile"),prop:"mobile",labelWidth:"200rpx"},{default:o((()=>[n(f,{fontSize:"28rpx",modelValue:a.value.mobile,"onUpdate:modelValue":i[1]||(i[1]=e=>a.value.mobile=e),modelModifiers:{trim:!0},type:"number",maxlength:"11",border:"none",clearable:"",placeholder:B(O)("mobilePlaceholder"),placeholderStyle:"color: #888"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(A,{class:"mt-[16rpx]"},{default:o((()=>[n(h,{label:B(O)("selectArea"),prop:"area",labelWidth:"200rpx"},{default:o((()=>["address"==y.value&&1!=_.value?(d(),c(A,{key:0,class:"flex w-full items-center h-[52rpx]",onClick:C},{default:o((()=>[a.value.area?(d(),c(A,{key:1,class:"text-[28rpx] flex-1 leading-[1.4]"},{default:o((()=>[b(k(a.value.area),1)])),_:1})):(d(),c(A,{key:0,class:"text-[#888] text-[28rpx] flex-1"},{default:o((()=>[b(k(B(O)("selectAreaPlaceholder")),1)])),_:1})),n(A,{onClick:x(z,["stop"]),class:"flex items-center"},{default:o((()=>[n(j,{class:"nc-iconfont nc-icon-dizhiguanliV6xx mr-[4rpx] text-[32rpx] text-[#e93323]"}),n(j,{class:"text-[24rpx] whitespace-nowrap text-[#e93323]"},{default:o((()=>[b("定位")])),_:1})])),_:1},8,["onClick"])])),_:1})):(d(),c(A,{key:1,class:"flex justify-between items-center flex-1 h-[52rpx]",onClick:z},{default:o((()=>[a.value.area||a.value.address_name?(d(),c(A,{key:0,class:"text-[28rpx] text-[#303133] leading-[1.4]"},{default:o((()=>[b(k(a.value.area||a.value.address_name),1)])),_:1})):(d(),c(A,{key:1,class:"text-[#888] text-[28rpx]"},{default:o((()=>[b(k(B(O)("selectAddressPlaceholder")),1)])),_:1})),n(A,{class:"flex items-center"},{default:o((()=>[n(j,{class:"nc-iconfont nc-icon-dizhiguanliV6xx text-[32rpx] mr-[4rpx] text-[#e93323]"}),n(j,{class:"text-[24rpx] whitespace-nowrap text-[#e93323]"},{default:o((()=>[b("定位")])),_:1})])),_:1})])),_:1}))])),_:1},8,["label"])])),_:1}),n(A,{class:"mt-[16rpx]"},{default:o((()=>[n(h,{label:B(O)("address"),prop:"address",labelWidth:"200rpx"},{default:o((()=>[n(f,{fontSize:"28rpx",modelValue:a.value.address,"onUpdate:modelValue":i[2]||(i[2]=e=>a.value.address=e),border:"none",clearable:"",maxlength:"120",placeholder:B(O)("addressPlaceholder"),placeholderStyle:"color: #888"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1})])),_:1}),n(A,{class:"sidebar-marign card-template mt-[var(--top-m)] py-[10rpx]"},{default:o((()=>[n(h,{label:B(O)("defaultAddress"),prop:"name","border-bottom":!1,labelWidth:"200rpx"},{default:o((()=>[n(P,{modelValue:a.value.is_default,"onUpdate:modelValue":i[3]||(i[3]=e=>a.value.is_default=e),size:"20",activeValue:1,inactiveValue:0,activeColor:"var(--primary-color)",inactiveColor:"var(--temp-bg)"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1},8,["model","rules"]),n(A,{class:"left-[var(--sidebar-m)] right-[var(--sidebar-m)] fixed bottom-[30rpx]"},{default:o((()=>[n(I,{"hover-class":"none",class:p(["primary-btn-bg !text-[#fff] h-[80rpx] leading-[80rpx] font-500 rounded-[100rpx] text-[26rpx]",{"opacity-50":m.value}]),onClick:V,disabled:m.value,loading:S.value},{default:o((()=>[b(k(B(O)("save")),1)])),_:1},8,["class","disabled","loading"])])),_:1}),n(q,{ref_key:"areaRef",ref:t,onComplete:w,"area-id":a.value.district_id},null,8,["area-id"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-7efd5aea"]]);export{G as default};
