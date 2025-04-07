/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import * as SellingPartnerApiForNotifications from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForNotifications.Destination();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForNotifications.Destination.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Destination', () => {
  it('should create an instance of Destination', () => {
    expect(instance).to.be.a(SellingPartnerApiForNotifications.Destination);
  });

  it('should have the property name', () => {
    // verify property exists
    expect(instance).to.have.property('name');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.name = expectedValue;
    expect(instance.name).to.equal(expectedValue);
  });

  it('should have the property destinationId', () => {
    // verify property exists
    expect(instance).to.have.property('destinationId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.destinationId = expectedValue;
    expect(instance.destinationId).to.equal(expectedValue);
  });

  it('should have the property resource', () => {
    // verify property exists
    expect(instance).to.have.property('resource');

    // set and verify value
    const expectedValue = generateMockData('DestinationResource');
    instance.resource = expectedValue;
    expect(instance.resource).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForNotifications[dataType];
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
