import{d as e,r as t,l as a,j as s,o as l,c as i,w as n,b as r,u as o,y as d,z as c,U as u,ad as h,V as p,W as f,A as m,H as g,a as x,i as b,B as k,g as _,h as v,D as y,ac as w,E as C,s as S,bl as D,bY as V,bX as T,aA as I,_ as R,bn as $,n as j,b0 as N,f as F,bt as O,bZ as L,ab as A,bz as P,p as E,t as B,F as W,b_ as K,M as U}from"./index-71c7df08.js";import{_ as H}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{c as M}from"./goods.5a980fee.js";import{f as z}from"./cloneDeep.77735539.js";import{s as J}from"./share-poster.aefc8367.js";const X=e({__name:"ns-goods-sku",props:["goodsDetail"],emits:["change"],setup(e,{expose:R,emit:$}){const j=e,N=t(!1),F=t(null),O=t({sku_id:"",name:""}),L=t(1),A=a(),P=s((()=>A.info)),E=()=>{N.value=!1},B=s((()=>{let e=z(j.goodsDetail);return Object.keys(e).length&&(O.value.sku_id=e.sku_id,e.skuList.map(((e,t)=>(e.selected=!1,e.sku_id==O.value.sku_id&&(e.selected=!0),e))),W(),e.skuList&&Object.keys(e.skuList).length&&e.skuList.forEach(((t,a)=>{t.sku_id==O.value.sku_id&&(e.detail=t)}))),e})),W=()=>{j.goodsDetail.skuList.forEach(((e,t)=>{e.sku_id==O.value.sku_id&&$("change",e.sku_id)}))},K=()=>{if(!P.value)return g().setLoginBack({url:"/addon/o2o/pages/goods/detail",param:{sku_id:B.value.sku_id}}),!1;if(!B.value.goods.status)return!1;var e={sku_id:B.value.sku_id,num:L.value};uni.setStorage({key:"o2oCreateData",data:{sku:e},success:()=>{x({url:"/addon/o2o/pages/order/payment",param:{id:B.value.goods_id}})}}),E()};R({open:(e="")=>{L.value=j.goodsDetail.min_buy,N.value=!0,F.value=e}});const U=s((()=>{let e="0.00";return e=Object.keys(B.value).length&&Object.keys(B.value.goods).length&&B.value.goods.member_discount&&S()?B.value.member_price:B.value.price,parseFloat(e).toFixed(2)}));return(e,t)=>{const a=b,s=k,g=_(v("u--image"),D),x=y,S=_(v("u-number-box"),V),R=w,$=_(v("u-button"),T),j=_(v("u-popup"),I);return l(),i(a,{onTouchmove:t[1]||(t[1]=m((()=>{}),["prevent","stop"]))},{default:n((()=>[r(j,{show:N.value,onClose:E,mode:"bottom"},{default:n((()=>[r(a,{class:"rounded-t-[20rpx] overflow-hidden bg-[#fff] p-[32rpx] relative"},{default:n((()=>[r(a,{class:"absolute right-[37rpx] nc-iconfont nc-icon-guanbiV6xx text-[40rpx]",onClick:E}),r(a,{class:"flex mb-[58rpx]"},{default:n((()=>[r(a,{class:"rounded-[8rpx] overflow-hidden"},{default:n((()=>[r(g,{width:"204rpx",height:"204rpx",src:o(C)(o(B).detail.sku_image),model:"aspectFill"},{error:n((()=>[r(s,{class:"w-[204rpx] h-[204rpx]",src:o(C)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:1},8,["src"])])),_:1}),r(a,{class:"flex flex-1 flex-col justify-between ml-[20rpx]"},{default:n((()=>[r(a,{class:"w-[100%]"},{default:n((()=>[r(a,{class:"text-[var(--price-text-color)]"},{default:n((()=>[r(x,{class:"text-[28rpx] font-bold"},{default:n((()=>[d("￥")])),_:1}),r(x,{class:"text-[28rpx] mr-[10rpx] font-bold"},{default:n((()=>[d(c(o(U)),1)])),_:1})])),_:1})])),_:1}),r(a,{class:"w-[100%]",style:{"max-height":"calc(204rpx - 92rpx)"}},{default:n((()=>[r(x,{class:"text-[24rpx] leading-[38rpx] text-[var(--text-color-light6)] multi-hidden"},{default:n((()=>[d("已选规格："+c(o(B).detail.sku_name),1)])),_:1})])),_:1})])),_:1})])),_:1}),r(R,{class:"h-[500rpx]","scroll-y":"true"},{default:n((()=>[r(a,{class:"mb-[20rpx]"},{default:n((()=>[r(a,{class:"flex flex-wrap"},{default:n((()=>[(l(!0),u(p,null,h(o(B).skuList,((e,t)=>(l(),i(a,{key:t,class:f(["box-border max-w-[680px] truncate text-[24rpx] px-[15rpx] text-center leading-[42rpx] mr-[20rpx] mb-[20rpx] border-1 border-solid rounded-[8rpx] border-[#888]",{"!border-[var(--primary-color)] text-[var(--primary-color)] bg-[var(--primary-color-light)]":e.selected}]),onClick:t=>{return a=e,O.value.sku_id=a.sku_id,O.value.name=a.sku_name,L.value=a.min_buy,void W();var a}},{default:n((()=>[d(c(e.sku_name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),r(a,{class:"flex justify-between"},{default:n((()=>[r(a,{class:"text-[26rpx] leading-[36rpx] mb-[30rpx]"},{default:n((()=>[d("购买数量")])),_:1}),r(S,{min:o(B).min_buy,integer:"",step:1,"input-width":"98rpx",modelValue:L.value,"onUpdate:modelValue":t[0]||(t[0]=e=>L.value=e),"input-height":"54rpx"},{minus:n((()=>[r(x,{class:f(["text-[44rpx] nc-iconfont nc-icon-jianshaoV6xx text-[var(--primary-color)]",{"!text-[#c8c9cc]":L.value===o(B).min_buy}])},null,8,["class"])])),input:n((()=>[r(x,{class:"text-[#333] fext-[23rpx] font-500 mx-[16rpx]"},{default:n((()=>[d(c(L.value),1)])),_:1})])),plus:n((()=>[r(x,{class:"text-[44rpx] nc-iconfont nc-icon-tianjiaV6mm text-[var(--primary-color)]"})])),_:1},8,["min","modelValue"])])),_:1})])),_:1}),r($,{text:o(B).goods.status?"确定":"已下架",class:"!h-[80rpx] !text-[30rpx] !m-0 !mt-[30rpx]",shape:"circle",color:o(B).goods.status?"var( --primary-color)":"#999",onClick:K},null,8,["text","color"])])),_:1})])),_:1},8,["show"])])),_:1})}}});const Y=R({name:"uniTable",options:{virtualHost:!0},emits:["selection-change"],props:{data:{type:Array,default:()=>[]},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1},type:{type:String,default:""},emptyText:{type:String,default:"没有更多数据"},loading:{type:Boolean,default:!1},rowKey:{type:String,default:""}},data:()=>({noData:!0,minWidth:0,multiTableHeads:[]}),watch:{loading(e){},data(e){this.theadChildren,this.theadChildren&&this.theadChildren.rowspan,this.noData=!1}},created(){this.trChildren=[],this.thChildren=[],this.theadChildren=null,this.backData=[],this.backIndexData=[]},methods:{isNodata(){this.theadChildren;let e=1;this.theadChildren&&(e=this.theadChildren.rowspan),this.noData=this.trChildren.length-e<=0},selectionAll(){let e=1,t=this.theadChildren;this.theadChildren?e=t.rowspan-1:t=this.trChildren[0];let a=this.data&&this.data.length>0;t.checked=!0,t.indeterminate=!1,this.trChildren.forEach(((t,s)=>{if(!t.disabled){if(t.checked=!0,a&&t.keyValue){const e=this.data.find((e=>e[this.rowKey]===t.keyValue));this.backData.find((t=>t[this.rowKey]===e[this.rowKey]))||this.backData.push(e)}s>e-1&&-1===this.backIndexData.indexOf(s-e)&&this.backIndexData.push(s-e)}})),this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})},toggleRowSelection(e,t){e=[].concat(e),this.trChildren.forEach(((a,s)=>{const l=e.findIndex((e=>"number"==typeof e?e===s-1:e[this.rowKey]===a.keyValue));let i=a.checked;-1!==l&&(a.checked="boolean"==typeof t?t:!a.checked,i!==a.checked&&this.check(a.rowData||a,a.checked,a.rowData?a.keyValue:null,!0))})),this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})},clearSelection(){let e=this.theadChildren;this.theadChildren||(e=this.trChildren[0]),e.checked=!1,e.indeterminate=!1,this.trChildren.forEach((e=>{e.checked=!1})),this.backData=[],this.backIndexData=[],this.$emit("selection-change",{detail:{value:[],index:[]}})},toggleAllSelection(){let e=[],t=1,a=this.theadChildren;this.theadChildren?t=a.rowspan-1:a=this.trChildren[0],this.trChildren.forEach(((a,s)=>{a.disabled||s>t-1&&e.push(s-t)})),this.toggleRowSelection(e)},check(e,t,a,s){let l=this.theadChildren;this.theadChildren||(l=this.trChildren[0]);let i=this.trChildren.findIndex(((t,a)=>e===t));if(i<0&&(i=this.data.findIndex((e=>e[this.rowKey]===a))+1),this.trChildren.filter((e=>!e.disabled&&e.keyValue)).length,0===i)return void(t?this.selectionAll():this.clearSelection());if(t)a&&this.backData.push(e),this.backIndexData.push(i-1);else{const e=this.backData.findIndex((e=>e[this.rowKey]===a)),t=this.backIndexData.findIndex((e=>e===i-1));a&&this.backData.splice(e,1),this.backIndexData.splice(t,1)}this.trChildren.find(((e,t)=>t>0&&!e.checked&&!e.disabled))?(l.indeterminate=!0,l.checked=!1):(l.indeterminate=!1,l.checked=!0),0===this.backIndexData.length&&(l.indeterminate=!1),s||this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})}}},[["render",function(e,t,a,s,r,o){const d=b;return l(),i(d,{class:f(["uni-table-scroll",{"table--border":a.border,"border-none":!r.noData}])},{default:n((()=>[$("table",{class:f(["uni-table",{"table--stripe":a.stripe}]),border:"0",cellpadding:"0",cellspacing:"0",style:j({"min-width":r.minWidth+"px"})},[N(e.$slots,"default",{},void 0,!0),r.noData?(l(),u("tr",{key:0,class:"uni-table-loading"},[$("td",{class:f(["uni-table-text",{"empty-border":a.border}])},c(a.emptyText),3)])):F("v-if",!0),a.loading?(l(),i(d,{key:1,class:f(["uni-table-mask",{"empty-border":a.border}])},{default:n((()=>[$("div",{class:"uni-table--loader"})])),_:1},8,["class"])):F("v-if",!0)],6)])),_:3},8,["class"])}],["__scopeId","data-v-77ce1604"]]);const Z=R({name:"TableCheckbox",emits:["checkboxSelected"],props:{indeterminate:{type:Boolean,default:!1},checked:{type:[Boolean,String],default:!1},disabled:{type:Boolean,default:!1},index:{type:Number,default:-1},cellData:{type:Object,default:()=>({})}},watch:{checked(e){"boolean"==typeof this.checked?this.isChecked=e:this.isChecked=!0},indeterminate(e){this.isIndeterminate=e}},data:()=>({isChecked:!1,isDisabled:!1,isIndeterminate:!1}),created(){"boolean"==typeof this.checked&&(this.isChecked=this.checked),this.isDisabled=this.disabled},methods:{selected(){this.isDisabled||(this.isIndeterminate=!1,this.isChecked=!this.isChecked,this.$emit("checkboxSelected",{checked:this.isChecked,data:this.cellData}))}}},[["render",function(e,t,a,s,o,d){const c=b;return l(),i(c,{class:"uni-table-checkbox",onClick:d.selected},{default:n((()=>[a.indeterminate?(l(),i(c,{key:1,class:"checkbox__inner checkbox--indeterminate"},{default:n((()=>[r(c,{class:"checkbox__inner-icon"})])),_:1})):(l(),i(c,{key:0,class:f(["checkbox__inner",{"is-checked":o.isChecked,"is-disable":o.isDisabled}])},{default:n((()=>[r(c,{class:"checkbox__inner-icon"})])),_:1},8,["class"]))])),_:1},8,["onClick"])}],["__scopeId","data-v-8af00625"]]);const q=R({name:"uniTr",components:{tableCheckbox:Z},props:{disabled:{type:Boolean,default:!1},keyValue:{type:[String,Number],default:""}},options:{virtualHost:!0},data:()=>({value:!1,border:!1,selection:!1,widthThArr:[],ishead:!0,checked:!1,indeterminate:!1}),created(){this.root=this.getTable(),this.head=this.getTable("uniThead"),this.head&&(this.ishead=!1,this.head.init(this)),this.border=this.root.border,this.selection=this.root.type,this.root.trChildren.push(this);const e=this.root.data.find((e=>e[this.root.rowKey]===this.keyValue));e&&(this.rowData=e),this.root.isNodata()},mounted(){if(this.widthThArr.length>0){const e="selection"===this.selection?50:0;this.root.minWidth=Number(this.widthThArr.reduce(((e,t)=>Number(e)+Number(t))))+e}},unmounted(){const e=this.root.trChildren.findIndex((e=>e===this));this.root.trChildren.splice(e,1),this.root.isNodata()},methods:{minWidthUpdate(e){if(this.widthThArr.push(e),this.widthThArr.length>0){const e="selection"===this.selection?50:0;this.root.minWidth=Number(this.widthThArr.reduce(((e,t)=>Number(e)+Number(t))))+e}},checkboxSelected(e){let t=this.root.data.find((e=>e[this.root.rowKey]===this.keyValue));this.checked=e.checked,this.root.check(t||this,e.checked,t?this.keyValue:null)},change(e){this.root.trChildren.forEach((t=>{t===this&&this.root.check(this,e.detail.value.length>0)}))},getTable(e="uniTable"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t}}},[["render",function(e,t,a,s,i,n){const o=O("table-checkbox");return l(),u("tr",{class:"uni-table-tr"},["selection"===i.selection&&i.ishead?(l(),u("th",{key:0,class:f(["checkbox",{"tr-table--border":i.border}])},[r(o,{checked:i.checked,indeterminate:i.indeterminate,disabled:a.disabled,onCheckboxSelected:n.checkboxSelected},null,8,["checked","indeterminate","disabled","onCheckboxSelected"])],2)):F("v-if",!0),N(e.$slots,"default",{},void 0,!0),F(' <uni-th class="th-fixed">123</uni-th> ')])}],["__scopeId","data-v-dc00fea3"]]),G={reset:"重置",search:"搜索",submit:"确定",filter:"筛选",gt:"大于等于",lt:"小于等于",date:"日期范围"},Q="select",ee="search",te="range",ae="date",se="timestamp";const le=R({name:"uniTh",options:{virtualHost:!0},components:{dropdown:R({name:"FilterDropdown",emits:["change"],components:{checkBox:Z},options:{virtualHost:!0},props:{filterType:{type:String,default:Q},filterData:{type:Array,default:()=>[]},mode:{type:String,default:"default"},map:{type:Object,default:()=>({text:"text",value:"value"})},filterDefaultValue:{type:[Array,String],default:()=>""}},computed:{canReset(){return this.isSearch?this.filterValue.length>0:this.isSelect?this.checkedValues.length>0:this.isRange?this.gtValue.length>0&&this.ltValue.length>0:!!this.isDate&&this.dateSelect.length>0},isSelect(){return this.filterType===Q},isSearch(){return this.filterType===ee},isRange(){return this.filterType===te},isDate(){return this.filterType===ae||this.filterType===se}},watch:{filterData(e){this._copyFilters()},indeterminate(e){this.isIndeterminate=e}},data(){return{resource:G,enabled:!0,isOpened:!1,dataList:[],filterValue:this.filterDefaultValue,checkedValues:[],gtValue:"",ltValue:"",dateRange:[],dateSelect:[]}},created(){this._copyFilters()},methods:{_copyFilters(){let e=z(this.filterData);for(let t=0;t<e.length;t++)void 0===e[t].checked&&(e[t].checked=!1);this.dataList=e},openPopup(){this.isOpened=!0,this.isDate&&this.$nextTick((()=>{this.dateRange.length||this.resetDate(),this.$refs.datetimepicker.show()}))},closePopup(){this.isOpened=!1},handleClose(e){this.closePopup()},resetDate(){let e=(new Date).toISOString().split("T")[0];this.dateRange=[e+" 0:00:00",e+" 23:59:59"]},onDropdown(e){this.openPopup()},onItemClick(e,t){let a=this.dataList,s=a[t];void 0===s.checked?a[t].checked=!0:a[t].checked=!s.checked;let l=[];for(let i=0;i<a.length;i++){const e=a[i];e.checked&&l.push(e.value)}this.checkedValues=l},datetimechange(e){this.closePopup(),this.dateRange=e,this.dateSelect=e,this.$emit("change",{filterType:this.filterType,filter:e})},timepickerclose(e){this.closePopup()},handleSelectSubmit(){this.closePopup(),this.$emit("change",{filterType:this.filterType,filter:this.checkedValues})},handleSelectReset(){if(this.canReset){var e=this.dataList;for(let t=0;t<e.length;t++){let a=e[t];this.$set(a,"checked",!1)}this.checkedValues=[],this.handleSelectSubmit()}},handleSearchSubmit(){this.closePopup(),this.$emit("change",{filterType:this.filterType,filter:this.filterValue})},handleSearchReset(){this.canReset&&(this.filterValue="",this.handleSearchSubmit())},handleRangeSubmit(e){this.closePopup(),this.$emit("change",{filterType:this.filterType,filter:!0===e?[]:[parseInt(this.gtValue),parseInt(this.ltValue)]})},handleRangeReset(){this.canReset&&(this.gtValue="",this.ltValue="",this.handleRangeSubmit(!0))}}},[["render",function(e,t,a,s,o,g){const x=b,k=O("check-box"),_=y,v=L,w=A,C=O("uni-datetime-picker");return l(),i(x,{class:"uni-filter-dropdown"},{default:n((()=>[r(x,{class:"dropdown-btn",onClick:g.onDropdown},{default:n((()=>[g.isSelect||g.isRange?(l(),i(x,{key:0,class:f(["icon-select",{active:g.canReset}])},null,8,["class"])):F("v-if",!0),g.isSearch?(l(),i(x,{key:1,class:f(["icon-search",{active:g.canReset}])},{default:n((()=>[r(x,{class:"icon-search-0"}),r(x,{class:"icon-search-1"})])),_:1},8,["class"])):F("v-if",!0),g.isDate?(l(),i(x,{key:2,class:f(["icon-calendar",{active:g.canReset}])},{default:n((()=>[r(x,{class:"icon-calendar-0"}),r(x,{class:"icon-calendar-1"})])),_:1},8,["class"])):F("v-if",!0)])),_:1},8,["onClick"]),o.isOpened?(l(),i(x,{key:0,class:"uni-dropdown-cover",onClick:g.handleClose},null,8,["onClick"])):F("v-if",!0),o.isOpened?(l(),i(x,{key:1,class:"dropdown-popup dropdown-popup-right",onClick:t[3]||(t[3]=m((()=>{}),["stop"]))},{default:n((()=>[F(" select"),g.isSelect?(l(),i(x,{key:0,class:"list"},{default:n((()=>[(l(!0),u(p,null,h(o.dataList,((e,t)=>(l(),i(v,{class:"flex-r a-i-c list-item",key:t,onClick:e=>g.onItemClick(e,t)},{default:n((()=>[r(k,{class:"check",checked:e.checked},null,8,["checked"]),r(x,{class:"checklist-content"},{default:n((()=>[r(_,{class:"checklist-text",style:j(e.styleIconText)},{default:n((()=>[d(c(e[a.map.text]),1)])),_:2},1032,["style"])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):F("v-if",!0),g.isSelect?(l(),i(x,{key:1,class:"flex-r opera-area"},{default:n((()=>[r(x,{class:f(["flex-f btn btn-default",{disable:!g.canReset}]),onClick:g.handleSelectReset},{default:n((()=>[d(c(o.resource.reset),1)])),_:1},8,["class","onClick"]),r(x,{class:"flex-f btn btn-submit",onClick:g.handleSelectSubmit},{default:n((()=>[d(c(o.resource.submit),1)])),_:1},8,["onClick"])])),_:1})):F("v-if",!0),F(" search "),g.isSearch?(l(),i(x,{key:2,class:"search-area"},{default:n((()=>[r(w,{class:"search-input",modelValue:o.filterValue,"onUpdate:modelValue":t[0]||(t[0]=e=>o.filterValue=e)},null,8,["modelValue"])])),_:1})):F("v-if",!0),g.isSearch?(l(),i(x,{key:3,class:"flex-r opera-area"},{default:n((()=>[r(x,{class:"flex-f btn btn-submit",onClick:g.handleSearchSubmit},{default:n((()=>[d(c(o.resource.search),1)])),_:1},8,["onClick"]),r(x,{class:f(["flex-f btn btn-default",{disable:!g.canReset}]),onClick:g.handleSearchReset},{default:n((()=>[d(c(o.resource.reset),1)])),_:1},8,["class","onClick"])])),_:1})):F("v-if",!0),F(" range "),g.isRange?(l(),i(x,{key:4},{default:n((()=>[r(x,{class:"input-label"},{default:n((()=>[d(c(o.resource.gt),1)])),_:1}),r(w,{class:"input",modelValue:o.gtValue,"onUpdate:modelValue":t[1]||(t[1]=e=>o.gtValue=e)},null,8,["modelValue"]),r(x,{class:"input-label"},{default:n((()=>[d(c(o.resource.lt),1)])),_:1}),r(w,{class:"input",modelValue:o.ltValue,"onUpdate:modelValue":t[2]||(t[2]=e=>o.ltValue=e)},null,8,["modelValue"])])),_:1})):F("v-if",!0),g.isRange?(l(),i(x,{key:5,class:"flex-r opera-area"},{default:n((()=>[r(x,{class:f(["flex-f btn btn-default",{disable:!g.canReset}]),onClick:g.handleRangeReset},{default:n((()=>[d(c(o.resource.reset),1)])),_:1},8,["class","onClick"]),r(x,{class:"flex-f btn btn-submit",onClick:g.handleRangeSubmit},{default:n((()=>[d(c(o.resource.submit),1)])),_:1},8,["onClick"])])),_:1})):F("v-if",!0),F(" date "),g.isDate?(l(),i(x,{key:6},{default:n((()=>[r(C,{ref:"datetimepicker",value:o.dateRange,type:"datetimerange","return-type":"timestamp",onChange:g.datetimechange,onMaskClick:g.timepickerclose},{default:n((()=>[r(x)])),_:1},8,["value","onChange","onMaskClick"])])),_:1})):F("v-if",!0)])),_:1})):F("v-if",!0)])),_:1})}],["__scopeId","data-v-e9cdc6da"]])},emits:["sort-change","filter-change"],props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"},rowspan:{type:[Number,String],default:1},colspan:{type:[Number,String],default:1},sortable:{type:Boolean,default:!1},filterType:{type:String,default:""},filterData:{type:Array,default:()=>[]},filterDefaultValue:{type:[Array,String],default:()=>""}},data:()=>({border:!1,ascending:!1,descending:!1}),computed:{customWidth(){if("number"==typeof this.width)return this.width;if("string"==typeof this.width){let e=new RegExp(/^[1-9][0-9]*px$/g),t=new RegExp(/^[1-9][0-9]*rpx$/g),a=new RegExp(/^[1-9][0-9]*$/g);if(null!==this.width.match(e))return this.width.replace("px","");if(null!==this.width.match(t)){let e=Number(this.width.replace("rpx","")),t=P().screenWidth/750;return Math.round(e*t)}return null!==this.width.match(a)?this.width:""}return""},contentAlign(){let e="left";switch(this.align){case"left":e="flex-start";break;case"center":e="center";break;case"right":e="flex-end"}return e}},created(){this.root=this.getTable("uniTable"),this.rootTr=this.getTable("uniTr"),this.rootTr.minWidthUpdate(this.customWidth?this.customWidth:140),this.border=this.root.border,this.root.thChildren.push(this)},methods:{sort(){if(this.sortable)return this.clearOther(),this.ascending||this.descending?this.ascending&&!this.descending?(this.ascending=!1,this.descending=!0,void this.$emit("sort-change",{order:"descending"})):void(!this.ascending&&this.descending&&(this.ascending=!1,this.descending=!1,this.$emit("sort-change",{order:null}))):(this.ascending=!0,void this.$emit("sort-change",{order:"ascending"}))},ascendingFn(){this.clearOther(),this.ascending=!this.ascending,this.descending=!1,this.$emit("sort-change",{order:this.ascending?"ascending":null})},descendingFn(){this.clearOther(),this.descending=!this.descending,this.ascending=!1,this.$emit("sort-change",{order:this.descending?"descending":null})},clearOther(){this.root.thChildren.map((e=>(e!==this&&(e.ascending=!1,e.descending=!1),e)))},ondropdown(e){this.$emit("filter-change",e)},getTable(e){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t}}},[["render",function(e,t,a,s,o,d){const c=y,h=b,p=O("dropdown");return l(),u("th",{rowspan:a.rowspan,colspan:a.colspan,class:f(["uni-table-th",{"table--border":o.border}]),style:j({width:d.customWidth+"px","text-align":a.align})},[r(h,{class:"uni-table-th-row"},{default:n((()=>[r(h,{class:"uni-table-th-content",style:j({"justify-content":d.contentAlign}),onClick:d.sort},{default:n((()=>[N(e.$slots,"default",{},void 0,!0),a.sortable?(l(),i(h,{key:0,class:"arrow-box"},{default:n((()=>[r(c,{class:f(["arrow up",{active:o.ascending}]),onClick:m(d.ascendingFn,["stop"])},null,8,["class","onClick"]),r(c,{class:f(["arrow down",{active:o.descending}]),onClick:m(d.descendingFn,["stop"])},null,8,["class","onClick"])])),_:1})):F("v-if",!0)])),_:3},8,["style","onClick"]),a.filterType||a.filterData.length?(l(),i(p,{key:0,filterDefaultValue:a.filterDefaultValue,filterData:a.filterData,filterType:a.filterType,onChange:d.ondropdown},null,8,["filterDefaultValue","filterData","filterType","onChange"])):F("v-if",!0)])),_:3})],14,["rowspan","colspan"])}],["__scopeId","data-v-b8cfd5ae"]]);const ie=R({name:"uniTd",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"},rowspan:{type:[Number,String],default:1},colspan:{type:[Number,String],default:1}},data:()=>({border:!1}),created(){this.root=this.getTable(),this.border=this.root.border},methods:{getTable(){let e=this.$parent,t=e.$options.name;for(;"uniTable"!==t;){if(e=e.$parent,!e)return!1;t=e.$options.name}return e}}},[["render",function(e,t,a,s,i,n){return l(),u("td",{class:f(["uni-table-td",{"table--border":i.border}]),rowspan:a.rowspan,colspan:a.colspan,style:j({width:a.width+"px","text-align":a.align})},[N(e.$slots,"default",{},void 0,!0)],14,["rowspan","colspan"])}],["__scopeId","data-v-dc0c405a"]]),ne=R(e({__name:"detail",setup(e){const m=t([]),w=t(!0),D=a(),V=t(null),I=s((()=>D.info)),R=t("goods_content"),$=e=>{R.value=e},N=t({sku_id:"",goods_id:""});E((e=>{N.value.sku_id=e.sku_id,N.value.goods_id=e.goods_id,w.value=!0,S()&&D.getMemberInfo(),M(N.value).then((e=>{if("{}"===JSON.stringify(e.data))return B({title:"找不到该商品",icon:"none"}),setTimeout((()=>{x({url:"/addon/o2o/pages/index",mode:"reLaunch"})}),600),!1;m.value=e.data,m.value.goods.goods_image_thumb_mid.forEach(((e,t)=>{m.value.goods.goods_image_thumb_mid[t]=C(e)})),w.value=!1,G()}))}));let O={sku:{num:1,sku_id:""}};const L=()=>{V.value.open()},A=e=>{m.value.skuList.forEach(((t,a)=>{t.sku_id==e&&Object.assign(m.value,t)}))},P=t(null),z=t("");let Z={};const G=()=>{z.value="?sku_id="+m.value.sku_id,I.value&&I.value.member_id&&(z.value+="&mid="+I.value.member_id)},Q=()=>{Z.sku_id=m.value.sku_id,I.value&&I.value.member_id&&(Z.member_id=I.value.member_id),P.value.openShare()},ee=t(""),te=s((()=>{let e="0.00";return Object.keys(m.value).length&&Object.keys(m.value.goods).length&&m.value.goods.member_discount&&S()?(e=m.value.member_price||m.value.price,ee.value="member_price"):(e=m.value.price,ee.value=""),parseFloat(e).toFixed(2)}));return(e,t)=>{const a=_(v("u-swiper"),K),s=b,D=y,I=k,N=_(v("u-parse"),U),E=_(v("u-button"),T),B=_(v("loading-page"),H);return l(),i(s,{style:j(e.themeColor())},{default:n((()=>[w.value?F("v-if",!0):(l(),i(s,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:n((()=>[r(a,{list:m.value.goods.goods_image_thumb_mid,autoplay:!1,height:"100vw"},null,8,["list"]),F(' <div class="h-[750rpx] w-[100%] bg-[#fff]">\r\n                <u--image  width="100%" height="750rpx"\r\n                :src="img(detail.sku_image_thumb_big)" mode="aspectFill">\r\n                    <template #error>\r\n                        <u-icon name="photo" color="#999" size="100"></u-icon>\r\n                    </template>\r\n                </u--image>\r\n            </div> '),r(s,{class:"px-[24rpx]"},{default:n((()=>[r(s,{class:"chunk-wrap pt-2 pb-3 rounded-lg relative mt-[14rpx]"},{default:n((()=>[r(s,{class:"font-bold multi-hidden"},{default:n((()=>[d(c(m.value.goods.goods_name),1)])),_:1}),r(s,{class:"flex items-center justify-between mt-2"},{default:n((()=>[r(s,{class:"flex items-center"},{default:n((()=>[r(s,{class:"text-[var(--price-text-color)] text-[28rpx] font-bold flex items-center"},{default:n((()=>[r(D,{class:"text-[28rpx] price-font"},{default:n((()=>[d("￥")])),_:1}),r(D,{class:"price-font text-[28rpx]"},{default:n((()=>[d(c(o(te)),1)])),_:1}),m.value.sku_unit?(l(),i(D,{key:0},{default:n((()=>[d("/"+c(m.value.sku_unit),1)])),_:1})):F("v-if",!0),"member_price"==ee.value?(l(),i(I,{key:1,class:"h-[28rpx] ml-[12rpx] w-[60rpx]",src:o(C)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):F("v-if",!0)])),_:1}),r(s,{class:"text-[24rpx] flex ml-[20rpx]"},{default:n((()=>[r(D,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:n((()=>[d(c(m.value.goods.buy_type_name),1)])),_:1})])),_:1})])),_:1}),r(s,{class:"text-[20rpx]"},{default:n((()=>[d(c(m.value.goods.sale_num)+c(o(W)("selectNum")),1)])),_:1})])),_:1})])),_:1}),m.value.skuList&&m.value.skuList.length>1?(l(),i(s,{key:0,onClick:L,class:"flex items-center h-[88rpx] px-[20rpx] bg-[#fff] rounded-lg mb-[20rpx]"},{default:n((()=>[r(D,{class:"text-[var(--text-color-light9)] text-[30rpx] leading-[42rpx] font-500 mr-[20rpx]"},{default:n((()=>[d(c(o(W)("selected")),1)])),_:1}),r(s,{class:"flex-1 text-[#343434] text-sm leading-[42rpx] font-500"},{default:n((()=>[d(c(m.value.sku_name),1)])),_:1}),r(D,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light6)]"})])),_:1})):F("v-if",!0),r(s,{class:"chunk-wrap pt-[34rpx] pb-[24rpx] scheduling rounded-lg"},{default:n((()=>[r(s,{class:"flex items-center"},{default:n((()=>[r(D,{class:f(["text-[30rpx] text-center leading-[80rpx] flex-1 text-[var(--text-color-light6)]",{"class-select":"goods_content"==R.value}]),onClick:t[0]||(t[0]=e=>$("goods_content"))},{default:n((()=>[d("项目介绍")])),_:1},8,["class"]),r(D,{class:f(["text-[30rpx] text-center leading-[80rpx] flex-1 text-[var(--text-color-light6)]",{"class-select":"buy_info"==R.value}]),onClick:t[1]||(t[1]=e=>$("buy_info"))},{default:n((()=>[d("购买须知")])),_:1},8,["class"]),"reservation"==m.value.goods.buy_type?(l(),i(D,{key:0,class:f(["text-[30rpx] text-center leading-[80rpx] flex-1 text-[var(--text-color-light6)]",{"class-select":"price_list"==R.value}]),onClick:t[2]||(t[2]=e=>$("price_list"))},{default:n((()=>[d("价目表")])),_:1},8,["class"])):F("v-if",!0)])),_:1}),r(s,{class:"mt-[24rpx]"},{default:n((()=>["goods_content"==R.value?(l(),i(s,{key:0,class:"scheduling-content mt-2"},{default:n((()=>[m.value.goods.goods_content?(l(),i(N,{key:0,content:m.value.goods.goods_content,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(l(),i(s,{key:1,class:"h-[380rpx] flex"},{default:n((()=>[r(s,{class:"mx-auto"},{default:n((()=>[r(I,{class:"w-[280rpx] h-[280rpx]",src:o(C)("addon/o2o/goods/empty01.png")},null,8,["src"]),r(s,{class:"text-center text-[#c1c1c1] text-[24rpx]"},{default:n((()=>[d(c(o(W)("noProjectInt")),1)])),_:1})])),_:1})])),_:1}))])),_:1})):F("v-if",!0),"buy_info"==R.value?(l(),i(s,{key:1,class:"scheduling-content mt-2"},{default:n((()=>[m.value.goods.buy_info?(l(),i(N,{key:0,content:m.value.goods.buy_info,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(l(),i(s,{key:1,class:"h-[380rpx] flex"},{default:n((()=>[r(s,{class:"mx-auto"},{default:n((()=>[r(I,{class:"w-[280rpx] h-[280rpx]",src:o(C)("addon/o2o/goods/empty01.png")},null,8,["src"]),r(s,{class:"text-center text-[#c1c1c1] text-[24rpx]"},{default:n((()=>[d(c(o(W)("noPurchase")),1)])),_:1})])),_:1})])),_:1}))])),_:1})):F("v-if",!0),"price_list"==R.value?(l(),i(s,{key:2,class:"scheduling-content mt-2"},{default:n((()=>[m.value.goods.price_list&&m.value.goods.price_list.length?(l(),i(s,{key:0},{default:n((()=>[r(Y,{border:"",stripe:"",emptyText:o(W)("noMore")},{default:n((()=>[r(q,null,{default:n((()=>[r(le,{width:"80",align:"center"},{default:n((()=>[d(c(o(W)("projectName")),1)])),_:1}),r(le,{width:"50",align:"center"},{default:n((()=>[d(c(o(W)("price")),1)])),_:1}),r(le,{width:"50",align:"center"},{default:n((()=>[d(c(o(W)("unit")),1)])),_:1})])),_:1}),(l(!0),u(p,null,h(m.value.goods.price_list,((e,t)=>(l(),i(q,{key:t},{default:n((()=>[r(ie,{align:"center"},{default:n((()=>[d(c(e.name),1)])),_:2},1024),r(ie,{align:"center"},{default:n((()=>[r(s,{class:"name"},{default:n((()=>[d(c(e.price),1)])),_:2},1024)])),_:2},1024),r(ie,{align:"center"},{default:n((()=>[d(c(e.unit),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["emptyText"])])),_:1})):(l(),i(s,{key:1,class:"h-[380rpx] flex"},{default:n((()=>[r(s,{class:"mx-auto"},{default:n((()=>[r(I,{class:"w-[280rpx] h-[280rpx]",src:o(C)("addon/o2o/goods/empty01.png")},null,8,["src"]),r(s,{class:"text-center text-[#c1c1c1] text-[24rpx]"},{default:n((()=>[d(c(o(W)("noPriceList")),1)])),_:1})])),_:1})])),_:1}))])),_:1})):F("v-if",!0)])),_:1})])),_:1}),r(s,{class:"h-[148rpx] w-screen"}),r(s,{class:"flex justify-between bg-white px-3 py-2 fixed bottom-0 left-0 right-0"},{default:n((()=>[r(s,{class:"flex items-center"},{default:n((()=>[r(s,{class:"flex flex-col items-center mr-[44rpx]",onClick:t[3]||(t[3]=e=>o(x)({url:"/addon/o2o/pages/index",mode:"reLaunch"}))},{default:n((()=>[r(I,{class:"w-[43rpx] h-[43rpx]",src:o(C)("addon/o2o/service/index.png"),mode:"aspectFill"},null,8,["src"]),r(D,{class:"text-[24rpx] text-[#454545] mt-1.5"},{default:n((()=>[d(c(o(W)("index")),1)])),_:1})])),_:1}),r(s,{class:"flex flex-col items-center mr-[44rpx]",onClick:Q},{default:n((()=>[r(s,{class:"nc-iconfont nc-icon-fenxiangV6xx text-[36rpx] mt-[4rpx] mb-[6rpx] font-bold"}),r(D,{class:"text-[24rpx] text-[#454545] mt-1"},{default:n((()=>[d(c(o(W)("share")),1)])),_:1})])),_:1}),r(s,{class:"flex flex-col items-center mr-[44rpx]"},{default:n((()=>[r(I,{class:"w-[44rpx] h-[44rpx]",src:o(C)("addon/o2o/service/service.png"),mode:"aspectFill"},null,8,["src"]),r(D,{class:"text-[24rpx] text-[#454545] mt-1"},{default:n((()=>[d(c(o(W)("service")),1)])),_:1})])),_:1}),F(' <view class="flex flex-col items-center mr-[44rpx]" @click="collect(detail)">\r\n                        <image class="w-[44rpx] h-[44rpx]" v-if="collect_id > 0" :src="img(\'static/resource/images/member/select_collect.png\')" mode="aspectFill"></image>\r\n                        <image class="w-[44rpx] h-[44rpx]" v-else :src="img(\'static/resource/images/member/collect.png\')" mode="aspectFill"></image>\r\n                        <text class="text-[24rpx] text-[#454545] mt-1">收藏</text>\r\n                    </view> ')])),_:1}),r(E,{customStyle:{marginLeft:"8rpx",borderRadius:"38rpx",flex:"1"},color:m.value.goods.status?"var( --primary-color)":"#999",size:"16",text:m.value.goods.status?"reservation"==m.value.goods.buy_type?o(W)("bookNow"):o(W)("orderNow"):o(W)("delisted"),onClick:t[4]||(t[4]=e=>{return t=m.value,S()?!!t.goods.status&&(O.sku.sku_id=t.sku_id,uni.setStorageSync("o2oCreateData",O),void("buy"==t.goods.buy_type?L():x({url:"/addon/o2o/pages/order/payment",param:{id:t.goods_id}}))):(g().setLoginBack({url:"/addon/o2o/pages/goods/detail",param:{sku_id:t.sku_id}}),!1);var t})},null,8,["color","text"])])),_:1})])),_:1}),r(J,{ref_key:"sharePosterRef",ref:P,posterType:"o2o_goods",posterId:m.value.goods.poster_id,posterParam:o(Z),copyUrlParam:z.value},null,8,["posterId","posterParam","copyUrlParam"])])),_:1})),r(X,{ref_key:"goodsSkuRef",ref:V,"goods-detail":m.value,onChange:A},null,8,["goods-detail"]),r(B,{loading:w.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-a5ba3ba4"]]);export{ne as default};
