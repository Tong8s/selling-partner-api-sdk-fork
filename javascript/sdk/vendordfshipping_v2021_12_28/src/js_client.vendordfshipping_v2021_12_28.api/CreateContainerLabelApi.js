/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient.js";
import {CreateContainerLabelRequest} from '../js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelRequest.js';
import {CreateContainerLabelResponse} from '../js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelResponse.js';
import {ErrorList} from '../js_client.vendordfshipping_v2021_12_28.model/ErrorList.js';

/**
* CreateContainerLabel service.
* @module js_client.vendordfshipping_v2021_12_28.api/CreateContainerLabelApi
* @version 2021-12-28
*/
export class CreateContainerLabelApi {

    /**
    * Constructs a new CreateContainerLabelApi. 
    * @alias module:js_client.vendordfshipping_v2021_12_28.api/CreateContainerLabelApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * createContainerLabel
     * Creates a container (pallet) label for the associated shipment package.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelRequest} body Request body containing the container label data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelResponse} and HTTP response
     */
    createContainerLabelWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContainerLabel");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'containerLabel'];
      let returnType = CreateContainerLabelResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/2021-12-28/containerLabel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * createContainerLabel
     * Creates a container (pallet) label for the associated shipment package.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelRequest} body Request body containing the container label data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:js_client.vendordfshipping_v2021_12_28.model/CreateContainerLabelResponse}
     */
    createContainerLabel(body) {
      return this.createContainerLabelWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
