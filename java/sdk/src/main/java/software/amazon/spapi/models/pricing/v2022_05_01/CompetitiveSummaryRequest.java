/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v2022_05_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** An individual &#x60;competitiveSummary&#x60; request for an ASIN and &#x60;marketplaceId&#x60;. */
@Schema(description = "An individual `competitiveSummary` request for an ASIN and `marketplaceId`.")
public class CompetitiveSummaryRequest {
    @SerializedName("asin")
    private String asin = null;

    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("includedData")
    private List<CompetitiveSummaryIncludedData> includedData = new ArrayList<CompetitiveSummaryIncludedData>();

    @SerializedName("lowestPricedOffersInputs")
    private List<LowestPricedOffersInput> lowestPricedOffersInputs = null;

    @SerializedName("method")
    private HttpMethod method = null;

    @SerializedName("uri")
    private String uri = null;

    public CompetitiveSummaryRequest asin(String asin) {
        this.asin = asin;
        return this;
    }

    /**
     * Get asin
     *
     * @return asin
     */
    @Schema(required = true, description = "")
    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    public CompetitiveSummaryRequest marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * Get marketplaceId
     *
     * @return marketplaceId
     */
    @Schema(required = true, description = "")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public CompetitiveSummaryRequest includedData(List<CompetitiveSummaryIncludedData> includedData) {
        this.includedData = includedData;
        return this;
    }

    public CompetitiveSummaryRequest addIncludedDataItem(CompetitiveSummaryIncludedData includedDataItem) {
        this.includedData.add(includedDataItem);
        return this;
    }

    /**
     * The list of requested competitive pricing data for the product.
     *
     * @return includedData
     */
    @Schema(required = true, description = "The list of requested competitive pricing data for the product.")
    public List<CompetitiveSummaryIncludedData> getIncludedData() {
        return includedData;
    }

    public void setIncludedData(List<CompetitiveSummaryIncludedData> includedData) {
        this.includedData = includedData;
    }

    public CompetitiveSummaryRequest lowestPricedOffersInputs(List<LowestPricedOffersInput> lowestPricedOffersInputs) {
        this.lowestPricedOffersInputs = lowestPricedOffersInputs;
        return this;
    }

    public CompetitiveSummaryRequest addLowestPricedOffersInputsItem(
            LowestPricedOffersInput lowestPricedOffersInputsItem) {
        if (this.lowestPricedOffersInputs == null) {
            this.lowestPricedOffersInputs = new ArrayList<LowestPricedOffersInput>();
        }
        this.lowestPricedOffersInputs.add(lowestPricedOffersInputsItem);
        return this;
    }

    /**
     * The list of &#x60;lowestPricedOffersInput&#x60; parameters that are used to build &#x60;lowestPricedOffers&#x60;
     * in the response. This attribute is only valid if &#x60;lowestPricedOffers&#x60; is requested in
     * &#x60;includedData&#x60;
     *
     * @return lowestPricedOffersInputs
     */
    @Schema(
            description =
                    "The list of `lowestPricedOffersInput` parameters that are used to build `lowestPricedOffers` in the response. This attribute is only valid if `lowestPricedOffers` is requested in `includedData`")
    public List<LowestPricedOffersInput> getLowestPricedOffersInputs() {
        return lowestPricedOffersInputs;
    }

    public void setLowestPricedOffersInputs(List<LowestPricedOffersInput> lowestPricedOffersInputs) {
        this.lowestPricedOffersInputs = lowestPricedOffersInputs;
    }

    public CompetitiveSummaryRequest method(HttpMethod method) {
        this.method = method;
        return this;
    }

    /**
     * Get method
     *
     * @return method
     */
    @Schema(required = true, description = "")
    public HttpMethod getMethod() {
        return method;
    }

    public void setMethod(HttpMethod method) {
        this.method = method;
    }

    public CompetitiveSummaryRequest uri(String uri) {
        this.uri = uri;
        return this;
    }

    /**
     * Get uri
     *
     * @return uri
     */
    @Schema(required = true, description = "")
    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CompetitiveSummaryRequest competitiveSummaryRequest = (CompetitiveSummaryRequest) o;
        return Objects.equals(this.asin, competitiveSummaryRequest.asin)
                && Objects.equals(this.marketplaceId, competitiveSummaryRequest.marketplaceId)
                && Objects.equals(this.includedData, competitiveSummaryRequest.includedData)
                && Objects.equals(this.lowestPricedOffersInputs, competitiveSummaryRequest.lowestPricedOffersInputs)
                && Objects.equals(this.method, competitiveSummaryRequest.method)
                && Objects.equals(this.uri, competitiveSummaryRequest.uri);
    }

    @Override
    public int hashCode() {
        return Objects.hash(asin, marketplaceId, includedData, lowestPricedOffersInputs, method, uri);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CompetitiveSummaryRequest {\n");

        sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    includedData: ").append(toIndentedString(includedData)).append("\n");
        sb.append("    lowestPricedOffersInputs: ")
                .append(toIndentedString(lowestPricedOffersInputs))
                .append("\n");
        sb.append("    method: ").append(toIndentedString(method)).append("\n");
        sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
