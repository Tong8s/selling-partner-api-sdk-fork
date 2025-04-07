/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForListingsItems from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForListingsItems.PatchOperation();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForListingsItems.PatchOperation.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PatchOperation', () => {
  it('should create an instance of PatchOperation', () => {
    expect(instance).to.be.a(SellingPartnerApiForListingsItems.PatchOperation);
  });

  it('should have the property op', () => {
    // verify property exists
    expect(instance).to.have.property('op');

    // set and verify value
    const expectedValue = ['add', 'replace', 'delete', ][0];
    instance.op = expectedValue;
    expect(instance.op).to.equal(expectedValue);
  });

  it('should have the property path', () => {
    // verify property exists
    expect(instance).to.have.property('path');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.path = expectedValue;
    expect(instance.path).to.equal(expectedValue);
  });

  it('should have the property value', () => {
    // verify property exists
    expect(instance).to.have.property('value');

    // set and verify value
    const expectedValue = generateMockData('{String: Object}', true);
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
        const ModelClass = SellingPartnerApiForListingsItems[dataType];
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
