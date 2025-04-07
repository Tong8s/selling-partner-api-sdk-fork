/**
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as TheSellingPartnerApiForThirdPartyApplicationIntegrations from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('DeleteNotificationsRequest', () => {
  it('should create an instance of DeleteNotificationsRequest', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest);
  });

  it('should have the property templateId', () => {
    // verify property exists
    expect(instance).to.have.property('templateId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.templateId = expectedValue;
    expect(instance.templateId).to.equal(expectedValue);
  });

  it('should have the property deletionReason', () => {
    // verify property exists
    expect(instance).to.have.property('deletionReason');

    // set and verify value
    const expectedValue = ['INCORRECT_CONTENT', 'INCORRECT_RECIPIENT', ][0];
    instance.deletionReason = expectedValue;
    expect(instance.deletionReason).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForThirdPartyApplicationIntegrations[dataType];
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
