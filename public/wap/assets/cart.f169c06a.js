import{b9 as t,c2 as s,X as i,I as o}from"./index-905183d4.js";function e(s){return t.post("shop/cart",s)}function d(s){return t.put("shop/cart",s)}function a(s){return t.put("shop/cart/delete",s)}function c(s){return t.get("shop/cart/goods",s)}const u=s("cart",{state:()=>({cartList:{},totalNum:0,totalMoney:0,isRepeat:!1}),actions:{getList(){var s;i()&&t.get("shop/cart",s).then((t=>{let s=t.data;for(let i in this.cartList)delete this.cartList[i];s&&s.forEach((t=>{if(1==t.goods.status&&0==t.goods.delete_time&&t.goodsSku){let s={id:t.id,goods_id:t.goods_id,sku_id:t.sku_id,stock:t.goodsSku.stock,num:t.num,sale_price:t.goodsSku.sale_price};this.cartList["goods_"+s.goods_id]||(this.cartList["goods_"+s.goods_id]={}),this.cartList["goods_"+s.goods_id]["sku_"+s.sku_id]=s}})),this.calculateNum()}))},increase(t,s=1,a=null){if(!t||t&&0==Object.keys(t).length||!t.goods_id||!t.sku_id)return;if(!i())return;let c=(t.num||0)+s,u=t.id?d:e;c>parseInt(t.stock)?o({title:"商品库存不足",icon:"none"}):this.isRepeat||(this.isRepeat=!0,t.id?this.cartList["goods_"+t.goods_id]["sku_"+t.sku_id].num=c:(this.cartList["goods_"+t.goods_id]||(this.cartList["goods_"+t.goods_id]={}),this.cartList["goods_"+t.goods_id]["sku_"+t.sku_id]={id:t.id,goods_id:t.goods_id,sku_id:t.sku_id,stock:t.stock,num:c,sale_price:t.sale_price}),this.calculateNum(),u({id:t.id,goods_id:t.goods_id,sku_id:t.sku_id,num:c}).then((t=>{"function"==typeof a&&a(),this.getList(),this.isRepeat=!1})).catch((t=>{this.isRepeat=!1})))},reduce(t,s=1){if(!t||t&&0==Object.keys(t).length||!t.goods_id||!t.sku_id)return;if(!i())return;let o=(t.num||0)-1,e=o>0?d:a;this.isRepeat||(this.isRepeat=!0,o>0?this.cartList["goods_"+t.goods_id]["sku_"+t.sku_id].num=o:(delete this.cartList["goods_"+t.goods_id]["sku_"+t.sku_id],0==Object.keys(this.cartList["goods_"+t.goods_id]).length&&delete this.cartList["goods_"+t.goods_id]),this.calculateNum(),e({ids:t.id,id:t.id,goods_id:t.goods_id,sku_id:t.sku_id,num:o}).then((t=>{this.getList(),this.isRepeat=!1})).catch((t=>{this.isRepeat=!1})))},delete(t,s=null){t&&a({ids:t}).then((t=>{this.getList(),this.isRepeat=!1,s&&s()})).catch((t=>{this.isRepeat=!1}))},calculateNum(){if(this.totalNum=0,this.totalMoney=0,Object.keys(this.cartList).length)for(let t in this.cartList){let s=0,i=0;for(let o in this.cartList[t])"object"==typeof this.cartList[t][o]&&(s+=this.cartList[t][o].num,i+=this.cartList[t][o].num*this.cartList[t][o].sale_price);this.cartList[t].totalNum=s,this.cartList[t].totalMoney=i.toFixed(2),this.totalNum+=s,this.totalMoney+=i}this.totalMoney=this.totalMoney.toFixed(2)}}});export{c as g,u};