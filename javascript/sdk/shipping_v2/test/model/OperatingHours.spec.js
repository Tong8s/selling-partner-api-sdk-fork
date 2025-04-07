/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as AmazonShippingApi from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new AmazonShippingApi.OperatingHours();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.OperatingHours.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OperatingHours', () => {
  it('should create an instance of OperatingHours', () => {
    expect(instance).to.be.a(AmazonShippingApi.OperatingHours);
  });

  it('should have the property closingTime', () => {
    // verify property exists
    expect(instance).to.have.property('closingTime');

    // set and verify value
    const expectedValue = generateMockData('TimeOfDay');
    instance.closingTime = expectedValue;
    expect(instance.closingTime).to.equal(expectedValue);
  });

  it('should have the property openingTime', () => {
    // verify property exists
    expect(instance).to.have.property('openingTime');

    // set and verify value
    const expectedValue = generateMockData('TimeOfDay');
    instance.openingTime = expectedValue;
    expect(instance.openingTime).to.equal(expectedValue);
  });

  it('should have the property midDayClosures', () => {
    // verify property exists
    expect(instance).to.have.property('midDayClosures');

    // set and verify value
    const expectedValue = generateMockData('TimeOfDay', true);
    instance.midDayClosures = expectedValue;
    expect(instance.midDayClosures).to.equal(expectedValue);
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
        const ModelClass = AmazonShippingApi[dataType];
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
