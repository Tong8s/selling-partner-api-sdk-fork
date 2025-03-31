/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
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
    factory(root.expect, root.SellingPartnerApiForDataKiosk);
  }
}(this, function(expect, SellingPartnerApiForDataKiosk) {
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

  describe('CreateQuerySpecification', function() {
    it('should create an instance of CreateQuerySpecification', function() {
      // uncomment below and update the code to test CreateQuerySpecification
      //var instance = new SellingPartnerApiForDataKiosk.CreateQuerySpecification();
      //expect(instance).to.be.a(SellingPartnerApiForDataKiosk.CreateQuerySpecification);
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new SellingPartnerApiForDataKiosk.CreateQuerySpecification();
      //expect(instance).to.be();
    });

    it('should have the property paginationToken (base name: "paginationToken")', function() {
      // uncomment below and update the code to test the property paginationToken
      //var instance = new SellingPartnerApiForDataKiosk.CreateQuerySpecification();
      //expect(instance).to.be();
    });

  });

}));