import{d as q,x as A,f as H,r as y,n as I,h as c,c as p,e,w as i,a as r,t as a,u as o,q as s,i as C,R as G,F as W,T as J,B as v,A as K,s as Q,a3 as X,bO as Z,L as ee,ab as te,aC as ae,E as oe,M as se,a7 as le,ac as ne,ad as re,aa as ie,W as de,Y as me}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{g as ce,a as _e,b as pe}from"./order-63d080e6.js";import{k as ue}from"./agent-17ea308f.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";const be={class:"main-container"},ge={class:"flex justify-between items-center"},fe={class:"text-page-title"},xe={class:"table-body min-h-[150px]"},ye={key:0},ve={class:"flex items-center justify-between h-[35px] mt-[10px] px-3 text-[12px] text-[#666] border-solid border-b-[1px] border-[var(--el-border-color)] bg-[var(--el-color-info-light-9)]"},ke={class:"ml-5"},we={key:0,class:"ml-5"},Ce={class:"ml-5"},De={class:"flex cursor-pointer"},Ee={class:"flex items-center min-w-[50px] mr-[10px]"},Pe=["src"],Fe={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Te={class:"flex flex-col w-[308px]"},Ve={class:"multi-hidden text-[14px]"},Se={class:"text-[12px] text-[#999]"},ze={class:"flex flex-col"},Ne={class:"text-[13px]"},Oe={class:"text-[13px] mt-[5px]"},Re={class:"text-[13px]"},$e={class:"flex flex-col"},je=["onClick"],Be={key:0},Le={key:1},Ue=["title","onClick"],Ye=["title","onClick"],Me={key:0},qe={key:1},Ae={key:0},He={key:0,class:"text-[14px] h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},Ie={class:"mr-[5px]"},Ge={class:"mt-[16px] flex justify-end"},We=q({__name:"order",setup(Je){const V=A(),k=H(),S=V.meta.title,z=y([]),N=y([]),O=y([]);(async()=>{z.value=await(await ce()).data,N.value=await(await _e()).data,O.value=await(await pe()).data})();const n=I({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{is_settlement:"",create_time:[]}}),D=y(),f=(_=1)=>{n.loading=!0,n.page=_,ue({page:n.page,limit:n.limit,...n.searchParam}).then(l=>{n.loading=!1,n.data=l.data.data.map(h=>{let u=0;return h.goods_list=[],h.shop_order.order_goods.forEach(b=>{u+=b.fenxiao_order_goods.length,b.fenxiao_order_goods.forEach((w,x)=>{let g=X(Object.assign(b,w));delete g.fenxiao_order_goods,g.goodsRowspan=x?0:b.fenxiao_order_goods.length,g.rowspan=0,h.goods_list.push(g)})}),h.goods_list[0].rowspan=u,h}),n.total=l.data.total}).catch(()=>{n.loading=!1})};f();const R=({row:_,column:l,rowIndex:h,columnIndex:u})=>u<2?[_.goodsRowspan,_.goodsRowspan?1:0]:u==2||u>6?[_.rowspan,_.rowspan?1:0]:[1,1],$=_=>{const l=k.resolve("/shop/order/detail?order_id="+_.order_id);window.open(l.href,"_blank")},E=_=>{const l=k.resolve({path:"/shop_fenxiao/detail",query:{id:_.fenxiao_member_id}});window.open(l.href,"_blank")},j=_=>{const l=k.resolve({path:"/member/detail",query:{id:_}});window.open(l.href,"_blank")},B=_=>{_&&(_.resetFields(),f())};return(_,l)=>{const h=Z,u=ee,b=te,w=ae,x=oe,g=se,P=le,m=ne,F=re,L=ie,U=de,Y=me;return c(),p("div",be,[e(P,{class:"card !border-none",shadow:"never"},{default:i(()=>[r("div",ge,[r("span",fe,a(o(S)),1)]),e(P,{class:"card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[e(g,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:D},{default:i(()=>[e(u,{label:o(s)("createTime"),prop:"create_time"},{default:i(()=>[e(h,{modelValue:n.searchParam.create_time,"onUpdate:modelValue":l[0]||(l[0]=d=>n.searchParam.create_time=d),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(s)("startDate"),"end-placeholder":o(s)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(u,{label:o(s)("orderStatus"),prop:"is_settlement"},{default:i(()=>[e(w,{modelValue:n.searchParam.is_settlement,"onUpdate:modelValue":l[1]||(l[1]=d=>n.searchParam.is_settlement=d),placeholder:o(s)("orderStatusPlaceholder"),clearable:""},{default:i(()=>[e(b,{label:"已结算",value:1}),e(b,{label:"待结算",value:0})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(u,null,{default:i(()=>[e(x,{type:"primary",onClick:l[2]||(l[2]=d=>f())},{default:i(()=>[C(a(o(s)("search")),1)]),_:1}),e(x,{onClick:l[3]||(l[3]=d=>B(D.value))},{default:i(()=>[C(a(o(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),r("div",null,[e(F,{size:"large",class:"table-top"},{default:i(()=>[e(m,{label:o(s)("orderGoods"),width:"350"},null,8,["label"]),e(m,{label:o(s)("goodsPriceNumber"),"min-width":"150"},null,8,["label"]),e(m,{label:o(s)("refundStatus"),"min-width":"100"},null,8,["label"]),e(m,{label:o(s)("buyInfo"),"min-width":"120"},null,8,["label"]),e(m,{label:o(s)("agentLevel"),"min-width":"120"},null,8,["label"]),e(m,{label:o(s)("agentName"),"min-width":"120"},null,8,["label"]),e(m,{label:o(s)("agentDiscount"),"min-width":"120"},null,8,["label"]),e(m,{label:o(s)("goodsAgentPrice"),"min-width":"120",align:"right"},null,8,["label"]),e(m,{label:o(s)("orderStatus"),"min-width":"120"},null,8,["label"]),e(m,{label:o(s)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1}),G((c(),p("div",xe,[n.loading?v("",!0):(c(),p("div",ye,[n.data.length?(c(!0),p(W,{key:0},J(n.data,(d,M)=>(c(),p("div",{key:M},[r("div",ve,[r("div",null,[r("span",null,a(o(s)("orderNo"))+"："+a(d.order_no),1),r("span",ke,a(o(s)("createTime"))+"："+a(d.create_time),1),d.pay?(c(),p("span",we,a(o(s)("payType"))+"："+a(d.pay.type_name),1)):v("",!0),r("span",Ce,a(o(s)("countPrice"))+"：￥"+a(d.commission_agent),1)])]),e(F,{data:d.goods_list,size:"large","show-header":!1,"span-method":R,ref_for:!0,ref:"multipleTable"},{default:i(()=>[e(m,{align:"left",width:"350"},{default:i(({row:t})=>[r("div",De,[r("div",Ee,[t.goods_image_thumb_mid?(c(),p("img",{key:0,class:"w-[50px] h-[50px]",src:o(K)(t.goods_image_thumb_mid),alt:""},null,8,Pe)):(c(),p("img",Fe))]),r("div",Te,[r("p",Ve,a(t.goods_name),1),r("span",Se,a(t.sku_name),1)])])]),_:1}),e(m,{"min-width":"150"},{default:i(({row:t})=>[r("div",ze,[r("span",Ne,"￥"+a(t.goods_money),1),r("span",Oe,a(t.num)+a(o(s)("price")),1)])]),_:1}),e(m,{"min-width":"100"},{default:i(({row:t})=>[r("span",Re,a(t.status!=1&&t.status_name?t.status_name:"--"),1)]),_:1}),e(m,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[r("div",$e,[r("span",{class:"text-[12px] text-primary cursor-pointer",onClick:t=>j(d.shop_order.member.member_id)},a(d.shop_order.member.nickname),9,je)])]),_:2},1024),e(m,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:t})=>[t.commission_level?(c(),p("span",Be,a(t.commission_level)+"级",1)):(c(),p("span",Le,"--"))]),_:1}),e(m,{"min-width":"120"},{default:i(({row:t})=>[t.member.nickname?(c(),p("span",{key:0,title:t.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>E(t)},a(t.member.nickname),9,Ue)):(c(),p("span",{key:1,title:t.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>E(t)},a(t.member.username),9,Ye))]),_:1}),e(m,{"min-width":"120"},{default:i(({row:t})=>[t.agent_discount?(c(),p("span",Me,a(t.agent_discount)+" 折",1)):(c(),p("span",qe,"--"))]),_:1}),e(m,{"min-width":"120",align:"right"},{default:i(({row:t})=>[t.commission?(c(),p("span",Ae,"￥"+a(t.commission||"0.00"),1)):v("",!0)]),_:1}),e(m,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:t})=>[r("span",null,a(t.is_settlement?"已结算":"待结算"),1)]),_:1}),e(m,{align:"right","min-width":"120"},{default:i(({row:t})=>[e(x,{type:"primary",link:"",onClick:T=>$(t)},{default:i(()=>[C(a(o(s)("orderDetail")),1)]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data"]),d.shop_remark?(c(),p("div",He,[r("span",Ie,a(o(s)("notes"))+"：",1),r("span",null,a(d.shop_remark),1)])):v("",!0)]))),128)):(c(),Q(L,{key:1,"image-size":1,description:o(s)("emptyData")},null,8,["description"]))]))])),[[Y,n.loading]]),r("div",Ge,[e(U,{"current-page":n.page,"onUpdate:current-page":l[4]||(l[4]=d=>n.page=d),"page-size":n.limit,"onUpdate:page-size":l[5]||(l[5]=d=>n.limit=d),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:l[6]||(l[6]=d=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const xt=he(We,[["__scopeId","data-v-44dfdad3"]]);export{xt as default};
