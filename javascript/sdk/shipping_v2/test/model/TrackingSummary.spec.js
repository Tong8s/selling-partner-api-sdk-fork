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
    instance = new AmazonShippingApi.TrackingSummary();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.TrackingSummary.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('TrackingSummary', () => {
  it('should create an instance of TrackingSummary', () => {
    expect(instance).to.be.a(AmazonShippingApi.TrackingSummary);
  });

  it('should have the property status', () => {
    // verify property exists
    expect(instance).to.have.property('status');

    // set and verify value
    const expectedValue = generateMockData('Status');
    instance.status = expectedValue;
    expect(instance.status).to.equal(expectedValue);
  });

  it('should have the property trackingDetailCodes', () => {
    // verify property exists
    expect(instance).to.have.property('trackingDetailCodes');

    // set and verify value
    const expectedValue = generateMockData('TrackingDetailCodes');
    instance.trackingDetailCodes = expectedValue;
    expect(instance.trackingDetailCodes).to.equal(expectedValue);
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
