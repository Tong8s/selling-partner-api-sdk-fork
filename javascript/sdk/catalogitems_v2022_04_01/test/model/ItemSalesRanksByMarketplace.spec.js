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

  describe('ItemSalesRanksByMarketplace', function() {
    it('should create an instance of ItemSalesRanksByMarketplace', function() {
      // uncomment below and update the code to test ItemSalesRanksByMarketplace
      //var instance = new SellingPartnerApiForCatalogItems.ItemSalesRanksByMarketplace();
      //expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemSalesRanksByMarketplace);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForCatalogItems.ItemSalesRanksByMarketplace();
      //expect(instance).to.be();
    });

    it('should have the property classificationRanks (base name: "classificationRanks")', function() {
      // uncomment below and update the code to test the property classificationRanks
      //var instance = new SellingPartnerApiForCatalogItems.ItemSalesRanksByMarketplace();
      //expect(instance).to.be();
    });

    it('should have the property displayGroupRanks (base name: "displayGroupRanks")', function() {
      // uncomment below and update the code to test the property displayGroupRanks
      //var instance = new SellingPartnerApiForCatalogItems.ItemSalesRanksByMarketplace();
      //expect(instance).to.be();
    });

  });

}));