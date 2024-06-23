import{_ as e}from"./u-swiper.607b71bb.js";import{d as t,r as l,l as a,m as s,j as n,V as r,o as c,c as u,w as o,u as i,b as d,x,y as f,f as p,aN as _,E as m,F as g,G as b,n as v,g as h,h as y,i as k,C as w,c7 as F,a4 as j,X as C,B as V,a as P,N as S,ab as D}from"./index-905183d4.js";import{_ as E}from"./u-popup.e3f6594b.js";import{_ as I}from"./u-parse.b0851c53.js";import{_ as z}from"./u-loading-page.7aa0a449.js";import{r as A}from"./tourism.31e9949d.js";import{_ as B}from"./share-poster.cfed5f32.js";import{_ as N}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";import"./u-icon.86a2aad0.js";import"./u-safe-bottom.e94b03c1.js";const U=N(t({__name:"detail",setup(t){let N=l([]),U=l([]),q=l(!0),G=l(""),L=l(!1),M=l([]),R=l(!1),T=l("");const X=a(),Y=s((()=>X.info));n((e=>{q.value=!0,A(e.scenic_id).then((t=>{G.value=e.scenic_id,U.value=t.data,M.value.push({id:1,latitude:U.value.latitude,longitude:U.value.longitude,iconPath:r("addon/tourism/tourism/map_icon.png"),height:25}),N.value=[],U.value.image_thumb_big&&U.value.image_thumb_big.length?U.value.image_thumb_big.forEach(((e,t)=>{N.value.push(r(e))})):N.value.push(r(U.value.cover_thumb_big)),Q(),q.value=!1})).catch((()=>{q.value=!1}))}));let H=l({ticket_id:"",reserve_time:(e=>{let t=e.getFullYear(),l=e.getMonth()+1,a=e.getDate();return""+(t+"-"+(l<10?"0"+l:l)+"-"+(a<10?"0"+a:a))})(((e,t="")=>{var l=864e5*e;return t?new Date(t+l):new Date(Date.now()+l)})(0)),num:1,scenic_id:G});let J=l(null),K=l(""),O={};const Q=()=>{K.value="?scenic_id="+U.value.scenic_id,Y.value&&Y.value.member_id&&(K.value+="&mid="+Y.value.member_id)},W=()=>{O.scenic_id=U.value.scenic_id,Y.value&&Y.value.member_id&&(O.member_id=Y.value.member_id),J.value.openShare()};let Z=e=>{let t="";return t=e.member_discount&&C()?"member_price":"",t},$=e=>{let t="0.00";return t=e.member_discount&&C()&&e.member_price||e.price,parseFloat(t).toFixed(2)};return(t,l)=>{const a=h(y("u-swiper"),e),s=k,n=w,A=F,X=h(y("u-popup"),E),Y=S,Q=D,ee=h(y("u-parse"),I),te=j,le=h(y("u-loading-page"),z);return c(),u(s,{class:"bg-[#f7f7f7] min-h-screen overflow-hidden",style:v(t.themeColor())},{default:o((()=>[i(q)?p("v-if",!0):(c(),u(s,{key:0},{default:o((()=>[d(a,{list:i(N),height:"380rpx",radius:"0"},null,8,["list"]),d(s,{class:"chunk-wrap pt-4 pb-3 rounded-t-2xl relative -mt-[30rpx]"},{default:o((()=>[d(s,{class:"flex justify-between items-center"},{default:o((()=>[d(s,{class:"flex-1"},{default:o((()=>[d(s,{class:"text-[34rpx] font-bold multi-hidden leading-6"},{default:o((()=>[x(f(i(U).scenic_name),1)])),_:1}),d(s,{class:"text-xs mt-2"},{default:o((()=>[x("景点级别「"+f(i(U).scenic_level)+"星」",1)])),_:1})])),_:1}),d(s,{class:"flex flex-col items-center text-[#6D7278] ml-[40rpx] pl-[50rpx] pr-[30rpx] border-0 border-l border-solid border-[#F0F0F0]",onClick:W},{default:o((()=>[d(n,{class:"nc-iconfont nc-icon-fenxiangV6xx-1 text-lg"}),d(n,{class:"mt-1 text-xs"},{default:o((()=>[x("分享")])),_:1})])),_:1})])),_:1}),p(' <view class="flex justify-between text-[#543E3E] items-baseline mt-3">\r\n\t\t\t\t\t<view class="text-xs member-price pl-2 py-1 rounded-l-lg">\r\n\t\t\t\t\t\t<text>5.0评分</text>\r\n\t\t\t\t\t\t<text class="ml-3">风景很好</text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="text-xs flex items-center">\r\n\t\t\t\t\t\t<text>39条评论</text>\r\n\t\t\t\t\t\t<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t</view> '),d(s,{class:"flex mt-3"},{default:o((()=>[d(s,{class:"bg-[#F2F4F9] mr-2 py-2 px-3 rounded-md w-[240rpx] box-border"},{default:o((()=>[d(n,{class:"text-[26rpx] font-bold"},{default:o((()=>[x("营业中")])),_:1}),d(s,{class:"text-xs mt-1"},{default:o((()=>[d(n,null,{default:o((()=>[x(f(i(U).open_time),1)])),_:1}),d(n,{class:"text-[26rpx] nc-iconfont nc-icon-youV6xx"})])),_:1})])),_:1}),d(s,{class:"bg-[#F2F4F9] py-2 px-3 rounded-md flex flex-1 items-center",onClick:l[0]||(l[0]=e=>_(L)?L.value=!0:L=!0)},{default:o((()=>[d(s,{class:"flex-1"},{default:o((()=>[p(' <text class="text-[26rpx] font-bold">距您直线12.3km</text> '),d(n,{class:"text-[26rpx] font-bold"},{default:o((()=>[x("景点地址")])),_:1}),d(s,{class:"text-xs mt-1"},{default:o((()=>[d(n,null,{default:o((()=>[x(f(i(U).address),1)])),_:1}),d(n,{class:"text-[26rpx] nc-iconfont nc-icon-youV6xx"})])),_:1})])),_:1}),d(s,{class:"flex flex-col ml-3"},{default:o((()=>[d(n,{class:"nc-iconfont nc-icon-dizhiV6mm leading-[1] p-[8rpx] text-center bg-[#fff] text-[32rpx] rounded-full"}),d(n,{class:"text-xs mt-[4rpx]"},{default:o((()=>[x("地图")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(X,{show:i(L),onClose:l[1]||(l[1]=e=>_(L)?L.value=!1:L=!1),closeable:!0},{default:o((()=>[d(s,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[d(n,null,{default:o((()=>[x("地图")])),_:1})])),_:1}),d(s,null,{default:o((()=>[d(A,{class:"map-body w-full h-[600rpx]",latitude:i(U).latitude,longitude:i(U).longitude,markers:i(M)},null,8,["latitude","longitude","markers"])])),_:1})])),_:1},8,["show"]),i(U).ticket_list&&i(U).ticket_list.length?(c(),u(s,{key:0,class:"chunk-wrap"},{default:o((()=>[d(s,{class:"chunk-head"},{default:o((()=>[d(n,null,{default:o((()=>[x("门票")])),_:1})])),_:1}),(c(!0),m(b,null,g(i(U).ticket_list,((e,t)=>(c(),u(s,{key:e.goods_id},{default:o((()=>[d(s,{class:"flex border-0 border-b border-solid border-[#F2F2F2] py-[30rpx] justify-between"},{default:o((()=>[d(s,{class:"flex flex-col"},{default:o((()=>[d(n,{class:"text-sm font-bold"},{default:o((()=>[x(f(e.goods_name),1)])),_:2},1024),p(' <text class="text-xs text-color mt-1">票数: {{item.stock}}</text> '),d(s,{class:"flex text-xs text-[#646464] mt-1"},{default:o((()=>[d(n,{class:"class-select"},{default:o((()=>[x("官方")])),_:1}),d(n,{class:"class-select"},{default:o((()=>[x("有条件退")])),_:1}),d(n,{class:"text-color"},{default:o((()=>[x("无需换票")])),_:1})])),_:1}),d(s,{class:"flex text-xs text-[#646464] mt-1",onClick:t=>{return l=e.goods_content,R.value=!0,void(T.value=l);var l}},{default:o((()=>[d(n,null,{default:o((()=>[x("门票说明"),d(n,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:2},1032,["onClick"])])),_:2},1024),d(s,{class:"flex flex-col justify-center"},{default:o((()=>[d(s,{class:"text-xs text-[#626262]"},{default:o((()=>[d(n,{class:"text-[#FA6400] price-font"},{default:o((()=>[x("￥")])),_:1}),d(n,{class:"text-lg font-bold text-[#FA6400] price-font"},{default:o((()=>[x(f(i($)(e)),1)])),_:2},1024),"member_price"==i(Z)(e)?(c(),u(Y,{key:0,class:"h-[22rpx] ml-[6rpx] w-[55rpx]",src:i(r)("addon/tourism/VIP.png"),mode:"widthFix"},null,8,["src"])):p("v-if",!0),x(" 起 ")])),_:2},1024),d(Q,{class:"w-[128rpx] h-[60rpx] leading-[60rpx] text-sm text-white bg-color rounded-2xl mt-[20rpx]",onClick:t=>(e=>{if(!C())return V().setLoginBack({url:"/addon/tourism/pages/scenic/detail",param:{scenic_id:G.value}}),!1;H.value.ticket_id=e.goods_id,uni.setStorageSync("scenicCreateData",H.value),P({url:"/addon/tourism/pages/scenic/order"})})(e)},{default:o((()=>[x("预订")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):p("v-if",!0),p(" 门票说明 "),d(X,{show:i(R),onClose:l[2]||(l[2]=e=>_(R)?R.value=!1:R=!1),closeable:!0},{default:o((()=>[d(s,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[d(n,null,{default:o((()=>[x("门票说明")])),_:1})])),_:1}),d(s,{class:"pt-[28rpx] pb-[40rpx] px-[28rpx]"},{default:o((()=>[d(te,{class:"max-h-[60vh]","scroll-y":!0},{default:o((()=>[i(T)?(c(),u(ee,{key:0,content:i(T),tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(c(),u(n,{key:1,class:"block px-5"},{default:o((()=>[x("暂无购买须知")])),_:1}))])),_:1})])),_:1})])),_:1},8,["show"]),i(U).telephone?(c(),u(s,{key:1,class:"chunk-wrap"},{default:o((()=>[d(s,{class:"chunk-head"},{default:o((()=>[d(n,null,{default:o((()=>[x("联系电话")])),_:1})])),_:1}),d(s,{class:"text-sm py-3 px-1 text-[#666] flex items-center"},{default:o((()=>[d(n,{class:"iconfont icondianhua-xianxingyuankuang font-bold mr-2 text-lg"}),d(n,null,{default:o((()=>[x(f(i(U).telephone),1)])),_:1})])),_:1})])),_:1})):p("v-if",!0),d(s,{class:"chunk-wrap"},{default:o((()=>[d(s,{class:"chunk-head"},{default:o((()=>[d(n,null,{default:o((()=>[x("景区介绍")])),_:1})])),_:1}),d(s,{class:"pt-[28rpx] pb-[40rpx] scheduling-content"},{default:o((()=>[i(U).scenic_desc?(c(),u(ee,{key:0,content:i(U).scenic_desc,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(c(),u(n,{key:1},{default:o((()=>[x("暂无景区介绍")])),_:1}))])),_:1})])),_:1}),d(s,{class:"chunk-wrap"},{default:o((()=>[d(s,{class:"chunk-head"},{default:o((()=>[d(n,null,{default:o((()=>[x("景区周边")])),_:1})])),_:1}),d(s,{class:"pt-[28rpx] pb-[40rpx] scheduling-content"},{default:o((()=>[i(U).surround?(c(),u(ee,{key:0,content:i(U).surround,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(c(),u(n,{key:1},{default:o((()=>[x("暂无景区周边")])),_:1}))])),_:1})])),_:1})])),_:1})),d(le,{"bg-color":"rgb(248,248,248)",loading:i(q),fontSize:"16",color:"#333"},null,8,["loading"]),d(B,{ref_key:"sharePosterRef",ref:J,posterType:"tourism_scenic",posterId:i(U).poster_id,posterParam:i(O),copyUrlParam:i(K)},null,8,["posterId","posterParam","copyUrlParam"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-5341025f"]]);export{U as default};
