import{d as le,l as R,r as G,n as k,h as x,c as O,i as v,a as p,b as se,e as d,w as r,t as g,u as l,q as s,R as E,a0 as D,F as de,T as ne,s as F,A as ie,a3 as j,a$ as re,U as z,E as pe,ab as ce,aC as ge,L as ue,K as me,bF as _e,M as fe,ac as he,J as ye,ad as ve,W as be,X as Pe,Y as xe,p as Se,g as ke}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as A}from"./goods_default-665e448a.js";import{g as Ce,b as Ve,c as we}from"./goods-02f435a9.js";import{_ as Ge}from"./_plugin-vue_export-helper-c27b6911.js";const Ee=S=>(Se("data-v-beb313de"),S=S(),ke(),S),Te={class:"inline-block ml-[10px] text-[14px]"},Ie={class:"text-primary mx-[2px]"},$e={class:"flex items-center cursor-pointer"},Oe={class:"min-w-[60px] h-[60px] flex items-center justify-center"},De=Ee(()=>p("div",{class:"image-slot"},[p("img",{class:"w-[60px] h-[60px]",src:A})],-1)),Fe={key:1,class:"w-[70px] h-[60px]",src:A,fit:"contain"},Ne={class:"ml-2"},Ue=["title"],Be={class:"text-primary text-[12px]"},Le={class:"mt-[16px] flex"},Re={class:"flex items-center flex-1"},je={class:"layui-table-bottom-left-container mr-[10px]"},ze={class:"text-primary mx-[2px]"},Ae={class:"dialog-footer"},Me=le({__name:"goods-select-popup",props:{modelValue:{type:String,default:""},max:{type:Number,default:0},min:{type:Number,default:0}},emits:["update:modelValue","goodsSelect"],setup(S,{expose:M,emit:N}){const u=S,_=R({get(){return u.modelValue},set(t){N("update:modelValue",t)}}),b=G(!1),i=k({}),m=k([]),y=R(()=>Object.keys(i).length),o=k({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keyword:"",goods_category:[],select_type:"all",goods_ids:"",verify_goods_ids:"",goods_type:""}}),U=G(),q=t=>{P()},T=k([]),B=k([]);(()=>{Ce().then(t=>{const e=t.data;if(e){const c=[];e.forEach(n=>{const h=[];n.child_list&&n.child_list.forEach(f=>{h.push({value:f.category_id,label:f.category_name})}),c.push({value:n.category_id,label:n.category_name,children:h})}),T.splice(0,T.length,...c)}}),Ve().then(t=>{const e=t.data;if(e)for(const c in e)B.push(e[c])})})();const C=G();G([]);const J=(t,e)=>{let c=!1;for(let n=0;n<t.length;n++)if(t[n].goods_id==e.goods_id){c=!0;break}if(c?(m.push(e.goods_id),i["goods_"+e.goods_id]=e):(m.splice(m.indexOf(e.goods_id),1),delete i["goods_"+e.goods_id]),u.max&&u.max>0&&Object.keys(i).length>0&&Object.keys(i).length>u.max){let n=Object.keys(i).length;n=n-u.max,j(m).forEach((f,$,L)=>{if($<n){let V=m.indexOf(f);delete i["goods_"+m[V]],m.splice(V,1)}}),I()}},K=t=>{t.length?t.forEach(e=>{i["goods_"+e.goods_id]=e,m.indexOf(e.goods_id)==-1&&m.push(e.goods_id)}):o.data.forEach(e=>{m.splice(m.indexOf(e.goods_id),1),delete i["goods_"+e.goods_id]})},P=(t=1,e=null)=>{o.loading=!0,o.page=t;const c=j(o.searchParam);if(c.select_type=="selected"){const n=[];for(let h in i)n.push(parseInt(h.replace("goods_","")));c.goods_ids=n}else c.goods_ids="";we({page:o.page,limit:o.limit,...c}).then(n=>{o.loading=!1,o.data=n.data.data,o.total=n.data.total,e&&e(n.data.verify_goods_ids),I()}).catch(()=>{o.loading=!1})},I=()=>{re(()=>{if(C.value)for(let t=0;t<o.data.length;t++)C.value.toggleRowSelection(o.data[t],!1),i["goods_"+o.data[t].goods_id]&&C.value.toggleRowSelection(o.data[t],!0)})},W=t=>{t&&(t.resetFields(),P())},X=()=>{for(let t in i)delete i[t];o.searchParam.verify_goods_ids=_.value,P(1,t=>{if(_.value){_.value.splice(0,_.value.length,...t),_.value.forEach(e=>{i["goods_"+e]||(i["goods_"+e]={})});for(let e=0;e<o.data.length;e++)_.value.indexOf(o.data[e].goods_id)!=-1&&(i["goods_"+o.data[e].goods_id]=o.data[e])}}),b.value=!0},Y=()=>{for(let t in i)delete i[t];I()},H=()=>{if(u.min&&y.value<u.min){z({type:"warning",message:`${s("goodsSelectPopupGoodsMinTip")}${u.min}${s("goodsSelectPopupPiece")}`});return}if(u.max&&u.max>0&&y.value&&y.value>u.max){z({type:"warning",message:`${s("goodsSelectPopupGoodsMaxTip")}${u.max}${s("goodsSelectPopupPiece")}`});return}let t=[];for(let e in i)t.push(parseInt(e.replace("goods_","")));_.value.splice(0,_.value.length,...t),N("goodsSelect",i),Q(),b.value=!1},Q=()=>{o.searchParam.keyword="",o.searchParam.goods_category=[],o.searchParam.select_type="all",o.searchParam.goods_ids="",o.searchParam.verify_goods_ids="",o.searchParam.goods_type=""};return M({showDialog:b,selectGoods:i,selectGoodsNum:y}),(t,e)=>{const c=pe,n=ce,h=ge,f=ue,$=me,L=_e,V=fe,w=he,Z=ye,ee=ve,oe=be,te=Pe,ae=xe;return x(),O("div",null,[v(" 1122 "),p("div",{onClick:X},[se(t.$slots,"default",{},()=>[d(c,null,{default:r(()=>[v(g(l(s)("goodsSelectPopupSelectGoodsButton")),1)]),_:1}),E(p("div",Te,[p("span",null,g(l(s)("goodsSelectPopupSelect")),1),p("span",Ie,g(l(_).length),1),p("span",null,g(l(s)("goodsSelectPopupPiece")),1)],512),[[D,l(_).length]])],!0)]),d(te,{modelValue:b.value,"onUpdate:modelValue":e[10]||(e[10]=a=>b.value=a),title:l(s)("goodsSelectPopupSelectGoodsDialog"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:r(()=>[p("span",Ae,[d(c,{onClick:e[9]||(e[9]=a=>b.value=!1)},{default:r(()=>[v(g(l(s)("cancel")),1)]),_:1}),d(c,{type:"primary",onClick:H},{default:r(()=>[v(g(l(s)("confirm")),1)]),_:1})])]),default:r(()=>[d(V,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:U},{default:r(()=>[d(f,{prop:"select_type",class:"form-item-wrap"},{default:r(()=>[d(h,{modelValue:o.searchParam.select_type,"onUpdate:modelValue":e[0]||(e[0]=a=>o.searchParam.select_type=a),onChange:q},{default:r(()=>[d(n,{label:l(s)("goodsSelectPopupAllGoods"),value:"all"},null,8,["label"]),d(n,{label:l(s)("goodsSelectPopupSelectedGoods"),value:"selected"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),d(f,{label:l(s)("goodsSelectPopupGoodsName"),prop:"keyword",class:"form-item-wrap"},{default:r(()=>[d($,{modelValue:o.searchParam.keyword,"onUpdate:modelValue":e[1]||(e[1]=a=>o.searchParam.keyword=a),placeholder:l(s)("goodsSelectPopupGoodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(f,{label:l(s)("goodsSelectPopupGoodsCategory"),prop:"goods_category",class:"form-item-wrap"},{default:r(()=>[d(L,{modelValue:o.searchParam.goods_category,"onUpdate:modelValue":e[2]||(e[2]=a=>o.searchParam.goods_category=a),options:T,placeholder:l(s)("goodsSelectPopupGoodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),d(f,{label:l(s)("goodsSelectPopupGoodsType"),prop:"goods_type",class:"form-item-wrap"},{default:r(()=>[d(h,{modelValue:o.searchParam.goods_type,"onUpdate:modelValue":e[3]||(e[3]=a=>o.searchParam.goods_type=a),placeholder:l(s)("goodsSelectPopupGoodsTypePlaceholder"),clearable:""},{default:r(()=>[(x(!0),O(de,null,ne(B,a=>(x(),F(n,{key:a.type,label:a.name,value:a.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),d(f,{class:"form-item-wrap"},{default:r(()=>[d(c,{type:"primary",onClick:e[4]||(e[4]=a=>P())},{default:r(()=>[v(g(l(s)("search")),1)]),_:1}),d(c,{onClick:e[5]||(e[5]=a=>W(U.value))},{default:r(()=>[v(g(l(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),E((x(),F(ee,{data:o.data,size:"large",ref_key:"goodsListTableRef",ref:C,"max-height":"400",onSelect:J,onSelectAll:K},{empty:r(()=>[p("span",null,g(o.loading?"":l(s)("emptyData")),1)]),default:r(()=>[d(w,{type:"selection",width:"55"}),d(w,{prop:"goods_id",label:l(s)("goodsSelectPopupGoodsInfo"),"min-width":"400"},{default:r(({row:a})=>[p("div",$e,[p("div",Oe,[a.goods_cover_thumb_small?(x(),F(Z,{key:0,class:"w-[60px] h-[60px]",src:l(ie)(a.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[De]),_:2},1032,["src"])):(x(),O("img",Fe))]),p("div",Ne,[p("span",{title:a.goods_name,class:"multi-hidden"},g(a.goods_name),9,Ue),p("span",Be,g(a.goods_type_name),1)])])]),_:1},8,["label"]),d(w,{prop:"price",label:l(s)("goodsSelectPopupPrice"),"min-width":"120",align:"right"},{default:r(({row:a})=>[p("div",null,"￥"+g(a.goodsSku.price),1)]),_:1},8,["label"]),d(w,{prop:"stock",label:l(s)("goodsSelectPopupStock"),"min-width":"120",align:"right"},null,8,["label"])]),_:1},8,["data"])),[[ae,o.loading]]),p("div",Le,[p("div",Re,[E(p("div",je,[p("span",null,g(l(s)("goodsSelectPopupBeforeTip")),1),p("span",ze,g(l(y)),1),p("span",null,g(l(s)("goodsSelectPopupAfterTip")),1)],512),[[D,l(y)]]),E(d(c,{type:"primary",link:"",onClick:Y},{default:r(()=>[v(g(l(s)("goodsSelectPopupClearGoods")),1)]),_:1},512),[[D,l(y)]])]),d(oe,{"current-page":o.page,"onUpdate:current-page":e[6]||(e[6]=a=>o.page=a),"page-size":o.limit,"onUpdate:page-size":e[7]||(e[7]=a=>o.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:e[8]||(e[8]=a=>P()),onCurrentChange:P},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});const yo=Ge(Me,[["__scopeId","data-v-beb313de"]]);export{yo as default};
