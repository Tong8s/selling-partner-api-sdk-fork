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
    instance = new SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ShipmentSchedule', () => {
  it('should create an instance of ShipmentSchedule', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule);
  });

  it('should have the property estimatedDeliveryDateTime', () => {
    // verify property exists
    expect(instance).to.have.property('estimatedDeliveryDateTime');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.estimatedDeliveryDateTime = expectedValue;
    expect(instance.estimatedDeliveryDateTime).to.equal(expectedValue);
  });

  it('should have the property apptWindowStartDateTime', () => {
    // verify property exists
    expect(instance).to.have.property('apptWindowStartDateTime');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.apptWindowStartDateTime = expectedValue;
    expect(instance.apptWindowStartDateTime).to.equal(expectedValue);
  });

  it('should have the property apptWindowEndDateTime', () => {
    // verify property exists
    expect(instance).to.have.property('apptWindowEndDateTime');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.apptWindowEndDateTime = expectedValue;
    expect(instance.apptWindowEndDateTime).to.equal(expectedValue);
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
