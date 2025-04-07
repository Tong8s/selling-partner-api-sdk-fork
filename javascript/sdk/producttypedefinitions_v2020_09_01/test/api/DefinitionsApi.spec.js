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

import expect from 'expect.js';
import sinon from 'sinon';
import * as SellingPartnerApiForProductTypeDefinitions from '../../src/index.js';

let instance;
let sandbox;
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

describe('DefinitionsApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForProductTypeDefinitions.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getDefinitionsProductType', () => {
    it('should successfully call getDefinitionsProductType', async () => {
      instance.apiClient.callApi.resolves(mockgetDefinitionsProductTypeData.response);

      const params = [
        mockgetDefinitionsProductTypeData.request['productType'],
        mockgetDefinitionsProductTypeData.request['marketplaceIds'],
      ];
      const data = await instance.getDefinitionsProductType(...params);

      expect(data instanceof SellingPartnerApiForProductTypeDefinitions.ProductTypeDefinition).to.be.true;
    });

    it('should successfully call getDefinitionsProductTypeWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetDefinitionsProductTypeData.response);

      const params = [
        mockgetDefinitionsProductTypeData.request['productType'],
        mockgetDefinitionsProductTypeData.request['marketplaceIds'],
      ];
      const response = await instance.getDefinitionsProductTypeWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetDefinitionsProductTypeData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetDefinitionsProductTypeData.request['productType'],
          mockgetDefinitionsProductTypeData.request['marketplaceIds'],
        ];
        await instance.getDefinitionsProductType(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('searchDefinitionsProductTypes', () => {
    it('should successfully call searchDefinitionsProductTypes', async () => {
      instance.apiClient.callApi.resolves(mocksearchDefinitionsProductTypesData.response);

      const params = [
        mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
      ];
      const data = await instance.searchDefinitionsProductTypes(...params);

      expect(data instanceof SellingPartnerApiForProductTypeDefinitions.ProductTypeList).to.be.true;
    });

    it('should successfully call searchDefinitionsProductTypesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksearchDefinitionsProductTypesData.response);

      const params = [
        mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
      ];
      const response = await instance.searchDefinitionsProductTypesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksearchDefinitionsProductTypesData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksearchDefinitionsProductTypesData.request['marketplaceIds'],
        ];
        await instance.searchDefinitionsProductTypes(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForProductTypeDefinitions.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForProductTypeDefinitions.ApiClient();
      const customInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
