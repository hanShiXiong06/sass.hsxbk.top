import{d as T,r as v,n as L,h as p,c as b,e as o,w as l,i as c,t as i,u as n,q as r,B as y,R,s as k,a as g,A as j,a3 as q,U as A,K,L as W,E as X,M as Y,ac as G,ad as H,W as J,X as O,Y as Q}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as Z}from"./member_head-d9fd7b2c.js";import{f as ee}from"./fenxiao-8f77332d.js";const ae={class:"flex items-center"},te=["src"],le={key:1,class:"w-[50px] h-[50px] mr-[10px] rounded-full",src:Z,alt:""},oe={class:"flex flex flex-col"},ne={class:"mt-[16px] flex justify-end"},re={key:0,class:"dialog-footer"},De=T({__name:"member-of-select-popup",props:{title:{type:String,default:""},max:{type:Number,default:1}},emits:["load"],setup(V,{expose:P,emit:C}){const d=V,m=v(!1),e=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search:""}}),u=(s=1)=>{e.loading=!0,e.page=s;const t=q(e.searchParam);ee({page:e.page,limit:e.limit,...t}).then(_=>{e.loading=!1,e.data=_.data.data,e.total=_.data.total}).catch(()=>{e.loading=!1})};let w=v();const D=s=>{s&&(e.searchParam.search="",u())};let x=v([]);const S=s=>{x.value=s},z=s=>{u(),m.value=!0},B=()=>{if(x.value.length>d.max){A.error(`最多选择${d.max}个会员`);return}C("load",x.value),m.value=!1},F=s=>{C("load",s),m.value=!1};return P({showDialog:m,show:z}),(s,t)=>{const _=K,E=W,f=X,N=Y,h=G,$=H,M=J,U=O,I=Q;return p(),b("div",null,[o(U,{modelValue:m.value,"onUpdate:modelValue":t[7]||(t[7]=a=>m.value=a),title:d.title,width:"800px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:l(()=>[d.max>1?(p(),b("span",re,[o(f,{onClick:t[6]||(t[6]=a=>m.value=!1)},{default:l(()=>[c(i(n(r)("cancel")),1)]),_:1}),o(f,{type:"primary",onClick:B},{default:l(()=>[c(i(n(r)("confirm")),1)]),_:1})])):y("",!0)]),default:l(()=>[o(N,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:w},{default:l(()=>[o(E,{label:n(r)("memberInfo")},{default:l(()=>[o(_,{modelValue:e.searchParam.search,"onUpdate:modelValue":t[0]||(t[0]=a=>e.searchParam.search=a),placeholder:n(r)("memberNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(E,null,{default:l(()=>[o(f,{type:"primary",onClick:t[1]||(t[1]=a=>u())},{default:l(()=>[c(i(n(r)("search")),1)]),_:1}),o(f,{onClick:t[2]||(t[2]=a=>D(n(w)))},{default:l(()=>[c(i(n(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),R((p(),k($,{data:e.data,size:"large","max-height":"400",onSelectionChange:S},{empty:l(()=>[g("span",null,i(e.loading?"":n(r)("emptyData")),1)]),default:l(()=>[d.max>1?(p(),k(h,{key:0,type:"selection",width:"55"})):y("",!0),o(h,{prop:"nickname","show-overflow-tooltip":!0,label:n(r)("memberInfo"),"min-width":"170"},{default:l(({row:a})=>[g("div",ae,[a.member.headimg?(p(),b("img",{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:n(j)(a.member.headimg),alt:""},null,8,te)):(p(),b("img",le)),g("div",oe,[g("span",null,i(a.member.nickname||a.member.username||""),1)])])]),_:1},8,["label"]),o(h,{prop:"mobile",label:n(r)("mobile"),"min-width":"120"},{default:l(({row:a})=>[c(i(a.member.mobile),1)]),_:1},8,["label"]),d.max==1?(p(),k(h,{key:1,label:n(r)("operation"),fixed:"right",align:"right"},{default:l(({row:a})=>[o(f,{type:"primary",onClick:se=>F(a)},{default:l(()=>[c(i(n(r)("select")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])):y("",!0)]),_:1},8,["data"])),[[I,e.loading]]),g("div",ne,[o(M,{"current-page":e.page,"onUpdate:current-page":t[3]||(t[3]=a=>e.page=a),"page-size":e.limit,"onUpdate:page-size":t[4]||(t[4]=a=>e.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:t[5]||(t[5]=a=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});export{De as _};