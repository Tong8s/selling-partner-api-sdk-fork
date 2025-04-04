/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('InvoiceItem', function() {
    it('should create an instance of InvoiceItem', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem);
    });

    it('should have the property itemSequenceNumber', function() {
      // verify property exists
      expect(instance).to.have.property('itemSequenceNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.itemSequenceNumber = expectedValue;
      expect(instance.itemSequenceNumber).to.equal(expectedValue);
    });

    it('should have the property buyerProductIdentifier', function() {
      // verify property exists
      expect(instance).to.have.property('buyerProductIdentifier');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.buyerProductIdentifier = expectedValue;
      expect(instance.buyerProductIdentifier).to.equal(expectedValue);
    });

    it('should have the property vendorProductIdentifier', function() {
      // verify property exists
      expect(instance).to.have.property('vendorProductIdentifier');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.vendorProductIdentifier = expectedValue;
      expect(instance.vendorProductIdentifier).to.equal(expectedValue);
    });

    it('should have the property invoicedQuantity', function() {
      // verify property exists
      expect(instance).to.have.property('invoicedQuantity');

      // set and verify value
      var expectedValue = generateMockData('ItemQuantity');
      instance.invoicedQuantity = expectedValue;
      expect(instance.invoicedQuantity).to.equal(expectedValue);
    });

    it('should have the property netCost', function() {
      // verify property exists
      expect(instance).to.have.property('netCost');

      // set and verify value
      var expectedValue = generateMockData('Money');
      instance.netCost = expectedValue;
      expect(instance.netCost).to.equal(expectedValue);
    });

    it('should have the property purchaseOrderNumber', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrderNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.purchaseOrderNumber = expectedValue;
      expect(instance.purchaseOrderNumber).to.equal(expectedValue);
    });

    it('should have the property vendorOrderNumber', function() {
      // verify property exists
      expect(instance).to.have.property('vendorOrderNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.vendorOrderNumber = expectedValue;
      expect(instance.vendorOrderNumber).to.equal(expectedValue);
    });

    it('should have the property hsnCode', function() {
      // verify property exists
      expect(instance).to.have.property('hsnCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.hsnCode = expectedValue;
      expect(instance.hsnCode).to.equal(expectedValue);
    });

    it('should have the property taxDetails', function() {
      // verify property exists
      expect(instance).to.have.property('taxDetails');

      // set and verify value
      var expectedValue = generateMockData('TaxDetail', true);
      instance.taxDetails = expectedValue;
      expect(instance.taxDetails).to.equal(expectedValue);
    });

    it('should have the property chargeDetails', function() {
      // verify property exists
      expect(instance).to.have.property('chargeDetails');

      // set and verify value
      var expectedValue = generateMockData('ChargeDetails', true);
      instance.chargeDetails = expectedValue;
      expect(instance.chargeDetails).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentPayments[dataType];
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
