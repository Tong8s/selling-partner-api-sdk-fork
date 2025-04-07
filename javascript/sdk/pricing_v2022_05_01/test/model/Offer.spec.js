/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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
    instance = new SellingPartnerApiForPricing.Offer();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.Offer.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Offer', () => {
  it('should create an instance of Offer', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.Offer);
  });

  it('should have the property sellerId', () => {
    // verify property exists
    expect(instance).to.have.property('sellerId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerId = expectedValue;
    expect(instance.sellerId).to.equal(expectedValue);
  });

  it('should have the property condition', () => {
    // verify property exists
    expect(instance).to.have.property('condition');

    // set and verify value
    const expectedValue = generateMockData('Condition');
    instance.condition = expectedValue;
    expect(instance.condition).to.equal(expectedValue);
  });

  it('should have the property subCondition', () => {
    // verify property exists
    expect(instance).to.have.property('subCondition');

    // set and verify value
    const expectedValue = ['New', 'Mint', 'VeryGood', 'Good', 'Acceptable', 'Poor', 'Club', 'OEM', 'Warranty', 'RefurbishedWarranty', 'Refurbished', 'OpenBox', 'Other', ][0];
    instance.subCondition = expectedValue;
    expect(instance.subCondition).to.equal(expectedValue);
  });

  it('should have the property fulfillmentType', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentType');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentType');
    instance.fulfillmentType = expectedValue;
    expect(instance.fulfillmentType).to.equal(expectedValue);
  });

  it('should have the property listingPrice', () => {
    // verify property exists
    expect(instance).to.have.property('listingPrice');

    // set and verify value
    const expectedValue = generateMockData('MoneyType');
    instance.listingPrice = expectedValue;
    expect(instance.listingPrice).to.equal(expectedValue);
  });

  it('should have the property shippingOptions', () => {
    // verify property exists
    expect(instance).to.have.property('shippingOptions');

    // set and verify value
    const expectedValue = generateMockData('ShippingOption', true);
    instance.shippingOptions = expectedValue;
    expect(instance.shippingOptions).to.equal(expectedValue);
  });

  it('should have the property points', () => {
    // verify property exists
    expect(instance).to.have.property('points');

    // set and verify value
    const expectedValue = generateMockData('Points');
    instance.points = expectedValue;
    expect(instance.points).to.equal(expectedValue);
  });

  it('should have the property primeDetails', () => {
    // verify property exists
    expect(instance).to.have.property('primeDetails');

    // set and verify value
    const expectedValue = generateMockData('PrimeDetails');
    instance.primeDetails = expectedValue;
    expect(instance.primeDetails).to.equal(expectedValue);
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
