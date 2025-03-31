/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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

  describe('GetFeaturedOfferExpectedPriceBatchRequest', function() {
    it('should create an instance of GetFeaturedOfferExpectedPriceBatchRequest', function() {
      // uncomment below and update the code to test GetFeaturedOfferExpectedPriceBatchRequest
      //var instance = new SellingPartnerApiForPricing.GetFeaturedOfferExpectedPriceBatchRequest();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.GetFeaturedOfferExpectedPriceBatchRequest);
    });

    it('should have the property requests (base name: "requests")', function() {
      // uncomment below and update the code to test the property requests
      //var instance = new SellingPartnerApiForPricing.GetFeaturedOfferExpectedPriceBatchRequest();
      //expect(instance).to.be();
    });

  });

}));