/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApisForFulfillmentOutbound from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('UpdateFulfillmentOrderResponse', () => {
  it('should create an instance of UpdateFulfillmentOrderResponse', () => {
    expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderResponse);
  });

  it('should have the property errors', () => {
    // verify property exists
    expect(instance).to.have.property('errors');

    // set and verify value
    const expectedValue = generateMockData('Error', true);
    instance.errors = expectedValue;
    expect(instance.errors).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
