import{d as j,x as q,f as U,r as x,n as $,h as _,c as w,e as t,w as s,a as u,t as d,u as e,q as a,R as W,s as E,B as z,F as I,T as M,i as v,aV as O,ax as P,ay as Y,aW as G,ac as H,aU as J,E as K,ad as Q,a7 as X,Y as Z}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  */import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-165de32d.js";/* empty css                        *//* empty css               *//* empty css                 *//* empty css                    */import{e as ae,f as te}from"./weapp-d6776f80.js";import{e as ne}from"./notice-a3ca8a43.js";const le={class:"main-container"},oe={class:"flex justify-between items-center"},se={class:"text-page-title"},ie={class:"mt-[20px]"},ce={class:"flex items-center"},pe={class:"mr-[5px]"},Ne=j({__name:"template",setup(re){const C=q(),T=U(),N=C.meta.title,f=x("/channel/weapp/message"),V=l=>{T.push({path:f.value})},i=$({loading:!0,data:[]}),b=(l=1)=>{i.loading=!0,ae().then(o=>{i.loading=!1;let c=[];o.data.forEach(m=>{if(m.notice.length){const r=[];Object.keys(m.notice).forEach((p,y)=>{const h=m.notice[p];h.addon_name=m.title,r.push(h)}),r.length&&(r[0].rowspan=r.length,c=c.concat(r))}}),i.data=c}).catch(()=>{i.loading=!1})};b();const B=l=>{if(l.columnIndex===0)return l.row.rowspan?{rowspan:l.row.rowspan,colspan:1}:{rowspan:0,colspan:0}},D=(l=null)=>{const o=O.service({lock:!0,background:"rgba(0, 0, 0, 0)"});te({keys:l?[l.key]:[]}).then(()=>{b(),o.close()}).catch(()=>{o.close()})},F=l=>{const o=x({key:"",type:"",status:0});o.value.status=l.is_weapp?0:1,o.value.key=l.key,o.value.type="weapp",i.loading=!0,ne(o.value).then(c=>{b()}).catch(()=>{i.loading=!1})};return(l,o)=>{const c=P,m=Y,r=G,p=H,y=ee,h=J,k=K,L=Q,S=X,A=Z;return _(),w("div",le,[t(S,{class:"card !border-none",shadow:"never"},{default:s(()=>[u("div",oe,[u("span",se,d(e(N)),1)]),t(m,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=n=>f.value=n),class:"my-[20px]",onTabChange:V},{default:s(()=>[t(c,{label:e(a)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),t(c,{label:e(a)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),t(c,{label:e(a)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),t(r,{title:e(a)("operationTipTwo"),type:"info","show-icon":""},null,8,["title"]),u("div",ie,[W((_(),E(L,{data:i.data,"span-method":B,size:"large"},{empty:s(()=>[u("span",null,d(i.loading?"":e(a)("emptyData")),1)]),default:s(()=>[t(p,{prop:"addon_name",label:e(a)("addon"),"min-width":"120"},null,8,["label"]),t(p,{prop:"name","show-overflow-tooltip":!0,label:e(a)("name"),"min-width":"150"},{default:s(({row:n})=>[u("div",ce,[u("span",pe,d(n.name),1),n.weapp.tips?(_(),E(h,{key:0,content:n.weapp.tips,placement:"top"},{default:s(()=>[t(y,{name:"element WarningFilled"})]),_:2},1032,["content"])):z("",!0)])]),_:1},8,["label"]),t(p,{label:e(a)("response"),"min-width":"180"},{default:s(({row:n})=>[(_(!0),w(I,null,M(n.weapp.content,(g,R)=>(_(),w("div",{key:"a"+R,class:"text-left"},d(g.join(":")),1))),128))]),_:1},8,["label"]),t(p,{label:e(a)("isStart"),"min-width":"100",align:"center"},{default:s(({row:n})=>[v(d(n.is_weapp==1?e(a)("startUsing"):e(a)("statusDeactivate")),1)]),_:1},8,["label"]),t(p,{prop:"weapp_template_id",label:e(a)("serialNumber"),"min-width":"180"},null,8,["label"]),t(p,{label:e(a)("operation"),fixed:"right",align:"right",width:"200"},{default:s(({row:n})=>[t(k,{type:"primary",link:"",onClick:g=>F(n)},{default:s(()=>[v(d(n.is_weapp==1?e(a)("close"):e(a)("open")),1)]),_:2},1032,["onClick"]),t(k,{type:"primary",link:"",onClick:g=>D(n)},{default:s(()=>[v(d(e(a)("regain")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[A,i.loading]])])]),_:1})])}}});export{Ne as default};
