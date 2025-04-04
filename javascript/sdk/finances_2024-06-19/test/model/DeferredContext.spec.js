/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    factory(root.expect, root.TheSellingPartnerApiForFinances);
  }
}(this, function(expect, TheSellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForFinances.DeferredContext();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFinances.DeferredContext.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('DeferredContext', function() {
    it('should create an instance of DeferredContext', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFinances.DeferredContext);
    });

    it('should have the property deferralReason', function() {
      // verify property exists
      expect(instance).to.have.property('deferralReason');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.deferralReason = expectedValue;
      expect(instance.deferralReason).to.equal(expectedValue);
    });

    it('should have the property maturityDate', function() {
      // verify property exists
      expect(instance).to.have.property('maturityDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.maturityDate = expectedValue;
      expect(instance.maturityDate).to.equal(expectedValue);
    });

    it('should have the property deferralStatus', function() {
      // verify property exists
      expect(instance).to.have.property('deferralStatus');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.deferralStatus = expectedValue;
      expect(instance.deferralStatus).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForFinances[dataType];
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
