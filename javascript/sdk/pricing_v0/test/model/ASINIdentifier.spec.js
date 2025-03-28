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
    instance = new SellingPartnerApiForPricing.ASINIdentifier();
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

  describe('ASINIdentifier', function() {
    it('should create an instance of ASINIdentifier', function() {
      // uncomment below and update the code to test ASINIdentifier
      //var instance = new SellingPartnerApiForPricing.ASINIdentifier();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.ASINIdentifier);
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForPricing.ASINIdentifier();
      //expect(instance).to.be();
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForPricing.ASINIdentifier();
      //expect(instance).to.be();
    });

  });

}));
