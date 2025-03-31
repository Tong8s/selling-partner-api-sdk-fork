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

  describe('BuyBoxPriceType', function() {
    it('should create an instance of BuyBoxPriceType', function() {
      // uncomment below and update the code to test BuyBoxPriceType
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be.a(SellingPartnerApiForPricing.BuyBoxPriceType);
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property offerType (base name: "offerType")', function() {
      // uncomment below and update the code to test the property offerType
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property quantityTier (base name: "quantityTier")', function() {
      // uncomment below and update the code to test the property quantityTier
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property quantityDiscountType (base name: "quantityDiscountType")', function() {
      // uncomment below and update the code to test the property quantityDiscountType
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property landedPrice (base name: "LandedPrice")', function() {
      // uncomment below and update the code to test the property landedPrice
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property listingPrice (base name: "ListingPrice")', function() {
      // uncomment below and update the code to test the property listingPrice
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "Shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "Points")', function() {
      // uncomment below and update the code to test the property points
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

    it('should have the property sellerId (base name: "sellerId")', function() {
      // uncomment below and update the code to test the property sellerId
      //var instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
      //expect(instance).to.be();
    });

  });

}));