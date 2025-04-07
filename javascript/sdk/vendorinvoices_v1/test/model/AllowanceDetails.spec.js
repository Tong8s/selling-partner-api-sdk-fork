/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import * as SellingPartnerApiForRetailProcurementPayments from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementPayments.AllowanceDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementPayments.AllowanceDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('AllowanceDetails', () => {
  it('should create an instance of AllowanceDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.AllowanceDetails);
  });

  it('should have the property type', () => {
    // verify property exists
    expect(instance).to.have.property('type');

    // set and verify value
    const expectedValue = ['Discount', 'DiscountIncentive', 'Defective', 'Promotional', 'UnsaleableMerchandise', 'Special', ][0];
    instance.type = expectedValue;
    expect(instance.type).to.equal(expectedValue);
  });

  it('should have the property description', () => {
    // verify property exists
    expect(instance).to.have.property('description');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.description = expectedValue;
    expect(instance.description).to.equal(expectedValue);
  });

  it('should have the property allowanceAmount', () => {
    // verify property exists
    expect(instance).to.have.property('allowanceAmount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.allowanceAmount = expectedValue;
    expect(instance.allowanceAmount).to.equal(expectedValue);
  });

  it('should have the property taxDetails', () => {
    // verify property exists
    expect(instance).to.have.property('taxDetails');

    // set and verify value
    const expectedValue = generateMockData('TaxDetails', true);
    instance.taxDetails = expectedValue;
    expect(instance.taxDetails).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementPayments[dataType];
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
