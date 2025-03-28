/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
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
    factory(root.expect, root.SellingPartnerApiForListingsItems);
  }
}(this, function(expect, SellingPartnerApiForListingsItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForListingsItems.ItemRelationship();
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

  describe('ItemRelationship', function() {
    it('should create an instance of ItemRelationship', function() {
      // uncomment below and update the code to test ItemRelationship
      //var instance = new SellingPartnerApiForListingsItems.ItemRelationship();
      //expect(instance).to.be.a(SellingPartnerApiForListingsItems.ItemRelationship);
    });

    it('should have the property childSkus (base name: "childSkus")', function() {
      // uncomment below and update the code to test the property childSkus
      //var instance = new SellingPartnerApiForListingsItems.ItemRelationship();
      //expect(instance).to.be();
    });

    it('should have the property parentSkus (base name: "parentSkus")', function() {
      // uncomment below and update the code to test the property parentSkus
      //var instance = new SellingPartnerApiForListingsItems.ItemRelationship();
      //expect(instance).to.be();
    });

    it('should have the property variationTheme (base name: "variationTheme")', function() {
      // uncomment below and update the code to test the property variationTheme
      //var instance = new SellingPartnerApiForListingsItems.ItemRelationship();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new SellingPartnerApiForListingsItems.ItemRelationship();
      //expect(instance).to.be();
    });

  });

}));
