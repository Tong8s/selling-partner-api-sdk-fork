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
    instance = new SellingPartnerApiForMerchantFulfillment.SellerInputDefinition();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMerchantFulfillment.SellerInputDefinition.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SellerInputDefinition', () => {
  it('should create an instance of SellerInputDefinition', () => {
    expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.SellerInputDefinition);
  });

  it('should have the property isRequired', () => {
    // verify property exists
    expect(instance).to.have.property('isRequired');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isRequired = expectedValue;
    expect(instance.isRequired).to.equal(expectedValue);
  });

  it('should have the property dataType', () => {
    // verify property exists
    expect(instance).to.have.property('dataType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.dataType = expectedValue;
    expect(instance.dataType).to.equal(expectedValue);
  });

  it('should have the property constraints', () => {
    // verify property exists
    expect(instance).to.have.property('constraints');

    // set and verify value
    const expectedValue = generateMockData('Constraint', true);
    instance.constraints = expectedValue;
    expect(instance.constraints).to.equal(expectedValue);
  });

  it('should have the property inputDisplayText', () => {
    // verify property exists
    expect(instance).to.have.property('inputDisplayText');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.inputDisplayText = expectedValue;
    expect(instance.inputDisplayText).to.equal(expectedValue);
  });

  it('should have the property inputTarget', () => {
    // verify property exists
    expect(instance).to.have.property('inputTarget');

    // set and verify value
    const expectedValue = generateMockData('InputTargetType');
    instance.inputTarget = expectedValue;
    expect(instance.inputTarget).to.equal(expectedValue);
  });

  it('should have the property storedValue', () => {
    // verify property exists
    expect(instance).to.have.property('storedValue');

    // set and verify value
    const expectedValue = generateMockData('AdditionalSellerInput');
    instance.storedValue = expectedValue;
    expect(instance.storedValue).to.equal(expectedValue);
  });

  it('should have the property restrictedSetValues', () => {
    // verify property exists
    expect(instance).to.have.property('restrictedSetValues');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.restrictedSetValues = expectedValue;
    expect(instance.restrictedSetValues).to.equal(expectedValue);
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
