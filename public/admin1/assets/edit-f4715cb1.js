import{d as W,x as X,f as Y,r as b,l as ee,q as r,aQ as le,P as f,h as g,c as te,a as m,u,t as v,s as V,w as a,e as t,c6 as D,i as n,B as h,bZ as ae,a6 as y,J as oe,K as ie,az as re,aA as ue,bM as de,bN as ne,L as se,a0 as me,E as pe,U as ve}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                       */import"./el-form-item-4ed993c7.js";import{f as _e,c as ce,h as fe}from"./marketing-cc0d1b16.js";import ge from"./goods-select-popup-440f9a1b.js";/* empty css                  *//* empty css                   *//* empty css                      *//* empty css                  *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        */import"./goods_default-664bb559.js";import"./goods-e571a7e7.js";import"./_plugin-vue_export-helper-c27b6911.js";const ye={class:"main-container"},be={class:"detail-head"},Ve=m("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),he={class:"ml-[1px]"},we=m("span",{class:"adorn"},"|",-1),Ce={class:"right"},xe={class:"flex items-center",style:{"padding-left":"5px"}},Ee={class:"flex items-center",style:{"padding-left":"5px"}},Ue={class:"w-[220px]",style:{"padding-left":"5px"}},ke=m("div",{class:"form-tip"},"开启手动领取后，会员可以直接在优惠券列表以及优惠券推广中直接领取",-1),Pe={class:"w-[180px]"},De=m("div",{class:"form-tip"},"每个会员通过前端直接可领用数量",-1),Te={class:"fixed-footer-wrap"},qe={class:"fixed-footer"},sl=W({__name:"edit",setup(Re){const T=X(),q=Y(),R=parseInt(T.query.id),_=b(!1),S=new Date,N=b(null),w=new Date;w.setTime(w.getTime()+3600*1e3*2*360);const e=b({...{title:"",price:"",type:1,limit:2,receive_type:2,remain_count:1e3,threshold:2,limit_count:"",min_condition_money:"",length:30,goods_ids:[],goods_category_ids:[],receive_type_time:2,valid_type:1,receive_time:[S,w],valid_time:w}}),k=b(),F=ee(()=>({title:[{required:!0,message:r("titlePlaceholder"),trigger:"blur"}],price:[{required:!0,validator:j,trigger:"blur"}],goods_ids:[{required:!0,message:r("请选择商品"),trigger:"blur"}],goods_category_ids:[{required:!0,message:r("请选择商品分类"),trigger:"blur"}],min_condition_money:[{required:!0,validator:I,trigger:"blur"}],valid_time:[{required:!0,validator:B,trigger:"blur"}],receive_time:[{required:!0,validator:L,trigger:"blur"}],remain_count:[{required:!0,validator:O,trigger:"blur"}],limit_count:[{required:!0,validator:K,trigger:"blur"}]})),L=(p,l,o)=>{e.value.receive_type_time==1&&e.value.receive_type==1&&((!e.value.receive_time[0]||E(e.value.receive_time[0])<=Date.now())&&o(new Error(r("领取开始时间不能小于等于当前时间"))),(!e.value.receive_time[1]||E(e.value.receive_time[1])<=E(e.value.receive_time[0]))&&o(new Error(r("领取结束时间不能小于等于领取开始时间")))),o()},B=(p,l,o)=>{e.value.valid_type==2&&e.value.valid_time<=Date.now()&&o(new Error(r("有效期不能小于等于当前时间"))),o()},I=(p,l,o)=>{e.value.threshold==1&&e.value.min_condition_money<=0&&o(new Error(r("使用门槛最低不能小于0元"))),o()},O=(p,l,o)=>{e.value.remain_count!=""&&e.value.remain_count>1e5&&o(new Error(r("remainCountPlaceholder"))),(!e.value.remain_count||e.value.remain_count!=""&&e.value.remain_count<1)&&o(new Error(r("发放数量不能小于1张"))),o()},j=(p,l,o)=>{(!e.value.price||e.value.price==""||e.value.price<=0)&&o(new Error(r("pricePlaceholder"))),o()},K=(p,l,o)=>{e.value.limit_count!=""&&e.value.limit_count<1&&o(new Error(r("userLimitCountPlaceholder"))),o()},J={multiple:!0},x=b([]),M=()=>{ce({}).then(p=>{x.value=p.data.goods_category_tree})},$=async p=>{_.value||!p||await p.validate(async l=>{if(l){_.value=!0;let o=JSON.parse(JSON.stringify(e.value));o.type==1?(delete o.goods_category_ids,delete o.goods_ids):o.type==2?delete o.goods_ids:o.type==3&&delete o.goods_category_ids,fe(o).then(s=>{_.value=!1,history.back()}).catch(()=>{_.value=!1})}})};le(async()=>{await M(),z(R)});const E=p=>{var l=new Date(p);return l.getTime()},z=p=>{_.value=!0,_e(p).then(l=>{if(e.value=Object.assign(e.value,l.data),parseInt(e.value.start_time)!=0&&parseInt(e.value.end_time)!=0){var o=new Date(e.value.start_time),d=new Date(e.value.end_time);e.value.receive_type_time=1,e.value.receive_time=[o,d]}l.data.valid_end_time&&(e.value.valid_time=l.data.valid_end_time),e.value.type==2&&G(e.value.goods_category_ids),_.value=!1}).catch(()=>{_.value=!1})},G=p=>{let l=[];p.forEach((o,d)=>{x.value.forEach((s,c)=>{s.value==o?(l[d]=[],l[d].push(s.value)):s.children.forEach((C,U)=>{C.value==o&&(l[d]=[],l[d].push(s.value),l[d].push(C.value))})})}),e.value.goods_category_ids=l},A=()=>{history.back()};return(p,l)=>{const o=oe,d=ie,s=re,c=ue,C=de,U=ne,Q=se,Z=me,P=pe,H=ve;return f((g(),te("div",ye,[m("div",be,[m("div",{class:"left",onClick:l[0]||(l[0]=i=>u(q).push("/shop/marketing/coupon/list"))},[Ve,m("span",he,v(u(r)("returnToPreviousPage")),1)]),we,m("span",Ce,v(u(r)("editCoupon")),1)]),Object.keys(e.value).length?(g(),V(Z,{key:0,class:"box-card !border-none page-height",shadow:"never"},{default:a(()=>[t(Q,{model:e.value,"label-width":"120px",ref_key:"formRef",ref:k,rules:u(F),class:"page-form"},{default:a(()=>[t(d,{label:u(r)("title"),prop:"title"},{default:a(()=>[t(o,{modelValue:e.value.title,"onUpdate:modelValue":l[1]||(l[1]=i=>e.value.title=i),clearable:"",placeholder:u(r)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:u(r)("price"),prop:"price"},{default:a(()=>[t(o,{modelValue:e.value.price,"onUpdate:modelValue":l[2]||(l[2]=i=>e.value.price=i),onKeyup:l[3]||(l[3]=i=>u(D)(i)),clearable:"",placeholder:u(r)("pricePlaceholder"),class:"input-width",maxlength:"5"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:u(r)("type"),prop:"type"},{default:a(()=>[t(c,{modelValue:e.value.type,"onUpdate:modelValue":l[4]||(l[4]=i=>e.value.type=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n("通用券")]),_:1}),t(s,{label:2},{default:a(()=>[n("品类券")]),_:1}),t(s,{label:3},{default:a(()=>[n("商品券")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.type==2?(g(),V(d,{key:0,prop:"goods_category_ids"},{default:a(()=>[m("div",null,[t(C,{modelValue:e.value.goods_category_ids,"onUpdate:modelValue":l[5]||(l[5]=i=>e.value.goods_category_ids=i),options:x.value,props:J,"collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["modelValue","options"])])]),_:1})):h("",!0),e.value.type==3?(g(),V(d,{key:1,prop:"goods_ids"},{default:a(()=>[m("div",null,[t(d,null,{default:a(()=>[t(ge,{ref_key:"goodsSelectPopupRef",ref:N,modelValue:e.value.goods_ids,"onUpdate:modelValue":l[6]||(l[6]=i=>e.value.goods_ids=i),min:1,max:99},null,8,["modelValue"])]),_:1})])]),_:1})):h("",!0),t(d,{label:u(r)("threshold")},{default:a(()=>[t(c,{modelValue:e.value.threshold,"onUpdate:modelValue":l[7]||(l[7]=i=>e.value.threshold=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n(v(u(r)("reduction")),1)]),_:1}),t(s,{label:2},{default:a(()=>[n(v(u(r)("noThreshold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.threshold==1?(g(),V(d,{key:2,prop:"min_condition_money"},{default:a(()=>[n(" 最低满 "),m("div",xe,[t(o,{modelValue:e.value.min_condition_money,"onUpdate:modelValue":l[8]||(l[8]=i=>e.value.min_condition_money=i),onKeyup:l[9]||(l[9]=i=>u(D)(i)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),n(" 元可用 ")]),_:1})):h("",!0),t(d,{label:u(r)("validType")},{default:a(()=>[t(c,{modelValue:e.value.valid_type,"onUpdate:modelValue":l[10]||(l[10]=i=>e.value.valid_type=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n(v(u(r)("days")),1)]),_:1}),t(s,{label:2},{default:a(()=>[n(v(u(r)("times")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),f(t(d,null,{default:a(()=>[n(" 领劵后立即生效，有效期 "),m("div",Ee,[t(o,{modelValue:e.value.length,"onUpdate:modelValue":l[11]||(l[11]=i=>e.value.length=i),onKeyup:l[12]||(l[12]=i=>u(ae)(i)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"]),n(" 天 ")])]),_:1},512),[[y,e.value.valid_type==1]]),e.value.valid_type==2?(g(),V(d,{key:3,prop:"valid_time"},{default:a(()=>[n(" 领劵后立即生效，使用时间截止至 "),m("div",Ue,[t(U,{modelValue:e.value.valid_time,"onUpdate:modelValue":l[13]||(l[13]=i=>e.value.valid_time=i),type:"datetime",placeholder:u(r)("validTimePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1})):h("",!0),t(d,{label:u(r)("receiveType")},{default:a(()=>[m("div",null,[t(c,{modelValue:e.value.receive_type,"onUpdate:modelValue":l[14]||(l[14]=i=>e.value.receive_type=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n(v(u(r)("user")),1)]),_:1}),t(s,{label:2},{default:a(()=>[n(v(u(r)("grant")),1)]),_:1})]),_:1},8,["modelValue"])]),ke]),_:1},8,["label"]),f(t(d,{label:u(r)("receiveTime")},{default:a(()=>[t(c,{modelValue:e.value.receive_type_time,"onUpdate:modelValue":l[15]||(l[15]=i=>e.value.receive_type_time=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n(v(u(r)("limitedTime")),1)]),_:1}),t(s,{label:2},{default:a(()=>[n(v(u(r)("unlimitedTime")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[y,e.value.receive_type==1]]),f(t(d,{prop:"receive_time"},{default:a(()=>[m("div",Pe,[t(U,{modelValue:e.value.receive_time,"onUpdate:modelValue":l[16]||(l[16]=i=>e.value.receive_time=i),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},512),[[y,e.value.receive_type_time==1&&e.value.receive_type==1]]),f(t(d,{label:u(r)("receiveNumber")},{default:a(()=>[t(c,{modelValue:e.value.limit,"onUpdate:modelValue":l[17]||(l[17]=i=>e.value.limit=i)},{default:a(()=>[t(s,{label:1},{default:a(()=>[n(v(u(r)("limit")),1)]),_:1}),t(s,{label:2},{default:a(()=>[n(v(u(r)("unlimited")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[y,e.value.receive_type==1]]),f(t(d,{prop:"remain_count"},{default:a(()=>[m("div",null,[t(o,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.remain_count,"onUpdate:modelValue":l[18]||(l[18]=i=>e.value.remain_count=i),clearable:"",placeholder:u(r)("remainCountPlaceholder"),class:"input-width",min:e.value.remain_count,max:1e5,controls:!1},{append:a(()=>[n("张")]),_:1},8,["modelValue","placeholder","min"])])]),_:1},512),[[y,e.value.limit==1&&e.value.receive_type==1]]),f(t(d,{label:u(r)("userLimitCount"),prop:"limit_count"},{default:a(()=>[t(o,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.limit_count,"onUpdate:modelValue":l[19]||(l[19]=i=>e.value.limit_count=i),clearable:"",placeholder:u(r)("userLimitCountPlaceholder"),class:"input-width",min:1,max:1e5},{append:a(()=>[n("张")]),_:1},8,["modelValue","placeholder"]),De]),_:1},8,["label"]),[[y,e.value.receive_type==1]])]),_:1},8,["model","rules"])]),_:1})):h("",!0),m("div",Te,[m("div",qe,[t(P,{type:"primary",onClick:l[20]||(l[20]=i=>$(k.value))},{default:a(()=>[n(v(u(r)("save")),1)]),_:1}),t(P,{onClick:l[21]||(l[21]=i=>A())},{default:a(()=>[n(v(u(r)("cancel")),1)]),_:1})])])])),[[H,_.value]])}}});export{sl as default};