/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.PayWithAmazonEvent.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PayWithAmazonEvent', function() {
    it('should create an instance of PayWithAmazonEvent', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEvent);
    });

    it('should have the property sellerOrderId', function() {
      // verify property exists
      expect(instance).to.have.property('sellerOrderId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerOrderId = expectedValue;
      expect(instance.sellerOrderId).to.equal(expectedValue);
    });

    it('should have the property transactionPostedDate', function() {
      // verify property exists
      expect(instance).to.have.property('transactionPostedDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.transactionPostedDate = expectedValue;
      expect(instance.transactionPostedDate).to.equal(expectedValue);
    });

    it('should have the property businessObjectType', function() {
      // verify property exists
      expect(instance).to.have.property('businessObjectType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.businessObjectType = expectedValue;
      expect(instance.businessObjectType).to.equal(expectedValue);
    });

    it('should have the property salesChannel', function() {
      // verify property exists
      expect(instance).to.have.property('salesChannel');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.salesChannel = expectedValue;
      expect(instance.salesChannel).to.equal(expectedValue);
    });

    it('should have the property charge', function() {
      // verify property exists
      expect(instance).to.have.property('charge');

      // set and verify value
      var expectedValue = generateMockData('ChargeComponent');
      instance.charge = expectedValue;
      expect(instance.charge).to.equal(expectedValue);
    });

    it('should have the property feeList', function() {
      // verify property exists
      expect(instance).to.have.property('feeList');

      // set and verify value
      var expectedValue = generateMockData('FeeComponent', true);
      instance.feeList = expectedValue;
      expect(instance.feeList).to.equal(expectedValue);
    });

    it('should have the property paymentAmountType', function() {
      // verify property exists
      expect(instance).to.have.property('paymentAmountType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.paymentAmountType = expectedValue;
      expect(instance.paymentAmountType).to.equal(expectedValue);
    });

    it('should have the property amountDescription', function() {
      // verify property exists
      expect(instance).to.have.property('amountDescription');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.amountDescription = expectedValue;
      expect(instance.amountDescription).to.equal(expectedValue);
    });

    it('should have the property fulfillmentChannel', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentChannel');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.fulfillmentChannel = expectedValue;
      expect(instance.fulfillmentChannel).to.equal(expectedValue);
    });

    it('should have the property storeName', function() {
      // verify property exists
      expect(instance).to.have.property('storeName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.storeName = expectedValue;
      expect(instance.storeName).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForFinances[dataType];
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
