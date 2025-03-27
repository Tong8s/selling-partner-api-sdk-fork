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
    instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
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

  describe('ShippingOfferingFilter', function() {
    it('should create an instance of ShippingOfferingFilter', function() {
      // uncomment below and update the code to test ShippingOfferingFilter
      //var instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter);
    });

    it('should have the property includePackingSlipWithLabel (base name: "IncludePackingSlipWithLabel")', function() {
      // uncomment below and update the code to test the property includePackingSlipWithLabel
      //var instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
      //expect(instance).to.be();
    });

    it('should have the property includeComplexShippingOptions (base name: "IncludeComplexShippingOptions")', function() {
      // uncomment below and update the code to test the property includeComplexShippingOptions
      //var instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
      //expect(instance).to.be();
    });

    it('should have the property carrierWillPickUp (base name: "CarrierWillPickUp")', function() {
      // uncomment below and update the code to test the property carrierWillPickUp
      //var instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
      //expect(instance).to.be();
    });

    it('should have the property deliveryExperience (base name: "DeliveryExperience")', function() {
      // uncomment below and update the code to test the property deliveryExperience
      //var instance = new SellingPartnerApiForMerchantFulfillment.ShippingOfferingFilter();
      //expect(instance).to.be();
    });

  });

}));
