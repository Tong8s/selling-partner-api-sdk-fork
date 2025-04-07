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
    instance = new SellingPartnerApiForServices.Address();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForServices.Address.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Address', () => {
  it('should create an instance of Address', () => {
    expect(instance).to.be.a(SellingPartnerApiForServices.Address);
  });

  it('should have the property name', () => {
    // verify property exists
    expect(instance).to.have.property('name');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.name = expectedValue;
    expect(instance.name).to.equal(expectedValue);
  });

  it('should have the property addressLine1', () => {
    // verify property exists
    expect(instance).to.have.property('addressLine1');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.addressLine1 = expectedValue;
    expect(instance.addressLine1).to.equal(expectedValue);
  });

  it('should have the property addressLine2', () => {
    // verify property exists
    expect(instance).to.have.property('addressLine2');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.addressLine2 = expectedValue;
    expect(instance.addressLine2).to.equal(expectedValue);
  });

  it('should have the property addressLine3', () => {
    // verify property exists
    expect(instance).to.have.property('addressLine3');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.addressLine3 = expectedValue;
    expect(instance.addressLine3).to.equal(expectedValue);
  });

  it('should have the property city', () => {
    // verify property exists
    expect(instance).to.have.property('city');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.city = expectedValue;
    expect(instance.city).to.equal(expectedValue);
  });

  it('should have the property county', () => {
    // verify property exists
    expect(instance).to.have.property('county');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.county = expectedValue;
    expect(instance.county).to.equal(expectedValue);
  });

  it('should have the property district', () => {
    // verify property exists
    expect(instance).to.have.property('district');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.district = expectedValue;
    expect(instance.district).to.equal(expectedValue);
  });

  it('should have the property stateOrRegion', () => {
    // verify property exists
    expect(instance).to.have.property('stateOrRegion');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.stateOrRegion = expectedValue;
    expect(instance.stateOrRegion).to.equal(expectedValue);
  });

  it('should have the property postalCode', () => {
    // verify property exists
    expect(instance).to.have.property('postalCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.postalCode = expectedValue;
    expect(instance.postalCode).to.equal(expectedValue);
  });

  it('should have the property countryCode', () => {
    // verify property exists
    expect(instance).to.have.property('countryCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.countryCode = expectedValue;
    expect(instance.countryCode).to.equal(expectedValue);
  });

  it('should have the property phone', () => {
    // verify property exists
    expect(instance).to.have.property('phone');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.phone = expectedValue;
    expect(instance.phone).to.equal(expectedValue);
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
