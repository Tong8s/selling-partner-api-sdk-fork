/*
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2021-06-30
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.reports.v2021_06_30;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The response for the &#x60;getReports&#x60; operation. */
@Schema(description = "The response for the `getReports` operation.")
public class GetReportsResponse {
    @SerializedName("reports")
    private ReportList reports = null;

    @SerializedName("nextToken")
    private String nextToken = null;

    public GetReportsResponse reports(ReportList reports) {
        this.reports = reports;
        return this;
    }

    /**
     * Get reports
     *
     * @return reports
     */
    @Schema(required = true, description = "")
    public ReportList getReports() {
        return reports;
    }

    public void setReports(ReportList reports) {
        this.reports = reports;
    }

    public GetReportsResponse nextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }

    /**
     * Returned when the number of results exceeds &#x60;pageSize&#x60;. To get the next page of results, call
     * &#x60;getReports&#x60; with this token as the only parameter.
     *
     * @return nextToken
     */
    @Schema(
            description =
                    "Returned when the number of results exceeds `pageSize`. To get the next page of results, call `getReports` with this token as the only parameter.")
    public String getNextToken() {
        return nextToken;
    }

    public void setNextToken(String nextToken) {
        this.nextToken = nextToken;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetReportsResponse getReportsResponse = (GetReportsResponse) o;
        return Objects.equals(this.reports, getReportsResponse.reports)
                && Objects.equals(this.nextToken, getReportsResponse.nextToken);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reports, nextToken);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GetReportsResponse {\n");

        sb.append("    reports: ").append(toIndentedString(reports)).append("\n");
        sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
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
