/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
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
import * as SellingPartnerApiForSupplySources from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForSupplySources.ReturnLocation();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForSupplySources.ReturnLocation.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ReturnLocation', () => {
  it('should create an instance of ReturnLocation', () => {
    expect(instance).to.be.a(SellingPartnerApiForSupplySources.ReturnLocation);
  });

  it('should have the property supplySourceId', () => {
    // verify property exists
    expect(instance).to.have.property('supplySourceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.supplySourceId = expectedValue;
    expect(instance.supplySourceId).to.equal(expectedValue);
  });

  it('should have the property addressWithContact', () => {
    // verify property exists
    expect(instance).to.have.property('addressWithContact');

    // set and verify value
    const expectedValue = generateMockData('AddressWithContact');
    instance.addressWithContact = expectedValue;
    expect(instance.addressWithContact).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForSupplySources[dataType];
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
