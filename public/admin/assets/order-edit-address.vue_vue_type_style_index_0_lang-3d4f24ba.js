import{d as me,r as v,n as I,l as ye,q as o,aK as fe,co as ke,Q as w,cP as V,aq as ge,h as u,s as b,w as c,a as S,e as s,i as U,t as M,u as n,R as Z,c as k,F as L,T as C,B,v as he,a$ as be,aJ as xe,cQ as we,au as Le,av as Ve,L as Ce,K as Ee,ac as De,aD as Me,M as Te,E as Fe,X as Pe,Y as Re}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{j as qe,i as Ae}from"./delivery-8329da8a.js";import{n as ee,p as Ie,q as Se}from"./order-b4e82541.js";import{l as Ue}from"./weapp-3dcfdbcd.js";import{a as Be,c as je,l as Ne}from"./qqmap-011f3cfb.js";const $e={id:"container",class:"w-[500px] h-[270px] relative"},Ge={key:0,class:"text-[#f52222] text-[12px] line-height-[15px]"},Ke={class:"dialog-footer"},vt=me({__name:"order-edit-address",emits:["complete"],setup(Oe,{expose:te,emit:j}){const x=v(!1),y=v(!1),ae=v([]),N=v([]),re=v(!1),$=v([]);qe({}).then(a=>{ae.value=a.data}),Ue().then(a=>{re.value=a.data.is_trade_managed});const e=I({...{order_id:0,delivery_type:"",taker_name:"",taker_mobile:"",taker_latitude:"",taker_longitude:"",taker_full_address:"",taker_address:"",taker_province:0,taker_city:0,taker_district:0,is_delivery_address:0,is_refund_address:0,is_default_delivery:0,is_default_refund:0,take_store_id:""}}),G=v(),le=ye(()=>({delivery_type:[{required:!0,message:o("deliveryTypePlaceholder"),trigger:"blur"}],taker_name:[{required:!0,validator:ie,trigger:"blur"}],taker_mobile:[{required:!0,validator:oe,trigger:"blur"}],address_area:[{required:!0,validator:(a,t,r)=>{e.taker_province||r(new Error(o("provincePlaceholder"))),e.taker_city||r(new Error(o("cityPlaceholder"))),m.district.length&&!e.taker_district&&r(new Error(o("districtPlaceholder"))),e.taker_address||r(new Error(o("detailedAddress"))),r()}}]})),ie=(a,t,r)=>{e.delivery_type=="express"&&t===""?r(new Error(o("contactsPlaceholder"))):r()},oe=(a,t,r)=>{if(e.delivery_type=="express"||e.delivery_type=="local_delivery"){const i=/^1[3-9]\d{9}$/;t===""?r(new Error(o("ContactInformationPlaceholder"))):t.length!=11?r(new Error("请输入11位手机号")):i.test(t)||r(new Error("请输入正确的手机号"))}r()},de=a=>{e.take_store_id=a},T=()=>{e.taker_address=""},se=async a=>{y.value||!a||await a.validate(async t=>{if(t)if(y.value=!0,_.value=="express"||_.value=="local_delivery"){const r=[e.taker_province?q(m.province,e.taker_province):"",e.taker_city?q(m.city,e.taker_city):"",e.taker_district?q(m.district,e.taker_district):"",e.taker_address];e.taker_full_address=r.join(""),e.delivery_type=_.value,ee(e).then(i=>{y.value=!1,x.value=!1,j("complete"),Y()}).catch(()=>{y.value=!1})}else{const r={order_id:e.order_id,delivery_type:_.value,take_store_id:e.take_store_id};ee(r).then(i=>{y.value=!1,x.value=!1,j("complete")}).catch(()=>{y.value=!1})}})},ne=a=>{Se(a).then(t=>{for(const r in e)t.data[r]&&(e[r]=t.data[r]);K(e.delivery_type),y.value=!1})},ce=async a=>{y.value=!0;const t={order_id:a.order_id,delivery_type:a.delivery_type};be(()=>{_e(),ne(t)})};(()=>{Ae().then(a=>{const t=a.data?xe(a.data):[];N.value=t.filter(r=>r.status==1)})})();const _=v(),K=a=>{_.value=a,_.value=="local_delivery"&&E()};(()=>{Ie().then(a=>{$.value=a.data})})();let g=null,F=null;const O=v(!0),P=v(""),_e=()=>{const a=window.TMap,t=a.LatLng,r=new t(e.taker_latitude,e.taker_longitude);g=new a.Map("container",{center:r,zoom:14}),g.on("tilesloaded",()=>{O.value=!1}),F=je(g),g.on("click",i=>{g.setCenter(i.latLng),F.updateGeometries({id:"center",position:i.latLng}),z(i.latLng.lat,i.latLng.lng)}),_.value=="local_delivery"&&z(r.lat,r.lng)},z=(a,t)=>{Ne({mapKey:R,lat:a,lng:t}).then(({message:r,result:i})=>{r=="query ok"||r=="Success"?(e.taker_latitude=i.location.lat,e.taker_longitude=i.location.lng,e.taker_address=i.formatted_addresses.recommend,we(i.ad_info.adcode).then(({data:d})=>{p.taker_province=d.province?d.province.id:0,p.taker_city=d.city?d.city.id:0,p.taker_district=d.district?d.district.id:0})):(P.value="地图加载失败："+r,console.log(r,i))}).catch(r=>{console.log(r)})},p=I({taker_province:0,taker_city:0,taker_district:0});let R="";fe(()=>{const a=document.createElement("script");ke().then(t=>{R=t.data.key,a.type="text/javascript",a.src="https://map.qq.com/api/gljs?libraries=tools,service&v=1.exp&key="+t.data.key,document.body.appendChild(a)})});const m=I({province:[],city:[],district:[]}),Q=v(),J=v(),X=v();w(()=>e.taker_province,a=>{a?V(e.taker_province).then(t=>{m.city=t.data;const r=e.taker_city;if(r){let i=!1;for(let d=0;d<t.data.length;d++)if(r==t.data[d].id){i=!0;break}if(i){e.taker_city=r;return}}e.taker_city=0,_.value=="local_delivery"&&E()}):e.taker_city=0}),w(()=>e.taker_city,a=>{a?V(e.taker_city).then(t=>{m.district=t.data;const r=e.taker_district;if(r){let i=!1;for(let d=0;d<t.data.length;d++)if(r==t.data[d].id){i=!0;break}if(i){e.taker_district=r;return}}_.value=="local_delivery"&&E(),e.taker_district=0}):e.taker_district=0}),w(()=>e.taker_district,a=>{a&&_.value=="local_delivery"&&E()});const E=ge(()=>{setTimeout(()=>{const a=[e.taker_province?Q.value.states.selectedLabel:"",e.taker_city?J.value.states.selectedLabel:"",e.taker_district?X.value.states.selectedLabel:"",e.taker_address];Be({mapKey:R,address:a.join("")}).then(({message:t,result:r})=>{if(t=="Success"||t=="query ok"){const i=new window.TMap.LatLng(r.location.lat,r.location.lng);g.setCenter(i),F.updateGeometries({id:"center",position:i}),e.taker_latitude=r.location.lat,e.taker_longitude=r.location.lng}else console.error(t,r)})},500)},500);w(()=>p.taker_province,a=>{a&&V(p.taker_province).then(t=>{m.city=t.data,e.taker_province=p.taker_province,e.taker_city=p.taker_city})}),w(()=>p.taker_city,a=>{a&&V(p.taker_city).then(t=>{m.district=t.data,e.taker_city=p.taker_city,e.taker_district=p.taker_district})}),w(()=>p.taker_district,a=>{a&&(e.taker_district=p.taker_district)}),V(0).then(a=>{m.province=a.data});const ue=a=>{g=null,Y(),a()},Y=()=>{const a={order_id:0,delivery_type:"",taker_name:"",taker_mobile:"",taker_latitude:"",taker_longitude:"",taker_full_address:"",taker_address:"",taker_province:0,taker_city:0,taker_district:0,is_delivery_address:0,is_refund_address:0,is_default_delivery:0,is_default_refund:0,take_store_id:""};Object.keys(e).forEach(t=>{a[t]!=null&&(e[t]=a[t])})},q=(a,t)=>a.find(i=>i.id===t).name;return te({showDialog:x,setFormData:ce}),(a,t)=>{const r=Le,i=Ve,d=Ce,A=Ee,h=De,D=Me,pe=Te,H=Fe,ve=Pe,W=Re;return u(),b(ve,{modelValue:x.value,"onUpdate:modelValue":t[10]||(t[10]=l=>x.value=l),title:n(o)("editAddress"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0,"before-close":ue},{footer:c(()=>[S("span",Ke,[s(H,{onClick:t[8]||(t[8]=l=>x.value=!1)},{default:c(()=>[U(M(n(o)("cancel")),1)]),_:1}),s(H,{type:"primary",loading:y.value,onClick:t[9]||(t[9]=l=>se(G.value))},{default:c(()=>[U(M(n(o)("confirm")),1)]),_:1},8,["loading"])])]),default:c(()=>[Z((u(),k("div",null,[s(pe,{model:e,"label-width":"100px",ref_key:"formRef",ref:G,rules:n(le),class:"page-form mb-[30px]"},{default:c(()=>[s(d,{label:n(o)("deliveryType"),prop:"delivery_type"},{default:c(()=>[s(i,{modelValue:e.delivery_type,"onUpdate:modelValue":t[0]||(t[0]=l=>e.delivery_type=l),onChange:K},{default:c(()=>[(u(!0),k(L,null,C(N.value,(l,f)=>(u(),b(r,{label:l.key,key:f,status:""},{default:c(()=>[U(M(l.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),_.value=="express"||_.value=="local_delivery"?(u(),k(L,{key:0},[s(d,{label:n(o)("contacts"),prop:"taker_name"},{default:c(()=>[s(A,{modelValue:e.taker_name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.taker_name=l),modelModifiers:{trim:!0},clearable:"",placeholder:n(o)("contactsPlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,{label:n(o)("ContactInformation"),prop:"taker_mobile"},{default:c(()=>[s(A,{modelValue:e.taker_mobile,"onUpdate:modelValue":t[2]||(t[2]=l=>e.taker_mobile=l),modelModifiers:{trim:!0},clearable:"",placeholder:n(o)("ContactInformationPlaceholder"),class:"input-width",maxlength:"15"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(d,{label:n(o)("address"),prop:"address_area"},{default:c(()=>[s(D,{modelValue:e.taker_province,"onUpdate:modelValue":t[3]||(t[3]=l=>e.taker_province=l),"value-key":"id",clearable:"",class:"w-[150px]",ref_key:"provinceRef",ref:Q,placeholder:n(o)("province"),onChange:T},{default:c(()=>[s(h,{label:n(o)("province"),value:0},null,8,["label"]),(u(!0),k(L,null,C(m.province,(l,f)=>(u(),b(h,{key:f,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),s(D,{modelValue:e.taker_city,"onUpdate:modelValue":t[4]||(t[4]=l=>e.taker_city=l),"value-key":"id",clearable:"",class:"w-[150px] ml-3",ref_key:"cityRef",ref:J,placeholder:n(o)("city"),onChange:T},{default:c(()=>[s(h,{label:n(o)("city"),value:0},null,8,["label"]),(u(!0),k(L,null,C(m.city,(l,f)=>(u(),b(h,{key:f,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),s(D,{modelValue:e.taker_district,"onUpdate:modelValue":t[5]||(t[5]=l=>e.taker_district=l),"value-key":"id",clearable:"",class:"w-[150px] mt-[20px]",ref_key:"districtRef",ref:X,placeholder:n(o)("area"),onChange:T},{default:c(()=>[s(h,{label:n(o)("area"),value:0},null,8,["label"]),(u(!0),k(L,null,C(m.district,(l,f)=>(u(),b(h,{key:f,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),s(A,{modelValue:e.taker_address,"onUpdate:modelValue":t[6]||(t[6]=l=>e.taker_address=l),modelModifiers:{trim:!0},clearable:"",placeholder:n(o)("detailedAddress"),class:"!w-[214px] mt-[20px] ml-3",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])],64)):B("",!0),s(d,null,{default:c(()=>[S("div",{class:he(["h-[0px] overflow-hidden",{"!h-auto":_.value=="local_delivery"}])},[Z(S("div",$e,null,512),[[W,O.value]])],2),_.value=="local_delivery"&&P.value?(u(),k("div",Ge,M(P.value),1)):B("",!0)]),_:1}),_.value=="store"?(u(),b(d,{key:1,label:n(o)("selfPickupStores")},{default:c(()=>[s(D,{modelValue:e.take_store_id,"onUpdate:modelValue":t[7]||(t[7]=l=>e.take_store_id=l),"value-key":"store_id",onChange:de},{default:c(()=>[(u(!0),k(L,null,C($.value,(l,f)=>(u(),b(h,{key:f,label:l.store_name,value:l.store_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):B("",!0)]),_:1},8,["model","rules"])])),[[W,y.value]])]),_:1},8,["modelValue","title"])}}});export{vt as _};
