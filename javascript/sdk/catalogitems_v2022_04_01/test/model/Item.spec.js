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
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be.a(SellingPartnerApiForCatalogItems.Item);
    });

    it('should have the property asin (base name: "asin")', function() {
      // uncomment below and update the code to test the property asin
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property classifications (base name: "classifications")', function() {
      // uncomment below and update the code to test the property classifications
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property identifiers (base name: "identifiers")', function() {
      // uncomment below and update the code to test the property identifiers
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property productTypes (base name: "productTypes")', function() {
      // uncomment below and update the code to test the property productTypes
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property relationships (base name: "relationships")', function() {
      // uncomment below and update the code to test the property relationships
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property salesRanks (base name: "salesRanks")', function() {
      // uncomment below and update the code to test the property salesRanks
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property summaries (base name: "summaries")', function() {
      // uncomment below and update the code to test the property summaries
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

    it('should have the property vendorDetails (base name: "vendorDetails")', function() {
      // uncomment below and update the code to test the property vendorDetails
      //var instance = new SellingPartnerApiForCatalogItems.Item();
      //expect(instance).to.be();
    });

  });

}));