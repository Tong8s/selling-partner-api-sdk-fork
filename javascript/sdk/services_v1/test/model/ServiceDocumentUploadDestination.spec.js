/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForServices from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForServices.ServiceDocumentUploadDestination();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForServices.ServiceDocumentUploadDestination.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ServiceDocumentUploadDestination', () => {
  it('should create an instance of ServiceDocumentUploadDestination', () => {
    expect(instance).to.be.a(SellingPartnerApiForServices.ServiceDocumentUploadDestination);
  });

  it('should have the property uploadDestinationId', () => {
    // verify property exists
    expect(instance).to.have.property('uploadDestinationId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.uploadDestinationId = expectedValue;
    expect(instance.uploadDestinationId).to.equal(expectedValue);
  });

  it('should have the property url', () => {
    // verify property exists
    expect(instance).to.have.property('url');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.url = expectedValue;
    expect(instance.url).to.equal(expectedValue);
  });

  it('should have the property encryptionDetails', () => {
    // verify property exists
    expect(instance).to.have.property('encryptionDetails');

    // set and verify value
    const expectedValue = generateMockData('EncryptionDetails');
    instance.encryptionDetails = expectedValue;
    expect(instance.encryptionDetails).to.equal(expectedValue);
  });

  it('should have the property headers', () => {
    // verify property exists
    expect(instance).to.have.property('headers');

    // set and verify value
    const expectedValue = generateMockData('Object');
    instance.headers = expectedValue;
    expect(instance.headers).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForServices[dataType];
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
