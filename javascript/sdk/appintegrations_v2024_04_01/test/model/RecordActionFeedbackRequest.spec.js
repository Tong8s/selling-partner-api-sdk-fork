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
    instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest();
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

  describe('RecordActionFeedbackRequest', function() {
    it('should create an instance of RecordActionFeedbackRequest', function() {
      // uncomment below and update the code to test RecordActionFeedbackRequest
      //var instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest();
      //expect(instance).to.be.a(TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest);
    });

    it('should have the property feedbackActionCode (base name: "feedbackActionCode")', function() {
      // uncomment below and update the code to test the property feedbackActionCode
      //var instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest();
      //expect(instance).to.be();
    });

  });

}));
