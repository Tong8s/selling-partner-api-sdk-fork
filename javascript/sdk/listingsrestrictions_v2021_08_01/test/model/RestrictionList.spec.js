/**
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
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
    factory(root.expect, root.SellingPartnerApiForListingsRestrictions);
  }
}(this, function(expect, SellingPartnerApiForListingsRestrictions) {
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

  describe('RestrictionList', function() {
    it('should create an instance of RestrictionList', function() {
      // uncomment below and update the code to test RestrictionList
      //var instance = new SellingPartnerApiForListingsRestrictions.RestrictionList();
      //expect(instance).to.be.a(SellingPartnerApiForListingsRestrictions.RestrictionList);
    });

    it('should have the property restrictions (base name: "restrictions")', function() {
      // uncomment below and update the code to test the property restrictions
      //var instance = new SellingPartnerApiForListingsRestrictions.RestrictionList();
      //expect(instance).to.be();
    });

  });

}));