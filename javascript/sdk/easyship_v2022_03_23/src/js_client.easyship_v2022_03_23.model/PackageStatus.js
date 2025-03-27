/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class PackageStatus.
* @enum {}
* @readonly
*/
export default class PackageStatus {
    
        /**
         * value: "ReadyForPickup"
         * @const
         */
        "ReadyForPickup" = "ReadyForPickup";

    
        /**
         * value: "PickedUp"
         * @const
         */
        "PickedUp" = "PickedUp";

    
        /**
         * value: "AtOriginFC"
         * @const
         */
        "AtOriginFC" = "AtOriginFC";

    
        /**
         * value: "AtDestinationFC"
         * @const
         */
        "AtDestinationFC" = "AtDestinationFC";

    
        /**
         * value: "Delivered"
         * @const
         */
        "Delivered" = "Delivered";

    
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
         * value: "ReturnedToSeller"
         * @const
         */
        "ReturnedToSeller" = "ReturnedToSeller";

    
        /**
         * value: "LostInTransit"
         * @const
         */
        "LostInTransit" = "LostInTransit";

    
        /**
         * value: "LabelCanceled"
         * @const
         */
        "LabelCanceled" = "LabelCanceled";

    
        /**
         * value: "DamagedInTransit"
         * @const
         */
        "DamagedInTransit" = "DamagedInTransit";

    
        /**
         * value: "OutForDelivery"
         * @const
         */
        "OutForDelivery" = "OutForDelivery";

    

    /**
    * Returns a <code>PackageStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.easyship_v2022_03_23.model/PackageStatus} The enum <code>PackageStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

