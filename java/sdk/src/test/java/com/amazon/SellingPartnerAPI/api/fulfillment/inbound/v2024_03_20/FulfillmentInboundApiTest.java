/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.fulfillment.inbound.v2024_03_20;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPI.api.commons.ApiTest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CancelInboundPlanResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CancelSelfShipAppointmentRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CancelSelfShipAppointmentResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmDeliveryWindowOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmPackingOptionResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmPlacementOptionResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmShipmentContentUpdatePreviewResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmTransportationOptionsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ConfirmTransportationOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ContentUpdatePreview;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CreateInboundPlanRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CreateInboundPlanResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CreateMarketplaceItemLabelsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CreateMarketplaceItemLabelsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ErrorList;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateDeliveryWindowOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GeneratePackingOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GeneratePlacementOptionsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GeneratePlacementOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateSelfShipAppointmentSlotsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateSelfShipAppointmentSlotsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateShipmentContentUpdatePreviewsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateShipmentContentUpdatePreviewsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateTransportationOptionsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GenerateTransportationOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GetDeliveryChallanDocumentResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.GetSelfShipAppointmentSlotsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.InboundOperationStatus;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.InboundPlan;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListDeliveryWindowOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListInboundPlanBoxesResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListInboundPlanItemsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListInboundPlanPalletsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListInboundPlansResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListItemComplianceDetailsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListPackingGroupBoxesResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListPackingGroupItemsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListPackingOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListPlacementOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListPrepDetailsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListShipmentBoxesResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListShipmentContentUpdatePreviewsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListShipmentItemsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListShipmentPalletsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ListTransportationOptionsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ScheduleSelfShipAppointmentRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ScheduleSelfShipAppointmentResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SetPackingInformationRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SetPackingInformationResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SetPrepDetailsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SetPrepDetailsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Shipment;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateInboundPlanNameRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateItemComplianceDetailsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateItemComplianceDetailsResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateShipmentNameRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateShipmentSourceAddressRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateShipmentSourceAddressResponse;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateShipmentTrackingDetailsRequest;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.UpdateShipmentTrackingDetailsResponse;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class FulfillmentInboundApiTest extends ApiTest {

private final FulfillmentInboundApi api = new FulfillmentInboundApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void cancelInboundPlanTest() throws Exception {
        instructBackendMock("cancelInboundPlan", "202");
        String inboundPlanId = "";

        ApiResponse<CancelInboundPlanResponse> response = api.cancelInboundPlanWithHttpInfo(inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void cancelSelfShipAppointmentTest() throws Exception {
        instructBackendMock("cancelSelfShipAppointment", "202");
        CancelSelfShipAppointmentRequest body = new CancelSelfShipAppointmentRequest();String inboundPlanId = "";String shipmentId = "";

        ApiResponse<CancelSelfShipAppointmentResponse> response = api.cancelSelfShipAppointmentWithHttpInfo(body, inboundPlanId, shipmentId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void confirmDeliveryWindowOptionsTest() throws Exception {
        instructBackendMock("confirmDeliveryWindowOptions", "202");
        String inboundPlanId = "";String shipmentId = "";String deliveryWindowOptionId = "";

        ApiResponse<ConfirmDeliveryWindowOptionsResponse> response = api.confirmDeliveryWindowOptionsWithHttpInfo(inboundPlanId, shipmentId, deliveryWindowOptionId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void confirmPackingOptionTest() throws Exception {
        instructBackendMock("confirmPackingOption", "202");
        String inboundPlanId = "";String packingOptionId = "";

        ApiResponse<ConfirmPackingOptionResponse> response = api.confirmPackingOptionWithHttpInfo(inboundPlanId, packingOptionId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void confirmPlacementOptionTest() throws Exception {
        instructBackendMock("confirmPlacementOption", "202");
        String inboundPlanId = "";String placementOptionId = "";

        ApiResponse<ConfirmPlacementOptionResponse> response = api.confirmPlacementOptionWithHttpInfo(inboundPlanId, placementOptionId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void confirmShipmentContentUpdatePreviewTest() throws Exception {
        instructBackendMock("confirmShipmentContentUpdatePreview", "202");
        String inboundPlanId = "";String shipmentId = "";String contentUpdatePreviewId = "";

        ApiResponse<ConfirmShipmentContentUpdatePreviewResponse> response = api.confirmShipmentContentUpdatePreviewWithHttpInfo(inboundPlanId, shipmentId, contentUpdatePreviewId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void confirmTransportationOptionsTest() throws Exception {
        instructBackendMock("confirmTransportationOptions", "202");
        ConfirmTransportationOptionsRequest body = new ConfirmTransportationOptionsRequest();String inboundPlanId = "";

        ApiResponse<ConfirmTransportationOptionsResponse> response = api.confirmTransportationOptionsWithHttpInfo(body, inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void createInboundPlanTest() throws Exception {
        instructBackendMock("createInboundPlan", "202");
        CreateInboundPlanRequest body = new CreateInboundPlanRequest();

        ApiResponse<CreateInboundPlanResponse> response = api.createInboundPlanWithHttpInfo(body);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void createMarketplaceItemLabelsTest() throws Exception {
        instructBackendMock("createMarketplaceItemLabels", "200");
        CreateMarketplaceItemLabelsRequest body = new CreateMarketplaceItemLabelsRequest();

        ApiResponse<CreateMarketplaceItemLabelsResponse> response = api.createMarketplaceItemLabelsWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generateDeliveryWindowOptionsTest() throws Exception {
        instructBackendMock("generateDeliveryWindowOptions", "202");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<GenerateDeliveryWindowOptionsResponse> response = api.generateDeliveryWindowOptionsWithHttpInfo(inboundPlanId, shipmentId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generatePackingOptionsTest() throws Exception {
        instructBackendMock("generatePackingOptions", "202");
        String inboundPlanId = "";

        ApiResponse<GeneratePackingOptionsResponse> response = api.generatePackingOptionsWithHttpInfo(inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generatePlacementOptionsTest() throws Exception {
        instructBackendMock("generatePlacementOptions", "202");
        GeneratePlacementOptionsRequest body = new GeneratePlacementOptionsRequest();String inboundPlanId = "";

        ApiResponse<GeneratePlacementOptionsResponse> response = api.generatePlacementOptionsWithHttpInfo(body, inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generateSelfShipAppointmentSlotsTest() throws Exception {
        instructBackendMock("generateSelfShipAppointmentSlots", "201");
        GenerateSelfShipAppointmentSlotsRequest body = new GenerateSelfShipAppointmentSlotsRequest();String inboundPlanId = "";String shipmentId = "";

        ApiResponse<GenerateSelfShipAppointmentSlotsResponse> response = api.generateSelfShipAppointmentSlotsWithHttpInfo(body, inboundPlanId, shipmentId);

        assertEquals(201, response.getStatusCode());
        if(201 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generateShipmentContentUpdatePreviewsTest() throws Exception {
        instructBackendMock("generateShipmentContentUpdatePreviews", "202");
        GenerateShipmentContentUpdatePreviewsRequest body = new GenerateShipmentContentUpdatePreviewsRequest();String inboundPlanId = "";String shipmentId = "";

        ApiResponse<GenerateShipmentContentUpdatePreviewsResponse> response = api.generateShipmentContentUpdatePreviewsWithHttpInfo(body, inboundPlanId, shipmentId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void generateTransportationOptionsTest() throws Exception {
        instructBackendMock("generateTransportationOptions", "202");
        GenerateTransportationOptionsRequest body = new GenerateTransportationOptionsRequest();String inboundPlanId = "";

        ApiResponse<GenerateTransportationOptionsResponse> response = api.generateTransportationOptionsWithHttpInfo(body, inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getDeliveryChallanDocumentTest() throws Exception {
        instructBackendMock("getDeliveryChallanDocument", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<GetDeliveryChallanDocumentResponse> response = api.getDeliveryChallanDocumentWithHttpInfo(inboundPlanId, shipmentId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getInboundOperationStatusTest() throws Exception {
        instructBackendMock("getInboundOperationStatus", "200");
        String operationId = "";

        ApiResponse<InboundOperationStatus> response = api.getInboundOperationStatusWithHttpInfo(operationId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getInboundPlanTest() throws Exception {
        instructBackendMock("getInboundPlan", "200");
        String inboundPlanId = "";

        ApiResponse<InboundPlan> response = api.getInboundPlanWithHttpInfo(inboundPlanId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getSelfShipAppointmentSlotsTest() throws Exception {
        instructBackendMock("getSelfShipAppointmentSlots", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<GetSelfShipAppointmentSlotsResponse> response = api.getSelfShipAppointmentSlotsWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getShipmentTest() throws Exception {
        instructBackendMock("getShipment", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<Shipment> response = api.getShipmentWithHttpInfo(inboundPlanId, shipmentId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getShipmentContentUpdatePreviewTest() throws Exception {
        instructBackendMock("getShipmentContentUpdatePreview", "200");
        String inboundPlanId = "";String shipmentId = "";String contentUpdatePreviewId = "";

        ApiResponse<ContentUpdatePreview> response = api.getShipmentContentUpdatePreviewWithHttpInfo(inboundPlanId, shipmentId, contentUpdatePreviewId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listDeliveryWindowOptionsTest() throws Exception {
        instructBackendMock("listDeliveryWindowOptions", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<ListDeliveryWindowOptionsResponse> response = api.listDeliveryWindowOptionsWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInboundPlanBoxesTest() throws Exception {
        instructBackendMock("listInboundPlanBoxes", "200");
        String inboundPlanId = "";

        ApiResponse<ListInboundPlanBoxesResponse> response = api.listInboundPlanBoxesWithHttpInfo(inboundPlanId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInboundPlanItemsTest() throws Exception {
        instructBackendMock("listInboundPlanItems", "200");
        String inboundPlanId = "";

        ApiResponse<ListInboundPlanItemsResponse> response = api.listInboundPlanItemsWithHttpInfo(inboundPlanId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInboundPlanPalletsTest() throws Exception {
        instructBackendMock("listInboundPlanPallets", "200");
        String inboundPlanId = "";

        ApiResponse<ListInboundPlanPalletsResponse> response = api.listInboundPlanPalletsWithHttpInfo(inboundPlanId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInboundPlansTest() throws Exception {
        instructBackendMock("listInboundPlans", "200");
        

        ApiResponse<ListInboundPlansResponse> response = api.listInboundPlansWithHttpInfo(null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listItemComplianceDetailsTest() throws Exception {
        instructBackendMock("listItemComplianceDetails", "200");
        List<String> mskus = new ArrayList<>();String marketplaceId = "";

        ApiResponse<ListItemComplianceDetailsResponse> response = api.listItemComplianceDetailsWithHttpInfo(mskus, marketplaceId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listPackingGroupBoxesTest() throws Exception {
        instructBackendMock("listPackingGroupBoxes", "200");
        String inboundPlanId = "";String packingGroupId = "";

        ApiResponse<ListPackingGroupBoxesResponse> response = api.listPackingGroupBoxesWithHttpInfo(inboundPlanId, packingGroupId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listPackingGroupItemsTest() throws Exception {
        instructBackendMock("listPackingGroupItems", "200");
        String inboundPlanId = "";String packingGroupId = "";

        ApiResponse<ListPackingGroupItemsResponse> response = api.listPackingGroupItemsWithHttpInfo(inboundPlanId, packingGroupId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listPackingOptionsTest() throws Exception {
        instructBackendMock("listPackingOptions", "200");
        String inboundPlanId = "";

        ApiResponse<ListPackingOptionsResponse> response = api.listPackingOptionsWithHttpInfo(inboundPlanId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listPlacementOptionsTest() throws Exception {
        instructBackendMock("listPlacementOptions", "200");
        String inboundPlanId = "";

        ApiResponse<ListPlacementOptionsResponse> response = api.listPlacementOptionsWithHttpInfo(inboundPlanId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listPrepDetailsTest() throws Exception {
        instructBackendMock("listPrepDetails", "200");
        String marketplaceId = "";List<String> mskus = new ArrayList<>();

        ApiResponse<ListPrepDetailsResponse> response = api.listPrepDetailsWithHttpInfo(marketplaceId, mskus);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listShipmentBoxesTest() throws Exception {
        instructBackendMock("listShipmentBoxes", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<ListShipmentBoxesResponse> response = api.listShipmentBoxesWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listShipmentContentUpdatePreviewsTest() throws Exception {
        instructBackendMock("listShipmentContentUpdatePreviews", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<ListShipmentContentUpdatePreviewsResponse> response = api.listShipmentContentUpdatePreviewsWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listShipmentItemsTest() throws Exception {
        instructBackendMock("listShipmentItems", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<ListShipmentItemsResponse> response = api.listShipmentItemsWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listShipmentPalletsTest() throws Exception {
        instructBackendMock("listShipmentPallets", "200");
        String inboundPlanId = "";String shipmentId = "";

        ApiResponse<ListShipmentPalletsResponse> response = api.listShipmentPalletsWithHttpInfo(inboundPlanId, shipmentId, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listTransportationOptionsTest() throws Exception {
        instructBackendMock("listTransportationOptions", "200");
        String inboundPlanId = "";

        ApiResponse<ListTransportationOptionsResponse> response = api.listTransportationOptionsWithHttpInfo(inboundPlanId, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void scheduleSelfShipAppointmentTest() throws Exception {
        instructBackendMock("scheduleSelfShipAppointment", "200");
        ScheduleSelfShipAppointmentRequest body = new ScheduleSelfShipAppointmentRequest();String inboundPlanId = "";String shipmentId = "";String slotId = "";

        ApiResponse<ScheduleSelfShipAppointmentResponse> response = api.scheduleSelfShipAppointmentWithHttpInfo(body, inboundPlanId, shipmentId, slotId);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void setPackingInformationTest() throws Exception {
        instructBackendMock("setPackingInformation", "202");
        SetPackingInformationRequest body = new SetPackingInformationRequest();String inboundPlanId = "";

        ApiResponse<SetPackingInformationResponse> response = api.setPackingInformationWithHttpInfo(body, inboundPlanId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void setPrepDetailsTest() throws Exception {
        instructBackendMock("setPrepDetails", "202");
        SetPrepDetailsRequest body = new SetPrepDetailsRequest();

        ApiResponse<SetPrepDetailsResponse> response = api.setPrepDetailsWithHttpInfo(body);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void updateInboundPlanNameTest() throws Exception {
        instructBackendMock("updateInboundPlanName", "204");
        UpdateInboundPlanNameRequest body = new UpdateInboundPlanNameRequest();String inboundPlanId = "";

        api.updateInboundPlanNameWithHttpInfo(body, inboundPlanId);

    }

    @Test
    public void updateItemComplianceDetailsTest() throws Exception {
        instructBackendMock("updateItemComplianceDetails", "202");
        UpdateItemComplianceDetailsRequest body = new UpdateItemComplianceDetailsRequest();String marketplaceId = "";

        ApiResponse<UpdateItemComplianceDetailsResponse> response = api.updateItemComplianceDetailsWithHttpInfo(body, marketplaceId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void updateShipmentNameTest() throws Exception {
        instructBackendMock("updateShipmentName", "204");
        UpdateShipmentNameRequest body = new UpdateShipmentNameRequest();String inboundPlanId = "";String shipmentId = "";

        api.updateShipmentNameWithHttpInfo(body, inboundPlanId, shipmentId);

    }

    @Test
    public void updateShipmentSourceAddressTest() throws Exception {
        instructBackendMock("updateShipmentSourceAddress", "202");
        UpdateShipmentSourceAddressRequest body = new UpdateShipmentSourceAddressRequest();String inboundPlanId = "";String shipmentId = "";

        ApiResponse<UpdateShipmentSourceAddressResponse> response = api.updateShipmentSourceAddressWithHttpInfo(body, inboundPlanId, shipmentId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

    @Test
    public void updateShipmentTrackingDetailsTest() throws Exception {
        instructBackendMock("updateShipmentTrackingDetails", "202");
        UpdateShipmentTrackingDetailsRequest body = new UpdateShipmentTrackingDetailsRequest();String inboundPlanId = "";String shipmentId = "";

        ApiResponse<UpdateShipmentTrackingDetailsResponse> response = api.updateShipmentTrackingDetailsWithHttpInfo(body, inboundPlanId, shipmentId);

        assertEquals(202, response.getStatusCode());
        if(202 != 204) assertNotNull(response.getData());
    }

}