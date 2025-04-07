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
    instance = new AmazonShippingApi.ChannelDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.ChannelDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ChannelDetails', () => {
  it('should create an instance of ChannelDetails', () => {
    expect(instance).to.be.a(AmazonShippingApi.ChannelDetails);
  });

  it('should have the property channelType', () => {
    // verify property exists
    expect(instance).to.have.property('channelType');

    // set and verify value
    const expectedValue = generateMockData('ChannelType');
    instance.channelType = expectedValue;
    expect(instance.channelType).to.equal(expectedValue);
  });

  it('should have the property amazonOrderDetails', () => {
    // verify property exists
    expect(instance).to.have.property('amazonOrderDetails');

    // set and verify value
    const expectedValue = generateMockData('AmazonOrderDetails');
    instance.amazonOrderDetails = expectedValue;
    expect(instance.amazonOrderDetails).to.equal(expectedValue);
  });

  it('should have the property amazonShipmentDetails', () => {
    // verify property exists
    expect(instance).to.have.property('amazonShipmentDetails');

    // set and verify value
    const expectedValue = generateMockData('AmazonShipmentDetails');
    instance.amazonShipmentDetails = expectedValue;
    expect(instance.amazonShipmentDetails).to.equal(expectedValue);
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
