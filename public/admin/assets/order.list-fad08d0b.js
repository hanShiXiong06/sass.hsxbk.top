const e="订单编号",o="下单时间",t="请输入订单编号",n="会员信息",r="请输入昵称/手机号",s="订单状态",c="请选择订单状态",d="订单类型",a="请选择订单类型",i="支付时间",l="商品",p="单价（元）/数量",y="实付金额（元）",u="积分",m="买家/收货人",h="配送方式",P="开始时间",T="结束时间",S="件",f="维权",M="主动退款",v="备注",j="线下支付",N="关闭订单",b="修改价格",D="修改地址",I="发货",G="确认收货",g="全部",O="待支付",k="待发货",C="已发货",R="已收货",x="已完成",E="已关闭",F="退款中",A="备注信息",B="订单发货",L="请选择配送方式",U="物流公司",_="请选择物流公司",q="物流单号",w="请输入物流单号",z="请选择订单项",H="虚拟发货",J="商品名称",K="商品数量",Q="关闭订单后该订单将无法支付，是否确认关闭?",V="是否确认用户已经收货？",W="请选择要发货的商品",X="发货状态",Y="订单来源",Z="支付类型",$="订单信息",ee="退款状态",oe="交易流水号",te="导出订单类型",ne="订单数据表",re="订单商品表",se="调整价格",ce="元",de="注意 : 只有订单未付款时才支持改价,改价后请联系买家刷新订单核实订单金额后再支付。当订单总额为0元时，订单将自动支付",ae="运费",ie="商品信息",le="单价",pe="数量",ye="小计",ue="优惠金额",me="调整金额",he="总计",Pe="联系人",Te="请输入联系人",Se="联系方式",fe="请输入联系方式",Me="地址",ve="请选择省",je="请选择市",Ne="请选择区/县",be="请输入详细地址",De="自提门店",Ie="打印电子面单",Ge="面单模板",ge="请选择面单模板",Oe="打印结果",ke="包裹编号",Ce="批量打印电子面单",Re="请选择要操作的订单",xe="当前选择的订单不支持打印电子面单",Ee="状态",Fe="状态码",Ae="备注",Be="打印面单",Le="打印小票",Ue={orderNo:e,createTime:o,orderNoPlaceholder:t,memberInfo:n,memberInfoPlaceholder:r,orderStatus:s,orderStatusPlaceholder:c,orderFrom:d,orderFromPlaceholder:a,payTime:i,orderGoods:l,goodsPriceNumber:p,orderMoney:y,point:u,buyInfo:m,deliveryType:h,startDate:P,endDate:T,piece:S,rightsProtection:f,activeRefund:M,notes:v,offlinePayment:j,orderClose:N,editPrice:b,editAddress:D,sendOutGoods:I,confirmTakeDelivery:G,all:g,toBePaid:O,toBeShipped:k,shipped:C,receivedGoods:R,completed:x,closed:E,refunding:F,notesDetail:A,delivery:B,deliveryTypePlaceholder:L,company:U,companyPlaceholder:_,expressNumber:q,expressNumberPlaceholder:w,orderGoodsIdsPlaceholder:z,virtualDelivery:H,goodsName:J,num:K,orderCloseTips:Q,orderFinishTips:V,orderGoodsPlaceholder:W,deliveryStatusName:X,fromType:Y,payType:Z,orderInfo:$,refundStatusName:ee,outTradeNo:oe,exportOrderType:te,shopOrder:ne,shopOrderGoods:re,adjustMoneyDialogTitle:se,adjustMoneyUnit:ce,adjustMoneyTips:de,adjustMoneyDeliveryMoney:ae,adjustMoneyGoodsInfo:ie,adjustMoneyPrice:le,adjustMoneyNum:pe,adjustMoneySubTotal:ye,adjustMoneyDiscountMoney:ue,adjustMoneyLabel:me,adjustMoneyTotal:he,contacts:Pe,contactsPlaceholder:Te,ContactInformation:Se,ContactInformationPlaceholder:fe,address:Me,province:ve,city:je,area:Ne,detailedAddress:be,selfPickupStores:De,electronicSheetPrintTitle:Ie,electronicSheetTemplate:Ge,electronicSheetTemplatePlaceholder:ge,electronicSheetPrintResult:Oe,deliveryPackageNo:ke,batchPrintElectronicSheet:Ce,batchEmptySelectedOrderTips:Re,notSupportPrintElectronicSheetTips:xe,printStatus:Ee,printResultCode:Fe,printRemark:Ae,electronicSheetPrintOperation:Be,printTicket:Le};export{Se as ContactInformation,fe as ContactInformationPlaceholder,M as activeRefund,Me as address,ae as adjustMoneyDeliveryMoney,se as adjustMoneyDialogTitle,ue as adjustMoneyDiscountMoney,ie as adjustMoneyGoodsInfo,me as adjustMoneyLabel,pe as adjustMoneyNum,le as adjustMoneyPrice,ye as adjustMoneySubTotal,de as adjustMoneyTips,he as adjustMoneyTotal,ce as adjustMoneyUnit,g as all,Ne as area,Re as batchEmptySelectedOrderTips,Ce as batchPrintElectronicSheet,m as buyInfo,je as city,E as closed,U as company,_ as companyPlaceholder,x as completed,G as confirmTakeDelivery,Pe as contacts,Te as contactsPlaceholder,o as createTime,Ue as default,B as delivery,ke as deliveryPackageNo,X as deliveryStatusName,h as deliveryType,L as deliveryTypePlaceholder,be as detailedAddress,D as editAddress,b as editPrice,Be as electronicSheetPrintOperation,Oe as electronicSheetPrintResult,Ie as electronicSheetPrintTitle,Ge as electronicSheetTemplate,ge as electronicSheetTemplatePlaceholder,T as endDate,te as exportOrderType,q as expressNumber,w as expressNumberPlaceholder,Y as fromType,J as goodsName,p as goodsPriceNumber,n as memberInfo,r as memberInfoPlaceholder,xe as notSupportPrintElectronicSheetTips,v as notes,A as notesDetail,K as num,j as offlinePayment,N as orderClose,Q as orderCloseTips,V as orderFinishTips,d as orderFrom,a as orderFromPlaceholder,l as orderGoods,z as orderGoodsIdsPlaceholder,W as orderGoodsPlaceholder,$ as orderInfo,y as orderMoney,e as orderNo,t as orderNoPlaceholder,s as orderStatus,c as orderStatusPlaceholder,oe as outTradeNo,i as payTime,Z as payType,S as piece,u as point,Ae as printRemark,Fe as printResultCode,Ee as printStatus,Le as printTicket,ve as province,R as receivedGoods,ee as refundStatusName,F as refunding,f as rightsProtection,De as selfPickupStores,I as sendOutGoods,C as shipped,ne as shopOrder,re as shopOrderGoods,P as startDate,O as toBePaid,k as toBeShipped,H as virtualDelivery};