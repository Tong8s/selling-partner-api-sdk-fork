/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import * as SellingPartnerApiForRetailProcurementOrders from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderAcknowledgementItem', () => {
  it('should create an instance of OrderAcknowledgementItem', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem);
  });

  it('should have the property itemSequenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('itemSequenceNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.itemSequenceNumber = expectedValue;
    expect(instance.itemSequenceNumber).to.equal(expectedValue);
  });

  it('should have the property amazonProductIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('amazonProductIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.amazonProductIdentifier = expectedValue;
    expect(instance.amazonProductIdentifier).to.equal(expectedValue);
  });

  it('should have the property vendorProductIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('vendorProductIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.vendorProductIdentifier = expectedValue;
    expect(instance.vendorProductIdentifier).to.equal(expectedValue);
  });

  it('should have the property orderedQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('orderedQuantity');

    // set and verify value
    const expectedValue = generateMockData('ItemQuantity');
    instance.orderedQuantity = expectedValue;
    expect(instance.orderedQuantity).to.equal(expectedValue);
  });

  it('should have the property netCost', () => {
    // verify property exists
    expect(instance).to.have.property('netCost');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.netCost = expectedValue;
    expect(instance.netCost).to.equal(expectedValue);
  });

  it('should have the property listPrice', () => {
    // verify property exists
    expect(instance).to.have.property('listPrice');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.listPrice = expectedValue;
    expect(instance.listPrice).to.equal(expectedValue);
  });

  it('should have the property discountMultiplier', () => {
    // verify property exists
    expect(instance).to.have.property('discountMultiplier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.discountMultiplier = expectedValue;
    expect(instance.discountMultiplier).to.equal(expectedValue);
  });

  it('should have the property itemAcknowledgements', () => {
    // verify property exists
    expect(instance).to.have.property('itemAcknowledgements');

    // set and verify value
    const expectedValue = generateMockData('OrderItemAcknowledgement', true);
    instance.itemAcknowledgements = expectedValue;
    expect(instance.itemAcknowledgements).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
