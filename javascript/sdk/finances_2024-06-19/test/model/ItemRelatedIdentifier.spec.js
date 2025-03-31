/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    factory(root.expect, root.TheSellingPartnerApiForFinances);
  }
}(this, function(expect, TheSellingPartnerApiForFinances) {
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

  describe('ItemRelatedIdentifier', function() {
    it('should create an instance of ItemRelatedIdentifier', function() {
      // uncomment below and update the code to test ItemRelatedIdentifier
      //var instance = new TheSellingPartnerApiForFinances.ItemRelatedIdentifier();
      //expect(instance).to.be.a(TheSellingPartnerApiForFinances.ItemRelatedIdentifier);
    });

    it('should have the property itemRelatedIdentifierName (base name: "itemRelatedIdentifierName")', function() {
      // uncomment below and update the code to test the property itemRelatedIdentifierName
      //var instance = new TheSellingPartnerApiForFinances.ItemRelatedIdentifier();
      //expect(instance).to.be();
    });

    it('should have the property itemRelatedIdentifierValue (base name: "itemRelatedIdentifierValue")', function() {
      // uncomment below and update the code to test the property itemRelatedIdentifierValue
      //var instance = new TheSellingPartnerApiForFinances.ItemRelatedIdentifier();
      //expect(instance).to.be();
    });

  });

}));