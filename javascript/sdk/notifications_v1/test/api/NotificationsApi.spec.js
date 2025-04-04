/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
    factory(root.expect, root.sinon, root.SellingPartnerApiForNotifications);
  }
}(this, function(expect, sinon, SellingPartnerApiForNotifications) {
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
          const ModelClass = SellingPartnerApiForNotifications[dataType];
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
const mockcreateDestinationData = {
  request: {
    'body': generateMockData('CreateDestinationRequest')
  },
  response: {
    data: generateMockData('CreateDestinationResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateSubscriptionData = {
  request: {
    'notificationType': generateMockData('String'),
    'body': generateMockData('CreateSubscriptionRequest')
  },
  response: {
    data: generateMockData('CreateSubscriptionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockdeleteDestinationData = {
  request: {
    'destinationId': generateMockData('String')
  },
  response: {
    data: generateMockData('DeleteDestinationResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockdeleteSubscriptionByIdData = {
  request: {
    'subscriptionId': generateMockData('String'),
    'notificationType': generateMockData('String')
  },
  response: {
    data: generateMockData('DeleteSubscriptionByIdResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetDestinationData = {
  request: {
    'destinationId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetDestinationResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetDestinationsData = {
  request: {
  },
  response: {
    data: generateMockData('GetDestinationsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetSubscriptionData = {
  request: {
    'notificationType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetSubscriptionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetSubscriptionByIdData = {
  request: {
    'subscriptionId': generateMockData('String'),
    'notificationType': generateMockData('String')
  },
  response: {
    data: generateMockData('GetSubscriptionByIdResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new SellingPartnerApiForNotifications.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForNotifications.NotificationsApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('NotificationsApi', function() {
    describe('createDestination', function() {
      
      it('should successfully call createDestination', function(done) {
        instance.apiClient.callApi.resolves(mockcreateDestinationData.response);

        const params = [
          mockcreateDestinationData.request['body']
        ];
        instance.createDestination(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.CreateDestinationResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createDestinationWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateDestinationData.response);

        const params = [
          mockcreateDestinationData.request['body']
        ];
        instance.createDestinationWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateDestinationData.response.statusCode)
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
          mockcreateDestinationData.request['body']
        ];
        instance.createDestination(...params)
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
    describe('createSubscription', function() {
      
      it('should successfully call createSubscription', function(done) {
        instance.apiClient.callApi.resolves(mockcreateSubscriptionData.response);

        const params = [
          mockcreateSubscriptionData.request['notificationType'],
          mockcreateSubscriptionData.request['body']
        ];
        instance.createSubscription(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.CreateSubscriptionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createSubscriptionWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateSubscriptionData.response);

        const params = [
          mockcreateSubscriptionData.request['notificationType'],
          mockcreateSubscriptionData.request['body']
        ];
        instance.createSubscriptionWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateSubscriptionData.response.statusCode)
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
          mockcreateSubscriptionData.request['notificationType'],
          mockcreateSubscriptionData.request['body']
        ];
        instance.createSubscription(...params)
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
    describe('deleteDestination', function() {
      
      it('should successfully call deleteDestination', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteDestinationData.response);

        const params = [
          mockdeleteDestinationData.request['destinationId']
        ];
        instance.deleteDestination(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.DeleteDestinationResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call deleteDestinationWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteDestinationData.response);

        const params = [
          mockdeleteDestinationData.request['destinationId']
        ];
        instance.deleteDestinationWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockdeleteDestinationData.response.statusCode)
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
          mockdeleteDestinationData.request['destinationId']
        ];
        instance.deleteDestination(...params)
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
    describe('deleteSubscriptionById', function() {
      
      it('should successfully call deleteSubscriptionById', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteSubscriptionByIdData.response);

        const params = [
          mockdeleteSubscriptionByIdData.request['subscriptionId'],
          mockdeleteSubscriptionByIdData.request['notificationType']
        ];
        instance.deleteSubscriptionById(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.DeleteSubscriptionByIdResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call deleteSubscriptionByIdWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockdeleteSubscriptionByIdData.response);

        const params = [
          mockdeleteSubscriptionByIdData.request['subscriptionId'],
          mockdeleteSubscriptionByIdData.request['notificationType']
        ];
        instance.deleteSubscriptionByIdWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockdeleteSubscriptionByIdData.response.statusCode)
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
          mockdeleteSubscriptionByIdData.request['subscriptionId'],
          mockdeleteSubscriptionByIdData.request['notificationType']
        ];
        instance.deleteSubscriptionById(...params)
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
    describe('getDestination', function() {
      
      it('should successfully call getDestination', function(done) {
        instance.apiClient.callApi.resolves(mockgetDestinationData.response);

        const params = [
          mockgetDestinationData.request['destinationId']
        ];
        instance.getDestination(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.GetDestinationResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getDestinationWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetDestinationData.response);

        const params = [
          mockgetDestinationData.request['destinationId']
        ];
        instance.getDestinationWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetDestinationData.response.statusCode)
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
          mockgetDestinationData.request['destinationId']
        ];
        instance.getDestination(...params)
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
    describe('getDestinations', function() {
      
      it('should successfully call getDestinations', function(done) {
        instance.apiClient.callApi.resolves(mockgetDestinationsData.response);

        instance.getDestinations()
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.GetDestinationsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getDestinationsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetDestinationsData.response);

        instance.getDestinationsWithHttpInfo()
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetDestinationsData.response.statusCode)
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

        instance.getDestinations()
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
    describe('getSubscription', function() {
      
      it('should successfully call getSubscription', function(done) {
        instance.apiClient.callApi.resolves(mockgetSubscriptionData.response);

        const params = [
          mockgetSubscriptionData.request['notificationType'],
        ];
        instance.getSubscription(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.GetSubscriptionResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getSubscriptionWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetSubscriptionData.response);

        const params = [
          mockgetSubscriptionData.request['notificationType'],
        ];
        instance.getSubscriptionWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetSubscriptionData.response.statusCode)
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
          mockgetSubscriptionData.request['notificationType'],
        ];
        instance.getSubscription(...params)
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
    describe('getSubscriptionById', function() {
      
      it('should successfully call getSubscriptionById', function(done) {
        instance.apiClient.callApi.resolves(mockgetSubscriptionByIdData.response);

        const params = [
          mockgetSubscriptionByIdData.request['subscriptionId'],
          mockgetSubscriptionByIdData.request['notificationType']
        ];
        instance.getSubscriptionById(...params)
          .then(function(data) {
            expect(data instanceof SellingPartnerApiForNotifications.GetSubscriptionByIdResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getSubscriptionByIdWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetSubscriptionByIdData.response);

        const params = [
          mockgetSubscriptionByIdData.request['subscriptionId'],
          mockgetSubscriptionByIdData.request['notificationType']
        ];
        instance.getSubscriptionByIdWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetSubscriptionByIdData.response.statusCode)
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
          mockgetSubscriptionByIdData.request['subscriptionId'],
          mockgetSubscriptionByIdData.request['notificationType']
        ];
        instance.getSubscriptionById(...params)
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
        var defaultInstance = new SellingPartnerApiForNotifications.NotificationsApi();
        expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForNotifications.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new SellingPartnerApiForNotifications.ApiClient();
        var customInstance = new SellingPartnerApiForNotifications.NotificationsApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
