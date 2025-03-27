/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class Condition.
* @enum {}
* @readonly
*/
export default class Condition {
    
        /**
         * value: "New"
         * @const
         */
        "New" = "New";

    
        /**
         * value: "Used"
         * @const
         */
        "Used" = "Used";

    
        /**
         * value: "Collectible"
         * @const
         */
        "Collectible" = "Collectible";

    
        /**
         * value: "Refurbished"
         * @const
         */
        "Refurbished" = "Refurbished";

    
        /**
         * value: "Club"
         * @const
         */
        "Club" = "Club";

    

    /**
    * Returns a <code>Condition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.pricing_v2022_05_01.model/Condition} The enum <code>Condition</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

