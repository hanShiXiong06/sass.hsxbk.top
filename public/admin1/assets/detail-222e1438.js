import{d as te,x as le,f as oe,r as D,aQ as se,n as j,P as V,h as _,c as h,a as s,u as t,t as i,q as n,s as v,w as o,e,B as f,i as A,A as O,K as ne,ag as ie,ah as re,a0 as de,L as me,aD as pe,aE as ue,J as ce,E as _e,I as ge,aa as be,ac as he,T as ve,ak as fe,aI as ye,bN as xe,U as ke}from"./index-17984968.js";/* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";import{_ as H}from"./goods_default-664bb559.js";import{_ as G}from"./default_headimg-a897263d.js";import{m as we,n as I,o as Pe,p as Ce}from"./marketing-cc0d1b16.js";const De={class:"main-container"},Ve={class:"detail-head"},Ee=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),ze={class:"ml-[1px]"},Te=s("span",{class:"adorn"},"|",-1),Le={class:"right"},Me={class:"panel-title"},Ue={class:"px-[30px] mb-[20px]"},$e={class:"input-width"},je={class:"input-width"},Ae={class:"input-width"},Ie={class:"input-width"},Ne={class:"input-width"},Se={class:"input-width"},Fe={class:"input-width"},Be={class:"input-width"},Ye={class:"input-width"},qe={key:0},Re=["onClick"],Oe={class:"min-w-[70px] h-[70px] flex items-center justify-center"},He=s("div",{class:"image-slot"},[s("img",{class:"w-[70px] h-[70px]",src:H})],-1),Ge={key:1,class:"w-[70px] h-[70px]",src:H,fit:"contain"},Je={class:"ml-2"},Ke=["title"],Qe={key:0},We={class:"mt-[16px] flex justify-end"},Xe={key:1},Ze={class:"flex flex-col"},ea=["onClick"],aa={class:"text-[12px] mt-[5px]"},ta={class:"text-[12px] mt-[5px]"},la={class:"text-[14px]"},oa={class:"mt-[16px] flex justify-end"},sa={key:2},na=["onClick"],ia={class:"min-w-[50px] h-[50px] flex items-center justify-center"},ra=s("div",{class:"image-slot"},[s("img",{class:"w-[50px] h-[50px]",src:G})],-1),da={key:1,class:"w-[50px] h-[50px]",src:G,fit:"contain"},ma={class:"ml-2"},pa=["title"],ua={class:"text-primary text-[12px]"},ca={class:"mt-[16px] flex justify-end"},Ya=te({__name:"detail",setup(_a){const y=le(),E=oe(),J=y.meta.title,g=D({}),z=D(!1),x=D("goodsList"),K=p=>{x.value=p};se(()=>{y.query.id&&Q(Number(y.query.id))});const Q=p=>{z.value=!0,we(p).then(l=>{g.value=Object.assign(g.value,l.data),z.value=!1})},d=j({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{keyword:"",active_id:y.query.id}}),P=(p=1)=>{d.loading=!0,d.page=p,Pe({page:d.page,limit:d.limit,...d.searchParam}).then(l=>{d.loading=!1,d.data=l.data.data,d.total=l.data.total}).catch(()=>{d.loading=!1})};P();const W=p=>{const l=E.resolve({path:"/preview/wap",query:{page:`/addon/shop/pages/goods/detail?goods_id=${p.goods_id}`}});window.open(l.href)},N=D(),r=j({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{search_name:"",status:"",create_time:[],pay_time:[],active_id:y.query.id}}),k=(p=1)=>{r.loading=!0,r.page=p,Ce({page:r.page,limit:r.limit,...r.searchParam}).then(l=>{r.loading=!1,r.data=l.data.data,r.total=l.data.total}).catch(()=>{r.loading=!1})};k();const X=p=>{p&&(p.resetFields(),k())},m=j({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{active_id:y.query.id}});((p=1)=>{m.loading=!0,m.page=p,I({page:m.page,limit:m.limit,...m.searchParam}).then(l=>{m.loading=!1,m.data=l.data.data,m.total=l.data.total}).catch(()=>{m.loading=!1})})();const S=p=>{let l=E.resolve(`/member/detail?id=${p}`);window.open(l.href," blank")};return(p,l)=>{const u=ne,b=ie,Z=re,F=de,T=me,L=pe,ee=ue,B=ce,M=_e,Y=ge,c=be,U=he,$=ve,w=fe,ae=ye,q=xe,C=ke;return V((_(),h("div",De,[s("div",Ve,[s("div",{class:"left",onClick:l[0]||(l[0]=a=>t(E).push({path:"/shop/marketing/discount/list"}))},[Ee,s("span",ze,i(t(n)("returnToPreviousPage")),1)]),Te,s("span",Le,i(t(J)),1)]),Object.keys(g.value).length?(_(),v(T,{key:0,model:g.value,"label-width":"100px",ref:"formRef",class:"page-form","label-position":"left"},{default:o(()=>[g.value?(_(),v(F,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:o(()=>[s("h3",Me,i(t(n)("baseInfo")),1),s("div",Ue,[e(Z,null,{default:o(()=>[e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("name")},{default:o(()=>[s("div",$e,[s("span",null,i(g.value.active_name),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("title")},{default:o(()=>[s("div",je,[s("span",null,i(g.value.active_desc),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("status")},{default:o(()=>[s("div",Ae,[s("span",null,i(g.value.active_status_name),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("paymentAmount")},{default:o(()=>[s("div",Ie,[s("span",null,i(g.value.active_order_money),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("memberCount")},{default:o(()=>[s("div",Ne,[s("span",null,i(g.value.active_member_num),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("orderCount")},{default:o(()=>[s("div",Se,[s("span",null,i(g.value.active_order_num),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("startTime")},{default:o(()=>[s("div",Fe,[s("span",null,i(g.value.start_time),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("endTime")},{default:o(()=>[s("div",Be,[s("span",null,i(g.value.end_time),1)])]),_:1},8,["label"])]),_:1}),e(b,{span:8},{default:o(()=>[e(u,{label:t(n)("createTime")},{default:o(()=>[s("div",Ye,[s("span",null,i(g.value.create_time),1)])]),_:1},8,["label"])]),_:1})]),_:1})])]),_:1})):f("",!0)]),_:1},8,["model"])):f("",!0),Object.keys(g.value).length?(_(),v(F,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:o(()=>[e(ee,{modelValue:x.value,"onUpdate:modelValue":l[1]||(l[1]=a=>x.value=a),class:"demo-tabs",onTabChange:K},{default:o(()=>[e(L,{label:"活动商品",name:"goodsList"}),e(L,{label:"活动订单",name:"orderList"}),e(L,{label:"活动会员",name:"memberList"})]),_:1},8,["modelValue"]),x.value=="goodsList"?(_(),h("div",qe,[e(T,{inline:!0,model:d.searchParam},{default:o(()=>[e(u,{label:t(n)("keyword"),prop:"keyword"},{default:o(()=>[e(B,{modelValue:d.searchParam.keyword,"onUpdate:modelValue":l[2]||(l[2]=a=>d.searchParam.keyword=a),modelModifiers:{trim:!0},clearable:"",placeholder:t(n)("keywordPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(u,null,{default:o(()=>[e(M,{type:"primary",onClick:l[3]||(l[3]=a=>P())},{default:o(()=>[A(i(t(n)("search")),1)]),_:1})]),_:1})]),_:1},8,["model"]),V((_(),v(U,{data:d.data,size:"large"},{empty:o(()=>[s("span",null,i(d.loading?"":t(n)("emptyData")),1)]),default:o(()=>[e(c,{prop:"goods_id",label:t(n)("goodsInfo"),"min-width":"300"},{default:o(({row:a})=>[a.goods?(_(),h("div",{key:0,class:"flex items-center cursor-pointer",onClick:R=>W(a)},[s("div",Oe,[a.goods.goods_cover_thumb_small?(_(),v(Y,{key:0,class:"w-[70px] h-[70px]",src:t(O)(a.goods.goods_cover_thumb_small),fit:"contain"},{error:o(()=>[He]),_:2},1032,["src"])):(_(),h("img",Ge))]),s("div",Je,[s("span",{title:a.goods.goods_name,class:"multi-hidden"},i(a.goods.goods_name),9,Ke)])],8,Re)):f("",!0)]),_:1},8,["label"]),e(c,{label:t(n)("price"),"min-width":"120",align:"right"},{default:o(({row:a})=>[a.goodsSku?(_(),h("span",Qe,"￥"+i(a.goodsSku.price),1)):f("",!0)]),_:1},8,["label"]),e(c,{prop:"active_goods_order_money",label:t(n)("paymentAmount"),"min-width":"100",align:"right"},null,8,["label"]),e(c,{prop:"active_goods_order_num",label:t(n)("orderCount"),"min-width":"100"},null,8,["label"]),e(c,{prop:"active_goods_member_num",label:t(n)("activeMemberNum"),"min-width":"100"},null,8,["label"]),e(c,{prop:"active_goods_success_num",label:t(n)("activeSuccessNum"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,d.loading]]),s("div",We,[e($,{"current-page":d.page,"onUpdate:current-page":l[4]||(l[4]=a=>d.page=a),"page-size":d.limit,"onUpdate:page-size":l[5]||(l[5]=a=>d.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:d.total,onSizeChange:l[6]||(l[6]=a=>P()),onCurrentChange:P},null,8,["current-page","page-size","total"])])])):f("",!0),x.value=="orderList"?(_(),h("div",Xe,[e(T,{inline:!0,model:r.searchParam,ref_key:"orderSearchFormRef",ref:N},{default:o(()=>[e(u,{label:t(n)("orderInfo"),prop:"search_name"},{default:o(()=>[e(B,{class:"input-item",modelValue:r.searchParam.search_name,"onUpdate:modelValue":l[7]||(l[7]=a=>r.searchParam.search_name=a),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{label:t(n)("payType"),prop:"status"},{default:o(()=>[e(ae,{modelValue:r.searchParam.status,"onUpdate:modelValue":l[8]||(l[8]=a=>r.searchParam.status=a),clearable:"",class:"input-item"},{default:o(()=>[e(w,{label:t(n)("toBePaid"),value:"1"},null,8,["label"]),e(w,{label:t(n)("toBeShipped"),value:"2"},null,8,["label"]),e(w,{label:t(n)("shipped"),value:"3"},null,8,["label"]),e(w,{label:t(n)("completed"),value:"5"},null,8,["label"]),e(w,{label:t(n)("closed"),value:"-1"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(u,{label:t(n)("createTime"),prop:"create_time"},{default:o(()=>[e(q,{modelValue:r.searchParam.create_time,"onUpdate:modelValue":l[9]||(l[9]=a=>r.searchParam.create_time=a),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(n)("startDate"),"end-placeholder":t(n)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(u,{label:t(n)("payTime"),prop:"pay_time"},{default:o(()=>[e(q,{modelValue:r.searchParam.pay_time,"onUpdate:modelValue":l[10]||(l[10]=a=>r.searchParam.pay_time=a),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(n)("startDate"),"end-placeholder":t(n)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(u,null,{default:o(()=>[e(M,{type:"primary",onClick:l[11]||(l[11]=a=>k())},{default:o(()=>[A(i(t(n)("search")),1)]),_:1}),e(M,{onClick:l[12]||(l[12]=a=>X(N.value))},{default:o(()=>[A(i(t(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),V((_(),v(U,{data:r.data,size:"large"},{empty:o(()=>[s("span",null,i(r.loading?"":t(n)("emptyData")),1)]),default:o(()=>[e(c,{prop:"order_no",label:t(n)("orderNo"),"min-width":"100"},null,8,["label"]),e(c,{prop:"order_money",label:t(n)("orderMoney"),"min-width":"100"},null,8,["label"]),e(c,{label:t(n)("buyInfo"),"min-width":"120"},{default:o(({row:a})=>[s("div",Ze,[s("span",{class:"text-[12px] text-primary cursor-pointer",onClick:R=>S(a.member.member_id)},i(a.member.nickname),9,ea),s("span",aa,i(a.taker_name)+" "+i(a.taker_mobile),1),s("span",ta,i(a.taker_full_address),1)])]),_:1},8,["label"]),e(c,{label:t(n)("payType"),"min-width":"120"},{default:o(({row:a})=>[s("span",null,i(a.pay.type_name),1)]),_:1},8,["label"]),e(c,{label:t(n)("orderStatus"),"min-width":"100"},{default:o(({row:a})=>[s("span",la,i(a.order_status_data.name),1)]),_:1},8,["label"]),e(c,{prop:"create_time",label:t(n)("createTime"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,r.loading]]),s("div",oa,[e($,{"current-page":r.page,"onUpdate:current-page":l[13]||(l[13]=a=>r.page=a),"page-size":r.limit,"onUpdate:page-size":l[14]||(l[14]=a=>r.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:l[15]||(l[15]=a=>k()),onCurrentChange:k},null,8,["current-page","page-size","total"])])])):f("",!0),x.value=="memberList"?(_(),h("div",sa,[V((_(),v(U,{data:m.data,size:"large"},{empty:o(()=>[s("span",null,i(m.loading?"":t(n)("emptyData")),1)]),default:o(()=>[e(c,{prop:"goods_id",label:t(n)("memberInfo"),"min-width":"200"},{default:o(({row:a})=>[s("div",{class:"flex items-center cursor-pointer",onClick:R=>S(a.member.member_id)},[s("div",ia,[a.member.headimg?(_(),v(Y,{key:0,class:"w-[50px] h-[50px]",src:t(O)(a.member.headimg),fit:"contain"},{error:o(()=>[ra]),_:2},1032,["src"])):(_(),h("img",da))]),s("div",ma,[s("span",{title:a.member.nickname||a.member.username,class:"multi-hidden"},i(a.member.nickname||a.member.username),9,pa),s("span",ua,i(a.mobile||"--"),1)])],8,na)]),_:1},8,["label"]),e(c,{prop:"active_order_money",label:t(n)("consumptionMoney"),"min-width":"100"},null,8,["label"]),e(c,{prop:"member_count",label:t(n)("participationNum"),"min-width":"100"},null,8,["label"]),e(c,{prop:"create_time",label:t(n)("orderTime"),"min-width":"100"},null,8,["label"])]),_:1},8,["data"])),[[C,m.loading]]),s("div",ca,[e($,{"current-page":m.page,"onUpdate:current-page":l[16]||(l[16]=a=>m.page=a),"page-size":m.limit,"onUpdate:page-size":l[17]||(l[17]=a=>m.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:m.total,onSizeChange:l[18]||(l[18]=a=>t(I)()),onCurrentChange:t(I)},null,8,["current-page","page-size","total","onCurrentChange"])])])):f("",!0)]),_:1})):f("",!0)])),[[C,z.value]])}}});export{Ya as default};