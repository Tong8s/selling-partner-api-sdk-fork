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
    try{
     instance = new SellingPartnerApiForPricing.BuyBoxPriceType();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.BuyBoxPriceType.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('BuyBoxPriceType', function() {
    it('should create an instance of BuyBoxPriceType', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.BuyBoxPriceType);
    });

    it('should have the property condition', function() {
      // verify property exists
      expect(instance).to.have.property('condition');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.condition = expectedValue;
      expect(instance.condition).to.equal(expectedValue);
    });

    it('should have the property offerType', function() {
      // verify property exists
      expect(instance).to.have.property('offerType');

      // set and verify value
      var expectedValue = generateMockData('OfferCustomerType');
      instance.offerType = expectedValue;
      expect(instance.offerType).to.equal(expectedValue);
    });

    it('should have the property quantityTier', function() {
      // verify property exists
      expect(instance).to.have.property('quantityTier');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.quantityTier = expectedValue;
      expect(instance.quantityTier).to.equal(expectedValue);
    });

    it('should have the property quantityDiscountType', function() {
      // verify property exists
      expect(instance).to.have.property('quantityDiscountType');

      // set and verify value
      var expectedValue = generateMockData('QuantityDiscountType');
      instance.quantityDiscountType = expectedValue;
      expect(instance.quantityDiscountType).to.equal(expectedValue);
    });

    it('should have the property landedPrice', function() {
      // verify property exists
      expect(instance).to.have.property('landedPrice');

      // set and verify value
      var expectedValue = generateMockData('MoneyType');
      instance.landedPrice = expectedValue;
      expect(instance.landedPrice).to.equal(expectedValue);
    });

    it('should have the property listingPrice', function() {
      // verify property exists
      expect(instance).to.have.property('listingPrice');

      // set and verify value
      var expectedValue = generateMockData('MoneyType');
      instance.listingPrice = expectedValue;
      expect(instance.listingPrice).to.equal(expectedValue);
    });

    it('should have the property shipping', function() {
      // verify property exists
      expect(instance).to.have.property('shipping');

      // set and verify value
      var expectedValue = generateMockData('MoneyType');
      instance.shipping = expectedValue;
      expect(instance.shipping).to.equal(expectedValue);
    });

    it('should have the property points', function() {
      // verify property exists
      expect(instance).to.have.property('points');

      // set and verify value
      var expectedValue = generateMockData('Points');
      instance.points = expectedValue;
      expect(instance.points).to.equal(expectedValue);
    });

    it('should have the property sellerId', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerId = expectedValue;
      expect(instance.sellerId).to.equal(expectedValue);
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
