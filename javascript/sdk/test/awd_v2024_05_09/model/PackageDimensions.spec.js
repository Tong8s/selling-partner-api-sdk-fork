/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'awd_v2024_05_09', 'index.js');
const TheSellingPartnerApiForAmazonWarehousingAndDistribution = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.PackageDimensions();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PackageDimensions.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PackageDimensions', () => {
  it('should create an instance of PackageDimensions', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PackageDimensions);
  });

  it('should have the property height', () => {
    // verify property exists
    expect(instance).to.have.property('height');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.height = expectedValue;
    expect(instance.height).to.equal(expectedValue);
  });

  it('should have the property length', () => {
    // verify property exists
    expect(instance).to.have.property('length');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.length = expectedValue;
    expect(instance.length).to.equal(expectedValue);
  });

  it('should have the property unitOfMeasurement', () => {
    // verify property exists
    expect(instance).to.have.property('unitOfMeasurement');

    // set and verify value
    const expectedValue = generateMockData('DimensionUnitOfMeasurement');
    instance.unitOfMeasurement = expectedValue;
    expect(instance.unitOfMeasurement).to.equal(expectedValue);
  });

  it('should have the property width', () => {
    // verify property exists
    expect(instance).to.have.property('width');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.width = expectedValue;
    expect(instance.width).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
