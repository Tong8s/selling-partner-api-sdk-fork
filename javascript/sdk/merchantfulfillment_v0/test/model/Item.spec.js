/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForMerchantFulfillment.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Item);
    });

    it('should have the property orderItemId (base name: "OrderItemId")', function() {
      // uncomment below and update the code to test the property orderItemId
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "Quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemWeight (base name: "ItemWeight")', function() {
      // uncomment below and update the code to test the property itemWeight
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemDescription (base name: "ItemDescription")', function() {
      // uncomment below and update the code to test the property itemDescription
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property transparencyCodeList (base name: "TransparencyCodeList")', function() {
      // uncomment below and update the code to test the property transparencyCodeList
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property itemLevelSellerInputsList (base name: "ItemLevelSellerInputsList")', function() {
      // uncomment below and update the code to test the property itemLevelSellerInputsList
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property liquidVolume (base name: "LiquidVolume")', function() {
      // uncomment below and update the code to test the property liquidVolume
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property isHazmat (base name: "IsHazmat")', function() {
      // uncomment below and update the code to test the property isHazmat
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

    it('should have the property dangerousGoodsDetails (base name: "DangerousGoodsDetails")', function() {
      // uncomment below and update the code to test the property dangerousGoodsDetails
      //var instance = new SellingPartnerApiForMerchantFulfillment.Item();
      //expect(instance).to.be();
    });

  });

}));
