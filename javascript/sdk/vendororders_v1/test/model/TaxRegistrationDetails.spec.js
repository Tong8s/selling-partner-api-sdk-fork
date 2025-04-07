/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import * as SellingPartnerApiForRetailProcurementOrders from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementOrders.TaxRegistrationDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementOrders.TaxRegistrationDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('TaxRegistrationDetails', () => {
  it('should create an instance of TaxRegistrationDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.TaxRegistrationDetails);
  });

  it('should have the property taxRegistrationType', () => {
    // verify property exists
    expect(instance).to.have.property('taxRegistrationType');

    // set and verify value
    const expectedValue = ['VAT', 'GST', ][0];
    instance.taxRegistrationType = expectedValue;
    expect(instance.taxRegistrationType).to.equal(expectedValue);
  });

  it('should have the property taxRegistrationNumber', () => {
    // verify property exists
    expect(instance).to.have.property('taxRegistrationNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.taxRegistrationNumber = expectedValue;
    expect(instance.taxRegistrationNumber).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
