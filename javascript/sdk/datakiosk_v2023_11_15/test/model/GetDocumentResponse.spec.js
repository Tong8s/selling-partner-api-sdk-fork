/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForDataKiosk from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDataKiosk.GetDocumentResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDataKiosk.GetDocumentResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('GetDocumentResponse', () => {
  it('should create an instance of GetDocumentResponse', () => {
    expect(instance).to.be.a(SellingPartnerApiForDataKiosk.GetDocumentResponse);
  });

  it('should have the property documentId', () => {
    // verify property exists
    expect(instance).to.have.property('documentId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.documentId = expectedValue;
    expect(instance.documentId).to.equal(expectedValue);
  });

  it('should have the property documentUrl', () => {
    // verify property exists
    expect(instance).to.have.property('documentUrl');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.documentUrl = expectedValue;
    expect(instance.documentUrl).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDataKiosk[dataType];
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
