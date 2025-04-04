/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
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
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new AmazonShippingApi.Rate();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(AmazonShippingApi.Rate.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Rate', function() {
    it('should create an instance of Rate', function() {
      expect(instance).to.be.a(AmazonShippingApi.Rate);
    });

    it('should have the property rateId', function() {
      // verify property exists
      expect(instance).to.have.property('rateId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.rateId = expectedValue;
      expect(instance.rateId).to.equal(expectedValue);
    });

    it('should have the property carrierId', function() {
      // verify property exists
      expect(instance).to.have.property('carrierId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.carrierId = expectedValue;
      expect(instance.carrierId).to.equal(expectedValue);
    });

    it('should have the property carrierName', function() {
      // verify property exists
      expect(instance).to.have.property('carrierName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.carrierName = expectedValue;
      expect(instance.carrierName).to.equal(expectedValue);
    });

    it('should have the property serviceId', function() {
      // verify property exists
      expect(instance).to.have.property('serviceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.serviceId = expectedValue;
      expect(instance.serviceId).to.equal(expectedValue);
    });

    it('should have the property serviceName', function() {
      // verify property exists
      expect(instance).to.have.property('serviceName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.serviceName = expectedValue;
      expect(instance.serviceName).to.equal(expectedValue);
    });

    it('should have the property billedWeight', function() {
      // verify property exists
      expect(instance).to.have.property('billedWeight');

      // set and verify value
      var expectedValue = generateMockData('Weight');
      instance.billedWeight = expectedValue;
      expect(instance.billedWeight).to.equal(expectedValue);
    });

    it('should have the property totalCharge', function() {
      // verify property exists
      expect(instance).to.have.property('totalCharge');

      // set and verify value
      var expectedValue = generateMockData('Currency');
      instance.totalCharge = expectedValue;
      expect(instance.totalCharge).to.equal(expectedValue);
    });

    it('should have the property promise', function() {
      // verify property exists
      expect(instance).to.have.property('promise');

      // set and verify value
      var expectedValue = generateMockData('Promise');
      instance.promise = expectedValue;
      expect(instance.promise).to.equal(expectedValue);
    });

    it('should have the property supportedDocumentSpecifications', function() {
      // verify property exists
      expect(instance).to.have.property('supportedDocumentSpecifications');

      // set and verify value
      var expectedValue = generateMockData('SupportedDocumentSpecification', true);
      instance.supportedDocumentSpecifications = expectedValue;
      expect(instance.supportedDocumentSpecifications).to.equal(expectedValue);
    });

    it('should have the property availableValueAddedServiceGroups', function() {
      // verify property exists
      expect(instance).to.have.property('availableValueAddedServiceGroups');

      // set and verify value
      var expectedValue = generateMockData('AvailableValueAddedServiceGroup', true);
      instance.availableValueAddedServiceGroups = expectedValue;
      expect(instance.availableValueAddedServiceGroups).to.equal(expectedValue);
    });

    it('should have the property requiresAdditionalInputs', function() {
      // verify property exists
      expect(instance).to.have.property('requiresAdditionalInputs');

      // set and verify value
      var expectedValue = generateMockData('Boolean');
      instance.requiresAdditionalInputs = expectedValue;
      expect(instance.requiresAdditionalInputs).to.equal(expectedValue);
    });

    it('should have the property rateItemList', function() {
      // verify property exists
      expect(instance).to.have.property('rateItemList');

      // set and verify value
      var expectedValue = generateMockData('RateItem', true);
      instance.rateItemList = expectedValue;
      expect(instance.rateItemList).to.equal(expectedValue);
    });

    it('should have the property paymentType', function() {
      // verify property exists
      expect(instance).to.have.property('paymentType');

      // set and verify value
      var expectedValue = generateMockData('PaymentType');
      instance.paymentType = expectedValue;
      expect(instance.paymentType).to.equal(expectedValue);
    });

    it('should have the property benefits', function() {
      // verify property exists
      expect(instance).to.have.property('benefits');

      // set and verify value
      var expectedValue = generateMockData('Benefits');
      instance.benefits = expectedValue;
      expect(instance.benefits).to.equal(expectedValue);
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
          const ModelClass = AmazonShippingApi[dataType];
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
