/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class CustomerType.
* @enum {}
* @readonly
*/
export default class CustomerType {
    
        /**
         * value: "Consumer"
         * @const
         */
        "Consumer" = "Consumer";

    
        /**
         * value: "Business"
         * @const
         */
        "Business" = "Business";

    

    /**
    * Returns a <code>CustomerType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.pricing_v0.model/CustomerType} The enum <code>CustomerType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

