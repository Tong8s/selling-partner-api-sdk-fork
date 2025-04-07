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
    instance = new TheSellingPartnerApiForFbaInboundOperations.Item();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.Item.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Item', () => {
  it('should create an instance of Item', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Item);
  });

  it('should have the property asin', () => {
    // verify property exists
    expect(instance).to.have.property('asin');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.asin = expectedValue;
    expect(instance.asin).to.equal(expectedValue);
  });

  it('should have the property expiration', () => {
    // verify property exists
    expect(instance).to.have.property('expiration');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.expiration = expectedValue;
    expect(instance.expiration).to.equal(expectedValue);
  });

  it('should have the property fnsku', () => {
    // verify property exists
    expect(instance).to.have.property('fnsku');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.fnsku = expectedValue;
    expect(instance.fnsku).to.equal(expectedValue);
  });

  it('should have the property labelOwner', () => {
    // verify property exists
    expect(instance).to.have.property('labelOwner');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.labelOwner = expectedValue;
    expect(instance.labelOwner).to.equal(expectedValue);
  });

  it('should have the property manufacturingLotCode', () => {
    // verify property exists
    expect(instance).to.have.property('manufacturingLotCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manufacturingLotCode = expectedValue;
    expect(instance.manufacturingLotCode).to.equal(expectedValue);
  });

  it('should have the property msku', () => {
    // verify property exists
    expect(instance).to.have.property('msku');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.msku = expectedValue;
    expect(instance.msku).to.equal(expectedValue);
  });

  it('should have the property prepInstructions', () => {
    // verify property exists
    expect(instance).to.have.property('prepInstructions');

    // set and verify value
    const expectedValue = generateMockData('PrepInstruction', true);
    instance.prepInstructions = expectedValue;
    expect(instance.prepInstructions).to.equal(expectedValue);
  });

  it('should have the property quantity', () => {
    // verify property exists
    expect(instance).to.have.property('quantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantity = expectedValue;
    expect(instance.quantity).to.equal(expectedValue);
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
