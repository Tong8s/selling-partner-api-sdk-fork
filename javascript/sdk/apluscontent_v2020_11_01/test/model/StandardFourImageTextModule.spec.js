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

  describe('StandardFourImageTextModule', function() {
    it('should create an instance of StandardFourImageTextModule', function() {
      // uncomment below and update the code to test StandardFourImageTextModule
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be.a(SellingPartnerApiForAContentManagement.StandardFourImageTextModule);
    });

    it('should have the property headline (base name: "headline")', function() {
      // uncomment below and update the code to test the property headline
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be();
    });

    it('should have the property block1 (base name: "block1")', function() {
      // uncomment below and update the code to test the property block1
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be();
    });

    it('should have the property block2 (base name: "block2")', function() {
      // uncomment below and update the code to test the property block2
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be();
    });

    it('should have the property block3 (base name: "block3")', function() {
      // uncomment below and update the code to test the property block3
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be();
    });

    it('should have the property block4 (base name: "block4")', function() {
      // uncomment below and update the code to test the property block4
      //var instance = new SellingPartnerApiForAContentManagement.StandardFourImageTextModule();
      //expect(instance).to.be();
    });

  });

}));