/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class OwnerConstraint.
* @enum {}
* @readonly
*/
export class OwnerConstraint {
    
        /**
         * value: "AMAZON_ONLY"
         * @const
         */
        "AMAZON_ONLY" = "AMAZON_ONLY";

    
        /**
         * value: "NONE_ONLY"
         * @const
         */
        "NONE_ONLY" = "NONE_ONLY";

    
        /**
         * value: "SELLER_ONLY"
         * @const
         */
        "SELLER_ONLY" = "SELLER_ONLY";

    

    /**
    * Returns a <code>OwnerConstraint</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.fulfillmentinbound_v2024_03_20.model/OwnerConstraint} The enum <code>OwnerConstraint</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
