/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
    factory(root.expect, root.SellingPartnerApiForSolicitations);
  }
}(this, function(expect, SellingPartnerApiForSolicitations) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForSolicitations.GetSolicitationActionsForOrderResponse();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForSolicitations.GetSolicitationActionsForOrderResponse.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('GetSolicitationActionsForOrderResponse', function() {
    it('should create an instance of GetSolicitationActionsForOrderResponse', function() {
      expect(instance).to.be.a(SellingPartnerApiForSolicitations.GetSolicitationActionsForOrderResponse);
    });

    it('should have the property links', function() {
      // verify property exists
      expect(instance).to.have.property('links');

      // set and verify value
      var expectedValue = generateMockData('GetSolicitationActionsForOrderResponseLinks');
      instance.links = expectedValue;
      expect(instance.links).to.equal(expectedValue);
    });

    it('should have the property embedded', function() {
      // verify property exists
      expect(instance).to.have.property('embedded');

      // set and verify value
      var expectedValue = generateMockData('GetSolicitationActionsForOrderResponseEmbedded');
      instance.embedded = expectedValue;
      expect(instance.embedded).to.equal(expectedValue);
    });

    it('should have the property errors', function() {
      // verify property exists
      expect(instance).to.have.property('errors');

      // set and verify value
      var expectedValue = generateMockData('Error', true);
      instance.errors = expectedValue;
      expect(instance.errors).to.equal(expectedValue);
    });

  });

  // Helper function to generate random test data
  function generateMockData(dataType, isArray = false) {
    if (!dataType) return {};

    // Handle array types
    if (isArray) {
      return [generateMockData(dataType), generateMockData(dataType)];
    }

    switch(dataType) {
      case 'String':
        return 'mock-' + Math.random().toString(36).substring(2, 10);
      case 'Number':
        return Math.floor(Math.random() * 1000);
      case 'Boolean':
        return Math.random() > 0.5;
      case 'Date':
        return new Date().toISOString();
      default:
        try {
          const ModelClass = SellingPartnerApiForSolicitations[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            return instance;
          }
        } catch (e) {
          console.error("Error creating instance of", dataType);
          return {};
        }
        return {};
    }
  }

}));
