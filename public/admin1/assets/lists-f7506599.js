import{N as H,d as A,x as G,f as K,r as k,n as Q,h as m,c as p,e as t,w as i,a as s,t as a,u as o,q as l,i as E,P as J,F as N,Q as W,B as v,A as X,s as Z,bs as ee,bN as te,K as ae,ak as oe,aI as se,E as le,L as ne,a0 as re,aa as ie,ac as de,a4 as ce,T as me,U as pe,p as _e,g as ue}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{g as he,a as be,b as fe}from"./order-fc033573.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";function xe(f){return H.get("shop_fenxiao/order",{params:f})}const ye=f=>(_e("data-v-5a468a6f"),f=f(),ue(),f),ve={class:"main-container"},ke={class:"flex justify-between items-center"},we={class:"text-page-title"},Ce={class:"table-body min-h-[150px]"},Ee={key:0},De={class:"flex items-center justify-between h-[35px] mt-[10px] px-3 text-[12px] text-[#666] border-solid border-b-[1px] border-[var(--el-border-color)] bg-[var(--el-color-info-light-9)]"},Fe={class:"ml-5"},Pe={key:0,class:"ml-5"},Se={class:"ml-5"},Te={class:"flex cursor-pointer"},Ne={class:"flex items-center min-w-[50px] mr-[10px]"},Ve=["src"],ze={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Oe={class:"flex flex-col w-[308px]"},Re={class:"multi-hidden text-[14px]"},Ue={class:"text-[12px] text-[#999]"},$e={class:"flex flex-col"},je={class:"text-[13px]"},Be={class:"text-[13px] mt-[5px]"},Ie={class:"text-[13px]"},Le={class:"text-[13px]"},qe={class:"flex flex-col"},Ye=["onClick"],Me={key:0},He={key:1},Ae=["title","onClick"],Ge=["title","onClick"],Ke={key:1},Qe={key:0},Je=ye(()=>s("span",null,"：",-1)),We={key:0},Xe={key:0,class:"text-[14px] h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},Ze={class:"mr-[5px]"},et={class:"mt-[16px] flex justify-end"},tt=A({__name:"lists",setup(f){const V=G(),w=K(),z=V.meta.title,O=k([]),R=k([]),U=k([]);(async()=>{O.value=await(await he()).data,R.value=await(await be()).data,U.value=await(await fe()).data})();const r=Q({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{is_settlement:"",create_time:[]}}),D=k(),x=(_=1)=>{r.loading=!0,r.page=_,xe({page:r.page,limit:r.limit,...r.searchParam}).then(n=>{r.loading=!1,n.data.data.forEach(h=>{let u=0;h.goods_list=[],h.shop_order.order_goods.forEach(b=>{u+=b.fenxiao_order_goods.length,b.fenxiao_order_goods.forEach((C,y)=>{let g=ee(Object.assign(b,C));delete g.fenxiao_order_goods,g.goodsRowspan=y?0:b.fenxiao_order_goods.length,g.rowspan=0,h.goods_list.push(g)})}),h.goods_list[0].rowspan=u,r.data.push(h)}),r.total=n.data.total}).catch(()=>{r.loading=!1})};x();const F=_=>{const n=w.resolve({path:"/shop_fenxiao/detail",query:{id:_.fenxiao_member_id}});window.open(n.href,"_blank")},$=({row:_,column:n,rowIndex:h,columnIndex:u})=>u<=2?[_.goodsRowspan,_.goodsRowspan?1:0]:u==3||u>7?[_.rowspan,_.rowspan?1:0]:[1,1],j=_=>{const n=w.resolve("/shop/order/detail?order_id="+_.order_id);window.open(n.href,"_blank")},B=_=>{const n=w.resolve({path:"/member/detail",query:{id:_}});window.open(n.href,"_blank")},I=_=>{_&&(_.resetFields(),x())};return(_,n)=>{const h=te,u=ae,b=oe,C=se,y=le,g=ne,P=re,d=ie,S=de,L=ce,q=me,Y=pe;return m(),p("div",ve,[t(P,{class:"card !border-none",shadow:"never"},{default:i(()=>[s("div",ke,[s("span",we,a(o(z)),1)]),t(P,{class:"card my-[10px] !border-none table-search-wrap",shadow:"never"},{default:i(()=>[t(g,{inline:!0,model:r.searchParam,ref_key:"searchFormRef",ref:D},{default:i(()=>[t(u,{label:o(l)("createTime"),prop:"create_time"},{default:i(()=>[t(h,{modelValue:r.searchParam.create_time,"onUpdate:modelValue":n[0]||(n[0]=c=>r.searchParam.create_time=c),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(l)("startDate"),"end-placeholder":o(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(u,{label:o(l)("orderStatus"),prop:"is_settlement"},{default:i(()=>[t(C,{modelValue:r.searchParam.is_settlement,"onUpdate:modelValue":n[1]||(n[1]=c=>r.searchParam.is_settlement=c),placeholder:o(l)("orderStatusPlaceholder"),clearable:""},{default:i(()=>[t(b,{label:"已结算",value:1}),t(b,{label:"待结算",value:0})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,null,{default:i(()=>[t(y,{type:"primary",onClick:n[2]||(n[2]=c=>x())},{default:i(()=>[E(a(o(l)("search")),1)]),_:1}),t(y,{onClick:n[3]||(n[3]=c=>I(D.value))},{default:i(()=>[E(a(o(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",null,[t(S,{size:"large",class:"table-top"},{default:i(()=>[t(d,{label:o(l)("orderGoods"),width:"320"},null,8,["label"]),t(d,{label:o(l)("goodsPriceNumber"),"min-width":"120"},null,8,["label"]),t(d,{label:o(l)("refundStatus"),"min-width":"100"},null,8,["label"]),t(d,{label:o(l)("goodsFenxiaoPriceNumber"),"min-width":"120"},null,8,["label"]),t(d,{label:o(l)("buyInfo"),"min-width":"120"},null,8,["label"]),t(d,{label:o(l)("fenxiaoLevel"),"min-width":"70"},null,8,["label"]),t(d,{label:o(l)("fenxiaoName"),"min-width":"120"},null,8,["label"]),t(d,{label:o(l)("calculateType"),"min-width":"130"},null,8,["label"]),t(d,{label:o(l)("goodsFenxiaoPrice"),"min-width":"120",align:"right"},null,8,["label"]),t(d,{label:o(l)("orderStatus"),"min-width":"120"},null,8,["label"]),t(d,{label:o(l)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1}),J((m(),p("div",Ce,[r.loading?v("",!0):(m(),p("div",Ee,[r.data.length?(m(!0),p(N,{key:0},W(r.data,(c,M)=>(m(),p("div",{key:M},[s("div",De,[s("div",null,[s("span",null,a(o(l)("orderNo"))+"："+a(c.order_no),1),s("span",Fe,a(o(l)("createTime"))+"："+a(c.create_time),1),c.pay?(m(),p("span",Pe,a(o(l)("payType"))+"："+a(c.pay.type_name),1)):v("",!0),s("span",Se,a(o(l)("countPrice"))+"：￥"+a(c.commission_fenxiao),1)])]),t(S,{data:c.goods_list,size:"large","show-header":!1,"span-method":$,ref_for:!0,ref:"multipleTable"},{default:i(()=>[t(d,{align:"left",width:"320"},{default:i(({row:e})=>[s("div",Te,[s("div",Ne,[e.goods_image_thumb_mid?(m(),p("img",{key:0,class:"w-[50px] h-[50px]",src:o(X)(e.goods_image_thumb_mid),alt:""},null,8,Ve)):(m(),p("img",ze))]),s("div",Oe,[s("p",Re,a(e.goods_name),1),s("span",Ue,a(e.sku_name),1)])])]),_:1}),t(d,{"min-width":"120"},{default:i(({row:e})=>[s("div",$e,[s("span",je,"￥"+a(e.goods_money),1),s("span",Be,a(e.num)+a(o(l)("price")),1)])]),_:1}),t(d,{"min-width":"100"},{default:i(({row:e})=>[s("span",Ie,a(e.status!=1&&e.status_name?e.status_name:"--"),1)]),_:1}),t(d,{"min-width":"120"},{default:i(({row:e})=>[s("span",Le,"￥"+a(e.order_goods_money),1)]),_:1}),t(d,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[s("div",qe,[s("span",{class:"text-[12px] text-primary cursor-pointer",onClick:e=>B(c.shop_order.member.member_id)},a(c.shop_order.member.nickname),9,Ye)])]),_:2},1024),t(d,{"min-width":"70","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:e})=>[e.commission_level?(m(),p("span",Me,a(e.commission_level)+"级",1)):(m(),p("span",He,"--"))]),_:1}),t(d,{"min-width":"120"},{default:i(({row:e})=>[e.member.nickname?(m(),p(N,{key:0},[e.member.nickname?(m(),p("span",{key:0,title:e.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>F(e)},a(e.member.nickname),9,Ae)):(m(),p("span",{key:1,title:e.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>F(e)},a(e.member.username),9,Ge))],64)):(m(),p("span",Ke,"--"))]),_:1}),t(d,{"min-width":"150"},{default:i(({row:e})=>[e.calculate_type?(m(),p("span",Qe,[s("span",null,a(e.calculate_type_name),1),Je,s("span",null,a(e.calculate_type!=1?"￥"+e.commission:e.commission_rate+"%"),1)])):v("",!0)]),_:1}),t(d,{"min-width":"120",align:"right"},{default:i(({row:e})=>[e.commission?(m(),p("span",We,"￥"+a(e.commission||"0.00"),1)):v("",!0)]),_:1}),t(d,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:e})=>[s("span",null,a(e.is_settlement?"已结算":"待结算"),1)]),_:1}),t(d,{align:"right","min-width":"120"},{default:i(({row:e})=>[t(y,{type:"primary",link:"",onClick:T=>j(e)},{default:i(()=>[E(a(o(l)("orderDetail")),1)]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data"]),c.shop_remark?(m(),p("div",Xe,[s("span",Ze,a(o(l)("notes"))+"：",1),s("span",null,a(c.shop_remark),1)])):v("",!0)]))),128)):(m(),Z(L,{key:1,"image-size":1,description:o(l)("emptyData")},null,8,["description"]))]))])),[[Y,r.loading]]),s("div",et,[t(q,{"current-page":r.page,"onUpdate:current-page":n[4]||(n[4]=c=>r.page=c),"page-size":r.limit,"onUpdate:page-size":n[5]||(n[5]=c=>r.limit=c),layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:n[6]||(n[6]=c=>x()),onCurrentChange:x},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Ct=ge(tt,[["__scopeId","data-v-5a468a6f"]]);export{Ct as default};
