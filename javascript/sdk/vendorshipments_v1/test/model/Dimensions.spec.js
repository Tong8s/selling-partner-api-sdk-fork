/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import * as SellingPartnerApiForRetailProcurementShipments from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementShipments.Dimensions();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementShipments.Dimensions.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Dimensions', () => {
  it('should create an instance of Dimensions', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Dimensions);
  });

  it('should have the property length', () => {
    // verify property exists
    expect(instance).to.have.property('length');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.length = expectedValue;
    expect(instance.length).to.equal(expectedValue);
  });

  it('should have the property width', () => {
    // verify property exists
    expect(instance).to.have.property('width');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.width = expectedValue;
    expect(instance.width).to.equal(expectedValue);
  });

  it('should have the property height', () => {
    // verify property exists
    expect(instance).to.have.property('height');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.height = expectedValue;
    expect(instance.height).to.equal(expectedValue);
  });

  it('should have the property unitOfMeasure', () => {
    // verify property exists
    expect(instance).to.have.property('unitOfMeasure');

    // set and verify value
    const expectedValue = ['In', 'Ft', 'Meter', 'Yard', ][0];
    instance.unitOfMeasure = expectedValue;
    expect(instance.unitOfMeasure).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
