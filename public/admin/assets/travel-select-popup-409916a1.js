import{d as W,l as T,r as S,n as V,h as D,c as H,a as n,b as q,e as i,w as p,i as m,t as r,u as a,q as l,R as x,a0 as P,s as K,A as X,a3 as J,a$ as Q,U as E,E as Z,K as ee,L as te,bO as ae,M as le,ac as oe,ad as se,W as ne,X as ie,Y as re}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{b as pe}from"./tourism-85633922.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";const ce={class:"inline-block ml-[10px] text-[14px]"},me={class:"text-primary mx-[2px]"},ue={class:"flex items-center cursor-pointer"},_e={class:"min-w-[60px] h-[60px] flex items-center justify-center"},fe=["src"],ge=["title"],ye={class:"mt-[16px] flex"},ve={class:"flex items-center flex-1"},he={class:"layui-table-bottom-left-container mr-[10px]"},we={class:"text-primary mx-[2px]"},xe={class:"dialog-footer"},be=W({__name:"travel-select-popup",props:{modelValue:{type:String,default:""},max:{type:Number,default:0},min:{type:Number,default:0}},emits:["update:modelValue"],setup($,{expose:N,emit:R}){const u=$,f=T({get(){return u.modelValue},set(o){R("update:modelValue",o)}}),v=S(!1),d=V({}),g=T(()=>Object.keys(d).length),t=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{way_name:"",create_time:"",goods_type:"way"}}),k=S(),w=S(),z=(o,e)=>{let c=!1;for(let _=0;_<o.length;_++)if(o[_].way_id==e.way_id){c=!0;break}c?d["way_"+e.way_id]=e:delete d["way_"+e.way_id]},B=o=>{o.length?o.forEach(e=>{d["way_"+e.way_id]=e}):t.data.forEach(e=>{delete d["way_"+e.way_id]})},h=(o=1,e=null)=>{t.loading=!0,t.page=o;const c=J(t.searchParam);pe({page:t.page,limit:t.limit,...c}).then(_=>{t.loading=!1,t.data=_.data.data,t.total=_.data.total,e&&e(),C()}).catch(()=>{t.loading=!1})},C=()=>{Q(()=>{if(w.value)for(let o=0;o<t.data.length;o++)w.value.toggleRowSelection(t.data[o],!1),d["way_"+t.data[o].way_id]&&w.value.toggleRowSelection(t.data[o],!0)})},F=o=>{o&&(o.resetFields(),h())},G=()=>{h(1,()=>{if(f.value){const o=[];for(let e=0;e<t.data.length;e++)f.value.indexOf(t.data[e].way_id)!=-1&&(o.push(t.data[e].way_id),d["way_"+t.data[e].way_id]=t.data[e]||{});f.value=o}}),v.value=!0},I=()=>{for(const o in d)delete d[o];C()},L=()=>{if(u.min&&g.value<u.min){E({type:"warning",message:`${l("travelSelectPopupGoodsMinTip")}${u.min}${l("goodsSelectPopupPiece")}`});return}if(u.max&&u.max>0&&g.value&&g.value>u.max){E({type:"warning",message:`${l("travelSelectPopupGoodsMaxTip")}${u.max}${l("goodsSelectPopupPiece")}`});return}const o=[];for(const e in d)o.push(parseInt(e.replace("way_","")));f.value.splice(0,f.value.length,...o),v.value=!1};return N({showDialog:v,selectTravel:d,selectGoodsNum:g}),(o,e)=>{const c=Z,_=ee,b=te,M=ae,U=le,y=oe,j=se,A=ne,Y=ie,O=re;return D(),H("div",null,[n("div",{onClick:G},[q(o.$slots,"default",{},()=>[i(c,null,{default:p(()=>[m(r(a(l)("travelSelectPopupAllTravel")),1)]),_:1}),x(n("div",ce,[n("span",null,r(a(l)("goodsSelectPopupSelect")),1),n("span",me,r(a(f).length),1),n("span",null,r(a(l)("goodsSelectPopupPiece")),1)],512),[[P,a(f).length]])],!0)]),i(Y,{modelValue:v.value,"onUpdate:modelValue":e[8]||(e[8]=s=>v.value=s),title:a(l)("travelSelectPopupSelectGoodsDialog"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:p(()=>[n("span",xe,[i(c,{onClick:e[7]||(e[7]=s=>v.value=!1)},{default:p(()=>[m(r(a(l)("cancel")),1)]),_:1}),i(c,{type:"primary",onClick:L},{default:p(()=>[m(r(a(l)("confirm")),1)]),_:1})])]),default:p(()=>[i(U,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:k},{default:p(()=>[i(b,{label:a(l)("wayNameSelectPopup"),prop:"way_name",class:"form-item-wrap"},{default:p(()=>[i(_,{modelValue:t.searchParam.way_name,"onUpdate:modelValue":e[0]||(e[0]=s=>t.searchParam.way_name=s),placeholder:a(l)("wayNameSelectPopupPlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(b,{label:a(l)("createTime"),prop:"create_time",class:"form-item-wrap"},{default:p(()=>[i(M,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":e[1]||(e[1]=s=>t.searchParam.create_time=s),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(l)("startDate"),"end-placeholder":a(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),i(b,{class:"form-item-wrap"},{default:p(()=>[i(c,{type:"primary",onClick:e[2]||(e[2]=s=>h())},{default:p(()=>[m(r(a(l)("search")),1)]),_:1}),i(c,{onClick:e[3]||(e[3]=s=>F(k.value))},{default:p(()=>[m(r(a(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),x((D(),K(j,{data:t.data,size:"large",ref_key:"travelListTableRef",ref:w,"max-height":"400",onSelect:z,onSelectAll:B},{empty:p(()=>[n("span",null,r(t.loading?"":a(l)("emptyData")),1)]),default:p(()=>[i(y,{type:"selection",width:"55"}),i(y,{label:a(l)("wayInfo"),"min-width":"240",align:"left","show-overflow-tooltip":""},{default:p(({row:s})=>[n("div",ue,[n("div",_e,[n("img",{class:"max-w-[60px] max-h-[60px]",src:a(X)(s.goods.cover_thumb_small)},null,8,fe)]),n("a",{href:"javascript:;",title:s.way_name,class:"multi-hidden ml-2"},r(s.way_name),9,ge)])]),_:1},8,["label"]),i(y,{label:a(l)("wayCity"),"min-width":"200",align:"left"},{default:p(({row:s})=>[n("div",null,[n("span",null,r(a(l)("startCity"))+"："+r(s.start_city),1)]),n("div",null,[n("span",null,r(a(l)("endCity"))+"："+r(s.end_city),1)])]),_:1},8,["label"]),i(y,{label:a(l)("linePrice"),"min-width":"120",align:"left"},{default:p(({row:s})=>[m(r(s.goods.price),1)]),_:1},8,["label"]),i(y,{label:a(l)("stock"),"min-width":"120",align:"left"},{default:p(({row:s})=>[m(r(s.goods.stock),1)]),_:1},8,["label"]),i(y,{label:a(l)("createTime"),"min-width":"180",align:"center"},{default:p(({row:s})=>[m(r(s.create_time||""),1)]),_:1},8,["label"]),i(y,{prop:"status_name",label:a(l)("wayStatus"),"min-width":"120"},null,8,["label"])]),_:1},8,["data"])),[[O,t.loading]]),n("div",ye,[n("div",ve,[x(n("div",he,[n("span",null,r(a(l)("goodsSelectPopupBeforeTip")),1),n("span",we,r(a(g)),1),n("span",null,r(a(l)("travelSelectPopupAfterTip")),1)],512),[[P,a(g)]]),x(i(c,{type:"primary",link:"",onClick:I},{default:p(()=>[m(r(a(l)("goodsSelectPopupClearGoods")),1)]),_:1},512),[[P,a(g)]])]),i(A,{"current-page":t.page,"onUpdate:current-page":e[4]||(e[4]=s=>t.page=s),"page-size":t.limit,"onUpdate:page-size":e[5]||(e[5]=s=>t.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[6]||(e[6]=s=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});const Ye=de(be,[["__scopeId","data-v-474fea13"]]);export{Ye as default};
