/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as TheSellingPartnerApiForFinances from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForFinances.Currency();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFinances.Currency.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Currency', () => {
  it('should create an instance of Currency', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFinances.Currency);
  });

  it('should have the property currencyCode', () => {
    // verify property exists
    expect(instance).to.have.property('currencyCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.currencyCode = expectedValue;
    expect(instance.currencyCode).to.equal(expectedValue);
  });

  it('should have the property currencyAmount', () => {
    // verify property exists
    expect(instance).to.have.property('currencyAmount');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.currencyAmount = expectedValue;
    expect(instance.currencyAmount).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForFinances[dataType];
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
