/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForServices.FulfillmentDocument();
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

  describe('FulfillmentDocument', function() {
    it('should create an instance of FulfillmentDocument', function() {
      // uncomment below and update the code to test FulfillmentDocument
      //var instance = new SellingPartnerApiForServices.FulfillmentDocument();
      //expect(instance).to.be.a(SellingPartnerApiForServices.FulfillmentDocument);
    });

    it('should have the property uploadDestinationId (base name: "uploadDestinationId")', function() {
      // uncomment below and update the code to test the property uploadDestinationId
      //var instance = new SellingPartnerApiForServices.FulfillmentDocument();
      //expect(instance).to.be();
    });

    it('should have the property contentSha256 (base name: "contentSha256")', function() {
      // uncomment below and update the code to test the property contentSha256
      //var instance = new SellingPartnerApiForServices.FulfillmentDocument();
      //expect(instance).to.be();
    });

  });

}));
