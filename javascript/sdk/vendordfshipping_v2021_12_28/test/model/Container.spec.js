/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForDirectFulfillmentShipping from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.Container.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Container', () => {
  it('should create an instance of Container', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.Container);
  });

  it('should have the property containerType', () => {
    // verify property exists
    expect(instance).to.have.property('containerType');

    // set and verify value
    const expectedValue = ['Carton', 'Pallet', ][0];
    instance.containerType = expectedValue;
    expect(instance.containerType).to.equal(expectedValue);
  });

  it('should have the property containerIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('containerIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.containerIdentifier = expectedValue;
    expect(instance.containerIdentifier).to.equal(expectedValue);
  });

  it('should have the property trackingNumber', () => {
    // verify property exists
    expect(instance).to.have.property('trackingNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.trackingNumber = expectedValue;
    expect(instance.trackingNumber).to.equal(expectedValue);
  });

  it('should have the property manifestId', () => {
    // verify property exists
    expect(instance).to.have.property('manifestId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manifestId = expectedValue;
    expect(instance.manifestId).to.equal(expectedValue);
  });

  it('should have the property manifestDate', () => {
    // verify property exists
    expect(instance).to.have.property('manifestDate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manifestDate = expectedValue;
    expect(instance.manifestDate).to.equal(expectedValue);
  });

  it('should have the property shipMethod', () => {
    // verify property exists
    expect(instance).to.have.property('shipMethod');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shipMethod = expectedValue;
    expect(instance.shipMethod).to.equal(expectedValue);
  });

  it('should have the property scacCode', () => {
    // verify property exists
    expect(instance).to.have.property('scacCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.scacCode = expectedValue;
    expect(instance.scacCode).to.equal(expectedValue);
  });

  it('should have the property carrier', () => {
    // verify property exists
    expect(instance).to.have.property('carrier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.carrier = expectedValue;
    expect(instance.carrier).to.equal(expectedValue);
  });

  it('should have the property containerSequenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('containerSequenceNumber');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.containerSequenceNumber = expectedValue;
    expect(instance.containerSequenceNumber).to.equal(expectedValue);
  });

  it('should have the property dimensions', () => {
    // verify property exists
    expect(instance).to.have.property('dimensions');

    // set and verify value
    const expectedValue = generateMockData('Dimensions');
    instance.dimensions = expectedValue;
    expect(instance.dimensions).to.equal(expectedValue);
  });

  it('should have the property weight', () => {
    // verify property exists
    expect(instance).to.have.property('weight');

    // set and verify value
    const expectedValue = generateMockData('Weight');
    instance.weight = expectedValue;
    expect(instance.weight).to.equal(expectedValue);
  });

  it('should have the property packedItems', () => {
    // verify property exists
    expect(instance).to.have.property('packedItems');

    // set and verify value
    const expectedValue = generateMockData('PackedItem', true);
    instance.packedItems = expectedValue;
    expect(instance.packedItems).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentShipping[dataType];
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
