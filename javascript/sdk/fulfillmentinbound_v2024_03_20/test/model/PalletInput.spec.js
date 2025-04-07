/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as TheSellingPartnerApiForFbaInboundOperations from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForFbaInboundOperations.PalletInput();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.PalletInput.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PalletInput', () => {
  it('should create an instance of PalletInput', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.PalletInput);
  });

  it('should have the property dimensions', () => {
    // verify property exists
    expect(instance).to.have.property('dimensions');

    // set and verify value
    const expectedValue = generateMockData('Dimensions');
    instance.dimensions = expectedValue;
    expect(instance.dimensions).to.equal(expectedValue);
  });

  it('should have the property quantity', () => {
    // verify property exists
    expect(instance).to.have.property('quantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantity = expectedValue;
    expect(instance.quantity).to.equal(expectedValue);
  });

  it('should have the property stackability', () => {
    // verify property exists
    expect(instance).to.have.property('stackability');

    // set and verify value
    const expectedValue = generateMockData('Stackability');
    instance.stackability = expectedValue;
    expect(instance.stackability).to.equal(expectedValue);
  });

  it('should have the property weight', () => {
    // verify property exists
    expect(instance).to.have.property('weight');

    // set and verify value
    const expectedValue = generateMockData('Weight');
    instance.weight = expectedValue;
    expect(instance.weight).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
