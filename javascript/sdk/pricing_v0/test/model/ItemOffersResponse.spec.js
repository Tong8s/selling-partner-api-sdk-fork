/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import * as SellingPartnerApiForPricing from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.ItemOffersResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.ItemOffersResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ItemOffersResponse', () => {
  it('should create an instance of ItemOffersResponse', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.ItemOffersResponse);
  });

  it('should have the property headers', () => {
    // verify property exists
    expect(instance).to.have.property('headers');

    // set and verify value
    const expectedValue = generateMockData('HttpResponseHeaders');
    instance.headers = expectedValue;
    expect(instance.headers).to.equal(expectedValue);
  });

  it('should have the property status', () => {
    // verify property exists
    expect(instance).to.have.property('status');

    // set and verify value
    const expectedValue = generateMockData('GetOffersHttpStatusLine');
    instance.status = expectedValue;
    expect(instance.status).to.equal(expectedValue);
  });

  it('should have the property body', () => {
    // verify property exists
    expect(instance).to.have.property('body');

    // set and verify value
    const expectedValue = generateMockData('GetOffersResponse');
    instance.body = expectedValue;
    expect(instance.body).to.equal(expectedValue);
  });

  it('should have the property request', () => {
    // verify property exists
    expect(instance).to.have.property('request');

    // set and verify value
    const expectedValue = generateMockData('ItemOffersRequestParams');
    instance.request = expectedValue;
    expect(instance.request).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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
