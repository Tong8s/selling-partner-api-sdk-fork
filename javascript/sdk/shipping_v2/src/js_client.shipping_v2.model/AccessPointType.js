/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class AccessPointType.
* @enum {}
* @readonly
*/
export default class AccessPointType {
    
        /**
         * value: "HELIX"
         * @const
         */
        "HELIX" = "HELIX";

    
        /**
         * value: "CAMPUS_LOCKER"
         * @const
         */
        "CAMPUS_LOCKER" = "CAMPUS_LOCKER";

    
        /**
         * value: "OMNI_LOCKER"
         * @const
         */
        "OMNI_LOCKER" = "OMNI_LOCKER";

    
        /**
         * value: "ODIN_LOCKER"
         * @const
         */
        "ODIN_LOCKER" = "ODIN_LOCKER";

    
        /**
         * value: "DOBBY_LOCKER"
         * @const
         */
        "DOBBY_LOCKER" = "DOBBY_LOCKER";

    
        /**
         * value: "CORE_LOCKER"
         * @const
         */
        "CORE_LOCKER" = "CORE_LOCKER";

    
        /**
         * value: "3P"
         * @const
         */
        "3P" = "3P";

    
        /**
         * value: "CAMPUS_ROOM"
         * @const
         */
        "CAMPUS_ROOM" = "CAMPUS_ROOM";

    

    /**
    * Returns a <code>AccessPointType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.shipping_v2.model/AccessPointType} The enum <code>AccessPointType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

