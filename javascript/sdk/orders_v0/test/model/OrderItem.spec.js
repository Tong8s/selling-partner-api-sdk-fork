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

  describe('OrderItem', function() {
    it('should create an instance of OrderItem', function() {
      // uncomment below and update the code to test OrderItem
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.OrderItem);
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // uncomment below and update the code to test the property sellerSKU
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property orderItemId (base name: "OrderItemId")', function() {
      // uncomment below and update the code to test the property orderItemId
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property associatedItems (base name: "AssociatedItems")', function() {
      // uncomment below and update the code to test the property associatedItems
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "Title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property quantityOrdered (base name: "QuantityOrdered")', function() {
      // uncomment below and update the code to test the property quantityOrdered
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property quantityShipped (base name: "QuantityShipped")', function() {
      // uncomment below and update the code to test the property quantityShipped
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property productInfo (base name: "ProductInfo")', function() {
      // uncomment below and update the code to test the property productInfo
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property pointsGranted (base name: "PointsGranted")', function() {
      // uncomment below and update the code to test the property pointsGranted
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property itemPrice (base name: "ItemPrice")', function() {
      // uncomment below and update the code to test the property itemPrice
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingPrice (base name: "ShippingPrice")', function() {
      // uncomment below and update the code to test the property shippingPrice
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property itemTax (base name: "ItemTax")', function() {
      // uncomment below and update the code to test the property itemTax
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingTax (base name: "ShippingTax")', function() {
      // uncomment below and update the code to test the property shippingTax
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingDiscount (base name: "ShippingDiscount")', function() {
      // uncomment below and update the code to test the property shippingDiscount
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingDiscountTax (base name: "ShippingDiscountTax")', function() {
      // uncomment below and update the code to test the property shippingDiscountTax
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property promotionDiscount (base name: "PromotionDiscount")', function() {
      // uncomment below and update the code to test the property promotionDiscount
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property promotionDiscountTax (base name: "PromotionDiscountTax")', function() {
      // uncomment below and update the code to test the property promotionDiscountTax
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property promotionIds (base name: "PromotionIds")', function() {
      // uncomment below and update the code to test the property promotionIds
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property cODFee (base name: "CODFee")', function() {
      // uncomment below and update the code to test the property cODFee
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property cODFeeDiscount (base name: "CODFeeDiscount")', function() {
      // uncomment below and update the code to test the property cODFeeDiscount
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property isGift (base name: "IsGift")', function() {
      // uncomment below and update the code to test the property isGift
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property conditionNote (base name: "ConditionNote")', function() {
      // uncomment below and update the code to test the property conditionNote
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property conditionId (base name: "ConditionId")', function() {
      // uncomment below and update the code to test the property conditionId
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property conditionSubtypeId (base name: "ConditionSubtypeId")', function() {
      // uncomment below and update the code to test the property conditionSubtypeId
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property scheduledDeliveryStartDate (base name: "ScheduledDeliveryStartDate")', function() {
      // uncomment below and update the code to test the property scheduledDeliveryStartDate
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property scheduledDeliveryEndDate (base name: "ScheduledDeliveryEndDate")', function() {
      // uncomment below and update the code to test the property scheduledDeliveryEndDate
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property priceDesignation (base name: "PriceDesignation")', function() {
      // uncomment below and update the code to test the property priceDesignation
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property taxCollection (base name: "TaxCollection")', function() {
      // uncomment below and update the code to test the property taxCollection
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property serialNumberRequired (base name: "SerialNumberRequired")', function() {
      // uncomment below and update the code to test the property serialNumberRequired
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property isTransparency (base name: "IsTransparency")', function() {
      // uncomment below and update the code to test the property isTransparency
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property iossNumber (base name: "IossNumber")', function() {
      // uncomment below and update the code to test the property iossNumber
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property storeChainStoreId (base name: "StoreChainStoreId")', function() {
      // uncomment below and update the code to test the property storeChainStoreId
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property deemedResellerCategory (base name: "DeemedResellerCategory")', function() {
      // uncomment below and update the code to test the property deemedResellerCategory
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property buyerInfo (base name: "BuyerInfo")', function() {
      // uncomment below and update the code to test the property buyerInfo
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property buyerRequestedCancel (base name: "BuyerRequestedCancel")', function() {
      // uncomment below and update the code to test the property buyerRequestedCancel
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property serialNumbers (base name: "SerialNumbers")', function() {
      // uncomment below and update the code to test the property serialNumbers
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property substitutionPreferences (base name: "SubstitutionPreferences")', function() {
      // uncomment below and update the code to test the property substitutionPreferences
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property measurement (base name: "Measurement")', function() {
      // uncomment below and update the code to test the property measurement
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property shippingConstraints (base name: "ShippingConstraints")', function() {
      // uncomment below and update the code to test the property shippingConstraints
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property amazonPrograms (base name: "AmazonPrograms")', function() {
      // uncomment below and update the code to test the property amazonPrograms
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

    it('should have the property exportInfo (base name: "ExportInfo")', function() {
      // uncomment below and update the code to test the property exportInfo
      //var instance = new SellingPartnerApiForOrders.OrderItem();
      //expect(instance).to.be();
    });

  });

}));