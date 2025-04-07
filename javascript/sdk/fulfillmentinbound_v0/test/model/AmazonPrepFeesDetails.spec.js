/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import * as SellingPartnerApiForFulfillmentInbound from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFulfillmentInbound.AmazonPrepFeesDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFulfillmentInbound.AmazonPrepFeesDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('AmazonPrepFeesDetails', () => {
  it('should create an instance of AmazonPrepFeesDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.AmazonPrepFeesDetails);
  });

  it('should have the property prepInstruction', () => {
    // verify property exists
    expect(instance).to.have.property('prepInstruction');

    // set and verify value
    const expectedValue = generateMockData('PrepInstruction');
    instance.prepInstruction = expectedValue;
    expect(instance.prepInstruction).to.equal(expectedValue);
  });

  it('should have the property feePerUnit', () => {
    // verify property exists
    expect(instance).to.have.property('feePerUnit');

    // set and verify value
    const expectedValue = generateMockData('Amount');
    instance.feePerUnit = expectedValue;
    expect(instance.feePerUnit).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
