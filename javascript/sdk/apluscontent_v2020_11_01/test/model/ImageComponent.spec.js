/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import * as SellingPartnerApiForAContentManagement from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForAContentManagement.ImageComponent();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForAContentManagement.ImageComponent.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ImageComponent', () => {
  it('should create an instance of ImageComponent', () => {
    expect(instance).to.be.a(SellingPartnerApiForAContentManagement.ImageComponent);
  });

  it('should have the property uploadDestinationId', () => {
    // verify property exists
    expect(instance).to.have.property('uploadDestinationId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.uploadDestinationId = expectedValue;
    expect(instance.uploadDestinationId).to.equal(expectedValue);
  });

  it('should have the property imageCropSpecification', () => {
    // verify property exists
    expect(instance).to.have.property('imageCropSpecification');

    // set and verify value
    const expectedValue = generateMockData('ImageCropSpecification');
    instance.imageCropSpecification = expectedValue;
    expect(instance.imageCropSpecification).to.equal(expectedValue);
  });

  it('should have the property altText', () => {
    // verify property exists
    expect(instance).to.have.property('altText');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.altText = expectedValue;
    expect(instance.altText).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForAContentManagement[dataType];
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
