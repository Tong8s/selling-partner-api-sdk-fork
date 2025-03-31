/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForTokens);
  }
}(this, function(expect, sinon, SellingPartnerApiForTokens) {
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
          const ModelClass = SellingPartnerApiForTokens[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            if (ModelClass.RequiredProperties) {
              ModelClass.RequiredProperties.forEach(prop => {
                const propType = ModelClass.types[prop];
                instance[prop] = generateMockData(propType);
              });
            }
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
const mockcreateRestrictedDataTokenData = {
  request: {
    'body': generateMockData('CreateRestrictedDataTokenRequest')
  },
  response: {
    data: generateMockData('CreateRestrictedDataTokenResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForTokens.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForTokens.TokensApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('TokensApi', function() {
    describe('createRestrictedDataToken', function() {
      
      it('should successfully call createRestrictedDataToken', function(done) {
        instance.apiClient.callApi.resolves(mockcreateRestrictedDataTokenData.response);

        const params = [
          mockcreateRestrictedDataTokenData.request['body']
        ];
        instance.createRestrictedDataToken(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForTokens.CreateRestrictedDataTokenResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createRestrictedDataTokenWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateRestrictedDataTokenData.response);

        const params = [
          mockcreateRestrictedDataTokenData.request['body']
        ];
        instance.createRestrictedDataTokenWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateRestrictedDataTokenData.response.statusCode)
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
          mockcreateRestrictedDataTokenData.request['body']
        ];
        instance.createRestrictedDataToken(...params)
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
        var defaultInstance = new SellingPartnerApiForTokens.TokensApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForTokens.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForTokens.ApiClient();
        var customInstance = new SellingPartnerApiForTokens.TokensApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
