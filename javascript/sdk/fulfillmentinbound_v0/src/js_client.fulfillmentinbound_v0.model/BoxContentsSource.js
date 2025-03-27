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
* Enum class BoxContentsSource.
* @enum {}
* @readonly
*/
export default class BoxContentsSource {
    
        /**
         * value: "NONE"
         * @const
         */
        "NONE" = "NONE";

    
        /**
         * value: "FEED"
         * @const
         */
        "FEED" = "FEED";

    
        /**
         * value: "2D_BARCODE"
         * @const
         */
        "2D_BARCODE" = "2D_BARCODE";

    
        /**
         * value: "INTERACTIVE"
         * @const
         */
        "INTERACTIVE" = "INTERACTIVE";

    

    /**
    * Returns a <code>BoxContentsSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.fulfillmentinbound_v0.model/BoxContentsSource} The enum <code>BoxContentsSource</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

