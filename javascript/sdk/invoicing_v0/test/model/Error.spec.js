/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
import * as SellingPartnerApiForShipmentInvoicing from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForShipmentInvoicing.Error();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForShipmentInvoicing.Error.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Error', () => {
  it('should create an instance of Error', () => {
    expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.Error);
  });

  it('should have the property code', () => {
    // verify property exists
    expect(instance).to.have.property('code');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.code = expectedValue;
    expect(instance.code).to.equal(expectedValue);
  });

  it('should have the property message', () => {
    // verify property exists
    expect(instance).to.have.property('message');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.message = expectedValue;
    expect(instance.message).to.equal(expectedValue);
  });

  it('should have the property details', () => {
    // verify property exists
    expect(instance).to.have.property('details');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.details = expectedValue;
    expect(instance.details).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForShipmentInvoicing[dataType];
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
