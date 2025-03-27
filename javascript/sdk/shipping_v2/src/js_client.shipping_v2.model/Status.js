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
* Enum class Status.
* @enum {}
* @readonly
*/
export default class Status {
    
        /**
         * value: "PreTransit"
         * @const
         */
        "PreTransit" = "PreTransit";

    
        /**
         * value: "InTransit"
         * @const
         */
        "InTransit" = "InTransit";

    
        /**
         * value: "Delivered"
         * @const
         */
        "Delivered" = "Delivered";

    
        /**
         * value: "Lost"
         * @const
         */
        "Lost" = "Lost";

    
        /**
         * value: "OutForDelivery"
         * @const
         */
        "OutForDelivery" = "OutForDelivery";

    
        /**
         * value: "Rejected"
         * @const
         */
        "Rejected" = "Rejected";

    
        /**
         * value: "Undeliverable"
         * @const
         */
        "Undeliverable" = "Undeliverable";

    
        /**
         * value: "DeliveryAttempted"
         * @const
         */
        "DeliveryAttempted" = "DeliveryAttempted";

    
        /**
         * value: "PickupCancelled"
         * @const
         */
        "PickupCancelled" = "PickupCancelled";

    
        /**
         * value: "AwaitingCustomerPickup"
         * @const
         */
        "AwaitingCustomerPickup" = "AwaitingCustomerPickup";

    

    /**
    * Returns a <code>Status</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.shipping_v2.model/Status} The enum <code>Status</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

