/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
    factory(root.expect, root.SellingPartnerApiForMessaging);
  }
}(this, function(expect, SellingPartnerApiForMessaging) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForMessaging.CreateConfirmServiceDetailsResponse();
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

  describe('CreateConfirmServiceDetailsResponse', function() {
    it('should create an instance of CreateConfirmServiceDetailsResponse', function() {
      // uncomment below and update the code to test CreateConfirmServiceDetailsResponse
      //var instance = new SellingPartnerApiForMessaging.CreateConfirmServiceDetailsResponse();
      //expect(instance).to.be.a(SellingPartnerApiForMessaging.CreateConfirmServiceDetailsResponse);
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new SellingPartnerApiForMessaging.CreateConfirmServiceDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
