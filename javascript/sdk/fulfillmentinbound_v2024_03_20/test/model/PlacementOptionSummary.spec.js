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
    instance = new TheSellingPartnerApiForFbaInboundOperations.PlacementOptionSummary();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.PlacementOptionSummary.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PlacementOptionSummary', () => {
  it('should create an instance of PlacementOptionSummary', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.PlacementOptionSummary);
  });

  it('should have the property placementOptionId', () => {
    // verify property exists
    expect(instance).to.have.property('placementOptionId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.placementOptionId = expectedValue;
    expect(instance.placementOptionId).to.equal(expectedValue);
  });

  it('should have the property status', () => {
    // verify property exists
    expect(instance).to.have.property('status');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.status = expectedValue;
    expect(instance.status).to.equal(expectedValue);
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
