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
    instance = new TheSellingPartnerApiForFbaInboundOperations.PackageGroupingInput();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.PackageGroupingInput.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PackageGroupingInput', () => {
  it('should create an instance of PackageGroupingInput', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.PackageGroupingInput);
  });

  it('should have the property boxes', () => {
    // verify property exists
    expect(instance).to.have.property('boxes');

    // set and verify value
    const expectedValue = generateMockData('BoxInput', true);
    instance.boxes = expectedValue;
    expect(instance.boxes).to.equal(expectedValue);
  });

  it('should have the property packingGroupId', () => {
    // verify property exists
    expect(instance).to.have.property('packingGroupId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.packingGroupId = expectedValue;
    expect(instance.packingGroupId).to.equal(expectedValue);
  });

  it('should have the property shipmentId', () => {
    // verify property exists
    expect(instance).to.have.property('shipmentId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shipmentId = expectedValue;
    expect(instance.shipmentId).to.equal(expectedValue);
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
