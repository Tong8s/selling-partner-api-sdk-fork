/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForOrders.Order();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.Order);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // uncomment below and update the code to test the property sellerOrderId
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property purchaseDate (base name: "PurchaseDate")', function() {
      // uncomment below and update the code to test the property purchaseDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdateDate (base name: "LastUpdateDate")', function() {
      // uncomment below and update the code to test the property lastUpdateDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "OrderStatus")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
      // uncomment below and update the code to test the property fulfillmentChannel
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property salesChannel (base name: "SalesChannel")', function() {
      // uncomment below and update the code to test the property salesChannel
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderChannel (base name: "OrderChannel")', function() {
      // uncomment below and update the code to test the property orderChannel
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property shipServiceLevel (base name: "ShipServiceLevel")', function() {
      // uncomment below and update the code to test the property shipServiceLevel
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "OrderTotal")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property numberOfItemsShipped (base name: "NumberOfItemsShipped")', function() {
      // uncomment below and update the code to test the property numberOfItemsShipped
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property numberOfItemsUnshipped (base name: "NumberOfItemsUnshipped")', function() {
      // uncomment below and update the code to test the property numberOfItemsUnshipped
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property paymentExecutionDetail (base name: "PaymentExecutionDetail")', function() {
      // uncomment below and update the code to test the property paymentExecutionDetail
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "PaymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodDetails (base name: "PaymentMethodDetails")', function() {
      // uncomment below and update the code to test the property paymentMethodDetails
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property shipmentServiceLevelCategory (base name: "ShipmentServiceLevelCategory")', function() {
      // uncomment below and update the code to test the property shipmentServiceLevelCategory
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property easyShipShipmentStatus (base name: "EasyShipShipmentStatus")', function() {
      // uncomment below and update the code to test the property easyShipShipmentStatus
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property cbaDisplayableShippingLabel (base name: "CbaDisplayableShippingLabel")', function() {
      // uncomment below and update the code to test the property cbaDisplayableShippingLabel
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "OrderType")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property earliestShipDate (base name: "EarliestShipDate")', function() {
      // uncomment below and update the code to test the property earliestShipDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property latestShipDate (base name: "LatestShipDate")', function() {
      // uncomment below and update the code to test the property latestShipDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property earliestDeliveryDate (base name: "EarliestDeliveryDate")', function() {
      // uncomment below and update the code to test the property earliestDeliveryDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property latestDeliveryDate (base name: "LatestDeliveryDate")', function() {
      // uncomment below and update the code to test the property latestDeliveryDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isBusinessOrder (base name: "IsBusinessOrder")', function() {
      // uncomment below and update the code to test the property isBusinessOrder
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isPrime (base name: "IsPrime")', function() {
      // uncomment below and update the code to test the property isPrime
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isPremiumOrder (base name: "IsPremiumOrder")', function() {
      // uncomment below and update the code to test the property isPremiumOrder
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isGlobalExpressEnabled (base name: "IsGlobalExpressEnabled")', function() {
      // uncomment below and update the code to test the property isGlobalExpressEnabled
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property replacedOrderId (base name: "ReplacedOrderId")', function() {
      // uncomment below and update the code to test the property replacedOrderId
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isReplacementOrder (base name: "IsReplacementOrder")', function() {
      // uncomment below and update the code to test the property isReplacementOrder
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property promiseResponseDueDate (base name: "PromiseResponseDueDate")', function() {
      // uncomment below and update the code to test the property promiseResponseDueDate
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isEstimatedShipDateSet (base name: "IsEstimatedShipDateSet")', function() {
      // uncomment below and update the code to test the property isEstimatedShipDateSet
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isSoldByAB (base name: "IsSoldByAB")', function() {
      // uncomment below and update the code to test the property isSoldByAB
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isIBA (base name: "IsIBA")', function() {
      // uncomment below and update the code to test the property isIBA
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property defaultShipFromLocationAddress (base name: "DefaultShipFromLocationAddress")', function() {
      // uncomment below and update the code to test the property defaultShipFromLocationAddress
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property buyerInvoicePreference (base name: "BuyerInvoicePreference")', function() {
      // uncomment below and update the code to test the property buyerInvoicePreference
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property buyerTaxInformation (base name: "BuyerTaxInformation")', function() {
      // uncomment below and update the code to test the property buyerTaxInformation
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentInstruction (base name: "FulfillmentInstruction")', function() {
      // uncomment below and update the code to test the property fulfillmentInstruction
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isISPU (base name: "IsISPU")', function() {
      // uncomment below and update the code to test the property isISPU
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property isAccessPointOrder (base name: "IsAccessPointOrder")', function() {
      // uncomment below and update the code to test the property isAccessPointOrder
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceTaxInfo (base name: "MarketplaceTaxInfo")', function() {
      // uncomment below and update the code to test the property marketplaceTaxInfo
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property sellerDisplayName (base name: "SellerDisplayName")', function() {
      // uncomment below and update the code to test the property sellerDisplayName
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "ShippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property buyerInfo (base name: "BuyerInfo")', function() {
      // uncomment below and update the code to test the property buyerInfo
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property automatedShippingSettings (base name: "AutomatedShippingSettings")', function() {
      // uncomment below and update the code to test the property automatedShippingSettings
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property hasRegulatedItems (base name: "HasRegulatedItems")', function() {
      // uncomment below and update the code to test the property hasRegulatedItems
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

    it('should have the property electronicInvoiceStatus (base name: "ElectronicInvoiceStatus")', function() {
      // uncomment below and update the code to test the property electronicInvoiceStatus
      //var instance = new SellingPartnerApiForOrders.Order();
      //expect(instance).to.be();
    });

  });

}));
