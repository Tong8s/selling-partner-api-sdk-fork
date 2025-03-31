/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, sinon, SellingPartnerApiForCatalogItems) {
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
          const ModelClass = SellingPartnerApiForCatalogItems[dataType];
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
const mockgetCatalogItemData = {
  request: {
    'asin': generateMockData('String'),
    'marketplaceIds': generateMockData('String', true),
  },
  response: {
    data: generateMockData('Item'),
    statusCode: 200,
    headers: {}
  }
};
const mocksearchCatalogItemsData = {
  request: {
    'marketplaceIds': generateMockData('String', true),
  },
  response: {
    data: generateMockData('ItemSearchResults'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForCatalogItems.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForCatalogItems.CatalogApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('CatalogApi', function() {
    describe('getCatalogItem', function() {
      
      it('should successfully call getCatalogItem', function(done) {
        instance.apiClient.callApi.resolves(mockgetCatalogItemData.response);

        const params = [
          mockgetCatalogItemData.request['asin'],
          mockgetCatalogItemData.request['marketplaceIds'],
        ];
        instance.getCatalogItem(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForCatalogItems.Item).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getCatalogItemWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetCatalogItemData.response);

        const params = [
          mockgetCatalogItemData.request['asin'],
          mockgetCatalogItemData.request['marketplaceIds'],
        ];
        instance.getCatalogItemWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetCatalogItemData.response.statusCode)
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
          mockgetCatalogItemData.request['asin'],
          mockgetCatalogItemData.request['marketplaceIds'],
        ];
        instance.getCatalogItem(...params)
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
    describe('searchCatalogItems', function() {
      
      it('should successfully call searchCatalogItems', function(done) {
        instance.apiClient.callApi.resolves(mocksearchCatalogItemsData.response);

        const params = [
          mocksearchCatalogItemsData.request['marketplaceIds'],
        ];
        instance.searchCatalogItems(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForCatalogItems.ItemSearchResults).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call searchCatalogItemsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mocksearchCatalogItemsData.response);

        const params = [
          mocksearchCatalogItemsData.request['marketplaceIds'],
        ];
        instance.searchCatalogItemsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mocksearchCatalogItemsData.response.statusCode)
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
          mocksearchCatalogItemsData.request['marketplaceIds'],
        ];
        instance.searchCatalogItems(...params)
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
        var defaultInstance = new SellingPartnerApiForCatalogItems.CatalogApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForCatalogItems.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForCatalogItems.ApiClient();
        var customInstance = new SellingPartnerApiForCatalogItems.CatalogApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
