/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
import * as TheSellingPartnerApiForInvoices from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForInvoices.GetInvoicesAttributesResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForInvoices.GetInvoicesAttributesResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('GetInvoicesAttributesResponse', () => {
  it('should create an instance of GetInvoicesAttributesResponse', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForInvoices.GetInvoicesAttributesResponse);
  });

  it('should have the property invoicesAttributes', () => {
    // verify property exists
    expect(instance).to.have.property('invoicesAttributes');

    // set and verify value
    const expectedValue = generateMockData('InvoicesAttributes');
    instance.invoicesAttributes = expectedValue;
    expect(instance.invoicesAttributes).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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
