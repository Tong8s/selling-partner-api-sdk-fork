/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
* Enum class OtherDeliveryAttributes.
* @enum {}
* @readonly
*/
export class OtherDeliveryAttributes {
    
        /**
         * value: "HAS_ACCESS_POINT"
         * @const
         */
        "HAS_ACCESS_POINT" = "HAS_ACCESS_POINT";

    
        /**
         * value: "PALLET_ENABLED"
         * @const
         */
        "PALLET_ENABLED" = "PALLET_ENABLED";

    
        /**
         * value: "PALLET_DISABLED"
         * @const
         */
        "PALLET_DISABLED" = "PALLET_DISABLED";

    

    /**
    * Returns a <code>OtherDeliveryAttributes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.orders_v0.model/OtherDeliveryAttributes} The enum <code>OtherDeliveryAttributes</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
