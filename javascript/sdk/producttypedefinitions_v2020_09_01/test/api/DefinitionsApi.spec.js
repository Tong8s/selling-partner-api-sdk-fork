/**
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](doc:product-type-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-09-01
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForProductTypeDefinitions);
  }
}(this, function(expect, sinon, SellingPartnerApiForProductTypeDefinitions) {
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
          const ModelClass = SellingPartnerApiForProductTypeDefinitions[dataType];
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
const mockgetDefinitionsProductTypeData = {
  request: {
    'productType': generateMockData('String'),
    'marketplaceIds': generateMockData('String', true),
  },
  response: {
    data: generateMockData('ProductTypeDefinition'),
    statusCode: 200,
    headers: {}
  }
};
const mocksearchDefinitionsProductTypesData = {
  request: {
    'marketplaceIds': generateMockData('String', true),
  },
  response: {
    data: generateMockData('ProductTypeList'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForProductTypeDefinitions.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('DefinitionsApi', function() {
    describe('getDefinitionsProductType', function() {
      
      it('should successfully call getDefinitionsProductType', function(done) {
        instance.apiClient.callApi.resolves(mockgetDefinitionsProductTypeData.response);

        const params = [
          mockgetDefinitionsProductTypeData.request['productType'],
          mockgetDefinitionsProductTypeData.request['marketplaceIds'],
        ];
        instance.getDefinitionsProductType(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForProductTypeDefinitions.ProductTypeDefinition).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getDefinitionsProductTypeWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetDefinitionsProductTypeData.response);

        const params = [
          mockgetDefinitionsProductTypeData.request['productType'],
          mockgetDefinitionsProductTypeData.request['marketplaceIds'],
        ];
        instance.getDefinitionsProductTypeWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetDefinitionsProductTypeData.response.statusCode)
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
          mockgetDefinitionsProductTypeData.request['productType'],
          mockgetDefinitionsProductTypeData.request['marketplaceIds'],
        ];
        instance.getDefinitionsProductType(...params)
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
    describe('searchDefinitionsProductTypes', function() {
      
      it('should successfully call searchDefinitionsProductTypes', function(done) {
        instance.apiClient.callApi.resolves(mocksearchDefinitionsProductTypesData.response);

        const params = [
          mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
        ];
        instance.searchDefinitionsProductTypes(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForProductTypeDefinitions.ProductTypeList).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call searchDefinitionsProductTypesWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocksearchDefinitionsProductTypesData.response);

        const params = [
          mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
        ];
        instance.searchDefinitionsProductTypesWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocksearchDefinitionsProductTypesData.response.statusCode)
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
          mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
        ];
        instance.searchDefinitionsProductTypes(...params)
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
        var defaultInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForProductTypeDefinitions.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForProductTypeDefinitions.ApiClient();
        var customInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
