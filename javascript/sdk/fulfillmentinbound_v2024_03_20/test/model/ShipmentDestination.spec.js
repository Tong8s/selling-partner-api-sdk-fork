/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForFbaInboundOperations.ShipmentDestination();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.ShipmentDestination.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentDestination', function() {
    it('should create an instance of ShipmentDestination', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.ShipmentDestination);
    });

    it('should have the property address', function() {
      // verify property exists
      expect(instance).to.have.property('address');

      // set and verify value
      var expectedValue = generateMockData('Address');
      instance.address = expectedValue;
      expect(instance.address).to.equal(expectedValue);
    });

    it('should have the property destinationType', function() {
      // verify property exists
      expect(instance).to.have.property('destinationType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.destinationType = expectedValue;
      expect(instance.destinationType).to.equal(expectedValue);
    });

    it('should have the property warehouseId', function() {
      // verify property exists
      expect(instance).to.have.property('warehouseId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.warehouseId = expectedValue;
      expect(instance.warehouseId).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
