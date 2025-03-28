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
    instance = new SellingPartnerApiForAContentManagement.TextComponent();
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

  describe('TextComponent', function() {
    it('should create an instance of TextComponent', function() {
      // uncomment below and update the code to test TextComponent
      //var instance = new SellingPartnerApiForAContentManagement.TextComponent();
      //expect(instance).to.be.a(SellingPartnerApiForAContentManagement.TextComponent);
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new SellingPartnerApiForAContentManagement.TextComponent();
      //expect(instance).to.be();
    });

    it('should have the property decoratorSet (base name: "decoratorSet")', function() {
      // uncomment below and update the code to test the property decoratorSet
      //var instance = new SellingPartnerApiForAContentManagement.TextComponent();
      //expect(instance).to.be();
    });

  });

}));
