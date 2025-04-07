/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import * as SellingPartnerApiForPricing from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.Product();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.Product.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Product', () => {
  it('should create an instance of Product', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.Product);
  });

  it('should have the property identifiers', () => {
    // verify property exists
    expect(instance).to.have.property('identifiers');

    // set and verify value
    const expectedValue = generateMockData('IdentifierType');
    instance.identifiers = expectedValue;
    expect(instance.identifiers).to.equal(expectedValue);
  });

  it('should have the property attributeSets', () => {
    // verify property exists
    expect(instance).to.have.property('attributeSets');

    // set and verify value
    const expectedValue = generateMockData('Object', true);
    instance.attributeSets = expectedValue;
    expect(instance.attributeSets).to.equal(expectedValue);
  });

  it('should have the property relationships', () => {
    // verify property exists
    expect(instance).to.have.property('relationships');

    // set and verify value
    const expectedValue = generateMockData('Object', true);
    instance.relationships = expectedValue;
    expect(instance.relationships).to.equal(expectedValue);
  });

  it('should have the property competitivePricing', () => {
    // verify property exists
    expect(instance).to.have.property('competitivePricing');

    // set and verify value
    const expectedValue = generateMockData('CompetitivePricingType');
    instance.competitivePricing = expectedValue;
    expect(instance.competitivePricing).to.equal(expectedValue);
  });

  it('should have the property salesRankings', () => {
    // verify property exists
    expect(instance).to.have.property('salesRankings');

    // set and verify value
    const expectedValue = generateMockData('SalesRankType', true);
    instance.salesRankings = expectedValue;
    expect(instance.salesRankings).to.equal(expectedValue);
  });

  it('should have the property offers', () => {
    // verify property exists
    expect(instance).to.have.property('offers');

    // set and verify value
    const expectedValue = generateMockData('OfferType', true);
    instance.offers = expectedValue;
    expect(instance.offers).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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
