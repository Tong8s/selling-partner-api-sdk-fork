/**
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
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
    factory(root.expect, root.TheSellingPartnerApiForThirdPartyApplicationIntegrations);
  }
}(this, function(expect, TheSellingPartnerApiForThirdPartyApplicationIntegrations) {
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

  describe('DeleteNotificationsRequest', function() {
    it('should create an instance of DeleteNotificationsRequest', function() {
      // uncomment below and update the code to test DeleteNotificationsRequest
      //var instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest();
      //expect(instance).to.be.a(TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest);
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest();
      //expect(instance).to.be();
    });

    it('should have the property deletionReason (base name: "deletionReason")', function() {
      // uncomment below and update the code to test the property deletionReason
      //var instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest();
      //expect(instance).to.be();
    });

  });

}));