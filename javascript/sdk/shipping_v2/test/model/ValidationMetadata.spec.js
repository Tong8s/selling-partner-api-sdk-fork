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
    instance = new AmazonShippingApi.ValidationMetadata();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.ValidationMetadata.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ValidationMetadata', () => {
  it('should create an instance of ValidationMetadata', () => {
    expect(instance).to.be.a(AmazonShippingApi.ValidationMetadata);
  });

  it('should have the property errorMessage', () => {
    // verify property exists
    expect(instance).to.have.property('errorMessage');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.errorMessage = expectedValue;
    expect(instance.errorMessage).to.equal(expectedValue);
  });

  it('should have the property validationStrategy', () => {
    // verify property exists
    expect(instance).to.have.property('validationStrategy');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.validationStrategy = expectedValue;
    expect(instance.validationStrategy).to.equal(expectedValue);
  });

  it('should have the property value', () => {
    // verify property exists
    expect(instance).to.have.property('value');

    // set and verify value
    const expectedValue = generateMockData('String');
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
