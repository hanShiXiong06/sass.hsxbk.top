import{d as M,f as P,r as y,n as q,h as B,c as A,e as t,w as i,a as r,t as p,u as s,q as o,i as d,R,s as G,a0 as C,a5 as W,ax as Y,ay as H,bu as I,au as J,E as O,ac as Q,ad as X,W as Z,a7 as ee,Y as te}from"./index-6f32d09b.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                       *//* empty css                    */import{j as ae,k as le,l as oe,m as ne,n as ie,o as se}from"./wechat-37b29496.js";import D from"./reply-form-faf0cc8f.js";/* empty css                */import"./el-form-item-4ed993c7.js";import"./index.vue_vue_type_style_index_0_lang-9c6a354c.js";/* empty css                  *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";import"./index.vue_vue_type_style_index_0_lang-972988e5.js";import"./attachment-503e95ee.js";/* empty css                        *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-4df26bee.js";import"./sortable.esm-be94e56d.js";import"./upload-media.vue_vue_type_script_setup_true_lang-654e54e0.js";import"./select-wechat-media.vue_vue_type_script_setup_true_lang-8796b5ec.js";/* empty css                 */import"./news-card.vue_vue_type_script_setup_true_lang-df5a118e.js";const re={class:"main-container"},pe={class:"flex justify-between items-center"},de={class:"text-page-title"},ue={class:"flex justify-between items-center"},me={class:"mt-[10px]"},ce={class:"mt-[16px] flex justify-end"},ye={class:"mt-[20px]"},_e={class:"mt-[20px]"},st=M({__name:"reply",setup(fe){const k=P(),x=y("/channel/wechat/reply"),m=y("keyword"),z=()=>{k.push("/channel/wechat/keyword_reply_edit")},K=l=>{k.push("/channel/wechat/keyword_reply_edit?id="+l.id)},U=l=>{W.confirm(o("replyDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{oe(l.id).then(()=>{h()}).catch(()=>{})})},j=l=>{k.push({path:x.value})},g=y({}),v=y({});ae().then(({data:l})=>{l.length!=0&&(g.value=l.content)}).catch(),le().then(({data:l})=>{l.length!=0&&(v.value=l.content)}).catch();const V=y(null),E=y(null),T=async()=>{var w,c;let l=!0,e,u={};switch(m.value){case"default":await((w=V.value)==null?void 0:w.verify().then(_=>{l=_})),e=se,u=g.value;break;case"subscribe":await((c=E.value)==null?void 0:c.verify().then(_=>{l=_})),e=ie,u=v.value;break}l&&e({content:u}).then(()=>{}).catch()},n=q({page:1,limit:10,total:0,loading:!0,data:[]}),h=(l=1)=>{n.loading=!0,n.page=l,ne({page:n.page,limit:n.limit}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};return h(),(l,e)=>{const u=Y,w=H,c=I,_=J,f=O,b=Q,S=X,$=Z,N=ee,L=te;return B(),A("div",re,[t(N,{class:"card !border-none",shadow:"never"},{default:i(()=>[r("div",pe,[r("span",de,p(s(o)("title")),1)]),t(w,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a),class:"my-[20px]",onTabChange:j},{default:i(()=>[t(u,{label:s(o)("wechatAccessFlow"),name:"/channel/wechat"},null,8,["label"]),t(u,{label:s(o)("customMenu"),name:"/channel/wechat/menu"},null,8,["label"]),t(u,{label:s(o)("wechatTemplate"),name:"/channel/wechat/message"},null,8,["label"]),t(u,{label:s(o)("reply"),name:"/channel/wechat/reply"},null,8,["label"])]),_:1},8,["modelValue"]),r("div",null,[t(_,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=a=>m.value=a),style:{"margin-bottom":"30px"}},{default:i(()=>[t(c,{label:"keyword"},{default:i(()=>[d(p(s(o)("keywordReply")),1)]),_:1}),t(c,{label:"default"},{default:i(()=>[d(p(s(o)("defaultReply")),1)]),_:1}),t(c,{label:"subscribe"},{default:i(()=>[d(p(s(o)("subscribeReply")),1)]),_:1})]),_:1},8,["modelValue"]),R(r("div",null,[r("div",ue,[t(f,{type:"primary",onClick:z},{default:i(()=>[d("新建回复")]),_:1})]),r("div",me,[R((B(),G(S,{data:n.data,size:"large"},{empty:i(()=>[r("span",null,p(n.loading?"":s(o)("emptyData")),1)]),default:i(()=>[t(b,{prop:"name",label:"规则名称","min-width":"120"}),t(b,{prop:"keyword",label:"关键字","min-width":"120"}),t(b,{label:"匹配规则","min-width":"150",align:"center"},{default:i(({row:a})=>[d(p(a.matching_type=="full"?"全匹配":"模糊匹配"),1)]),_:1}),t(b,{label:"回复方式","min-width":"150",align:"center"},{default:i(({row:a})=>[d(p(a.reply_method=="all"?"全部回复":"随机回复一条"),1)]),_:1}),t(b,{label:s(o)("operation"),align:"right",fixed:"right",width:"180"},{default:i(({row:a})=>[t(f,{type:"primary",link:"",onClick:F=>K(a)},{default:i(()=>[d(p(s(o)("edit")),1)]),_:2},1032,["onClick"]),t(f,{type:"primary",link:"",onClick:F=>U(a)},{default:i(()=>[d(p(s(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[L,n.loading]]),r("div",ce,[t($,{"current-page":n.page,"onUpdate:current-page":e[2]||(e[2]=a=>n.page=a),"page-size":n.limit,"onUpdate:page-size":e[3]||(e[3]=a=>n.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[4]||(e[4]=a=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])],512),[[C,m.value=="keyword"]]),R(r("div",null,[t(D,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),ref_key:"defaultReplyRef",ref:V},null,8,["modelValue"]),r("div",ye,[t(f,{type:"primary",loading:l.loading,onClick:e[6]||(e[6]=a=>T())},{default:i(()=>[d(p(s(o)("save")),1)]),_:1},8,["loading"])])],512),[[C,m.value=="default"]]),R(r("div",null,[t(D,{modelValue:v.value,"onUpdate:modelValue":e[7]||(e[7]=a=>v.value=a),ref_key:"subscribeReplyRef",ref:E},null,8,["modelValue"]),r("div",_e,[t(f,{type:"primary",loading:l.loading,onClick:e[8]||(e[8]=a=>T())},{default:i(()=>[d(p(s(o)("save")),1)]),_:1},8,["loading"])])],512),[[C,m.value=="subscribe"]])])]),_:1})])}}});export{st as default};
