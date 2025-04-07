/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import * as SellingPartnerApiForMerchantFulfillment from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForMerchantFulfillment.DangerousGoodsDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMerchantFulfillment.DangerousGoodsDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('DangerousGoodsDetails', () => {
  it('should create an instance of DangerousGoodsDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.DangerousGoodsDetails);
  });

  it('should have the property unitedNationsRegulatoryId', () => {
    // verify property exists
    expect(instance).to.have.property('unitedNationsRegulatoryId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.unitedNationsRegulatoryId = expectedValue;
    expect(instance.unitedNationsRegulatoryId).to.equal(expectedValue);
  });

  it('should have the property transportationRegulatoryClass', () => {
    // verify property exists
    expect(instance).to.have.property('transportationRegulatoryClass');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transportationRegulatoryClass = expectedValue;
    expect(instance.transportationRegulatoryClass).to.equal(expectedValue);
  });

  it('should have the property packingGroup', () => {
    // verify property exists
    expect(instance).to.have.property('packingGroup');

    // set and verify value
    const expectedValue = ['I', 'II', 'III', ][0];
    instance.packingGroup = expectedValue;
    expect(instance.packingGroup).to.equal(expectedValue);
  });

  it('should have the property packingInstruction', () => {
    // verify property exists
    expect(instance).to.have.property('packingInstruction');

    // set and verify value
    const expectedValue = ['PI965_SECTION_IA', 'PI965_SECTION_IB', 'PI965_SECTION_II', 'PI966_SECTION_I', 'PI966_SECTION_II', 'PI967_SECTION_I', 'PI967_SECTION_II', 'PI968_SECTION_IA', 'PI968_SECTION_IB', 'PI969_SECTION_I', 'PI969_SECTION_II', 'PI970_SECTION_I', 'PI970_SECTION_II', ][0];
    instance.packingInstruction = expectedValue;
    expect(instance.packingInstruction).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
