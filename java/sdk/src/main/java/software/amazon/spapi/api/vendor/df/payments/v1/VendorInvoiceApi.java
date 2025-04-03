/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.vendor.df.payments.v1;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.amazon.SellingPartnerAPIAA.RateLimitConfiguration;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import software.amazon.spapi.ApiCallback;
import software.amazon.spapi.ApiClient;
import software.amazon.spapi.ApiException;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.Configuration;
import software.amazon.spapi.Pair;
import software.amazon.spapi.ProgressRequestBody;
import software.amazon.spapi.ProgressResponseBody;
import software.amazon.spapi.StringUtil;
import software.amazon.spapi.models.vendor.df.payments.v1.SubmitInvoiceRequest;
import software.amazon.spapi.models.vendor.df.payments.v1.SubmitInvoiceResponse;

public class VendorInvoiceApi {
    private ApiClient apiClient;

    VendorInvoiceApi() {
        this(Configuration.getDefaultApiClient());
    }

    public VendorInvoiceApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for submitInvoice
     *
     * @param body The request body containing one or more invoices for vendor orders. (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call submitInvoiceCall(
            SubmitInvoiceRequest body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/vendor/directFulfillment/payments/v1/invoices";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {"application/json"};
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if (progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new okhttp3.Interceptor() {
                @Override
                public okhttp3.Response intercept(okhttp3.Interceptor.Chain chain) throws IOException {
                    okhttp3.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse
                            .newBuilder()
                            .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                            .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] {};
        return apiClient.buildCall(
                localVarPath,
                "POST",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                localVarAuthNames,
                progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call submitInvoiceValidateBeforeCall(
            SubmitInvoiceRequest body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling submitInvoice(Async)");
        }

        okhttp3.Call call = submitInvoiceCall(body, progressListener, progressRequestListener);
        return call;
    }

    /**
     * Submits one or more invoices for a vendor&#x27;s direct fulfillment orders. **Usage Plan:** | Rate (requests per
     * second) | Burst | | ---- | ---- | | 10 | 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the
     * usage plan rate limits that were applied to the requested operation, when available. The table above indicates
     * the default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and
     * Rate Limits in the Selling Partner
     * API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body containing one or more invoices for vendor orders. (required)
     * @return SubmitInvoiceResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public SubmitInvoiceResponse submitInvoice(SubmitInvoiceRequest body) throws ApiException, LWAException {
        ApiResponse<SubmitInvoiceResponse> resp = submitInvoiceWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Submits one or more invoices for a vendor&#x27;s direct fulfillment orders. **Usage Plan:** | Rate (requests per
     * second) | Burst | | ---- | ---- | | 10 | 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the
     * usage plan rate limits that were applied to the requested operation, when available. The table above indicates
     * the default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and
     * Rate Limits in the Selling Partner
     * API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body containing one or more invoices for vendor orders. (required)
     * @return ApiResponse&lt;SubmitInvoiceResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<SubmitInvoiceResponse> submitInvoiceWithHttpInfo(SubmitInvoiceRequest body)
            throws ApiException, LWAException {
        okhttp3.Call call = submitInvoiceValidateBeforeCall(body, null, null);
        Type localVarReturnType = new TypeToken<SubmitInvoiceResponse>() {}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * (asynchronously) Submits one or more invoices for a vendor&#x27;s direct fulfillment orders. **Usage Plan:** |
     * Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response
     * header returns the usage plan rate limits that were applied to the requested operation, when available. The table
     * above indicates the default rate and burst values for this operation. Selling partners whose business demands
     * require higher throughput may see higher rate and burst values than those shown here. For more information, see
     * [Usage Plans and Rate Limits in the Selling Partner
     * API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body containing one or more invoices for vendor orders. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call submitInvoiceAsync(SubmitInvoiceRequest body, final ApiCallback<SubmitInvoiceResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        okhttp3.Call call = submitInvoiceValidateBeforeCall(body, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<SubmitInvoiceResponse>() {}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }

    public static class Builder {
        private LWAAuthorizationCredentials lwaAuthorizationCredentials;
        private String endpoint;
        private LWAAccessTokenCache lwaAccessTokenCache;
        private Boolean disableAccessTokenCache = false;
        private RateLimitConfiguration rateLimitConfiguration;

        public Builder lwaAuthorizationCredentials(LWAAuthorizationCredentials lwaAuthorizationCredentials) {
            this.lwaAuthorizationCredentials = lwaAuthorizationCredentials;
            return this;
        }

        public Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        public Builder lwaAccessTokenCache(LWAAccessTokenCache lwaAccessTokenCache) {
            this.lwaAccessTokenCache = lwaAccessTokenCache;
            return this;
        }

        public Builder disableAccessTokenCache() {
            this.disableAccessTokenCache = true;
            return this;
        }

        public Builder rateLimitConfigurationOnRequests(RateLimitConfiguration rateLimitConfiguration) {
            this.rateLimitConfiguration = rateLimitConfiguration;
            return this;
        }

        public Builder disableRateLimitOnRequests() {
            this.rateLimitConfiguration = null;
            return this;
        }

        public VendorInvoiceApi build() {
            if (lwaAuthorizationCredentials == null) {
                throw new RuntimeException("LWAAuthorizationCredentials not set");
            }

            if (StringUtil.isEmpty(endpoint)) {
                throw new RuntimeException("Endpoint not set");
            }

            LWAAuthorizationSigner lwaAuthorizationSigner = null;
            if (disableAccessTokenCache) {
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials);
            } else {
                if (lwaAccessTokenCache == null) {
                    lwaAccessTokenCache = new LWAAccessTokenCacheImpl();
                }
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials, lwaAccessTokenCache);
            }

            return new VendorInvoiceApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint)
                    .setRateLimiter(rateLimitConfiguration));
        }
    }
}
