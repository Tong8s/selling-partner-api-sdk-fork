/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
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

  describe('FeesEstimateByIdRequest', function() {
    it('should create an instance of FeesEstimateByIdRequest', function() {
      // uncomment below and update the code to test FeesEstimateByIdRequest
      //var instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
      //expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateByIdRequest);
    });

    it('should have the property feesEstimateRequest (base name: "FeesEstimateRequest")', function() {
      // uncomment below and update the code to test the property feesEstimateRequest
      //var instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property idType (base name: "IdType")', function() {
      // uncomment below and update the code to test the property idType
      //var instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property idValue (base name: "IdValue")', function() {
      // uncomment below and update the code to test the property idValue
      //var instance = new SellingPartnerApiForProductFees.FeesEstimateByIdRequest();
      //expect(instance).to.be();
    });

  });

}));
