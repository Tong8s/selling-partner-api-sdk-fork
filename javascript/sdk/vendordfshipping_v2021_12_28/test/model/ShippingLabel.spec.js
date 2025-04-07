/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForDirectFulfillmentShipping from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentShipping.ShippingLabel();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.ShippingLabel.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ShippingLabel', () => {
  it('should create an instance of ShippingLabel', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShippingLabel);
  });

  it('should have the property purchaseOrderNumber', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.purchaseOrderNumber = expectedValue;
    expect(instance.purchaseOrderNumber).to.equal(expectedValue);
  });

  it('should have the property sellingParty', () => {
    // verify property exists
    expect(instance).to.have.property('sellingParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.sellingParty = expectedValue;
    expect(instance.sellingParty).to.equal(expectedValue);
  });

  it('should have the property shipFromParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipFromParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipFromParty = expectedValue;
    expect(instance.shipFromParty).to.equal(expectedValue);
  });

  it('should have the property labelFormat', () => {
    // verify property exists
    expect(instance).to.have.property('labelFormat');

    // set and verify value
    const expectedValue = ['PNG', 'ZPL', ][0];
    instance.labelFormat = expectedValue;
    expect(instance.labelFormat).to.equal(expectedValue);
  });

  it('should have the property labelData', () => {
    // verify property exists
    expect(instance).to.have.property('labelData');

    // set and verify value
    const expectedValue = generateMockData('LabelData', true);
    instance.labelData = expectedValue;
    expect(instance.labelData).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentShipping[dataType];
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
