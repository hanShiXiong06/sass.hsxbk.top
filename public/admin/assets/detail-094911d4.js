import{d as le,x as oe,f as se,r as D,aJ as ne,n as N,R as V,h as _,c as f,e,w as o,u as l,aP as ie,s as v,a as n,t as r,q as s,B as h,i as S,A as O,aQ as re,a7 as de,L as me,aM as pe,aN as ue,M as ce,ax as _e,ay as ge,K as be,E as fe,J as ve,ac as he,ad as ye,W as xe,ab as ke,aC as we,bO as Pe,Y as Ce}from"./index-37fee5a0.js";/* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                    *//* empty css                *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as H}from"./goods_default-664bb559.js";import{_ as G}from"./member_head-d9fd7b2c.js";import{o as De,p as U,q as Ve,r as Ee}from"./marketing-ce45fa4b.js";const ze={class:"main-container"},Le={class:"panel-title"},Me={class:"px-[30px] mb-[20px]"},Te={class:"input-width"},$e={class:"input-width"},Ae={class:"input-width"},Ne={class:"input-width"},Se={class:"input-width"},Ue={class:"input-width"},je={class:"input-width"},Fe={class:"input-width"},Ie={class:"input-width"},Be={key:0},Ye=["onClick"],qe={class:"min-w-[70px] h-[70px] flex items-center justify-center"},Re=n("div",{class:"image-slot"},[n("img",{class:"w-[70px] h-[70px]",src:H})],-1),Oe={key:1,class:"w-[70px] h-[70px]",src:H,fit:"contain"},He={class:"ml-2"},Ge=["title"],Je={key:0},Ke={class:"mt-[16px] flex justify-end"},Qe={key:1},We={class:"flex flex-col"},Xe=["onClick"],Ze={class:"text-[12px] mt-[5px]"},ea={class:"text-[12px] mt-[5px]"},aa={class:"text-[14px]"},ta={class:"mt-[16px] flex justify-end"},la={key:2},oa=["onClick"],sa={class:"min-w-[50px] h-[50px] flex items-center justify-center"},na=n("div",{class:"image-slot"},[n("img",{class:"w-[50px] h-[50px] rounded-full",src:G,alt:""})],-1),ia={key:1,class:"w-[50px] h-[50px] rounded-full",src:G,alt:""},ra={class:"ml-2"},da=["title"],ma={class:"text-primary text-[12px]"},pa={class:"mt-[16px] flex justify-end"},Ya=le({__name:"detail",setup(ua){const y=oe(),j=se(),J=y.meta.title,g=D({}),E=D(!1),x=D("goodsList"),K=m=>{x.value=m};ne(()=>{y.query.id&&Q(Number(y.query.id))});const Q=m=>{E.value=!0,De(m).then(t=>{g.value=Object.assign(g.value,t.data),E.value=!1})},d=N({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{keyword:"",active_id:y.query.id}}),P=(m=1)=>{d.loading=!0,d.page=m,Ve({page:d.page,limit:d.limit,...d.searchParam}).then(t=>{d.loading=!1,d.data=t.data.data,d.total=t.data.total}).catch(()=>{d.loading=!1})};P();const W=m=>{const t=j.resolve({path:"/preview/wap",query:{page:`/addon/shop/pages/goods/detail?goods_id=${m.goods_id}`}});window.open(t.href)},F=D(),i=N({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{search_name:"",status:"",create_time:[],pay_time:[],active_id:y.query.id}}),k=(m=1)=>{i.loading=!0,i.page=m,Ee({page:i.page,limit:i.limit,...i.searchParam}).then(t=>{i.loading=!1,i.data=t.data.data,i.total=t.data.total}).catch(()=>{i.loading=!1})};k();const X=m=>{m&&(m.resetFields(),k())},p=N({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{active_id:y.query.id}});((m=1)=>{p.loading=!0,p.page=m,U({page:p.page,limit:p.limit,...p.searchParam}).then(t=>{p.loading=!1,p.data=t.data.data,p.total=t.data.total}).catch(()=>{p.loading=!1})})();const I=m=>{let t=j.resolve(`/member/detail?id=${m}`);window.open(t.href," blank")};return(m,t)=>{const Z=re,z=de,u=me,b=pe,ee=ue,L=ce,M=_e,ae=ge,B=be,T=fe,Y=ve,c=he,$=ye,A=xe,w=ke,te=we,q=Pe,C=Ce;return V((_(),f("div",ze,[e(z,{class:"card !border-none",shadow:"never"},{default:o(()=>[e(Z,{content:l(J),icon:l(ie),onBack:t[0]||(t[0]=a=>m.$router.back())},null,8,["content","icon"])]),_:1}),Object.keys(g.value).length?(_(),v(L,{key:0,class:"page-form mt-[15px]",model:g.value,"label-width":"100px",ref:"formRef","label-position":"left"},{default:o(()=>[g.value?(_(),v(z,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:o(()=>[n("h3",Le,r(l(s)("baseInfo")),1),n("div",Me,[e(ee,null,{default:o(()=>[e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("name")},{default:o(()=>[n("div",Te,[n("span",null,r(g.value.active_name),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("title")},{default:o(()=>[n("div",$e,[n("span",null,r(g.value.active_desc),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("status")},{default:o(()=>[n("div",Ae,[n("span",null,r(g.value.active_status_name),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("paymentAmount")},{default:o(()=>[n("div",Ne,[n("span",null,r(g.value.active_order_money),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("memberCount")},{default:o(()=>[n("div",Se,[n("span",null,r(g.value.active_member_num),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("orderCount")},{default:o(()=>[n("div",Ue,[n("span",null,r(g.value.active_order_num),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("startTime")},{default:o(()=>[n("div",je,[n("span",null,r(g.value.start_time),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("endTime")},{default:o(()=>[n("div",Fe,[n("span",null,r(g.value.end_time),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:l(s)("createTime")},{default:o(()=>[n("div",Ie,[n("span",null,r(g.value.create_time),1)])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1})):h("",!0)]),_:1},8,["model"])):h("",!0),Object.keys(g.value).length?(_(),v(z,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:o(()=>[e(ae,{modelValue:x.value,"onUpdate:modelValue":t[1]||(t[1]=a=>x.value=a),class:"py-[10px]",onTabChange:K},{default:o(()=>[e(M,{label:"活动商品",name:"goodsList"}),e(M,{label:"活动订单",name:"orderList"}),e(M,{label:"活动会员",name:"memberList"})]),_:1},8,["modelValue"]),x.value=="goodsList"?(_(),f("div",Be,[e(L,{inline:!0,model:d.searchParam},{default:o(()=>[e(u,{label:l(s)("keyword"),prop:"keyword"},{default:o(()=>[e(B,{modelValue:d.searchParam.keyword,"onUpdate:modelValue":t[2]||(t[2]=a=>d.searchParam.keyword=a),modelModifiers:{trim:!0},clearable:"",placeholder:l(s)("keywordPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(u,null,{default:o(()=>[e(T,{type:"primary",onClick:t[3]||(t[3]=a=>P())},{default:o(()=>[S(r(l(s)("search")),1)]),_:1})]),_:1})]),_:1},8,["model"]),V((_(),v($,{data:d.data,size:"large"},{empty:o(()=>[n("span",null,r(d.loading?"":l(s)("emptyData")),1)]),default:o(()=>[e(c,{prop:"goods_id",label:l(s)("goodsInfo"),"min-width":"300"},{default:o(({row:a})=>[a.goods?(_(),f("div",{key:0,class:"flex items-center cursor-pointer",onClick:R=>W(a)},[n("div",qe,[a.goods.goods_cover_thumb_small?(_(),v(Y,{key:0,class:"w-[70px] h-[70px]",src:l(O)(a.goods.goods_cover_thumb_small),fit:"contain"},{error:o(()=>[Re]),_:2},1032,["src"])):(_(),f("img",Oe))]),n("div",He,[n("span",{title:a.goods.goods_name,class:"multi-hidden"},r(a.goods.goods_name),9,Ge)])],8,Ye)):h("",!0)]),_:1},8,["label"]),e(c,{label:l(s)("price"),"min-width":"120"},{default:o(({row:a})=>[a.goodsSku?(_(),f("span",Je,"￥"+r(a.goodsSku.price),1)):h("",!0)]),_:1},8,["label"]),e(c,{prop:"active_goods_order_money",label:l(s)("paymentAmount"),"min-width":"100"},null,8,["label"]),e(c,{prop:"active_goods_order_num",label:l(s)("orderCount"),"min-width":"100"},null,8,["label"]),e(c,{prop:"active_goods_member_num",label:l(s)("activeMemberNum"),"min-width":"100"},null,8,["label"]),e(c,{prop:"active_goods_success_num",label:l(s)("activeSuccessNum"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,d.loading]]),n("div",Ke,[e(A,{"current-page":d.page,"onUpdate:current-page":t[4]||(t[4]=a=>d.page=a),"page-size":d.limit,"onUpdate:page-size":t[5]||(t[5]=a=>d.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:d.total,onSizeChange:t[6]||(t[6]=a=>P()),onCurrentChange:P},null,8,["current-page","page-size","total"])])])):h("",!0),x.value=="orderList"?(_(),f("div",Qe,[e(L,{inline:!0,model:i.searchParam,ref_key:"orderSearchFormRef",ref:F},{default:o(()=>[e(u,{label:l(s)("orderInfo"),prop:"search_name"},{default:o(()=>[e(B,{class:"input-item",modelValue:i.searchParam.search_name,"onUpdate:modelValue":t[7]||(t[7]=a=>i.searchParam.search_name=a),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:l(s)("payType"),prop:"status"},{default:o(()=>[e(te,{modelValue:i.searchParam.status,"onUpdate:modelValue":t[8]||(t[8]=a=>i.searchParam.status=a),clearable:"",class:"input-item"},{default:o(()=>[e(w,{label:l(s)("toBePaid"),value:"1"},null,8,["label"]),e(w,{label:l(s)("toBeShipped"),value:"2"},null,8,["label"]),e(w,{label:l(s)("shipped"),value:"3"},null,8,["label"]),e(w,{label:l(s)("completed"),value:"5"},null,8,["label"]),e(w,{label:l(s)("closed"),value:"-1"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(u,{label:l(s)("createTime"),prop:"create_time"},{default:o(()=>[e(q,{modelValue:i.searchParam.create_time,"onUpdate:modelValue":t[9]||(t[9]=a=>i.searchParam.create_time=a),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(s)("startDate"),"end-placeholder":l(s)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(u,{label:l(s)("payTime"),prop:"pay_time"},{default:o(()=>[e(q,{modelValue:i.searchParam.pay_time,"onUpdate:modelValue":t[10]||(t[10]=a=>i.searchParam.pay_time=a),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(s)("startDate"),"end-placeholder":l(s)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(u,null,{default:o(()=>[e(T,{type:"primary",onClick:t[11]||(t[11]=a=>k())},{default:o(()=>[S(r(l(s)("search")),1)]),_:1}),e(T,{onClick:t[12]||(t[12]=a=>X(F.value))},{default:o(()=>[S(r(l(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),V((_(),v($,{data:i.data,size:"large"},{empty:o(()=>[n("span",null,r(i.loading?"":l(s)("emptyData")),1)]),default:o(()=>[e(c,{prop:"order_no",label:l(s)("orderNo"),"min-width":"100"},null,8,["label"]),e(c,{prop:"order_money",label:l(s)("orderMoney"),"min-width":"100"},null,8,["label"]),e(c,{label:l(s)("buyInfo"),"min-width":"120"},{default:o(({row:a})=>[n("div",We,[n("span",{class:"text-[12px] text-primary cursor-pointer",onClick:R=>I(a.member.member_id)},r(a.member.nickname),9,Xe),n("span",Ze,r(a.taker_name)+" "+r(a.taker_mobile),1),n("span",ea,r(a.taker_full_address),1)])]),_:1},8,["label"]),e(c,{label:l(s)("payType"),"min-width":"120"},{default:o(({row:a})=>[n("span",null,r(a.pay&&a.pay.type_name?a.pay.type_name:""),1)]),_:1},8,["label"]),e(c,{label:l(s)("orderStatus"),"min-width":"100"},{default:o(({row:a})=>[n("span",aa,r(a.order_status_data.name),1)]),_:1},8,["label"]),e(c,{prop:"create_time",label:l(s)("createTime"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,i.loading]]),n("div",ta,[e(A,{"current-page":i.page,"onUpdate:current-page":t[13]||(t[13]=a=>i.page=a),"page-size":i.limit,"onUpdate:page-size":t[14]||(t[14]=a=>i.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:t[15]||(t[15]=a=>k()),onCurrentChange:k},null,8,["current-page","page-size","total"])])])):h("",!0),x.value=="memberList"?(_(),f("div",la,[V((_(),v($,{data:p.data,size:"large"},{empty:o(()=>[n("span",null,r(p.loading?"":l(s)("emptyData")),1)]),default:o(()=>[e(c,{prop:"goods_id",label:l(s)("memberInfo"),"min-width":"200"},{default:o(({row:a})=>[n("div",{class:"flex items-center cursor-pointer",onClick:R=>I(a.member.member_id)},[n("div",sa,[a.member.headimg?(_(),v(Y,{key:0,class:"w-[50px] h-[50px]",src:l(O)(a.member.headimg),fit:"contain"},{error:o(()=>[na]),_:2},1032,["src"])):(_(),f("img",ia))]),n("div",ra,[n("span",{title:a.member.nickname||a.member.username,class:"multi-hidden"},r(a.member.nickname||a.member.username),9,da),n("span",ma,r(a.mobile||""),1)])],8,oa)]),_:1},8,["label"]),e(c,{prop:"active_order_money",label:l(s)("consumptionMoney"),"min-width":"100"},null,8,["label"]),e(c,{prop:"member_count",label:l(s)("participationNum"),"min-width":"100"},null,8,["label"]),e(c,{prop:"create_time",label:l(s)("orderTime"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,p.loading]]),n("div",pa,[e(A,{"current-page":p.page,"onUpdate:current-page":t[16]||(t[16]=a=>p.page=a),"page-size":p.limit,"onUpdate:page-size":t[17]||(t[17]=a=>p.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:p.total,onSizeChange:t[18]||(t[18]=a=>l(U)()),onCurrentChange:l(U)},null,8,["current-page","page-size","total","onCurrentChange"])])])):h("",!0)]),_:1})):h("",!0)])),[[C,E.value]])}}});export{Ya as default};
