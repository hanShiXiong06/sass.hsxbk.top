const e="订单编号",o="订单信息",t="交易流水号",n="订单类型",s="订单来源",r="收货人",c="收货人手机号",d="收货地址",i="商品信息",a="商品名称",l="价格",u="数量",y="商品总额",f="优惠金额",p="配送金额",m="订单日志",T="请输入订单编号",h="订单状态",P="请选择订单状态",M="订单类型",v="请选择订单类型",I="支付时间",N="商品",S="单价（元）/数量",g="订单金额",k="买家/收货人",j="配送方式",R="开始时间",b="结束时间",G="件",D="支付方式",A="备注",F="修改地址",C="提醒",L="买家付款成功后，货款将直接进入您的商户号（微信、支付宝）",W="请及时关注你发出的包裹状态，确保可以配送至买家手中",x="如果买家表示没收到货或货物有问题，请及时联系买家处理，友好协商",w="关闭订单",O="确认收货",q="订单发货",B="请选择配送方式",E="物流公司",U="请选择物流公司",_="物流单号",z="请输入物流单号",H="请选择订单项",J="虚拟发货",K="关闭订单后该订单将无法支付，是否确认关闭？",Q="是否确认用户已经收货？",V="请选择要发货的商品",X="买家留言",Y="优惠金额",Z="物流信息",$="发货时间",ee="物流公司",oe="物流单号",te="物流包裹信息",ne="发货信息",se="商品信息",re="物流信息",ce="自提点名称",de="自提点地址",ie="自提点电话",ae="营业时间",le="发货状态",ue="无需物流",ye="暂无物流信息",fe="退款状态",pe="暂无数据",me="修改价格",Te="调整价格",he="元",Pe="注意 : 只有订单未付款时才支持改价,改价后请联系买家刷新订单核实订单金额后再支付。当订单总额为0元时，订单将自动支付",Me="运费",ve="商品信息",Ie="单价",Ne="数量",Se="小计",ge="优惠金额",ke="调整金额",je="总计",Re="积分",be="打印电子面单",Ge="面单模板",De="请选择面单模板",Ae="打印结果",Fe="包裹编号",Ce="状态",Le="状态码",We="备注",xe="打印面单",we="打印小票",Oe="发货方式",qe="手动填写",Be="电子面单",Ee="联系人",Ue="请输入联系人",_e="联系方式",ze="请输入联系方式",He="自提门店",Je="地址",Ke="请选择省",Qe="请选择市",Ve="请选择区/县",Xe="请输入详细地址",Ye="商家主动退款",Ze="退款金额",$e="主动退款",eo="完成状态",oo="退款方式",to="退款说明",no="1、如果是退部分金额，退款后可以是部分退款状态或退款完成状态",so="2、如果是退全部金额，则退款后一定是退款完成状态",ro="3、退款完成才会执行相关业务如核销码失效，卡包失效等操作",co="原路退款",io="线下退款",ao="退款到余额",lo="部分退款状态",uo="退款完成状态",yo="主动退款金额不能为空或为零",fo="主动退款金额不能大于可退款总额",po="商品项",mo="商品信息",To="规格",ho="售价",Po="实付金额",Mo="数量",vo="请选择退款的商品",Io={orderNo:e,orderInfo:o,outTradeNo:t,orderType:n,orderForm:s,takerName:r,takerMobile:c,takerFullAddress:d,goodsDetail:i,goodsName:a,price:l,num:u,goodsMoney:y,preferentialMoney:f,deliveryMoney:p,operateLog:m,orderNoPlaceholder:T,orderStatus:h,orderStatusPlaceholder:P,orderFrom:M,orderFromPlaceholder:v,payTime:I,orderGoods:N,goodsPriceNumber:S,orderMoney:g,buyInfo:k,deliveryType:j,startDate:R,endDate:b,piece:G,payType:D,notes:A,editAddress:F,remind:C,remindTips1:L,remindTips2:W,remindTips3:x,close:w,finish:O,delivery:q,deliveryTypePlaceholder:B,company:E,companyPlaceholder:U,expressNumber:_,expressNumberPlaceholder:z,orderGoodsIdsPlaceholder:H,virtualDelivery:J,orderCloseTips:K,orderFinishTips:Q,orderGoodsPlaceholder:V,memberRemark:X,discountMoney:Y,orderDelivery:Z,devliveryTime:$,companyName:ee,logisticNo:oe,packageInfo:te,deliveryInfo:ne,goodsInfo:se,logisticInfo:re,storeName:ce,storeAddress:de,storeMobile:ie,tradeTime:ae,deliveryStatusName:le,package:"包裹",noLogisticsRequired:ue,notLogistics:ye,refundStatusName:fe,orderInfoEmpty:pe,editPrice:me,adjustMoneyDialogTitle:Te,adjustMoneyUnit:he,adjustMoneyTips:Pe,adjustMoneyDeliveryMoney:Me,adjustMoneyGoodsInfo:ve,adjustMoneyPrice:Ie,adjustMoneyNum:Ne,adjustMoneySubTotal:Se,adjustMoneyDiscountMoney:ge,adjustMoneyLabel:ke,adjustMoneyTotal:je,point:Re,electronicSheetPrintTitle:be,electronicSheetTemplate:Ge,electronicSheetTemplatePlaceholder:De,electronicSheetPrintResult:Ae,deliveryPackageNo:Fe,printStatus:Ce,printResultCode:Le,printRemark:We,electronicSheetPrintOperation:xe,printTicket:we,deliveryWay:Oe,manualWriteWay:qe,electronicSheetWay:Be,contacts:Ee,contactsPlaceholder:Ue,ContactInformation:_e,ContactInformationPlaceholder:ze,selfPickupStores:He,address:Je,province:Ke,city:Qe,area:Ve,detailedAddress:Xe,refundTitle:Ye,refundMoney:Ze,voluntaryRefund:$e,refundState:eo,refundType:oo,refundInstructions:to,refundInstructionsOne:no,refundInstructionsTwo:so,refundInstructionsThree:ro,backRefund:co,offlineRefund:io,refundToBalance:ao,partialRefund:lo,refundFinish:uo,shopActiveRefundMoneyPlaceholder:yo,shopActiveRefundMoneyTwoPlaceholder:fo,refundGoodsItem:po,refundGoodsInfo:mo,refundGoodsSku:To,refundGoodsPrice:ho,refundPayPrice:Po,refundGoodsNum:Mo,refundGoodsPlaceholder:vo};export{_e as ContactInformation,ze as ContactInformationPlaceholder,Je as address,Me as adjustMoneyDeliveryMoney,Te as adjustMoneyDialogTitle,ge as adjustMoneyDiscountMoney,ve as adjustMoneyGoodsInfo,ke as adjustMoneyLabel,Ne as adjustMoneyNum,Ie as adjustMoneyPrice,Se as adjustMoneySubTotal,Pe as adjustMoneyTips,je as adjustMoneyTotal,he as adjustMoneyUnit,Ve as area,co as backRefund,k as buyInfo,Qe as city,w as close,E as company,ee as companyName,U as companyPlaceholder,Ee as contacts,Ue as contactsPlaceholder,Io as default,q as delivery,ne as deliveryInfo,p as deliveryMoney,Fe as deliveryPackageNo,le as deliveryStatusName,j as deliveryType,B as deliveryTypePlaceholder,Oe as deliveryWay,Xe as detailedAddress,$ as devliveryTime,Y as discountMoney,F as editAddress,me as editPrice,xe as electronicSheetPrintOperation,Ae as electronicSheetPrintResult,be as electronicSheetPrintTitle,Ge as electronicSheetTemplate,De as electronicSheetTemplatePlaceholder,Be as electronicSheetWay,b as endDate,_ as expressNumber,z as expressNumberPlaceholder,O as finish,i as goodsDetail,se as goodsInfo,y as goodsMoney,a as goodsName,S as goodsPriceNumber,re as logisticInfo,oe as logisticNo,qe as manualWriteWay,X as memberRemark,ue as noLogisticsRequired,ye as notLogistics,A as notes,u as num,io as offlineRefund,m as operateLog,K as orderCloseTips,Z as orderDelivery,Q as orderFinishTips,s as orderForm,M as orderFrom,v as orderFromPlaceholder,N as orderGoods,H as orderGoodsIdsPlaceholder,V as orderGoodsPlaceholder,o as orderInfo,pe as orderInfoEmpty,g as orderMoney,e as orderNo,T as orderNoPlaceholder,h as orderStatus,P as orderStatusPlaceholder,n as orderType,t as outTradeNo,te as packageInfo,lo as partialRefund,I as payTime,D as payType,G as piece,Re as point,f as preferentialMoney,l as price,We as printRemark,Le as printResultCode,Ce as printStatus,we as printTicket,Ke as province,uo as refundFinish,mo as refundGoodsInfo,po as refundGoodsItem,Mo as refundGoodsNum,vo as refundGoodsPlaceholder,ho as refundGoodsPrice,To as refundGoodsSku,to as refundInstructions,no as refundInstructionsOne,ro as refundInstructionsThree,so as refundInstructionsTwo,Ze as refundMoney,Po as refundPayPrice,eo as refundState,fe as refundStatusName,Ye as refundTitle,ao as refundToBalance,oo as refundType,C as remind,L as remindTips1,W as remindTips2,x as remindTips3,He as selfPickupStores,yo as shopActiveRefundMoneyPlaceholder,fo as shopActiveRefundMoneyTwoPlaceholder,R as startDate,de as storeAddress,ie as storeMobile,ce as storeName,d as takerFullAddress,c as takerMobile,r as takerName,ae as tradeTime,J as virtualDelivery,$e as voluntaryRefund};
