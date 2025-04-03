/*
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2023-11-15
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.datakiosk.v2023_11_15;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The response for the &#x60;getDocument&#x60; operation. */
@Schema(description = "The response for the `getDocument` operation.")
public class GetDocumentResponse {
    @SerializedName("documentId")
    private String documentId = null;

    @SerializedName("documentUrl")
    private String documentUrl = null;

    public GetDocumentResponse documentId(String documentId) {
        this.documentId = documentId;
        return this;
    }

    /**
     * The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner
     * account ID.
     *
     * @return documentId
     */
    @Schema(
            required = true,
            description =
                    "The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID.")
    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public GetDocumentResponse documentUrl(String documentUrl) {
        this.documentUrl = documentUrl;
        return this;
    }

    /**
     * A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the
     * Data Kiosk document is compressed, the &#x60;Content-Encoding&#x60; header will indicate the compression
     * algorithm. **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the
     * &#x60;Content-Encoding&#x60; header.
     *
     * @return documentUrl
     */
    @Schema(
            required = true,
            description =
                    "A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the `Content-Encoding` header will indicate the compression algorithm.  **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the `Content-Encoding` header.")
    public String getDocumentUrl() {
        return documentUrl;
    }

    public void setDocumentUrl(String documentUrl) {
        this.documentUrl = documentUrl;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetDocumentResponse getDocumentResponse = (GetDocumentResponse) o;
        return Objects.equals(this.documentId, getDocumentResponse.documentId)
                && Objects.equals(this.documentUrl, getDocumentResponse.documentUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(documentId, documentUrl);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GetDocumentResponse {\n");

        sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
        sb.append("    documentUrl: ").append(toIndentedString(documentUrl)).append("\n");
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
