import{d as N,x as Y,n as $,r as w,h as p,c as S,e,w as t,a as n,t as l,u as d,i as m,q as v,R as T,s as _,B as f,ab as j,aC as M,K as A,L as H,bO as I,E as O,M as q,a7 as K,ac as W,ad as X,W as G,X as J,Y as Q}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{c as Z}from"./cps-6570e9c6.js";const ee={class:"main-container"},te={class:"flex justify-between items-center"},ae={class:"text-[20px]"},le={class:"mt-[10px]"},oe={class:"mt-[16px] flex justify-end"},se={class:"input-width"},ie={class:"input-width"},ne={class:"input-width"},de={class:"input-width"},re={class:"input-width"},ue={class:"input-width"},pe={class:"input-width"},ce={class:"input-width"},me={class:"input-width"},_e={class:"input-width"},fe={class:"input-width"},he={class:"input-width"},ve={class:"input-width"},ge={class:"input-width"},be={class:"input-width"},we={class:"input-width"},ye={class:"input-width"},xe={class:"dialog-footer"},Ke=N({__name:"recharge_order",setup(ke){const C=Y().meta.title;let o=$({page:1,limit:20,total:0,loading:!0,data:[],searchParam:{search_type:"",order_sn:"",create_time:""}});const y=w(),h=(c=1)=>{o.loading=!0,o.page=c,Z({page:o.page,limit:o.limit,...o.searchParam}).then(s=>{console.log(s.data),o.loading=!1,o.data=s.data.data,o.total=s.data.count}).catch(()=>{o.loading=!1})};h();const E=c=>{c&&(c.resetFields(),h())},g=w(!1),a=w([]),P=c=>{g.value=!0,a.value=c};return(c,s)=>{const x=j,D=M,z=A,r=H,B=I,b=O,k=q,V=K,u=W,F=X,L=G,R=J,U=Q;return p(),S("div",ee,[e(V,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[n("div",te,[n("span",ae,l(d(C)),1)]),e(V,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:t(()=>[e(k,{inline:!0,model:d(o).searchParam,ref_key:"searchFormRef",ref:y},{default:t(()=>[e(r,{label:"订单分类",class:"items-center"},{default:t(()=>[e(D,{style:{float:"left",width:"40%"},modelValue:d(o).searchParam.search_type,"onUpdate:modelValue":s[0]||(s[0]=i=>d(o).searchParam.search_type=i),class:"m-2",placeholder:"选择下单分类"},{default:t(()=>[e(x,{label:"充值订单",value:"1"}),e(x,{label:"充值号码",value:"2"})]),_:1},8,["modelValue"]),e(z,{style:{width:"50%"},modelValue:d(o).searchParam.order_sn,"onUpdate:modelValue":s[1]||(s[1]=i=>d(o).searchParam.order_sn=i),placeholder:"输入搜索"},null,8,["modelValue"])]),_:1}),e(r,{label:"下单时间",prop:"create_time"},{default:t(()=>[e(B,{modelValue:d(o).searchParam.create_time,"onUpdate:modelValue":s[2]||(s[2]=i=>d(o).searchParam.create_time=i),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(b,{type:"primary",onClick:s[3]||(s[3]=i=>h())},{default:t(()=>[m(l(d(v)("search")),1)]),_:1}),e(b,{onClick:s[4]||(s[4]=i=>E(y.value))},{default:t(()=>[m(l(d(v)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n("div",le,[T((p(),_(F,{data:d(o).data,size:"large"},{empty:t(()=>[n("span",null,l(d(o).loading?"":d(v)("emptyData")),1)]),default:t(()=>[e(u,{prop:"goods_name",label:"商品名称","min-width":"180"}),e(u,{prop:"rechargeno",label:"充值号码","min-width":"120"}),e(u,{prop:"orderid",label:"订单号","min-width":"180"}),e(u,{prop:"payprice",label:"付款金额","min-width":"120"},{default:t(({row:i})=>[m(l(i.payprice/100||""),1)]),_:1}),e(u,{prop:"price",label:"充值面额","min-width":"120"},{default:t(({row:i})=>[m(l(i.price/100||""),1)]),_:1}),e(u,{prop:"statusstr",label:"状态","min-width":"120"}),e(u,{label:"申请时间","min-width":"150",align:"center"},{default:t(({row:i})=>[m(l(i.createdtime||""),1)]),_:1}),e(u,{label:d(v)("operation"),fixed:"right","min-width":"120"},{default:t(({row:i})=>[e(b,{type:"primary",link:"",onClick:Ce=>P(i)},{default:t(()=>[m("查看")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[U,d(o).loading]]),n("div",oe,[e(L,{"current-page":d(o).page,"onUpdate:current-page":s[5]||(s[5]=i=>d(o).page=i),"page-size":d(o).limit,"onUpdate:page-size":s[6]||(s[6]=i=>d(o).limit=i),layout:"total, sizes, prev, pager, next, jumper",total:d(o).total,onSizeChange:s[7]||(s[7]=i=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])]),_:1}),e(R,{modelValue:g.value,"onUpdate:modelValue":s[9]||(s[9]=i=>g.value=i),title:"订单详情",width:"550px","destroy-on-close":!0},{footer:t(()=>[n("span",xe,[e(b,{type:"primary",onClick:s[8]||(s[8]=i=>g.value=!1)},{default:t(()=>[m(l(d(v)("confirm")),1)]),_:1})])]),default:t(()=>[e(k,{model:a.value,"label-width":"110px",ref:"formRef",class:"page-form"},{default:t(()=>[e(r,{label:"订单号"},{default:t(()=>[n("div",se,l(a.value.orderid),1)]),_:1}),e(r,{label:"商品名称"},{default:t(()=>[n("div",ie,l(a.value.goods_name),1)]),_:1}),e(r,{label:"充值号码"},{default:t(()=>[n("div",ne,l(a.value.rechargeno),1)]),_:1}),e(r,{label:"数量"},{default:t(()=>[n("div",de,l(a.value.goods_num),1)]),_:1}),a.value.refundid?(p(),_(r,{key:0,label:"退款单号"},{default:t(()=>[n("div",re,l(a.value.refundid),1)]),_:1})):f("",!0),e(r,{label:"状态"},{default:t(()=>[n("div",ue,l(a.value.statusstr),1)]),_:1}),e(r,{label:"佣金结算状态"},{default:t(()=>[n("div",pe,l(a.value.isbalance?"已结算":"未结算"),1)]),_:1}),e(r,{label:"付款金额"},{default:t(()=>[n("div",ce,l(a.value.payprice/100),1)]),_:1}),e(r,{label:"充值面额"},{default:t(()=>[n("div",me,l(a.value.price/100),1)]),_:1}),a.value.real_num?(p(),_(r,{key:1,label:"实际到到账面额"},{default:t(()=>[n("div",_e,l(a.value.real_num),1)]),_:1})):f("",!0),a.value.return_price?(p(),_(r,{key:2,label:"退款金额"},{default:t(()=>[n("div",fe,l(a.value.return_price/100),1)]),_:1})):f("",!0),e(r,{label:"佣金"},{default:t(()=>[n("div",he,l(a.value.commission/100),1)]),_:1}),a.value.closetime?(p(),_(r,{key:3,label:"关闭时间"},{default:t(()=>[n("div",ve,l(a.value.closetime),1)]),_:1})):f("",!0),a.value.closetxt?(p(),_(r,{key:4,label:"关闭原因"},{default:t(()=>[n("div",ge,l(a.value.closetxt),1)]),_:1})):f("",!0),e(r,{label:"下单时间"},{default:t(()=>[n("div",be,l(a.value.createdtime),1)]),_:1}),a.value.completetime?(p(),_(r,{key:5,label:"完成时间"},{default:t(()=>[n("div",we,l(a.value.completetime),1)]),_:1})):f("",!0),e(r,{label:"更新时间"},{default:t(()=>[n("div",ye,l(a.value.updatedtime),1)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{Ke as default};
