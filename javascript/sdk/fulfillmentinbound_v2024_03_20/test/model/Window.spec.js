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
     instance = new TheSellingPartnerApiForFbaInboundOperations.Window();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.Window.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Window', function() {
    it('should create an instance of Window', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Window);
    });

    it('should have the property editableUntil', function() {
      // verify property exists
      expect(instance).to.have.property('editableUntil');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.editableUntil = expectedValue;
      expect(instance.editableUntil).to.equal(expectedValue);
    });

    it('should have the property end', function() {
      // verify property exists
      expect(instance).to.have.property('end');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.end = expectedValue;
      expect(instance.end).to.equal(expectedValue);
    });

    it('should have the property start', function() {
      // verify property exists
      expect(instance).to.have.property('start');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.start = expectedValue;
      expect(instance.start).to.equal(expectedValue);
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
