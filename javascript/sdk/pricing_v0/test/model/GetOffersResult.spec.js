/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForPricing.GetOffersResult();
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

  describe('GetOffersResult', function() {
    it('should create an instance of GetOffersResult', function() {
      // uncomment below and update the code to test GetOffersResult
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.GetOffersResult);
    });

    it('should have the property marketplaceID (base name: "MarketplaceID")', function() {
      // uncomment below and update the code to test the property marketplaceID
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property SKU (base name: "SKU")', function() {
      // uncomment below and update the code to test the property SKU
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property itemCondition (base name: "ItemCondition")', function() {
      // uncomment below and update the code to test the property itemCondition
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "Identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "Summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

    it('should have the property offers (base name: "Offers")', function() {
      // uncomment below and update the code to test the property offers
      //var instance = new SellingPartnerApiForPricing.GetOffersResult();
      //expect(instance).to.be();
    });

  });

}));
