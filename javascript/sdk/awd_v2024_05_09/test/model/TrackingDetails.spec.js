/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.TrackingDetails();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForAmazonWarehousingAndDistribution.TrackingDetails.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('TrackingDetails', function() {
    it('should create an instance of TrackingDetails', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.TrackingDetails);
    });

    it('should have the property carrierCode', function() {
      // verify property exists
      expect(instance).to.have.property('carrierCode');

      // set and verify value
      var expectedValue = generateMockData('CarrierCode');
      instance.carrierCode = expectedValue;
      expect(instance.carrierCode).to.equal(expectedValue);
    });

    it('should have the property bookingId', function() {
      // verify property exists
      expect(instance).to.have.property('bookingId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.bookingId = expectedValue;
      expect(instance.bookingId).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
