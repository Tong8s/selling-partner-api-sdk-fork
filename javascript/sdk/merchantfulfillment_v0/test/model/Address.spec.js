/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForMerchantFulfillment from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForMerchantFulfillment.Address();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMerchantFulfillment.Address.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Address', () => {
  it('should create an instance of Address', () => {
    expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Address);
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

  it('should have the property districtOrCounty', () => {
    // verify property exists
    expect(instance).to.have.property('districtOrCounty');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.districtOrCounty = expectedValue;
    expect(instance.districtOrCounty).to.equal(expectedValue);
  });

  it('should have the property email', () => {
    // verify property exists
    expect(instance).to.have.property('email');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.email = expectedValue;
    expect(instance.email).to.equal(expectedValue);
  });

  it('should have the property city', () => {
    // verify property exists
    expect(instance).to.have.property('city');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.city = expectedValue;
    expect(instance.city).to.equal(expectedValue);
  });

  it('should have the property stateOrProvinceCode', () => {
    // verify property exists
    expect(instance).to.have.property('stateOrProvinceCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.stateOrProvinceCode = expectedValue;
    expect(instance.stateOrProvinceCode).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
