const o="添加商品",e="编辑商品",s="基础信息",t="商品类型",c="商品名称",a="请输入商品名称",r="商品名称不能超过60个字符",n="副标题",d="请输入副标题",i="副标题不能超过80个字符",l="商品图片",u="请上传商品图片",p="商品分类",m="刷新",g="添加分类",T="请选择商品分类",P="商品品牌",h="请选择商品品牌",S="添加品牌",v="商品海报",k="请选择商品海报",N="添加海报",f="不设置将使用默认海报",G="商品标签",b="添加商品标签",y="商品服务",I="添加商品服务",D="供应商",V="请选择供应商",A="添加供应商",H="商品状态",x="上架",O="下架",Z="排序",R="请输入排序",C="排序号格式输入错误",E="价格库存",L="规格类型",M="单规格",q="多规格",w="销售价",B="划线价",U="成本价",_="商品库存",j="请输入商品库存",z="商品编码",F="元",J="件",K="请输入商品编码",Q="商品规格",W="请输入规格项，如颜色、尺码、大小",X="请输入规格值，如：白色",Y="+添加规格值",$="添加规格",oo="批量设置",eo="全部",so="库存",to="确定",co="图片",ao="默认规格",ro="单位",no="请输入单位，默认为：件",io="虚拟销量",lo="请输入虚拟销量",uo="虚拟销量只在前台展示中参与计算",po="虚拟销量格式输入错误",mo="虚拟销量不能小于0",go="当设置为店内核销时，若存在未完成的订单，则无法编辑",To="最多添加5个规格项",Po="请编辑规格信息",ho="刷新成功",So="商品详情",vo="请填写商品详情",ko="商品描述字符数应在5～50000之间",No="请输入销售价",fo="[销售价]格式输入错误",Go="销售价不能小于0",bo="请输入划线价",yo="[划线价]格式输入错误",Io="划线价不能小于0",Do="请输入成本价",Vo="[成本价]格式输入错误",Ao="成本价不能小于0",Ho="请输入库存",xo="[库存]格式输入错误",Oo="库存不能小于0",Zo="规格项不能为空",Ro="规格项不能重复",Co="规格值不能为空",Eo="规格值不能重复",Lo="商品缺少默认规格",Mo="发货设置",qo="自动发货",wo="手动发货",Bo="收货设置",Uo="自动收货",_o="买家确认收货",jo="到店核销",zo="有效期",Fo="请输入有效期",Jo="核销有效期",Ko="永久",Qo="购买后几日有效",Wo="指定过期日期",Xo="无论何时购买此商品，到达指定时间后都将过期，无法核销。",Yo="天",$o="核销有效期不能小于1天",oe="核销有效期不能小于等于当前时间",ee="商品参数",se="商品参数模板",te="请选择商品参数模板",ce="商品可以添加自定义商品参数，也可以通过参数模板批量设置商品参数",ae="参数名",re="参数值",ne="设置排序，改变商品规格展示顺序",de="操作",ie="删除",le="无数据",ue="添加商品参数",pe="会员等级折扣",me="会员折扣",ge="指定会员价",Te="不参与",Pe="会员折扣说明：按照默认会员等级折扣优惠",he="会员价说明：指定优惠价格，商品未参与活动时，按照会员价优惠，若商品参与活动，则以活动价为准",Se="商品正在参与营销活动，禁止操作",ve={addGoods:o,updateGoods:e,basicInfoTab:s,goodsType:t,goodsName:c,goodsNamePlaceholder:a,goodsNameMaxLengthTips:r,subTitle:n,subTitlePlaceholder:d,subTitleMaxLengthTips:i,goodsImage:l,goodsImagePlaceholder:u,goodsCategory:p,refresh:m,addGoodsCategory:g,goodsCategoryPlaceholder:T,brand:P,brandPlaceholder:h,addGoodsBrand:S,poster:v,posterPlaceholder:k,addGoodsPoster:N,posterTips:f,label:G,addGoodsLabel:b,goodsService:y,addGoodsService:I,supplier:D,supplierPlaceholder:V,addSupplier:A,status:H,statusOn:x,statusOff:O,sort:Z,sortPlaceholder:R,sortTips:C,priceStockTab:E,specType:L,singleSpec:M,multiSpec:q,price:w,marketPrice:B,costPrice:U,goodsStock:_,goodsStockPlaceholder:j,skuNo:z,yuan:F,defaultUnit:J,skuNoPlaceholder:K,goodsSku:Q,specNamePlaceholder:W,specValueNamePlaceholder:X,addSpecValue:Y,addSpec:$,batchOperationSku:oo,all:eo,stock:so,confirm:to,image:co,defaultSku:ao,unit:ro,unitPlaceholder:no,virtualSaleNum:io,virtualSaleNumPlaceholder:lo,virtualSaleNumDesc:uo,virtualSaleNumTips:po,virtualSaleNumNotZeroTips:mo,virtualSetTips:go,maxAddSpecTips:To,pleaseEditSpecPlaceholder:Po,refreshSuccess:ho,goodsDesc:So,goodsDescPlaceholder:vo,goodsDescMaxTips:ko,pricePlaceholder:No,priceTips:fo,priceNotZeroTips:Go,marketPricePlaceholder:bo,marketPriceTips:yo,marketPriceNotZeroTips:Io,costPricePlaceholder:Do,costPriceTips:Vo,costPriceNotZeroTips:Ao,stockPlaceholder:Ho,stockTips:xo,stockNotZeroTips:Oo,specNameRequire:Zo,specNameRepeat:Ro,specValueRequire:Co,specValueNameRepeat:Eo,lackDefaultSpec:Lo,setDeliverGoods:Mo,autoDeliverGoods:qo,handDeliverGoods:wo,setTakeGoods:Bo,autoTakeGoods:Uo,handTakeGoods:_o,verifyTakeGoods:jo,virtualIndate:zo,virtualIndatePlaceholder:Fo,verifyVirtualIndate:Jo,verifyVirtualIndateOne:Ko,verifyVirtualIndateTwo:Qo,verifyVirtualIndateThree:Wo,verifyHint:Xo,sky:Yo,virtualIndateErrorHint:$o,virtualIndateErrorOneHint:oe,goodsArguments:ee,goodsArgumentsTemp:se,goodsArgumentsTempPlaceholder:te,goodsArgumentsTempHint:ce,argumentsName:ae,argumentsValue:re,argumentsSortHint:ne,operation:de,delAttr:ie,noData:le,addGoodsArguments:ue,memberDiscount:pe,discount:me,fixedPrice:ge,nonparticipation:Te,discountHint:Pe,fixedPriceHint:he,participateInActiveDisableTips:Se};export{o as addGoods,ue as addGoodsArguments,S as addGoodsBrand,g as addGoodsCategory,b as addGoodsLabel,N as addGoodsPoster,I as addGoodsService,$ as addSpec,Y as addSpecValue,A as addSupplier,eo as all,ae as argumentsName,ne as argumentsSortHint,re as argumentsValue,qo as autoDeliverGoods,Uo as autoTakeGoods,s as basicInfoTab,oo as batchOperationSku,P as brand,h as brandPlaceholder,to as confirm,U as costPrice,Ao as costPriceNotZeroTips,Do as costPricePlaceholder,Vo as costPriceTips,ve as default,ao as defaultSku,J as defaultUnit,ie as delAttr,me as discount,Pe as discountHint,ge as fixedPrice,he as fixedPriceHint,ee as goodsArguments,se as goodsArgumentsTemp,ce as goodsArgumentsTempHint,te as goodsArgumentsTempPlaceholder,p as goodsCategory,T as goodsCategoryPlaceholder,So as goodsDesc,ko as goodsDescMaxTips,vo as goodsDescPlaceholder,l as goodsImage,u as goodsImagePlaceholder,c as goodsName,r as goodsNameMaxLengthTips,a as goodsNamePlaceholder,y as goodsService,Q as goodsSku,_ as goodsStock,j as goodsStockPlaceholder,t as goodsType,wo as handDeliverGoods,_o as handTakeGoods,co as image,G as label,Lo as lackDefaultSpec,B as marketPrice,Io as marketPriceNotZeroTips,bo as marketPricePlaceholder,yo as marketPriceTips,To as maxAddSpecTips,pe as memberDiscount,q as multiSpec,le as noData,Te as nonparticipation,de as operation,Se as participateInActiveDisableTips,Po as pleaseEditSpecPlaceholder,v as poster,k as posterPlaceholder,f as posterTips,w as price,Go as priceNotZeroTips,No as pricePlaceholder,E as priceStockTab,fo as priceTips,m as refresh,ho as refreshSuccess,Mo as setDeliverGoods,Bo as setTakeGoods,M as singleSpec,z as skuNo,K as skuNoPlaceholder,Yo as sky,Z as sort,R as sortPlaceholder,C as sortTips,W as specNamePlaceholder,Ro as specNameRepeat,Zo as specNameRequire,L as specType,X as specValueNamePlaceholder,Eo as specValueNameRepeat,Co as specValueRequire,H as status,O as statusOff,x as statusOn,so as stock,Oo as stockNotZeroTips,Ho as stockPlaceholder,xo as stockTips,n as subTitle,i as subTitleMaxLengthTips,d as subTitlePlaceholder,D as supplier,V as supplierPlaceholder,ro as unit,no as unitPlaceholder,e as updateGoods,Xo as verifyHint,jo as verifyTakeGoods,Jo as verifyVirtualIndate,Ko as verifyVirtualIndateOne,Wo as verifyVirtualIndateThree,Qo as verifyVirtualIndateTwo,zo as virtualIndate,$o as virtualIndateErrorHint,oe as virtualIndateErrorOneHint,Fo as virtualIndatePlaceholder,io as virtualSaleNum,uo as virtualSaleNumDesc,mo as virtualSaleNumNotZeroTips,lo as virtualSaleNumPlaceholder,po as virtualSaleNumTips,go as virtualSetTips,F as yuan};