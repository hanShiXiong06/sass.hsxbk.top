import{x as Be,f as He,r as x,n as m,a$ as J,l as Je,q as c,U as f,ap as le,a3 as U,aI as z,H as pe}from"./index-37fee5a0.js";import{S as Ue}from"./sortable.esm-be94e56d.js";import{b as ze,g as Ke,U as Qe,V as We,a3 as Xe,a4 as Ye,a5 as es,i as ss}from"./goods-02f435a9.js";import{j as ts}from"./poster-c53f6f5b.js";import{r as os}from"./range-5af46cc2.js";function ds(b={}){const _e=Be(),N=He(),D=x(!1),i=m({goods_id:"",goods_type:"real",goods_name:"",sub_title:"",goods_image:"",goods_category:"",brand_id:"",poster_id:"",label_ids:[],service_ids:[],supplier_id:"",status:"1",sort:"",addon_shop_supplier:[],spec_type:"single",price:"",market_price:"",cost_price:"",stock:"",sku_no:"",unit:"",virtual_sale_num:"",member_discount:"",attr_format:[],attr_id:"",goods_desc:"-"});Object.assign(i,b.formData),i.goods_id=x(_e.query.goods_id);const ue=b.appendFormData;Object.assign(i,ue);const k=b.appendRefreshGoodsSkuData||{},K=b.appendSingleGoodsData,Q=b.getFormRules,w=m({}),O=b.getFormRef,$=m([]);J(()=>{let e=O();for(let o in e)w[o]=e[o];b.getVerify&&$.splice(0,$.length,...b.getVerify())});const de=b.editApi,fe=b.addApi,P=x("basic"),ge=(e,o)=>{},W=m([]),he=e=>{N.push(e.path)};ze().then(e=>{const o=e.data;if(o)for(const s in o)W.push(o[s])});const G=m([]),me={multiple:!0},ve=e=>{},ke=()=>{const e=N.resolve({path:"/phone_shop/goods/category"});window.open(e.href)},X=(e=!1)=>{Ke().then(o=>{const s=o.data;if(s){const t=[];s.forEach(n=>{const r=[];n.child_list&&n.child_list.forEach(p=>{r.push({value:p.category_id,label:p.category_name})}),t.push({value:n.category_id,label:n.category_name,children:r})}),G.splice(0,G.length,...t),e&&f({message:c("refreshSuccess"),type:"success"})}})};X();const j=m([]),ye=()=>{const e=N.resolve({path:"/phone_shop/goods/brand"});window.open(e.href)},Y=(e=!1)=>{Qe({}).then(o=>{const s=o.data;s&&(j.splice(0,j.length,...s),e&&f({message:c("refreshSuccess"),type:"success"}))})};Y();const L=m([]),be=()=>{const e=N.resolve({path:"/poster/list"});window.open(e.href)},ee=(e=!1)=>{ts({type:"shop_goods"}).then(o=>{const s=o.data;s&&(L.splice(0,L.length,...s),e&&f({message:c("refreshSuccess"),type:"success"}))})};ee();const F=m([]),Ne=()=>{const e=N.resolve({path:"/phone_shop/goods/label"});window.open(e.href)},se=()=>{We({}).then(e=>{const o=e.data;o&&F.splice(0,F.length,...o)})};se();const V=m([]),we=()=>{const e=N.resolve({path:"/phone_shop/goods/service"});window.open(e.href)},te=()=>{Xe({}).then(e=>{const o=e.data;o&&V.splice(0,V.length,...o)})};te();const q=m([]),Se=()=>{const e=N.resolve({path:"/shop_supplier/supplier"});window.open(e.href)},oe=()=>{Ye({}).then(e=>{const o=e.data;o&&q.splice(0,q.length,...o)})},d=m([]),l=m({}),I=m([]),re=x(0),S=()=>re.value>0,Ee=e=>{if(i.addon_shop_supplier=e.addon_shop_supplier,i.addon_shop_supplier&&i.addon_shop_supplier.status==1&&oe(),i.goods_id&&e.goods_info){if(re.value=e.goods_info.active_goods_count,i.goods_name=e.goods_info.goods_name,i.sub_title=e.goods_info.sub_title,i.goods_type=e.goods_info.goods_type,i.goods_image=e.goods_info.goods_image,i.goods_category=e.goods_info.goods_category,i.brand_id=e.goods_info.brand_id,i.poster_id=e.goods_info.poster_id,i.label_ids=e.goods_info.label_ids,i.service_ids=e.goods_info.service_ids,i.supplier_id=e.goods_info.supplier_id,i.status=e.goods_info.status,i.sort=e.goods_info.sort,i.attr_format=e.goods_info.attr_format?JSON.parse(e.goods_info.attr_format):[],i.attr_id=e.goods_info.attr_id,H.value=!0,ce(i.attr_id||-1),i.spec_type=e.goods_info.spec_type,i.stock=e.goods_info.stock,i.spec_type=="single"){const o=e.goods_info.sku_list[0];i.price=o.price,i.market_price=o.market_price,i.cost_price=o.cost_price,i.sku_no=o.sku_no,K&&Object.assign(i,K(o))}else if(i.spec_type=="multi"){e.goods_info.spec_list.forEach(t=>{const n=[];t.spec_values=t.spec_values.split(","),t.spec_values.forEach(r=>{n.push({id:E(),spec_value_name:r})}),d.push({id:E(),spec_id:t.spec_id,goods_id:t.goods_id,spec_name:t.spec_name,values:n})}),T();const s=e.goods_info.sku_list;for(let t in l)for(let n=0;n<s.length;n++){let r=s[n];if(l[t].spec_name==r.sku_spec_format.replace(/,/g," ")){l[t].sku_id=r.sku_id,l[t].sku_image=r.sku_image,l[t].price=r.price,l[t].market_price=r.market_price,l[t].cost_price=r.cost_price;for(let p in k)l[t][p]=r[p];l[t].stock=r.stock,l[t].sku_id=r.sku_id,l[t].sku_no=r.sku_no,l[t].is_default=r.is_default;break}}J(()=>{R(),ie()})}i.member_discount=e.goods_info.member_discount,i.unit=e.goods_info.unit,i.virtual_sale_num=e.goods_info.virtual_sale_num,i.goods_desc=e.goods_info.goods_desc}},ie=()=>{if(!S()&&O().specValueRef)for(let e=0;e<O().specValueRef.length;e++){const o=O().specValueRef[e],s=Ue.create(o,{group:"draggable-element-"+e,animation:200,onEnd:t=>{const n=d[e].values[t.oldIndex];d[e].values.splice(t.oldIndex,1),d[e].values.splice(t.newIndex,0,n),J(()=>{s.sort(os(d[e].values.length).map(r=>r.toString())),T(),R()})}})}},E=(e=5)=>Number(Math.random().toString().substr(3,e)+Date.now()).toString(36),Te=()=>{if(S()){f({type:"warning",message:`${c("participateInActiveDisableTips")}`});return}if(d.length>4){f({type:"warning",message:`${c("maxAddSpecTips")}`});return}d.push({id:E(),spec_name:"",values:[{id:E(),spec_value_name:""}]})},Re=e=>{if(S()){f({type:"warning",message:`${c("participateInActiveDisableTips")}`});return}d.splice(e,1),T(),R(),Z()},xe=e=>{if(S()){f({type:"warning",message:`${c("participateInActiveDisableTips")}`});return}d[e].values.push({id:E(),spec_value_name:""}),ie()},De=le(e=>{T(),R()}),Oe=(e,o)=>{if(S()){f({type:"warning",message:`${c("participateInActiveDisableTips")}`});return}d[e].values.splice(o,1),T(),R(),Z()},Pe=(e,o)=>{for(const s in l)s==o?l[s].is_default=e:l[s].is_default=0},Z=le(()=>{let e=0;for(const o in l)l[o].stock&&(e+=parseInt(l[o].stock));i.stock=e}),T=()=>{const e=d,o=U(l);let s={},t=0;for(const r of e){let p={};if(Object.keys(s).length>0)for(const u in s)for(let _ of r.values){let v=U(s[u].sku_spec);v.push(_),p["sku_"+t]={spec_name:`${s[u].spec_name} ${_.spec_value_name}`,sku_spec:v,sku_image:"",price:"",market_price:"",cost_price:"",stock:"",sku_no:"",is_default:0};for(let h in k)p["sku_"+t][h]=k[h].value;t++}else for(let u of r.values){let _=u.spec_value_name;p["sku_"+t]={spec_name:_,sku_spec:[u],sku_image:"",price:"",market_price:"",cost_price:"",stock:"",sku_no:"",is_default:0};for(let v in k)p["sku_"+t][v]=k[v].value;t++}s=Object.keys(p).length>0?p:s}for(const r in o)for(const p in s)if(Ce(o[r].sku_spec,s[p].sku_spec)===s[p].sku_spec.length){const _=s[p].spec_name,v=s[p].sku_spec;Object.assign(s[p],o[r]),s[p].spec_name=_,s[p].sku_spec=v;break}for(const r in l)delete l[r];let n="";for(const r in s)n==""?(n=r,s[r].is_default=1):s[r].is_default=0,l[r]=s[r]},Ce=(e,o)=>{let s=0;for(let t=0;t<e.length;t++)for(let n=0;n<o.length;n++)if(e[t].id===o[n].id){s++;break}return s},R=()=>{let e=0;for(let t=0;t<d.length;t++)d[t].spec_name!=""&&d[t].values.length>0&&e++;let o=1;const s=[];for(let t=e-1;t>=0;t--){for(let n=0;n<Object.keys(l).length;)if(d[t].values.length>0)for(let r of d[t].values)s.push({index:n,colSpan:t,rowSpan:o,spec_value_name:r.spec_value_name}),n=n+o;else n++;o=o*d[t].values.length}s.reverse(),I.splice(0,I.length,...s)},a=m({spec:"",price:"",market_price:"",cost_price:"",stock:"",sku_no:""});var ae={};for(let e in k)ae[e]=k[e].value;Object.assign(a,ae);const Ae=()=>{if(a.price&&(isNaN(a.price)||!g.digit.test(a.price))){f({type:"warning",message:`${c("priceTips")}`});return}if(a.market_price&&(isNaN(a.market_price)||!g.digit.test(a.market_price))){f({type:"warning",message:`${c("marketPriceTips")}`});return}if(a.cost_price&&(isNaN(a.cost_price)||!g.digit.test(a.cost_price))){f({type:"warning",message:`${c("costPriceTips")}`});return}if(a.stock&&(isNaN(a.stock)||!g.number.test(a.stock))){f({type:"warning",message:`${c("stockTips")}`});return}for(let e in k){let o=g[k[e].regExp],s=k[e].message;if(a[e]&&(isNaN(a[e])||!o.test(a[e]))){f({type:"warning",message:s});return}}if(a.spec){a.price&&(l[a.spec].price=a.price),a.market_price&&(l[a.spec].market_price=a.market_price),a.cost_price&&(l[a.spec].cost_price=a.cost_price),a.stock&&(l[a.spec].stock=a.stock);for(let e in k)a[e]&&(l[a.spec][e]=a[e]);a.sku_no&&(l[a.spec].sku_no=a.sku_no)}else for(const e in l){a.price&&(l[e].price=a.price),a.market_price&&(l[e].market_price=a.market_price),a.cost_price&&(l[e].cost_price=a.cost_price),a.stock&&(l[e].stock=a.stock);for(let o in k)a[o]&&(l[e][o]=a[o]);a.sku_no&&(l[e].sku_no=a.sku_no)}a.price="",a.market_price="",a.cost_price="",a.stock="",a.sku_no="";for(let e in k)a[e]=""},g={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},$e=Je(()=>{let e={goods_name:[{required:!0,trigger:"blur",validator:(o,s,t)=>{s===""&&t(new Error(c("goodsNamePlaceholder"))),s.length>60?t(new Error(c("goodsNameMaxLengthTips"))):t()}}],sub_title:[{trigger:"blur",validator:(o,s,t)=>{s.length>80?t(new Error(c("subTitleMaxLengthTips"))):t()}}],goods_image:[{required:!0,message:c("goodsImagePlaceholder"),trigger:"blur"}],goods_category:[{required:!0,message:c("goodsCategoryPlaceholder"),trigger:"blur"}],sort:[{trigger:"blur",validator:(o,s,t)=>{isNaN(s)||!g.number.test(s)?t(new Error(c("sortTips"))):t()}}],price:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="single"?s===""?t(new Error(c("pricePlaceholder"))):isNaN(s)||!g.digit.test(s)?t(new Error(c("priceTips"))):s<0?t(new Error(c("priceNotZeroTips"))):t():t()}}],market_price:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="single"?isNaN(s)||!g.digit.test(s)?t(new Error(c("marketPriceTips"))):s<0?t(new Error(c("marketPriceNotZeroTips"))):t():t()}}],cost_price:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="single"?isNaN(s)||!g.digit.test(s)?t(new Error(c("costPriceTips"))):s<0?t(new Error(c("costPriceNotZeroTips"))):t():t()}}],stock:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="single"?s===""?t(new Error(c("stockPlaceholder"))):isNaN(s)||!g.number.test(s)?t(new Error(c("stockTips"))):s<0?t(new Error(c("stockNotZeroTips"))):t():t()}}],virtual_sale_num:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="single"?isNaN(s)||!g.number.test(s)?t(new Error(c("virtualSaleNumTips"))):s<0?t(new Error(c("virtualSaleNumNotZeroTips"))):t():t()}}],spec_type:[{trigger:"blur",validator:(o,s,t)=>{i.spec_type=="multi"&&Object.keys(l).length==0&&t(new Error(c("pleaseEditSpecPlaceholder"))),t()}}],goods_desc:[{required:!0,trigger:["blur","change"],validator:(o,s,t)=>{if(s==="")t(new Error(c("goodsDescPlaceholder")));else{if(s.length<5||s.length>5e4)return t(new Error(c("goodsDescMaxTips"))),!1;t()}}}]};return Q&&Object.assign(e,Q(i,g)),e}),Ge=()=>[{trigger:"blur",validator:(e,o,s)=>{i.spec_type=="multi"?o.length==0?s(c("pricePlaceholder")):isNaN(o)||!g.digit.test(o)?s(c("priceTips")):o<0?s(c("priceNotZeroTips")):s():s()}}],je=()=>[{trigger:"blur",validator:(e,o,s)=>{i.spec_type=="multi"?isNaN(o)||!g.digit.test(o)?s(c("marketPriceTips")):o<0?s(c("marketPriceNotZeroTips")):s():s()}}],Le=()=>[{trigger:"blur",validator:(e,o,s)=>{i.spec_type=="multi"?isNaN(o)||!g.digit.test(o)?s(c("costPriceTips")):o<0?s(c("costPriceNotZeroTips")):s():s()}}],Fe=()=>[{trigger:"blur",validator:(e,o,s)=>{i.spec_type=="multi"?o.length==0?s(c("stockPlaceholder")):isNaN(o)||!g.number.test(o)?s(c("stockTips")):o<0?s(c("stockNotZeroTips")):s():s()}}],Ve=e=>{let o=[{key:"basic",verify:!1,ref:w.basicFormRef},{key:"price_stock",verify:!1,ref:w.priceStockFormRef},{key:"price_stock",verify:!1,ref:w.skuFormRef}];o=o.concat($);let s={key:"detail",verify:!1,ref:w.detailFormRef};if(o.push(s),o.forEach((t,n)=>{t.ref.validate(r=>{t.verify=r})}),i.spec_type=="multi"){let t=!0,n=[],r=[];for(let u=0;u<d.length;u++){const _=d[u];if(pe.require(_.spec_name)){t=!1,f({type:"warning",message:`${c("specNameRequire")}`});break}if(n.indexOf(_.spec_name)>-1){t=!1,f({type:"warning",message:`${c("specNameRepeat")}`});break}else n.push(_.spec_name);if(_.values.length)for(let v=0;v<_.values.length;v++){const h=_.values[v];if(pe.require(h.spec_value_name)){t=!1,f({type:"warning",message:`${c("specValueRequire")}`});break}if(r.indexOf(h.spec_value_name)>-1){t=!1,f({type:"warning",message:`${c("specValueNameRepeat")}`});break}else r.push(h.spec_value_name)}else t=!1,f({type:"warning",message:`${c("specValueRequire")}`});if(!t)break}if(!t){P.value="price_stock";return}let p=!1;for(const u in l)l[u].is_default&&(p=!0);if(!p){P.value="price_stock",f({type:"warning",message:`${c("lackDefaultSpec")}`});return}}setTimeout(()=>{let t=!0;for(let n=0;n<o.length;n++)if(o[n].verify==!1){P.value=o[n].key,t=!1;break}t&&e&&e()},10)},qe=(e=null)=>{Ve(()=>{if(D.value)return;D.value=!0;const o=i.goods_id?de:fe,s=U(i);if(s.spec_type=="multi"){s.stock=0;for(const r in l)l[r].stock&&(s.stock+=parseInt(l[r].stock))}const t=[];s.goods_category.forEach(r=>{typeof r=="object"?r.forEach(p=>{t.indexOf(p)==-1&&t.push(p)}):t.indexOf(r)==-1&&t.push(r)}),s.goods_category=t,s.goods_sku_data=l,s.goods_spec_format=d,s.attr_format=[],z(y).forEach((r,p)=>{if(r.attr_value_name&&r.select_child_val||r.attr_value_id>0){let u={};u.attr_value_id=r.attr_value_id,u.attr_value_name=r.attr_value_name,u.type=r.type,u.sort=r.sort,u.attr_child_value_id=r.select_child_name,u.attr_child_value_name=r.select_child_val,u.attr_child_value_color=r.select_child_color,s.attr_format.push(u)}}),s.attr_format.sort((r,p)=>p.sort-r.sort),s.attr_format=JSON.stringify(s.attr_format),e&&Object.assign(s,e(s)),o(s).then(r=>{D.value=!1,N.push("/phone_shop/goods/list")}).catch(()=>{D.value=!1})})},Ie=()=>{N.push("/phone_shop/goods/list")},Ze=e=>{e.target.value=e.target.value.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g,""),e.target.value=e.target.value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"")},Me=e=>{var o;(o=w.detailFormRef.value)==null||o.validateField("goods_desc")},M=m([]),ne=()=>{es({}).then(e=>{M.splice(0,M.length,...e.data)})};ne();let B=!1;const y=m([]),H=x(!1),ce=(e=0)=>{if(B||!e)return!1;B=!0;let o=e==-1?0:e;ss(o).then(s=>{let t=Object.keys(s.data).length&&s.data.attr_value_format?JSON.parse(s.data.attr_value_format):[],n=z(y);if(n=n.filter(r=>r.attr_value_id<=0),t.filter(r=>{r.select_child_name=r.type=="checkbox"?[]:"",r.select_child_val=r.type=="checkbox"?[]:""}),n=n.concat(t),y.splice(0,y.length,...n),B=!1,H.value){let r=i.attr_format.map(_=>_.attr_value_id),p=z(y);p=p.filter(_=>r.indexOf(_.attr_value_id)>-1),i.attr_format.forEach((_,v)=>{p.forEach((h,C,A)=>{h.attr_value_id==_.attr_value_id&&(A[C].select_child_name=_.attr_child_value_id,A[C].select_child_val=_.attr_child_value_name,A[C].sort=_.sort,A[C].select_child_color=_.color)})});let u=p.map(_=>_.attr_value_id);i.attr_format.forEach((_,v)=>{if(u.indexOf(_.attr_value_id)==-1&&_.type=="text"){let h={};h.attr_value_id=_.attr_value_id,h.attr_value_name=_.attr_value_name,h.sort=_.sort,h.type="text",h.select_child_name=_.attr_child_value_id,h.select_child_val=_.attr_child_value_name,p.push(h)}}),p.sort((_,v)=>v.sort-_.sort),console.log(p),y.splice(0,y.length,...p),H.value=!1}})};return{formData:i,activeName:P,tabHandleClick:ge,goodsType:W,changeGoodsType:he,goodsCategoryOptions:G,goodsCategoryProps:me,categoryHandleChange:ve,toGoodsCategoryEvent:ke,refreshGoodsCategory:X,brandOptions:j,toGoodsBrandEvent:ye,refreshGoodsBrand:Y,posterOptions:L,toPosterEvent:be,refreshGoodsPoster:ee,labelOptions:F,toGoodsLabelEvent:Ne,refreshGoodsLabel:se,serviceOptions:V,toGoodsServiceEvent:we,refreshGoodsService:te,supplierOptions:q,toSupplierEvent:Se,refreshSupplier:oe,goodsSpecFormat:d,goodsSkuData:l,specData:I,generateRandom:E,isDisabledPrice:S,addSpec:Te,deleteSpec:Re,addSpecValue:xe,specValueNameInputListener:De,deleteSpecValue:Oe,specValueIsDefaultChangeListener:Pe,specStockSum:Z,batchOperation:a,saveBatch:Ae,regExp:g,formRules:$e,skuPriceRules:Ge,skuMarketPriceRules:je,skuCostPriceRules:Le,skuStockRules:Fe,handleGoodsInit:Ee,save:qe,back:Ie,filterSpecial:Ze,handleBlur:Me,attrOptions:M,attrChange:ce,getAttrListFn:ne,attrTableData:y,addAttr:()=>{let e={attr_value_id:"",attr_value_name:"",child:{id:1,name:""},sort:"",type:"text",select_child_name:"",select_child_val:"",select_child_color:""};e.attr_value_id=-Math.floor(new Date().getSeconds()+Math.floor(new Date().getMilliseconds())),e.sort=y.length+1,y.push(e)},delAttr:e=>{y.splice(e,1)},attrRadioChange:(e,o)=>{y.forEach((s,t,n)=>(s.type=="radio"&&s.child.forEach((r,p)=>{r.id==o&&(n[t].select_child_name=r.id,n[t].select_child_val=r.name,n[t].select_child_color=r.color)}),console.log(s),s))},attrCheckboxChange:(e,o)=>{y.forEach((s,t,n)=>{s.type=="checkbox"&&(n[t].select_child_val=[],s.child.forEach((r,p)=>{o.indexOf(r.id)>-1&&n[t].select_child_val.push({name:r.name,color:r.color||"#000"})}))})}}}export{ds as u};
