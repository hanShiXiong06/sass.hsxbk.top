import{d as U,x as $,n as D,r as L,f as R,h as _,c as I,e as a,w as s,a as m,t as r,u as e,i as u,q as l,P as S,s as g,A,_ as q,E as J,J as K,K as M,ak as O,aI as G,L as H,a0 as Q,aa as W,aP as X,ac as Y,T as Z,U as ee}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{c as te,d as ae}from"./tkjhkd-e114d868.js";const le={class:"main-container"},oe={class:"flex justify-between items-center"},ne={class:"text-[20px]"},se={class:"mt-[10px]"},ie={class:"mt-[16px] flex justify-end"},Ne=U({__name:"notice",setup(re){const x=$().meta.title;let t=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",status:"",create_time:"",update_time:"",addon:""}});const h=L(),d=(i=1)=>{t.loading=!0,t.page=i,te({page:t.page,limit:t.limit,...t.searchParam}).then(o=>{t.loading=!1,t.data=o.data.data,t.total=o.data.total}).catch(()=>{t.loading=!1})};d();const k=R(),y=()=>{k.push("/tk_jhkd/noticeedit")},E=i=>{k.push("/tk_jhkd/noticeedit?id="+i.id)},C=i=>{q.confirm(l("tkjhkdNoticeDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{ae(i).then(()=>{d()}).catch(()=>{})})},w=i=>{i&&(i.resetFields(),d())};return(i,o)=>{const p=J,P=K,f=M,T=O,j=G,N=H,b=Q,c=W,v=X,V=Y,B=Z,F=ee;return _(),I("div",le,[a(b,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[m("div",oe,[m("span",ne,r(e(x)),1),a(p,{type:"primary",class:"w-[100px]",onClick:y},{default:s(()=>[u(r(e(l)("addNotice")),1)]),_:1})]),a(b,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[a(N,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:h},{default:s(()=>[a(f,{label:e(l)("title"),prop:"title"},{default:s(()=>[a(P,{modelValue:e(t).searchParam.title,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).searchParam.title=n),placeholder:e(l)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:e(l)("status"),prop:"status"},{default:s(()=>[a(j,{class:"",modelValue:e(t).searchParam.status,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).searchParam.status=n),clearable:"",placeholder:e(l)("statusPlaceholder")},{default:s(()=>[a(T,{label:"全部",value:""})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,null,{default:s(()=>[a(p,{type:"primary",onClick:o[2]||(o[2]=n=>d())},{default:s(()=>[u(r(e(l)("search")),1)]),_:1}),a(p,{onClick:o[3]||(o[3]=n=>w(h.value))},{default:s(()=>[u(r(e(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),m("div",se,[S((_(),g(V,{data:e(t).data,size:"large"},{empty:s(()=>[m("span",null,r(e(t).loading?"":e(l)("emptyData")),1)]),default:s(()=>[a(c,{prop:"title",label:e(l)("title"),"min-width":"120"},null,8,["label"]),a(c,{label:e(l)("image"),width:"100",align:"left"},{default:s(({row:n})=>[n.image?(_(),g(v,{key:0,src:e(A)(n.image)},null,8,["src"])):(_(),g(v,{key:1,icon:"UserFilled"}))]),_:1},8,["label"]),a(c,{prop:"status",label:e(l)("status"),"min-width":"120"},null,8,["label"]),a(c,{prop:"addon",label:e(l)("addon"),"min-width":"120"},null,8,["label"]),a(c,{label:e(l)("operation"),fixed:"right","min-width":"120"},{default:s(({row:n})=>[a(p,{type:"primary",link:"",onClick:z=>E(n)},{default:s(()=>[u(r(e(l)("edit")),1)]),_:2},1032,["onClick"]),a(p,{type:"danger",link:"",onClick:z=>C(n.id)},{default:s(()=>[u(r(e(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,e(t).loading]]),m("div",ie,[a(B,{"current-page":e(t).page,"onUpdate:current-page":o[4]||(o[4]=n=>e(t).page=n),"page-size":e(t).limit,"onUpdate:page-size":o[5]||(o[5]=n=>e(t).limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:o[6]||(o[6]=n=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Ne as default};
