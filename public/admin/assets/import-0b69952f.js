import{d as $,r as _,x as q,f as L,n as b,l as O,a2 as J,h as g,c as w,R as M,s as x,w as a,e as t,a as m,i as p,F as H,T as P,t as E,u as F,q as W,B as Y,A as j,U as R,aW as K,a7 as Q,E as X,at as Z,au as ee,L as oe,bF as ae,M as te,Y as le}from"./index-5a756a51.js";/* empty css                   *//* empty css                *//* empty css                          *//* empty css                 *//* empty css                  *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                     */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                  *//* empty css                *//* empty css                 */import{c as se,g as re,b as ne,i as ie,d as de}from"./goods-5f8f8669.js";import{_ as pe}from"./index.vue_vue_type_style_index_0_lang-b4dd92e8.js";/* empty css                    */const ce={class:"main-container"},ue={class:"flex"},me={class:"v-[320px]"},ge={class:"flex"},ze=$({__name:"import",setup(fe){const k=_(!1);(()=>{let o="00",e="-1";localStorage.getItem("admin.userinfo")&&(o=JSON.parse(localStorage.getItem("admin.userinfo")).uid),localStorage.getItem("site.userinfo")&&(e=JSON.parse(localStorage.getItem("site.userinfo")).uid),o===e&&(k.value=!0)})();const S=q(),f=L();S.meta.title,_();const r=_(!1),y=_(),A=()=>{const o=document.createElement("a");o.href=j("addon/spdr/file/goods.xlsx"),o.target="_blank",o.download="goods.xlsx",document.body.appendChild(o),o.click(),document.body.removeChild(o)},C=b([]);(async()=>{await se(),V(),re().then(o=>{const e=o.data;if(e)for(const n in e)C.push(e[n])})})();const h=b([]),B=()=>{const o=f.resolve({path:"/phone_shop/goods/category"});window.open(o.href)},V=()=>{ne().then(o=>{const e=o.data;if(e){const n=[];e.forEach(i=>{const c=[];i.child_list&&i.child_list.forEach(d=>{c.push({value:d.category_id,label:d.category_name})}),n.push({value:i.category_id,label:i.category_name,children:c})}),h.splice(0,h.length,...n)}})},G=O(()=>({file_url:[{required:!0,message:"请上传文件",trigger:"blur"}],goods_category:[{required:!0,message:"商品分类必须选择",trigger:"blur"}]})),s=b({...{file_url:"",stock:999,goods_category:"",goods_type:"real",islocal:"0",status:"0"}}),I=async o=>{r.value||!o||await o.validate(async e=>{if(e){r.value=!0;const n=s;console.log(n),ie(n).then(i=>{r.value=!1,R({message:"正在奋力导入，请稍后进入商品列表查看",type:"success"})}).catch(()=>{r.value=!1,f.push("/spdr/phone_shop/goods/import_do")})}})},N=async o=>{r.value||!o||await o.validate(async e=>{if(e){r.value=!0;const n=s;console.log(n),de(n).then(i=>{r.value=!1,R({message:"队列导入中，请稍后刷新页面查看",type:"success"}),f.push("/spdr/phone_shop/goods/import_do")}).catch(()=>{r.value=!1,f.push("/spdr/phone_shop/goods/import_do")})}})};return(o,e)=>{const n=K,i=Q,c=X,d=Z,T=J("block"),v=ee,u=oe,U=ae,z=te,D=le;return g(),w("div",ce,[M((g(),x(z,{"element-loading-text":"正在导入数据......",model:s,"label-width":"140px",ref_key:"formRef",ref:y,rules:F(G),class:"page-form"},{default:a(()=>[t(i,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[t(i,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:a(()=>[t(n,{type:"info",title:"说明:请按照模板格式导入xlsx文件，格式不正确会导入失败,暂未适配多规格,如要和其他平台数据进行批量导入，请适配正常格式才能执行成功。本操作需要确保队列正常运行。上传文件为临时文件，不长时存储，单次导入不超过50条，如需单次更多条数导入请联系管理员导入",closable:!1,"show-icon":""})]),_:1}),m("div",ue,[t(c,{loading:r.value,class:"mb-6 ml-6",type:"primary",plain:"",onClick:e[0]||(e[0]=l=>A())},{default:a(()=>[p(" 下载模板 ")]),_:1},8,["loading"])]),t(u,{label:"商品类型"},{default:a(()=>[t(v,{modelValue:s.goods_type,"onUpdate:modelValue":e[1]||(e[1]=l=>s.goods_type=l)},{default:a(()=>[(g(!0),w(H,null,P(C,l=>(g(),x(T,{key:l.type},{default:a(()=>[t(d,{border:"",label:l.type,size:"large",style:{"margin-right":"10px"}},{default:a(()=>[p(E(l.name),1)]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"商品分类",prop:"goods_category"},{default:a(()=>[t(U,{modelValue:s.goods_category,"onUpdate:modelValue":e[2]||(e[2]=l=>s.goods_category=l),options:h,props:o.goodsCategoryProps,clearable:"",filterable:"",onChange:o.categoryHandleChange},null,8,["modelValue","options","props","onChange"]),m("div",{class:"ml-[10px]"},[m("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:V},"刷新"),m("span",{class:"cursor-pointer text-primary",onClick:B},"添加")])]),_:1}),t(u,{label:"上传文件",prop:"file_url"},{default:a(()=>[m("div",me,[t(pe,{modelValue:s.file_url,"onUpdate:modelValue":e[3]||(e[3]=l=>s.file_url=l),api:"sys/document/applet"},null,8,["modelValue"])])]),_:1}),t(u,{label:"图片保存"},{default:a(()=>[t(v,{modelValue:s.islocal,"onUpdate:modelValue":e[4]||(e[4]=l=>s.islocal=l)},{default:a(()=>[t(d,{label:"0",size:"large",style:{"margin-right":"10px"}},{default:a(()=>[p("不保存")]),_:1}),t(d,{label:"1",size:"large",style:{"margin-right":"10px"}},{default:a(()=>[p("保存")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"上架产品"},{default:a(()=>[t(v,{modelValue:s.status,"onUpdate:modelValue":e[5]||(e[5]=l=>s.status=l)},{default:a(()=>[t(d,{label:"0",size:"large",style:{"margin-right":"10px"}},{default:a(()=>[p("仓库中")]),_:1}),t(d,{label:"1",size:"large",style:{"margin-right":"10px"}},{default:a(()=>[p("立即上架")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"",prop:""},{default:a(()=>[m("div",ge,[t(c,{type:"primary",loading:r.value,onClick:e[6]||(e[6]=l=>I(y.value))},{default:a(()=>[p(E(F(W)("confirm")),1)]),_:1},8,["loading"]),k.value?(g(),x(c,{key:0,type:"primary",loading:r.value,onClick:e[7]||(e[7]=l=>N(y.value))},{default:a(()=>[p("管理员操作导入")]),_:1},8,["loading"])):Y("",!0)])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[D,r.value]])])}}});export{ze as default};
