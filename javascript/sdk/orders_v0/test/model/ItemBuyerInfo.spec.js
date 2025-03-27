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
    instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
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

  describe('ItemBuyerInfo', function() {
    it('should create an instance of ItemBuyerInfo', function() {
      // uncomment below and update the code to test ItemBuyerInfo
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.ItemBuyerInfo);
    });

    it('should have the property buyerCustomizedInfo (base name: "BuyerCustomizedInfo")', function() {
      // uncomment below and update the code to test the property buyerCustomizedInfo
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapPrice (base name: "GiftWrapPrice")', function() {
      // uncomment below and update the code to test the property giftWrapPrice
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapTax (base name: "GiftWrapTax")', function() {
      // uncomment below and update the code to test the property giftWrapTax
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftMessageText (base name: "GiftMessageText")', function() {
      // uncomment below and update the code to test the property giftMessageText
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapLevel (base name: "GiftWrapLevel")', function() {
      // uncomment below and update the code to test the property giftWrapLevel
      //var instance = new SellingPartnerApiForOrders.ItemBuyerInfo();
      //expect(instance).to.be();
    });

  });

}));
