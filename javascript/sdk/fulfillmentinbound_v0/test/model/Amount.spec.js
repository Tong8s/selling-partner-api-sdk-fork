/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForFulfillmentInbound from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFulfillmentInbound.Amount();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFulfillmentInbound.Amount.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Amount', () => {
  it('should create an instance of Amount', () => {
    expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.Amount);
  });

  it('should have the property currencyCode', () => {
    // verify property exists
    expect(instance).to.have.property('currencyCode');

    // set and verify value
    const expectedValue = generateMockData('CurrencyCode');
    instance.currencyCode = expectedValue;
    expect(instance.currencyCode).to.equal(expectedValue);
  });

  it('should have the property value', () => {
    // verify property exists
    expect(instance).to.have.property('value');

    // set and verify value
    const expectedValue = generateMockData('Number');
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
        const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
