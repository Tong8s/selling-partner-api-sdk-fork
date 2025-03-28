# SellingPartnerApiForRetailProcurementShipments.Shipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorShipmentIdentifier** | **String** | Unique Transportation ID created by Vendor (Should not be used over the last 365 days). | 
**transactionType** | **String** | Indicates the type of  transportation request such as (New,Cancel,Confirm and PackageLabelRequest). Each transactiontype has a unique set of operation and there are corresponding details to be populated for each operation. | 
**buyerReferenceNumber** | **String** | The buyer Reference Number is a unique identifier generated by buyer for all Collect/WePay shipments when you submit a transportation request. This field is mandatory for Collect/WePay shipments. | [optional] 
**transactionDate** | **Date** | Date on which the transportation request was submitted. | 
**currentShipmentStatus** | **String** | Indicates the current shipment status. | [optional] 
**currentshipmentStatusDate** | **Date** | Date and time when the last status was updated. | [optional] 
**shipmentStatusDetails** | [**[ShipmentStatusDetails]**](ShipmentStatusDetails.md) | Indicates the list of current shipment status details and when the last update was received from carrier this is available on shipment Details response. | [optional] 
**shipmentCreateDate** | **Date** | The date and time of the shipment request created by vendor. | [optional] 
**shipmentConfirmDate** | **Date** | The date and time of the departure of the shipment from the vendor&#39;s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future. | [optional] 
**packageLabelCreateDate** | **Date** | The date and time of the package label created for the shipment by buyer. | [optional] 
**shipmentFreightTerm** | **String** | Indicates if this transportation request is WePay/Collect or TheyPay/Prepaid. This is a mandatory information. | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipmentMeasurements** | [**TransportShipmentMeasurements**](TransportShipmentMeasurements.md) |  | [optional] 
**collectFreightPickupDetails** | [**CollectFreightPickupDetails**](CollectFreightPickupDetails.md) |  | [optional] 
**purchaseOrders** | [**[PurchaseOrders]**](PurchaseOrders.md) | Indicates the purchase orders involved for the transportation request. This group is an array create 1 for each PO and list their corresponding items. This information is used for deciding the route,truck allocation and storage efficiently. This is a mandatory information for Buyer performing transportation from vendor warehouse (WePay/Collect) | [optional] 
**importDetails** | [**ImportDetails**](ImportDetails.md) |  | [optional] 
**containers** | [**[Containers]**](Containers.md) | A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level. | [optional] 
**transportationDetails** | [**TransportationDetails**](TransportationDetails.md) |  | [optional] 



## Enum: TransactionTypeEnum


* `New` (value: `"New"`)

* `Cancel` (value: `"Cancel"`)





## Enum: CurrentShipmentStatusEnum


* `Created` (value: `"Created"`)

* `TransportationRequested` (value: `"TransportationRequested"`)

* `CarrierAssigned` (value: `"CarrierAssigned"`)

* `Shipped` (value: `"Shipped"`)





## Enum: ShipmentFreightTermEnum


* `Collect` (value: `"Collect"`)

* `Prepaid` (value: `"Prepaid"`)




