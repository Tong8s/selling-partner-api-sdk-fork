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
     instance = new AmazonShippingApi.Address();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(AmazonShippingApi.Address.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Address', function() {
    it('should create an instance of Address', function() {
      expect(instance).to.be.a(AmazonShippingApi.Address);
    });

    it('should have the property name', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.name = expectedValue;
      expect(instance.name).to.equal(expectedValue);
    });

    it('should have the property addressLine1', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine1');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine1 = expectedValue;
      expect(instance.addressLine1).to.equal(expectedValue);
    });

    it('should have the property addressLine2', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine2');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine2 = expectedValue;
      expect(instance.addressLine2).to.equal(expectedValue);
    });

    it('should have the property addressLine3', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine3');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine3 = expectedValue;
      expect(instance.addressLine3).to.equal(expectedValue);
    });

    it('should have the property companyName', function() {
      // verify property exists
      expect(instance).to.have.property('companyName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.companyName = expectedValue;
      expect(instance.companyName).to.equal(expectedValue);
    });

    it('should have the property stateOrRegion', function() {
      // verify property exists
      expect(instance).to.have.property('stateOrRegion');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.stateOrRegion = expectedValue;
      expect(instance.stateOrRegion).to.equal(expectedValue);
    });

    it('should have the property city', function() {
      // verify property exists
      expect(instance).to.have.property('city');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.city = expectedValue;
      expect(instance.city).to.equal(expectedValue);
    });

    it('should have the property countryCode', function() {
      // verify property exists
      expect(instance).to.have.property('countryCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.countryCode = expectedValue;
      expect(instance.countryCode).to.equal(expectedValue);
    });

    it('should have the property postalCode', function() {
      // verify property exists
      expect(instance).to.have.property('postalCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.postalCode = expectedValue;
      expect(instance.postalCode).to.equal(expectedValue);
    });

    it('should have the property email', function() {
      // verify property exists
      expect(instance).to.have.property('email');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.email = expectedValue;
      expect(instance.email).to.equal(expectedValue);
    });

    it('should have the property phoneNumber', function() {
      // verify property exists
      expect(instance).to.have.property('phoneNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.phoneNumber = expectedValue;
      expect(instance.phoneNumber).to.equal(expectedValue);
    });

    it('should have the property geocode', function() {
      // verify property exists
      expect(instance).to.have.property('geocode');

      // set and verify value
      var expectedValue = generateMockData('Geocode');
      instance.geocode = expectedValue;
      expect(instance.geocode).to.equal(expectedValue);
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
