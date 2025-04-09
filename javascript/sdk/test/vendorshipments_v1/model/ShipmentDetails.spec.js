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
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementShipments.ShipmentDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementShipments.ShipmentDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ShipmentDetails', () => {
  it('should create an instance of ShipmentDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.ShipmentDetails);
  });

  it('should have the property pagination', () => {
    // verify property exists
    expect(instance).to.have.property('pagination');

    // set and verify value
    const expectedValue = generateMockData('Pagination');
    instance.pagination = expectedValue;
    expect(instance.pagination).to.equal(expectedValue);
  });

  it('should have the property shipments', () => {
    // verify property exists
    expect(instance).to.have.property('shipments');

    // set and verify value
    const expectedValue = generateMockData('Shipment', true);
    instance.shipments = expectedValue;
    expect(instance.shipments).to.equal(expectedValue);
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
