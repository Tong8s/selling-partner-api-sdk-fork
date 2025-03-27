/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
* Enum class PrepOwner.
* @enum {}
* @readonly
*/
export default class PrepOwner {
    
        /**
         * value: "AMAZON"
         * @const
         */
        "AMAZON" = "AMAZON";

    
        /**
         * value: "SELLER"
         * @const
         */
        "SELLER" = "SELLER";

    

    /**
    * Returns a <code>PrepOwner</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.fulfillmentinbound_v0.model/PrepOwner} The enum <code>PrepOwner</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

