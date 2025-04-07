/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForReplenishment from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForReplenishment.ListOffersRequestSort();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForReplenishment.ListOffersRequestSort.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ListOffersRequestSort', () => {
  it('should create an instance of ListOffersRequestSort', () => {
    expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersRequestSort);
  });

  it('should have the property order', () => {
    // verify property exists
    expect(instance).to.have.property('order');

    // set and verify value
    const expectedValue = generateMockData('SortOrder');
    instance.order = expectedValue;
    expect(instance.order).to.equal(expectedValue);
  });

  it('should have the property key', () => {
    // verify property exists
    expect(instance).to.have.property('key');

    // set and verify value
    const expectedValue = generateMockData('ListOffersSortKey');
    instance.key = expectedValue;
    expect(instance.key).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
