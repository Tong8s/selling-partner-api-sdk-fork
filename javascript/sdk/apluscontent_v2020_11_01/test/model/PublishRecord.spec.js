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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForAContentManagement);
  }
}(this, function(expect, SellingPartnerApiForAContentManagement) {
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

  describe('PublishRecord', function() {
    it('should create an instance of PublishRecord', function() {
      // uncomment below and update the code to test PublishRecord
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be.a(SellingPartnerApiForAContentManagement.PublishRecord);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

    it('should have the property asin (base name: "asin")', function() {
      // uncomment below and update the code to test the property asin
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "contentType")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

    it('should have the property contentSubType (base name: "contentSubType")', function() {
      // uncomment below and update the code to test the property contentSubType
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

    it('should have the property contentReferenceKey (base name: "contentReferenceKey")', function() {
      // uncomment below and update the code to test the property contentReferenceKey
      //var instance = new SellingPartnerApiForAContentManagement.PublishRecord();
      //expect(instance).to.be();
    });

  });

}));