import{d as z,x as A,f as J,r as b,l as W,q as r,h as V,c as X,e as t,w as o,u,aQ as Y,c9 as T,i as d,s as h,a as v,B as C,t as p,R as f,b$ as Z,a0 as y,a3 as ee,aR as le,a7 as te,K as oe,L as ae,au as re,av as ie,bF as ue,bO as de,M as ne,E as se}from"./index-99f00cf3.js";/* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{e as me,f as pe}from"./marketing-47e9cfd6.js";import ve from"./goods-select-popup-4022fc08.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                        */import"./goods_default-995568ac.js";import"./goods-4a8ebb3e.js";import"./_plugin-vue_export-helper-c27b6911.js";const _e={class:"main-container"},ce={class:"flex items-center px-[5px]"},fe={class:"flex items-center px-[5px]"},ye={class:"w-[220px] pl-[5px]"},ge=v("div",{class:"form-tip"},"开启手动领取后，会员可以直接在优惠券列表以及优惠券推广中直接领取",-1),be={class:"w-[180px]"},Ve=v("div",{class:"form-tip"},"最多发放100000张",-1),we={class:"fixed-footer-wrap"},xe={class:"fixed-footer"},el=z({__name:"add",setup(he){const D=A();J();const q=D.meta.title,w=b(!1),M=b(null),S=new Date,x=new Date;x.setTime(x.getTime()+3600*1e3*2*360);const e=b({title:"",price:"",type:1,limit:2,receive_type:1,remain_count:1e3,threshold:2,limit_count:1,min_condition_money:1,length:30,goods_ids:[],goods_category_ids:[],receive_type_time:2,valid_type:1,receive_time:[S,x],valid_time:x}),U=b(),B=W(()=>({title:[{required:!0,message:r("titlePlaceholder"),trigger:"blur"}],price:[{required:!0,validator:I,trigger:"blur"}],goods_ids:[{required:!0,message:r("请选择商品"),trigger:"blur"}],goods_category_ids:[{required:!0,message:r("请选择商品分类"),trigger:"blur"}],min_condition_money:[{required:!0,validator:$,trigger:"blur"}],valid_time:[{required:!0,validator:N,trigger:"blur"}],receive_time:[{required:!0,validator:L,trigger:"blur"}],remain_count:[{required:!0,validator:F,trigger:"blur"}],limit_count:[{required:!0,validator:K,trigger:"blur"}]})),L=(s,l,i)=>{e.value.receive_type_time==1&&e.value.receive_type==1&&((!e.value.receive_time[0]||g(e.value.receive_time[0])<=Date.now())&&i(new Error(r("领取开始时间不能小于等于当前时间"))),(!e.value.receive_time[1]||g(e.value.receive_time[1])<=g(e.value.receive_time[0]))&&i(new Error(r("领取结束时间不能小于等于领取开始时间")))),i()},N=(s,l,i)=>{e.value.valid_type==2&&e.value.valid_time<=Date.now()&&i(new Error(r("有效期不能小于等于当前时间"))),e.value.valid_type==2&&e.value.receive_type_time==1&&e.value.receive_type==1&&g(e.value.valid_time)<=g(e.value.receive_time[1])&&i(new Error(r("有效期不能小于等于领取结束时间"))),i()},$=(s,l,i)=>{e.value.threshold==1&&e.value.min_condition_money<=0&&i(new Error(r("使用门槛最低不能小于0元"))),i()},F=(s,l,i)=>{e.value.remain_count!=""&&e.value.remain_count>1e5&&i(new Error(r("remainCountPlaceholder"))),(!e.value.remain_count||e.value.remain_count!=""&&e.value.remain_count<1)&&i(new Error(r("发放数量不能小于1张"))),i()},I=(s,l,i)=>{(!e.value.price||e.value.price==""||e.value.price<=0)&&i(new Error(r("pricePlaceholder"))),i()},K=(s,l,i)=>{(!e.value.limit_count||e.value.limit_count!=""&&e.value.limit_count<1)&&i(new Error(r("userLimitCountPlaceholder"))),e.value.limit==1&&e.value.limit_count!=""&&e.value.remain_count!=""&&parseInt(e.value.limit_count)>parseInt(e.value.remain_count)&&i(new Error(r("限领张数不能大于发放数量"))),i()},g=s=>{var l=new Date(s);return l.getTime()},G={multiple:!0},P=b([]);(()=>{me({}).then(s=>{P.value=s.data.goods_category_tree})})();const O=async s=>{w.value||!s||await s.validate(async l=>{if(l){w.value=!0;let i=ee(e.value);i.type==1?(delete i.goods_category_ids,delete i.goods_ids):i.type==2?delete i.goods_ids:i.type==3&&delete i.goods_category_ids,pe(i).then(_=>{w.value=!1,history.back()}).catch(_=>{w.value=!1})}})},j=()=>{history.back()};return(s,l)=>{const i=le,E=te,_=oe,n=ae,m=re,c=ie,H=ue,R=de,Q=ne,k=se;return V(),X("div",_e,[t(E,{class:"card !border-none",shadow:"never"},{default:o(()=>[t(i,{content:u(q),icon:u(Y),onBack:l[0]||(l[0]=a=>s.$router.back())},null,8,["content","icon"])]),_:1}),t(E,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:o(()=>[t(Q,{class:"page-form",model:e.value,"label-width":"120px",ref_key:"formRef",ref:U,rules:u(B)},{default:o(()=>[t(n,{label:u(r)("title"),prop:"title"},{default:o(()=>[t(_,{modelValue:e.value.title,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.title=a),modelModifiers:{trim:!0},clearable:"",placeholder:u(r)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:u(r)("price"),prop:"price"},{default:o(()=>[t(_,{modelValue:e.value.price,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.price=a),modelModifiers:{trim:!0},clearable:"",placeholder:u(r)("pricePlaceholder"),class:"input-width",maxlength:"5",onKeyup:l[3]||(l[3]=a=>u(T)(a))},{append:o(()=>[d("元")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:u(r)("type"),prop:"type"},{default:o(()=>[t(c,{modelValue:e.value.type,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.type=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d("通用券")]),_:1}),t(m,{label:2},{default:o(()=>[d("品类券")]),_:1}),t(m,{label:3},{default:o(()=>[d("商品券")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.type==2?(V(),h(n,{key:0,prop:"goods_category_ids"},{default:o(()=>[v("div",null,[t(H,{modelValue:e.value.goods_category_ids,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value.goods_category_ids=a),options:P.value,props:G,placeholder:"请选择商品分类","collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["modelValue","options"])])]),_:1})):C("",!0),e.value.type==3?(V(),h(n,{key:1,prop:"goods_ids"},{default:o(()=>[v("div",null,[t(n,null,{default:o(()=>[t(ve,{ref_key:"goodsSelectPopupRef",ref:M,modelValue:e.value.goods_ids,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value.goods_ids=a),min:1,max:99},null,8,["modelValue"])]),_:1})])]),_:1})):C("",!0),t(n,{label:u(r)("threshold")},{default:o(()=>[t(c,{modelValue:e.value.threshold,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value.threshold=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d(p(u(r)("reduction")),1)]),_:1}),t(m,{label:2},{default:o(()=>[d(p(u(r)("noThreshold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.threshold==1?(V(),h(n,{key:2,prop:"min_condition_money"},{default:o(()=>[d(" 最低满 "),v("div",ce,[t(_,{modelValue:e.value.min_condition_money,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value.min_condition_money=a),modelModifiers:{trim:!0},onKeyup:l[9]||(l[9]=a=>u(T)(a)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 元可用 ")]),_:1})):C("",!0),t(n,{label:u(r)("validType")},{default:o(()=>[t(c,{modelValue:e.value.valid_type,"onUpdate:modelValue":l[10]||(l[10]=a=>e.value.valid_type=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d(p(u(r)("days")),1)]),_:1}),t(m,{label:2},{default:o(()=>[d(p(u(r)("times")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),f(t(n,null,{default:o(()=>[d(" 领劵后立即生效，有效期 "),v("div",fe,[t(_,{modelValue:e.value.length,"onUpdate:modelValue":l[11]||(l[11]=a=>e.value.length=a),modelModifiers:{trim:!0},onKeyup:l[12]||(l[12]=a=>u(Z)(a)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 天 ")]),_:1},512),[[y,e.value.valid_type==1]]),e.value.valid_type==2?(V(),h(n,{key:3,prop:"valid_time"},{default:o(()=>[d(" 领劵后立即生效，使用时间截止至 "),v("div",ye,[t(R,{modelValue:e.value.valid_time,"onUpdate:modelValue":l[13]||(l[13]=a=>e.value.valid_time=a),type:"datetime"},null,8,["modelValue"])])]),_:1})):C("",!0),t(n,{label:u(r)("receiveType")},{default:o(()=>[v("div",null,[t(c,{modelValue:e.value.receive_type,"onUpdate:modelValue":l[14]||(l[14]=a=>e.value.receive_type=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d(p(u(r)("user")),1)]),_:1}),t(m,{label:2},{default:o(()=>[d(p(u(r)("grant")),1)]),_:1})]),_:1},8,["modelValue"])]),ge]),_:1},8,["label"]),f(t(n,{label:u(r)("receiveTime")},{default:o(()=>[t(c,{modelValue:e.value.receive_type_time,"onUpdate:modelValue":l[15]||(l[15]=a=>e.value.receive_type_time=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d(p(u(r)("limitedTime")),1)]),_:1}),t(m,{label:2},{default:o(()=>[d(p(u(r)("unlimitedTime")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[y,e.value.receive_type==1]]),f(t(n,{prop:"receive_time"},{default:o(()=>[v("div",be,[t(R,{modelValue:e.value.receive_time,"onUpdate:modelValue":l[16]||(l[16]=a=>e.value.receive_time=a),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},512),[[y,e.value.receive_type_time==1&&e.value.receive_type==1]]),f(t(n,{label:u(r)("receiveNumber")},{default:o(()=>[t(c,{modelValue:e.value.limit,"onUpdate:modelValue":l[17]||(l[17]=a=>e.value.limit=a)},{default:o(()=>[t(m,{label:1},{default:o(()=>[d(p(u(r)("limit")),1)]),_:1}),t(m,{label:2},{default:o(()=>[d(p(u(r)("unlimited")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[y,e.value.receive_type==1]]),f(t(n,{prop:"remain_count"},{default:o(()=>[v("div",null,[t(_,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.remain_count,"onUpdate:modelValue":l[18]||(l[18]=a=>e.value.remain_count=a),modelModifiers:{trim:!0},clearable:"",placeholder:u(r)("remainCountPlaceholder"),class:"input-width",min:1,max:1e5,controls:!1,maxlength:"6"},{append:o(()=>[d("张")]),_:1},8,["modelValue","placeholder"])]),Ve]),_:1},512),[[y,e.value.limit==1&&e.value.receive_type==1]]),f(t(n,{label:u(r)("userLimitCount"),prop:"limit_count"},{default:o(()=>[t(_,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.limit_count,"onUpdate:modelValue":l[19]||(l[19]=a=>e.value.limit_count=a),modelModifiers:{trim:!0},clearable:"",placeholder:u(r)("userLimitCountPlaceholder"),class:"input-width",min:1,max:1e5,maxlength:"6"},{append:o(()=>[d("张")]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),[[y,e.value.receive_type==1]])]),_:1},8,["model","rules"])]),_:1}),v("div",we,[v("div",xe,[t(k,{type:"primary",onClick:l[20]||(l[20]=a=>O(U.value))},{default:o(()=>[d(p(u(r)("save")),1)]),_:1}),t(k,{onClick:l[21]||(l[21]=a=>j())},{default:o(()=>[d(p(u(r)("cancel")),1)]),_:1})])])])}}});export{el as default};
