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
    instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
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

  describe('ItemSearchResults', function() {
    it('should create an instance of ItemSearchResults', function() {
      // uncomment below and update the code to test ItemSearchResults
      //var instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
      //expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemSearchResults);
    });

    it('should have the property numberOfResults (base name: "numberOfResults")', function() {
      // uncomment below and update the code to test the property numberOfResults
      //var instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
      //expect(instance).to.be();
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // uncomment below and update the code to test the property pagination
      //var instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
      //expect(instance).to.be();
    });

    it('should have the property refinements (base name: "refinements")', function() {
      // uncomment below and update the code to test the property refinements
      //var instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
      //expect(instance).to.be();
    });

  });

}));
