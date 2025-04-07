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

import expect from 'expect.js';
import * as SellingPartnerApiForDirectFulfillmentPayments from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('InvoiceItem', () => {
  it('should create an instance of InvoiceItem', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.InvoiceItem);
  });

  it('should have the property itemSequenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('itemSequenceNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.itemSequenceNumber = expectedValue;
    expect(instance.itemSequenceNumber).to.equal(expectedValue);
  });

  it('should have the property buyerProductIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('buyerProductIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.buyerProductIdentifier = expectedValue;
    expect(instance.buyerProductIdentifier).to.equal(expectedValue);
  });

  it('should have the property vendorProductIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('vendorProductIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.vendorProductIdentifier = expectedValue;
    expect(instance.vendorProductIdentifier).to.equal(expectedValue);
  });

  it('should have the property invoicedQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('invoicedQuantity');

    // set and verify value
    const expectedValue = generateMockData('ItemQuantity');
    instance.invoicedQuantity = expectedValue;
    expect(instance.invoicedQuantity).to.equal(expectedValue);
  });

  it('should have the property netCost', () => {
    // verify property exists
    expect(instance).to.have.property('netCost');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.netCost = expectedValue;
    expect(instance.netCost).to.equal(expectedValue);
  });

  it('should have the property purchaseOrderNumber', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.purchaseOrderNumber = expectedValue;
    expect(instance.purchaseOrderNumber).to.equal(expectedValue);
  });

  it('should have the property vendorOrderNumber', () => {
    // verify property exists
    expect(instance).to.have.property('vendorOrderNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.vendorOrderNumber = expectedValue;
    expect(instance.vendorOrderNumber).to.equal(expectedValue);
  });

  it('should have the property hsnCode', () => {
    // verify property exists
    expect(instance).to.have.property('hsnCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.hsnCode = expectedValue;
    expect(instance.hsnCode).to.equal(expectedValue);
  });

  it('should have the property taxDetails', () => {
    // verify property exists
    expect(instance).to.have.property('taxDetails');

    // set and verify value
    const expectedValue = generateMockData('TaxDetail', true);
    instance.taxDetails = expectedValue;
    expect(instance.taxDetails).to.equal(expectedValue);
  });

  it('should have the property chargeDetails', () => {
    // verify property exists
    expect(instance).to.have.property('chargeDetails');

    // set and verify value
    const expectedValue = generateMockData('ChargeDetails', true);
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
