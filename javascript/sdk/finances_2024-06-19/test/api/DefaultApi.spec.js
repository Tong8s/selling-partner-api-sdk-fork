/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    factory(root.expect, root.sinon, root.TheSellingPartnerApiForFinances);
  }
}(this, function(expect, sinon, TheSellingPartnerApiForFinances) {
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
          const ModelClass = TheSellingPartnerApiForFinances[dataType];
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
const mocklistTransactionsData = {
  request: {
    'postedAfter': generateMockData('Date'),
  },
  response: {
    data: generateMockData('ListTransactionsResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new TheSellingPartnerApiForFinances.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new TheSellingPartnerApiForFinances.DefaultApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('DefaultApi', function() {
    describe('listTransactions', function() {
      
      it('should successfully call listTransactions', function(done) {
        instance.apiClient.callApi.resolves(mocklistTransactionsData.response);

        const params = [
          mocklistTransactionsData.request['postedAfter'],
        ];
        instance.listTransactions(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForFinances.ListTransactionsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call listTransactionsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocklistTransactionsData.response);

        const params = [
          mocklistTransactionsData.request['postedAfter'],
        ];
        instance.listTransactionsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocklistTransactionsData.response.statusCode)
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
          mocklistTransactionsData.request['postedAfter'],
        ];
        instance.listTransactions(...params)
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
        var defaultInstance = new TheSellingPartnerApiForFinances.DefaultApi();
        expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForFinances.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new TheSellingPartnerApiForFinances.ApiClient();
        var customInstance = new TheSellingPartnerApiForFinances.DefaultApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
