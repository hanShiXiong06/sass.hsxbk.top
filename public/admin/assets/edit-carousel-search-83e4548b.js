import{d as he,q as i,r as y,aJ as K,a$ as be,n as _e,a3 as fe,Q as ge,A as Ce,a2 as Q,h as f,c as S,R as g,a0 as w,u as e,a as p,t as m,e as t,w as n,i as h,F as W,T as B,Z as we,s as D,ad as xe,at as Se,au as ye,L as Ve,bv as ve,M as ke,K as Ue,bz as Te,E as Ie,aS as We,a1 as Ee,ac as Re,W as Pe,X as ze,bA as Be,bB as De,Y as Ae}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                         *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    *//* empty css                  *//* empty css                  */import{_ as He}from"./index.vue_vue_type_script_setup_true_lang-d42256f5.js";/* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";import{_ as Fe}from"./index.vue_vue_type_style_index_0_lang-06408dae.js";import Me from"./index-a76a08b7.js";/* empty css                *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{u as $e}from"./diy-3e446131.js";import{S as A}from"./sortable.esm-be94e56d.js";import{a as Ne}from"./diy-5584e40d.js";import{r as H}from"./range-4b6fb8f5.js";const je={class:"content-wrap"},Le={class:"edit-attr-item-wrap"},Oe={class:"mb-[10px]"},Ge={class:"edit-attr-item-wrap"},qe={class:"mb-[10px]"},Je={class:"text-sm text-gray-400 mb-[10px]"},Ke={class:"text-sm text-gray-400 mt-[10px] leading-[1.5]"},Qe={class:"edit-attr-item-wrap"},Xe={class:"mb-[10px]"},Ye={class:"text-sm text-gray-400 mb-[10px]"},Ze=["onClick"],el={class:"edit-attr-item-wrap"},ll={class:"text-sm text-gray-400 mb-[10px]"},tl=["onClick"],ol=["onClick"],al={class:"mt-[16px] flex justify-end"},il={class:"flex items-center justify-end mt-[15px]"},nl={class:"text-sm text-gray-400 mb-[10px]"},dl=["onClick"],rl={class:"style-wrap"},sl={class:"edit-attr-item-wrap"},pl={class:"mb-[10px]"},ml={class:"edit-attr-item-wrap"},ul={class:"mb-[10px]"},cl={class:"edit-attr-item-wrap"},hl={class:"mb-[10px]"},bl=he({__name:"edit-carousel-search",setup(_l,{expose:X}){const l=$e();l.editComponent.ignore=["componentBgColor","componentBgUrl","marginTop","marginBottom","topRounded","bottomRounded","pageBgColor","marginBoth"],l.editComponent.verify=s=>{const o={code:!0,message:""};return l.value[s].search.hotWord.list.forEach(r=>{if(r.text=="")return o.code=!1,o.message=i("carouselSearchHotWordTextPlaceholder"),o}),l.value[s].tab.list.forEach(r=>{if(r.text=="")return o.code=!1,o.message=i("carouselSearchTabCategoryTextPlaceholder"),o}),l.value[s].swiper.list.forEach(r=>{if(r.imageUrl=="")return o.code=!1,o.message=i("imageUrlTip"),o}),o},l.editComponent.search.hotWord.list.forEach(s=>{s.id||(s.id=l.generateRandom())}),l.editComponent.tab.list.forEach(s=>{s.id||(s.id=l.generateRandom())}),l.editComponent.swiper.list.forEach(s=>{s.id||(s.id=l.generateRandom())});const F=y(["tab","swiper"]),Y=s=>{};K(()=>{E()});const Z=()=>{l.editComponent.search.hotWord.list.push({id:l.generateRandom(),text:"关键词"})},ee=s=>{l.editComponent.tab.list[s].diy_id=0,l.editComponent.tab.list[s].diy_title=""},le=()=>{l.editComponent.tab.list.push({id:l.generateRandom(),text:"分类名称",source:"diy_page",diy_id:"",diy_title:""})},M=y(),$=y(),N=y();K(()=>{be(()=>{A.create(M.value,{group:"item-wrap",animation:200,onEnd:r=>{const u=l.editComponent.search.hotWord.list[r.oldIndex];l.editComponent.search.hotWord.list.splice(r.oldIndex,1),l.editComponent.search.hotWord.list.splice(r.newIndex,0,u),s.sort(H(l.editComponent.search.hotWord.list.length).map(d=>d.toString()))}});const s=A.create($.value,{group:"item-wrap",animation:200,onEnd:r=>{const u=l.editComponent.tab.list[r.oldIndex];l.editComponent.tab.list.splice(r.oldIndex,1),l.editComponent.tab.list.splice(r.newIndex,0,u),s.sort(H(l.editComponent.tab.list.length).map(d=>d.toString()))}}),o=A.create(N.value,{group:"item-wrap",animation:200,onEnd:r=>{const u=l.editComponent.swiper.list[r.oldIndex];l.editComponent.swiper.list.splice(r.oldIndex,1),l.editComponent.swiper.list.splice(r.newIndex,0,u),o.sort(H(l.editComponent.swiper.list.length).map(d=>d.toString())),U(!0)}})})});const V=y(!1),c=_e({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{}}),j=y(),E=(s=1)=>{c.loading=!0,c.page=s,Ne({page:c.page,limit:c.limit,...c.searchParam}).then(o=>{c.loading=!1;let r=o.data.data,u=[],d=0;if(l.id)for(let _=0;_<r.length;_++)r[_].id==l.id?d++:u.push(r[_]);else u=fe(r);d&&(o.data.total=o.data.total-d),c.data=u,c.total=o.data.total}).catch(()=>{c.loading=!1})};let v={},R=0;const te=s=>{v=s},oe=()=>{l.editComponent.tab.list[R].diy_id=v.id,l.editComponent.tab.list[R].diy_title=v.title,V.value=!1},ae=s=>{V.value=!0,R=s,v&&setTimeout(()=>{j.value.setCurrentRow(v)},200)};ge(()=>l.editComponent.swiper.list,(s,o)=>{U()},{deep:!0});const ie=()=>{l.editComponent.swiper.list.push({id:l.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},ne=s=>{U(!0)},de=s=>{U(!0)},U=(s=!1)=>{l.editComponent.swiper.list.forEach((o,r)=>{const u=new Image;u.src=Ce(o.imageUrl),u.onload=async()=>{if(o.imgWidth=u.width,o.imgHeight=u.height,s&&r==0){const d=o.imgHeight/o.imgWidth;l.editComponent.swiper.swiperStyle=="style-1"?o.width=375*.92:o.width=355,o.height=o.width*d,l.editComponent.swiper.imageHeight=parseInt(o.height)}}})};return X({}),(s,o)=>{const r=Se,u=ye,d=Ve,_=ve,C=ke,L=Me,T=Ue,O=Fe,I=Te,P=He,k=Ie,G=We,re=Q("Close"),q=Ee,se=Q("ArrowRight"),z=Re,pe=Pe,me=ze,J=Be,ue=De,ce=Ae;return f(),S(W,null,[g(p("div",je,[p("div",Le,[p("h3",Oe,m(e(i)("carouselSearchShowPosition")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchShowWay")},{default:n(()=>[t(u,{modelValue:e(l).editComponent.positionWay,"onUpdate:modelValue":o[0]||(o[0]=a=>e(l).editComponent.positionWay=a)},{default:n(()=>[t(r,{label:"static"},{default:n(()=>[h(m(e(i)("carouselSearchShowWayStatic")),1)]),_:1}),t(r,{label:"fixed"},{default:n(()=>[h(m(e(i)("carouselSearchShowWayFixed")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),g(t(d,{label:e(i)("carouselSearchFixedBgColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.fixedBgColor,"onUpdate:modelValue":o[1]||(o[1]=a=>e(l).editComponent.fixedBgColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),[[w,e(l).editComponent.positionWay=="fixed"]]),t(d,{label:e(i)("carouselSearchBgGradient")},{default:n(()=>[t(u,{modelValue:e(l).editComponent.bgGradient,"onUpdate:modelValue":o[2]||(o[2]=a=>e(l).editComponent.bgGradient=a)},{default:n(()=>[t(r,{label:!0},{default:n(()=>[h(m(e(i)("carouselSearchOpen")),1)]),_:1}),t(r,{label:!1},{default:n(()=>[h(m(e(i)("carouselSearchClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),p("div",Ge,[p("h3",qe,m(e(i)("carouselSearchSet")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[p("div",Je,m(e(i)("carouselSearchLogoTips")),1),t(d,{label:e(i)("logo")},{default:n(()=>[t(L,{modelValue:e(l).editComponent.search.logo,"onUpdate:modelValue":o[3]||(o[3]=a=>e(l).editComponent.search.logo=a),limit:1},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("carouselSearchText")},{default:n(()=>[p("div",null,[t(T,{modelValue:e(l).editComponent.search.text,"onUpdate:modelValue":o[4]||(o[4]=a=>e(l).editComponent.search.text=a),modelModifiers:{trim:!0},placeholder:e(i)("carouselSearchPlaceholder"),clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"]),p("p",Ke,m(e(i)("carouselSearchTextTips")),1)])]),_:1},8,["label"]),t(d,{label:e(i)("link")},{default:n(()=>[t(O,{modelValue:e(l).editComponent.search.link,"onUpdate:modelValue":o[5]||(o[5]=a=>e(l).editComponent.search.link=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),p("div",Qe,[p("h3",Xe,m(e(i)("carouselSearchHotWordSet")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchHotWordInterval")},{default:n(()=>[t(I,{modelValue:e(l).editComponent.search.hotWord.interval,"onUpdate:modelValue":o[6]||(o[6]=a=>e(l).editComponent.search.hotWord.interval=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"]),p("p",Ye,m(e(i)("dragMouseAdjustOrder")),1),p("div",{ref_key:"searchHotWordTabBoxRef",ref:M},[(f(!0),S(W,null,B(e(l).editComponent.search.hotWord.list,(a,x)=>(f(),S("div",{key:a.id,class:"item-wrap p-[10px] relative border border-dashed border-gray-300 mb-[16px]"},[t(d,{label:e(i)("carouselSearchHotWordText"),class:"!mb-0"},{default:n(()=>[t(T,{modelValue:a.text,"onUpdate:modelValue":b=>a.text=b,modelModifiers:{trim:!0},placeholder:e(i)("carouselSearchHotWordTextPlaceholder"),clearable:"",maxlength:"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),p("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:b=>e(l).editComponent.search.hotWord.list.splice(x,1)},[t(P,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,Ze)]))),128)),g(t(k,{class:"w-full",onClick:Z},{default:n(()=>[h(m(e(i)("carouselSearchAddHotWordItem")),1)]),_:1},512),[[w,e(l).editComponent.search.hotWord.list.length<50]])],512)]),_:1})]),t(ue,{modelValue:F.value,"onUpdate:modelValue":o[14]||(o[14]=a=>F.value=a),onChange:Y,class:"collapse-wrap"},{default:n(()=>[t(J,{title:e(i)("carouselSearchTabSet"),name:"tab"},{default:n(()=>[p("div",el,[t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchTabControl")},{default:n(()=>[t(G,{modelValue:e(l).editComponent.tab.control,"onUpdate:modelValue":o[7]||(o[7]=a=>e(l).editComponent.tab.control=a)},null,8,["modelValue"])]),_:1},8,["label"]),p("p",ll,m(e(i)("dragMouseAdjustOrder")),1),p("div",{ref_key:"tabBoxRef",ref:$},[(f(!0),S(W,null,B(e(l).editComponent.tab.list,(a,x)=>(f(),S("div",{key:a.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[t(d,{label:e(i)("carouselSearchTabCategoryText")},{default:n(()=>[t(T,{modelValue:a.text,"onUpdate:modelValue":b=>a.text=b,modelModifiers:{trim:!0},placeholder:e(i)("carouselSearchTabCategoryTextPlaceholder"),clearable:"",maxlength:"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),t(d,{label:e(i)("dataSources")},{default:n(()=>[t(T,{modelValue:a.diy_title,"onUpdate:modelValue":b=>a.diy_title=b,placeholder:e(i)("selectDiyPagePlaceholder"),readonly:"",class:"select-diy-page-input",onClick:b=>ae(x)},{suffix:n(()=>[p("div",{onClick:we(b=>ee(x),["stop"])},[a.diy_title?(f(),D(q,{key:0},{default:n(()=>[t(re)]),_:1})):(f(),D(q,{key:1},{default:n(()=>[t(se)]),_:1}))],8,tl)]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","onClick"])]),_:2},1032,["label"]),g(p("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:b=>e(l).editComponent.tab.list.splice(x,1)},[t(P,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,ol),[[w,e(l).editComponent.tab.list.length>1]])]))),128)),g(t(k,{class:"w-full",onClick:le},{default:n(()=>[h(m(e(i)("carouselSearchAddTabItem")),1)]),_:1},512),[[w,e(l).editComponent.tab.list.length<50]])],512),t(me,{modelValue:V.value,"onUpdate:modelValue":o[11]||(o[11]=a=>V.value=a),title:e(i)("selectSourcesDiyPage"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:n(()=>[g((f(),D(e(xe),{data:c.data,ref_key:"diyPageTableRef",ref:j,size:"large",height:"490px",onCurrentChange:te,"row-key":"id","highlight-current-row":""},{empty:n(()=>[p("span",null,m(c.loading?"":e(i)("emptyData")),1)]),default:n(()=>[t(z,{prop:"page_title",label:e(i)("diyPageTitle"),"min-width":"120"},null,8,["label"]),t(z,{prop:"addon_name",label:e(i)("diyPageTypeName"),"min-width":"80"},null,8,["label"]),t(z,{prop:"type_name",label:e(i)("diyPageForAddon"),"min-width":"80"},null,8,["label"])]),_:1},8,["data"])),[[ce,c.loading]]),p("div",al,[t(pe,{"current-page":c.page,"onUpdate:current-page":o[8]||(o[8]=a=>c.page=a),"page-size":c.limit,"onUpdate:page-size":o[9]||(o[9]=a=>c.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:c.total,onSizeChange:E,onCurrentChange:E},null,8,["current-page","page-size","total"])]),p("div",il,[t(k,{type:"primary",onClick:oe},{default:n(()=>[h(m(e(i)("confirm")),1)]),_:1}),t(k,{onClick:o[10]||(o[10]=a=>V.value=!1)},{default:n(()=>[h(m(e(i)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"])]),_:1})])]),_:1},8,["title"]),t(J,{title:e(i)("carouselSearchSwiperSet"),name:"swiper"},{default:n(()=>[t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchSwiperControl")},{default:n(()=>[t(G,{modelValue:e(l).editComponent.swiper.control,"onUpdate:modelValue":o[12]||(o[12]=a=>e(l).editComponent.swiper.control=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("carouselSearchSwiperInterval")},{default:n(()=>[t(I,{modelValue:e(l).editComponent.swiper.interval,"onUpdate:modelValue":o[13]||(o[13]=a=>e(l).editComponent.swiper.interval=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",min:1,max:10},null,8,["modelValue"])]),_:1},8,["label"]),p("div",nl,m(e(i)("carouselSearchSwiperTips")),1),p("div",{ref_key:"imageBoxRef",ref:N},[(f(!0),S(W,null,B(e(l).editComponent.swiper.list,(a,x)=>(f(),S("div",{key:a.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[t(d,{label:e(i)("image")},{default:n(()=>[t(L,{modelValue:a.imageUrl,"onUpdate:modelValue":b=>a.imageUrl=b,limit:1,onChange:ne},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),g(p("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:b=>e(l).editComponent.swiper.list.splice(x,1)},[t(P,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,dl),[[w,e(l).editComponent.swiper.list.length>1]]),t(d,{label:e(i)("link")},{default:n(()=>[t(O,{modelValue:a.link,"onUpdate:modelValue":b=>a.link=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),g(t(k,{class:"w-full",onClick:ie},{default:n(()=>[h(m(e(i)("addImageAd")),1)]),_:1},512),[[w,e(l).editComponent.swiper.list.length<10]])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])],512),[[w,e(l).editTab=="content"]]),g(p("div",rl,[p("div",sl,[p("h3",pl,m(e(i)("carouselSearchTabStyle")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("noColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.tab.noColor,"onUpdate:modelValue":o[15]||(o[15]=a=>e(l).editComponent.tab.noColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(d,{label:e(i)("selectColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.tab.selectColor,"onUpdate:modelValue":o[16]||(o[16]=a=>e(l).editComponent.tab.selectColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(d,{label:e(i)("fixedNoColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.tab.fixedNoColor,"onUpdate:modelValue":o[17]||(o[17]=a=>e(l).editComponent.tab.fixedNoColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(d,{label:e(i)("fixedSelectColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.tab.fixedSelectColor,"onUpdate:modelValue":o[18]||(o[18]=a=>e(l).editComponent.tab.fixedSelectColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})]),p("div",ml,[p("h3",ul,m(e(i)("carouselSearchSwiperSet")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchSwiperStyle"),onChange:de},{default:n(()=>[t(u,{modelValue:e(l).editComponent.swiper.swiperStyle,"onUpdate:modelValue":o[19]||(o[19]=a=>e(l).editComponent.swiper.swiperStyle=a)},{default:n(()=>[t(r,{label:"style-1"},{default:n(()=>[h(m(e(i)("carouselSearchSwiperIndicatorStyle1")),1)]),_:1}),t(r,{label:"style-2"},{default:n(()=>[h(m(e(i)("carouselSearchSwiperIndicatorStyle2")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("topRounded")},{default:n(()=>[t(I,{modelValue:e(l).editComponent.swiper.topRounded,"onUpdate:modelValue":o[20]||(o[20]=a=>e(l).editComponent.swiper.topRounded=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("bottomRounded")},{default:n(()=>[t(I,{modelValue:e(l).editComponent.swiper.bottomRounded,"onUpdate:modelValue":o[21]||(o[21]=a=>e(l).editComponent.swiper.bottomRounded=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),p("div",cl,[p("h3",hl,m(e(i)("carouselSearchSwiperIndicatorSet")),1),t(C,{"label-width":"100px",class:"px-[10px]"},{default:n(()=>[t(d,{label:e(i)("carouselSearchSwiperIndicatorStyle")},{default:n(()=>[t(u,{modelValue:e(l).editComponent.swiper.indicatorStyle,"onUpdate:modelValue":o[22]||(o[22]=a=>e(l).editComponent.swiper.indicatorStyle=a)},{default:n(()=>[t(r,{label:"style-1"},{default:n(()=>[h(m(e(i)("carouselSearchSwiperIndicatorStyle1")),1)]),_:1}),t(r,{label:"style-2"},{default:n(()=>[h(m(e(i)("carouselSearchSwiperIndicatorStyle2")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("carouselSearchSwiperIndicatorAlign")},{default:n(()=>[t(u,{modelValue:e(l).editComponent.swiper.indicatorAlign,"onUpdate:modelValue":o[23]||(o[23]=a=>e(l).editComponent.swiper.indicatorAlign=a)},{default:n(()=>[t(r,{label:"left"},{default:n(()=>[h(m(e(i)("alignLeft")),1)]),_:1}),t(r,{label:"center"},{default:n(()=>[h(m(e(i)("alignCenter")),1)]),_:1}),t(r,{label:"right"},{default:n(()=>[h(m(e(i)("alignRight")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(d,{label:e(i)("noColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.swiper.indicatorColor,"onUpdate:modelValue":o[24]||(o[24]=a=>e(l).editComponent.swiper.indicatorColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(d,{label:e(i)("selectColor")},{default:n(()=>[t(_,{modelValue:e(l).editComponent.swiper.indicatorActiveColor,"onUpdate:modelValue":o[25]||(o[25]=a=>e(l).editComponent.swiper.indicatorActiveColor=a),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})])],512),[[w,e(l).editTab=="style"]])],64)}}});const Jl=Object.freeze(Object.defineProperty({__proto__:null,default:bl},Symbol.toStringTag,{value:"Module"}));export{Jl as _};
