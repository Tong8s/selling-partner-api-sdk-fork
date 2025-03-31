/**
 * Selling Partner API for Retail Procurement Transaction Status
 * The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors.
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
    define(['expect.js', 'sinon', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('sinon'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sinon, root.SellingPartnerApiForRetailProcurementTransactionStatus);
  }
}(this, function(expect, sinon, SellingPartnerApiForRetailProcurementTransactionStatus) {
  'use strict';

  var instance;
  var sandbox;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

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
          const ModelClass = SellingPartnerApiForRetailProcurementTransactionStatus[dataType];
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
  

// Generate mock requests and responses for each operation
const mockgetTransactionData = {
  request: {
    'transactionId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetTransactionResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForRetailProcurementTransactionStatus.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForRetailProcurementTransactionStatus.VendorTransactionApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('VendorTransactionApi', function() {
    describe('getTransaction', function() {
      
      it('should successfully call getTransaction', function(done) {
        instance.apiClient.callApi.resolves(mockgetTransactionData.response);

        const params = [
          mockgetTransactionData.request['transactionId']
        ];
        instance.getTransaction(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForRetailProcurementTransactionStatus.GetTransactionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getTransactionWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetTransactionData.response);

        const params = [
          mockgetTransactionData.request['transactionId']
        ];
        instance.getTransactionWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetTransactionData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetTransactionData.request['transactionId']
        ];
        instance.getTransaction(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });

    describe('constructor', function() {
      it('should use default ApiClient when none provided', function() {
        var defaultInstance = new SellingPartnerApiForRetailProcurementTransactionStatus.VendorTransactionApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForRetailProcurementTransactionStatus.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForRetailProcurementTransactionStatus.ApiClient();
        var customInstance = new SellingPartnerApiForRetailProcurementTransactionStatus.VendorTransactionApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
