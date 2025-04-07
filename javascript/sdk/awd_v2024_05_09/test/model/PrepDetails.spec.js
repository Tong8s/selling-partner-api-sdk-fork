/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as TheSellingPartnerApiForAmazonWarehousingAndDistribution from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PrepDetails', () => {
  it('should create an instance of PrepDetails', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepDetails);
  });

  it('should have the property labelOwner', () => {
    // verify property exists
    expect(instance).to.have.property('labelOwner');

    // set and verify value
    const expectedValue = generateMockData('LabelOwner');
    instance.labelOwner = expectedValue;
    expect(instance.labelOwner).to.equal(expectedValue);
  });

  it('should have the property prepCategory', () => {
    // verify property exists
    expect(instance).to.have.property('prepCategory');

    // set and verify value
    const expectedValue = generateMockData('PrepCategory');
    instance.prepCategory = expectedValue;
    expect(instance.prepCategory).to.equal(expectedValue);
  });

  it('should have the property prepInstructions', () => {
    // verify property exists
    expect(instance).to.have.property('prepInstructions');

    // set and verify value
    const expectedValue = generateMockData('PrepInstruction', true);
    instance.prepInstructions = expectedValue;
    expect(instance.prepInstructions).to.equal(expectedValue);
  });

  it('should have the property prepOwner', () => {
    // verify property exists
    expect(instance).to.have.property('prepOwner');

    // set and verify value
    const expectedValue = generateMockData('PrepOwner');
    instance.prepOwner = expectedValue;
    expect(instance.prepOwner).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
