/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.productfees.v0;

import static org.junit.jupiter.api.Assertions.*;

import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import java.util.stream.Collectors;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.junit.jupiter.api.Test;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.models.productfees.v0.FeesEstimateByIdRequest;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimateRequest;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimateResponse;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimatesResponse;

public class FeesApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final FeesApi api = new FeesApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void getMyFeesEstimateForASINTest() throws Exception {
        instructBackendMock("getMyFeesEstimateForASIN", "200");
        GetMyFeesEstimateRequest body = easyRandom.nextObject(GetMyFeesEstimateRequest.class);
        String asin = easyRandom.nextObject(String.class);

        ApiResponse<GetMyFeesEstimateResponse> response = api.getMyFeesEstimateForASINWithHttpInfo(body, asin);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getMyFeesEstimateForSKUTest() throws Exception {
        instructBackendMock("getMyFeesEstimateForSKU", "200");
        GetMyFeesEstimateRequest body = easyRandom.nextObject(GetMyFeesEstimateRequest.class);
        String sellerSKU = easyRandom.nextObject(String.class);

        ApiResponse<GetMyFeesEstimateResponse> response = api.getMyFeesEstimateForSKUWithHttpInfo(body, sellerSKU);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getMyFeesEstimatesTest() throws Exception {
        instructBackendMock("getMyFeesEstimates", "200");
        List<FeesEstimateByIdRequest> body =
                easyRandom.objects(FeesEstimateByIdRequest.class, 2).collect(Collectors.toList());

        ApiResponse<GetMyFeesEstimatesResponse> response = api.getMyFeesEstimatesWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    private void instructBackendMock(String response, String code) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI(endpoint + "/response/" + response + "/code/" + code))
                .POST(HttpRequest.BodyPublishers.noBody())
                .build();

        HttpClient.newHttpClient().send(request, BodyHandlers.discarding());
    }

    private static void assertValidResponsePayload(int statusCode, Object body) {
        if (statusCode != 204) assertNotNull(body);
    }
}
