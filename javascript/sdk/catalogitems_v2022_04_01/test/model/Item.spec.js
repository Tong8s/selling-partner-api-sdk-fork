/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForCatalogItems.Item();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForCatalogItems.Item.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Item', function() {
    it('should create an instance of Item', function() {
      expect(instance).to.be.a(SellingPartnerApiForCatalogItems.Item);
    });

    it('should have the property asin', function() {
      // verify property exists
      expect(instance).to.have.property('asin');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.asin = expectedValue;
      expect(instance.asin).to.equal(expectedValue);
    });

    it('should have the property attributes', function() {
      // verify property exists
      expect(instance).to.have.property('attributes');

      // set and verify value
      var expectedValue = generateMockData('{String: Object}');
      instance.attributes = expectedValue;
      expect(instance.attributes).to.equal(expectedValue);
    });

    it('should have the property classifications', function() {
      // verify property exists
      expect(instance).to.have.property('classifications');

      // set and verify value
      var expectedValue = generateMockData('ItemBrowseClassificationsByMarketplace', true);
      instance.classifications = expectedValue;
      expect(instance.classifications).to.equal(expectedValue);
    });

    it('should have the property dimensions', function() {
      // verify property exists
      expect(instance).to.have.property('dimensions');

      // set and verify value
      var expectedValue = generateMockData('ItemDimensionsByMarketplace', true);
      instance.dimensions = expectedValue;
      expect(instance.dimensions).to.equal(expectedValue);
    });

    it('should have the property identifiers', function() {
      // verify property exists
      expect(instance).to.have.property('identifiers');

      // set and verify value
      var expectedValue = generateMockData('ItemIdentifiersByMarketplace', true);
      instance.identifiers = expectedValue;
      expect(instance.identifiers).to.equal(expectedValue);
    });

    it('should have the property images', function() {
      // verify property exists
      expect(instance).to.have.property('images');

      // set and verify value
      var expectedValue = generateMockData('ItemImagesByMarketplace', true);
      instance.images = expectedValue;
      expect(instance.images).to.equal(expectedValue);
    });

    it('should have the property productTypes', function() {
      // verify property exists
      expect(instance).to.have.property('productTypes');

      // set and verify value
      var expectedValue = generateMockData('ItemProductTypeByMarketplace', true);
      instance.productTypes = expectedValue;
      expect(instance.productTypes).to.equal(expectedValue);
    });

    it('should have the property relationships', function() {
      // verify property exists
      expect(instance).to.have.property('relationships');

      // set and verify value
      var expectedValue = generateMockData('ItemRelationshipsByMarketplace', true);
      instance.relationships = expectedValue;
      expect(instance.relationships).to.equal(expectedValue);
    });

    it('should have the property salesRanks', function() {
      // verify property exists
      expect(instance).to.have.property('salesRanks');

      // set and verify value
      var expectedValue = generateMockData('ItemSalesRanksByMarketplace', true);
      instance.salesRanks = expectedValue;
      expect(instance.salesRanks).to.equal(expectedValue);
    });

    it('should have the property summaries', function() {
      // verify property exists
      expect(instance).to.have.property('summaries');

      // set and verify value
      var expectedValue = generateMockData('ItemSummaryByMarketplace', true);
      instance.summaries = expectedValue;
      expect(instance.summaries).to.equal(expectedValue);
    });

    it('should have the property vendorDetails', function() {
      // verify property exists
      expect(instance).to.have.property('vendorDetails');

      // set and verify value
      var expectedValue = generateMockData('ItemVendorDetailsByMarketplace', true);
      instance.vendorDetails = expectedValue;
      expect(instance.vendorDetails).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForCatalogItems[dataType];
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

}));
