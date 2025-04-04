/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
    factory(root.expect, root.TheSellingPartnerApiForInvoices);
  }
}(this, function(expect, TheSellingPartnerApiForInvoices) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForInvoices.AttributeOption();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForInvoices.AttributeOption.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('AttributeOption', function() {
    it('should create an instance of AttributeOption', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForInvoices.AttributeOption);
    });

    it('should have the property description', function() {
      // verify property exists
      expect(instance).to.have.property('description');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.description = expectedValue;
      expect(instance.description).to.equal(expectedValue);
    });

    it('should have the property value', function() {
      // verify property exists
      expect(instance).to.have.property('value');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.value = expectedValue;
      expect(instance.value).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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
