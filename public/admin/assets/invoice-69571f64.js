import{d as q,x as K,f as W,n as A,r as u,h as y,c as G,e,w as i,a as _,t as m,u as a,q as t,i as p,R as J,s as P,B as Q,K as X,L as Z,bO as ee,E as ae,M as te,a6 as le,aw as oe,ax as ne,ab as ie,ac as re,W as me,Y as se}from"./index-f7a01263.js";/* empty css                   */import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-ddfebf7a.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                     *//* empty css                  *//* empty css                       */import{n as de}from"./order-1274d9d3.js";import{_ as ce}from"./invoice-detail.vue_vue_type_script_setup_true_lang-2fcd8817.js";import{_ as ue}from"./invoice-dialog.vue_vue_type_script_setup_true_lang-f2a883e1.js";/* empty css                  *//* empty css                   *//* empty css                        *//* empty css                             */import"./index-e6c6f5a6.js";import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";import"./attachment-893e498c.js";import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const _e={class:"main-container"},ve={class:"flex justify-between items-center"},fe={class:"text-page-title"},be={class:"mt-[16px] flex justify-end"},ia=q({__name:"invoice",setup(he){const V=K(),E=W(),T=V.meta.title,n=A({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{is_invoice:"",create_time:"",invoice_time:"",header_name:""}}),k=u(),N=r=>{r&&(r.resetFields(),d())},D=u(""),$=r=>{n.searchParam.is_invoice=r,d()},d=(r=1)=>{n.loading=!0,n.page=r,de({page:n.page,limit:n.limit,...n.searchParam}).then(l=>{n.loading=!1,n.data=l.data.data,n.total=l.data.total}).catch(()=>{n.loading=!1})};d();const f=u(null),Y=r=>{f.value.setFormData(r),f.value.showDialog=!0},b=u(null),I=r=>{b.value.setInvoiceData(r),b.value.invoiceDialog=!0},F=r=>{if(r.trade_type==="shop"){const l=E.resolve({path:"/shop/order/detail",query:{order_id:r.trade_id}});window.open(l.href,"_blank")}},M=u(null),h=u(!1),U=r=>{h.value=r},z=r=>{h.value=!0};return(r,l)=>{const B=X,v=Z,C=ee,c=ae,L=te,x=le,g=oe,R=ne,s=ie,H=re,S=me,j=pe,O=se;return y(),G("div",_e,[e(x,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[_("div",ve,[_("span",fe,m(a(T)),1)]),e(x,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[e(L,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:k},{default:i(()=>[e(v,{label:a(t)("headerName"),prop:"header_name"},{default:i(()=>[e(B,{modelValue:n.searchParam.header_name,"onUpdate:modelValue":l[0]||(l[0]=o=>n.searchParam.header_name=o),modelModifiers:{trim:!0},placeholder:a(t)("headerNamePlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(v,{label:a(t)("createTime"),prop:"create_time"},{default:i(()=>[e(C,{modelValue:n.searchParam.create_time,"onUpdate:modelValue":l[1]||(l[1]=o=>n.searchParam.create_time=o),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(t)("startDate"),"end-placeholder":a(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(v,{label:a(t)("invoiceTime"),prop:"invoice_time"},{default:i(()=>[e(C,{modelValue:n.searchParam.invoice_time,"onUpdate:modelValue":l[2]||(l[2]=o=>n.searchParam.invoice_time=o),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(t)("startDate"),"end-placeholder":a(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(v,null,{default:i(()=>[e(c,{type:"primary",onClick:l[3]||(l[3]=o=>d())},{default:i(()=>[p(m(a(t)("search")),1)]),_:1}),e(c,{onClick:l[4]||(l[4]=o=>N(k.value))},{default:i(()=>[p(m(a(t)("reset")),1)]),_:1}),e(c,{type:"primary",onClick:z},{default:i(()=>[p(m(a(t)("export")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(R,{modelValue:D.value,"onUpdate:modelValue":l[5]||(l[5]=o=>D.value=o),class:"demo-tabs",onTabChange:$},{default:i(()=>[e(g,{label:a(t)("all"),name:""},null,8,["label"]),e(g,{label:a(t)("已开票"),name:"1"},null,8,["label"]),e(g,{label:a(t)("未开票"),name:"0"},null,8,["label"])]),_:1},8,["modelValue"]),_("div",null,[J((y(),P(H,{data:n.data,size:"large"},{empty:i(()=>[_("span",null,m(n.loading?"":a(t)("emptyData")),1)]),default:i(()=>[e(s,{prop:"header_name",label:a(t)("headerName"),"min-width":"100",align:"left"},null,8,["label"]),e(s,{prop:"header_type_name",label:a(t)("headerTypeName"),"min-width":"120"},null,8,["label"]),e(s,{prop:"tax_number",label:a(t)("taxNumber"),"min-width":"180"},null,8,["label"]),e(s,{prop:"name",label:a(t)("name"),"min-width":"120"},null,8,["label"]),e(s,{prop:"money",label:a(t)("money"),"min-width":"120",align:"right"},null,8,["label"]),e(s,{label:a(t)("createTime"),"min-width":"180",align:"center"},{default:i(({row:o})=>[p(m(o.create_time||""),1)]),_:1},8,["label"]),e(s,{label:a(t)("invoiceTime"),"min-width":"180",align:"center"},{default:i(({row:o})=>[p(m(o.invoice_time||""),1)]),_:1},8,["label"]),e(s,{label:a(t)("isInvoice"),"min-width":"120",align:"center"},{default:i(({row:o})=>[p(m(o.is_invoice===1?a(t)("hasInvoice"):a(t)("noInvoice")),1)]),_:1},8,["label"]),e(s,{label:a(t)("operation"),fixed:"right",align:"center",width:"130"},{default:i(({row:o})=>[e(c,{type:"primary",link:"",onClick:w=>Y(o)},{default:i(()=>[p(m(a(t)("detail")),1)]),_:2},1032,["onClick"]),o.is_invoice===0?(y(),P(c,{key:0,type:"primary",link:"",onClick:w=>I(o)},{default:i(()=>[p(m(a(t)("invoice")),1)]),_:2},1032,["onClick"])):Q("",!0),e(c,{type:"primary",link:"",onClick:w=>F(o)},{default:i(()=>[p(m(a(t)("viewOrder")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[O,n.loading]]),_("div",be,[e(S,{"current-page":n.page,"onUpdate:current-page":l[6]||(l[6]=o=>n.page=o),"page-size":n.limit,"onUpdate:page-size":l[7]||(l[7]=o=>n.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:l[8]||(l[8]=o=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])]),e(ce,{ref_key:"invoiceDetailDialog",ref:f,onComplete:l[9]||(l[9]=o=>d())},null,512),e(ue,{ref_key:"invoiceListDialog",ref:b,onComplete:l[10]||(l[10]=o=>d())},null,512),e(j,{ref_key:"exportSureDialog",ref:M,show:h.value,type:"shop_invoice",searchParam:n.searchParam,onClose:U},null,8,["show","searchParam"])])]),_:1})])}}});export{ia as default};
