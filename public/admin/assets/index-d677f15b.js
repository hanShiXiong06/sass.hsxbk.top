import{O as T,d as I,x as M,f as O,r as y,n as h,l as S,a2 as $,h as m,c as R,a as i,t as b,u as v,R as j,s as F,w as t,e as o,F as H,T as K,i as g,q as P,U as W,aW as Y,a7 as J,at as Q,au as X,L as Z,K as ee,bF as oe,M as te,E as ae,Y as se}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                 *//* empty css                  *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                     */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                *//* empty css                 */import{r as le,c as re}from"./checkshop-0c4148ed.js";import{g as ne}from"./config-a0063fe8.js";function de(x){return le.post("tk_yht/copygoods",x)}function ie(){return T.get("shop/goods/type")}function ce(){return T.get("shop/goods/tree")}const pe={class:"main-container"},ue={class:"flex ml-[18px] justify-between items-center mt-[20px]"},me={class:"text-[20px]"},ge={class:"fixed-footer-wrap"},_e={class:"fixed-footer"},ze=I({__name:"index",setup(x){const U=M(),_=O(),q=U.meta.title;y();const c=y(!1),C=y();(async()=>{(await ne()).data.access_key=="AppId"&&_.push("/commonconfig")})();const k=h([]);(async()=>{await re(),w(),ie().then(l=>{const e=l.data;if(e)for(const d in e)k.push(e[d])})})();const f=h([]),B=()=>{const l=_.resolve({path:"/shop/goods/category"});window.open(l.href)},w=()=>{ce().then(l=>{const e=l.data;if(e){const d=[];e.forEach(r=>{const n=[];r.child_list&&r.child_list.forEach(u=>{n.push({value:u.category_id,label:u.category_name})}),d.push({value:r.category_id,label:r.category_name,children:n})}),f.splice(0,f.length,...d)}})},D=S(()=>({url:[{required:!0,message:"url必须填写",trigger:"blur"}],goods_category:[{required:!0,message:"商品分类必须选择",trigger:"blur"}]})),s=h({...{url:"",stock:999,goods_category:"",goods_type:"real",islocal:"0"}}),G=async l=>{c.value||!l||await l.validate(async e=>{e&&(c.value=!0,de(s).then(r=>{if(c.value=!1,W({message:"采集成功,可在仓库中编辑商品后上架",type:"success"}),r.msg!="操作成功"){const n="/shop/goods/real_edit?goods_id="+r.msg;_.push(n)}}).catch(()=>{c.value=!1}))})};return(l,e)=>{const d=Y,r=J,n=Q,u=$("block"),V=X,p=Z,E=ee,N=oe,z=te,L=ae,A=se;return m(),R("div",pe,[i("div",ue,[i("span",me,b(v(q)),1)]),j((m(),F(z,{"element-loading-text":"采集中，请勿关闭页面......",model:s,"label-width":"140px",ref_key:"formRef",ref:C,rules:v(D),class:"page-form"},{default:t(()=>[o(r,{class:"box-card !border-none",shadow:"never"},{default:t(()=>[o(r,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:t(()=>[o(d,{type:"warning",title:"说明:先完成通用配置并购买采集次数；本接口可以采集淘宝、天猫、1688、京东商品,生成的商品默认是没有上架的，请手动上架商品！请在系统空闲时使用，部分链接可能会采集失败，可尝试更换其他相似产品重试",closable:!1,"show-icon":""})]),_:1}),o(p,{label:"商品类型"},{default:t(()=>[o(V,{modelValue:s.goods_type,"onUpdate:modelValue":e[0]||(e[0]=a=>s.goods_type=a)},{default:t(()=>[(m(!0),R(H,null,K(k,a=>(m(),F(u,{key:a.type},{default:t(()=>[o(n,{border:"",label:a.type,size:"large",style:{"margin-right":"10px"}},{default:t(()=>[g(b(a.name),1)]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"图片保存"},{default:t(()=>[o(V,{modelValue:s.islocal,"onUpdate:modelValue":e[1]||(e[1]=a=>s.islocal=a)},{default:t(()=>[o(n,{label:"0",size:"large",style:{"margin-right":"10px"}},{default:t(()=>[g("不保存")]),_:1}),o(n,{label:"1",size:"large",style:{"margin-right":"10px"}},{default:t(()=>[g("保存")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"商品库存",prop:"stock"},{default:t(()=>[o(E,{type:"number",modelValue:s.stock,"onUpdate:modelValue":e[2]||(e[2]=a=>s.stock=a),placeholder:"输入产品库存",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),o(p,{label:"商品分类",prop:"goods_category"},{default:t(()=>[o(N,{modelValue:s.goods_category,"onUpdate:modelValue":e[3]||(e[3]=a=>s.goods_category=a),options:f,props:l.goodsCategoryProps,clearable:"",filterable:"",onChange:l.categoryHandleChange},null,8,["modelValue","options","props","onChange"]),i("div",{class:"ml-[10px]"},[i("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:w},"刷新"),i("span",{class:"cursor-pointer text-primary",onClick:B},"添加")])]),_:1}),o(p,{label:"商品链接",prop:"url"},{default:t(()=>[o(E,{type:"textarea",modelValue:s.url,"onUpdate:modelValue":e[4]||(e[4]=a=>s.url=a),placeholder:"请输入待采集商品详情链接,换行可以采集多个链接",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[A,c.value]]),i("div",ge,[i("div",_e,[o(L,{type:"primary",loading:c.value,onClick:e[5]||(e[5]=a=>G(C.value))},{default:t(()=>[g(b(v(P)("confirm")),1)]),_:1},8,["loading"])])])])}}});export{ze as default};
