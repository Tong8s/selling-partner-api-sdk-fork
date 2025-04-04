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
    try{
     instance = new SellingPartnerApiForPricing.FeaturedOffer();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.FeaturedOffer.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FeaturedOffer', function() {
    it('should create an instance of FeaturedOffer', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.FeaturedOffer);
    });

    it('should have the property offerIdentifier', function() {
      // verify property exists
      expect(instance).to.have.property('offerIdentifier');

      // set and verify value
      var expectedValue = generateMockData('OfferIdentifier');
      instance.offerIdentifier = expectedValue;
      expect(instance.offerIdentifier).to.equal(expectedValue);
    });

    it('should have the property condition', function() {
      // verify property exists
      expect(instance).to.have.property('condition');

      // set and verify value
      var expectedValue = generateMockData('Condition');
      instance.condition = expectedValue;
      expect(instance.condition).to.equal(expectedValue);
    });

    it('should have the property price', function() {
      // verify property exists
      expect(instance).to.have.property('price');

      // set and verify value
      var expectedValue = generateMockData('Price');
      instance.price = expectedValue;
      expect(instance.price).to.equal(expectedValue);
    });

  });

  // Helper function to generate random test data
  function generateMockData(dataType, isArray = false) {
    if (!dataType) return {};

    // Handle array types
    if (isArray) {
      return [generateMockData(dataType), generateMockData(dataType)];
    }

    switch(dataType) {
      case 'String':
        return 'mock-' + Math.random().toString(36).substring(2, 10);
      case 'Number':
        return Math.floor(Math.random() * 1000);
      case 'Boolean':
        return Math.random() > 0.5;
      case 'Date':
        return new Date().toISOString();
      default:
        try {
          const ModelClass = SellingPartnerApiForPricing[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            return instance;
          }
        } catch (e) {
          console.error("Error creating instance of", dataType);
          return {};
        }
        return {};
    }
  }

}));
