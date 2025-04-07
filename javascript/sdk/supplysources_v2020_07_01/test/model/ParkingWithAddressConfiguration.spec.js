/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForSupplySources from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForSupplySources.ParkingWithAddressConfiguration();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForSupplySources.ParkingWithAddressConfiguration.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ParkingWithAddressConfiguration', () => {
  it('should create an instance of ParkingWithAddressConfiguration', () => {
    expect(instance).to.be.a(SellingPartnerApiForSupplySources.ParkingWithAddressConfiguration);
  });

  it('should have the property parkingCostType', () => {
    // verify property exists
    expect(instance).to.have.property('parkingCostType');

    // set and verify value
    const expectedValue = generateMockData('ParkingCostType');
    instance.parkingCostType = expectedValue;
    expect(instance.parkingCostType).to.equal(expectedValue);
  });

  it('should have the property parkingSpotIdentificationType', () => {
    // verify property exists
    expect(instance).to.have.property('parkingSpotIdentificationType');

    // set and verify value
    const expectedValue = generateMockData('ParkingSpotIdentificationType');
    instance.parkingSpotIdentificationType = expectedValue;
    expect(instance.parkingSpotIdentificationType).to.equal(expectedValue);
  });

  it('should have the property numberOfParkingSpots', () => {
    // verify property exists
    expect(instance).to.have.property('numberOfParkingSpots');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.numberOfParkingSpots = expectedValue;
    expect(instance.numberOfParkingSpots).to.equal(expectedValue);
  });

  it('should have the property address', () => {
    // verify property exists
    expect(instance).to.have.property('address');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.address = expectedValue;
    expect(instance.address).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForSupplySources[dataType];
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
