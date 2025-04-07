/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as AmazonShippingApi from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new AmazonShippingApi.OneClickShipmentRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.OneClickShipmentRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OneClickShipmentRequest', () => {
  it('should create an instance of OneClickShipmentRequest', () => {
    expect(instance).to.be.a(AmazonShippingApi.OneClickShipmentRequest);
  });

  it('should have the property shipTo', () => {
    // verify property exists
    expect(instance).to.have.property('shipTo');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.shipTo = expectedValue;
    expect(instance.shipTo).to.equal(expectedValue);
  });

  it('should have the property shipFrom', () => {
    // verify property exists
    expect(instance).to.have.property('shipFrom');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.shipFrom = expectedValue;
    expect(instance.shipFrom).to.equal(expectedValue);
  });

  it('should have the property returnTo', () => {
    // verify property exists
    expect(instance).to.have.property('returnTo');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.returnTo = expectedValue;
    expect(instance.returnTo).to.equal(expectedValue);
  });

  it('should have the property shipDate', () => {
    // verify property exists
    expect(instance).to.have.property('shipDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.shipDate = expectedValue;
    expect(instance.shipDate).to.equal(expectedValue);
  });

  it('should have the property goodsOwner', () => {
    // verify property exists
    expect(instance).to.have.property('goodsOwner');

    // set and verify value
    const expectedValue = generateMockData('GoodsOwner');
    instance.goodsOwner = expectedValue;
    expect(instance.goodsOwner).to.equal(expectedValue);
  });

  it('should have the property packages', () => {
    // verify property exists
    expect(instance).to.have.property('packages');

    // set and verify value
    const expectedValue = generateMockData('Package', true);
    instance.packages = expectedValue;
    expect(instance.packages).to.equal(expectedValue);
  });

  it('should have the property valueAddedServicesDetails', () => {
    // verify property exists
    expect(instance).to.have.property('valueAddedServicesDetails');

    // set and verify value
    const expectedValue = generateMockData('OneClickShipmentValueAddedService', true);
    instance.valueAddedServicesDetails = expectedValue;
    expect(instance.valueAddedServicesDetails).to.equal(expectedValue);
  });

  it('should have the property taxDetails', () => {
    // verify property exists
    expect(instance).to.have.property('taxDetails');

    // set and verify value
    const expectedValue = generateMockData('TaxDetail', true);
    instance.taxDetails = expectedValue;
    expect(instance.taxDetails).to.equal(expectedValue);
  });

  it('should have the property channelDetails', () => {
    // verify property exists
    expect(instance).to.have.property('channelDetails');

    // set and verify value
    const expectedValue = generateMockData('ChannelDetails');
    instance.channelDetails = expectedValue;
    expect(instance.channelDetails).to.equal(expectedValue);
  });

  it('should have the property labelSpecifications', () => {
    // verify property exists
    expect(instance).to.have.property('labelSpecifications');

    // set and verify value
    const expectedValue = generateMockData('RequestedDocumentSpecification');
    instance.labelSpecifications = expectedValue;
    expect(instance.labelSpecifications).to.equal(expectedValue);
  });

  it('should have the property serviceSelection', () => {
    // verify property exists
    expect(instance).to.have.property('serviceSelection');

    // set and verify value
    const expectedValue = generateMockData('ServiceSelection');
    instance.serviceSelection = expectedValue;
    expect(instance.serviceSelection).to.equal(expectedValue);
  });

  it('should have the property shipperInstruction', () => {
    // verify property exists
    expect(instance).to.have.property('shipperInstruction');

    // set and verify value
    const expectedValue = generateMockData('ShipperInstruction');
    instance.shipperInstruction = expectedValue;
    expect(instance.shipperInstruction).to.equal(expectedValue);
  });

  it('should have the property destinationAccessPointDetails', () => {
    // verify property exists
    expect(instance).to.have.property('destinationAccessPointDetails');

    // set and verify value
    const expectedValue = generateMockData('AccessPointDetails');
    instance.destinationAccessPointDetails = expectedValue;
    expect(instance.destinationAccessPointDetails).to.equal(expectedValue);
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
        const ModelClass = AmazonShippingApi[dataType];
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
