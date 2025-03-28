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
    instance = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest();
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

  describe('SetAppointmentFulfillmentDataRequest', function() {
    it('should create an instance of SetAppointmentFulfillmentDataRequest', function() {
      // uncomment below and update the code to test SetAppointmentFulfillmentDataRequest
      //var instance = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest();
      //expect(instance).to.be.a(SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest);
    });

    it('should have the property fulfillmentTime (base name: "fulfillmentTime")', function() {
      // uncomment below and update the code to test the property fulfillmentTime
      //var instance = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property appointmentResources (base name: "appointmentResources")', function() {
      // uncomment below and update the code to test the property appointmentResources
      //var instance = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentDocuments (base name: "fulfillmentDocuments")', function() {
      // uncomment below and update the code to test the property fulfillmentDocuments
      //var instance = new SellingPartnerApiForServices.SetAppointmentFulfillmentDataRequest();
      //expect(instance).to.be();
    });

  });

}));
