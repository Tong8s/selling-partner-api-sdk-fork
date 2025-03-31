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

  describe('OrderBuyerInfo', function() {
    it('should create an instance of OrderBuyerInfo', function() {
      // uncomment below and update the code to test OrderBuyerInfo
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.OrderBuyerInfo);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property buyerEmail (base name: "BuyerEmail")', function() {
      // uncomment below and update the code to test the property buyerEmail
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property buyerName (base name: "BuyerName")', function() {
      // uncomment below and update the code to test the property buyerName
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property buyerCounty (base name: "BuyerCounty")', function() {
      // uncomment below and update the code to test the property buyerCounty
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property buyerTaxInfo (base name: "BuyerTaxInfo")', function() {
      // uncomment below and update the code to test the property buyerTaxInfo
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderNumber (base name: "PurchaseOrderNumber")', function() {
      // uncomment below and update the code to test the property purchaseOrderNumber
      //var instance = new SellingPartnerApiForOrders.OrderBuyerInfo();
      //expect(instance).to.be();
    });

  });

}));