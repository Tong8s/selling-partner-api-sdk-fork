/*
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.sellers.v1;

import static org.junit.jupiter.api.Assertions.*;

import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.junit.jupiter.api.Test;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.models.sellers.v1.GetAccountResponse;
import software.amazon.spapi.models.sellers.v1.GetMarketplaceParticipationsResponse;

public class SellersApiTest {

    private static String endpoint = "http://localhost:3000";
    private static String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final SellersApi api = new SellersApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void getAccountTest() throws Exception {
        instructBackendMock("getAccount", "200");

        ApiResponse<GetAccountResponse> response = api.getAccountWithHttpInfo();

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getMarketplaceParticipationsTest() throws Exception {
        instructBackendMock("getMarketplaceParticipations", "200");

        ApiResponse<GetMarketplaceParticipationsResponse> response = api.getMarketplaceParticipationsWithHttpInfo();

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
