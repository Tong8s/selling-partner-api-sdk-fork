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
    instance = new SellingPartnerApiForSupplySources.OutboundCapability();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForSupplySources.OutboundCapability.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OutboundCapability', () => {
  it('should create an instance of OutboundCapability', () => {
    expect(instance).to.be.a(SellingPartnerApiForSupplySources.OutboundCapability);
  });

  it('should have the property isSupported', () => {
    // verify property exists
    expect(instance).to.have.property('isSupported');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isSupported = expectedValue;
    expect(instance.isSupported).to.equal(expectedValue);
  });

  it('should have the property operationalConfiguration', () => {
    // verify property exists
    expect(instance).to.have.property('operationalConfiguration');

    // set and verify value
    const expectedValue = generateMockData('OperationalConfiguration');
    instance.operationalConfiguration = expectedValue;
    expect(instance.operationalConfiguration).to.equal(expectedValue);
  });

  it('should have the property returnLocation', () => {
    // verify property exists
    expect(instance).to.have.property('returnLocation');

    // set and verify value
    const expectedValue = generateMockData('ReturnLocation');
    instance.returnLocation = expectedValue;
    expect(instance.returnLocation).to.equal(expectedValue);
  });

  it('should have the property deliveryChannel', () => {
    // verify property exists
    expect(instance).to.have.property('deliveryChannel');

    // set and verify value
    const expectedValue = generateMockData('DeliveryChannel');
    instance.deliveryChannel = expectedValue;
    expect(instance.deliveryChannel).to.equal(expectedValue);
  });

  it('should have the property pickupChannel', () => {
    // verify property exists
    expect(instance).to.have.property('pickupChannel');

    // set and verify value
    const expectedValue = generateMockData('PickupChannel');
    instance.pickupChannel = expectedValue;
    expect(instance.pickupChannel).to.equal(expectedValue);
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
