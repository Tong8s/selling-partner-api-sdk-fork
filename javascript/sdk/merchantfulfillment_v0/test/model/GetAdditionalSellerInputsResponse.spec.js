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

  describe('GetAdditionalSellerInputsResponse', function() {
    it('should create an instance of GetAdditionalSellerInputsResponse', function() {
      // uncomment below and update the code to test GetAdditionalSellerInputsResponse
      //var instance = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse);
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse();
      //expect(instance).to.be();
    });

  });

}));