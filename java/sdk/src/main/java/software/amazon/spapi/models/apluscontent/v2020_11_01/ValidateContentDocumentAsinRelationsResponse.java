/*
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * OpenAPI spec version: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.apluscontent.v2020_11_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** ValidateContentDocumentAsinRelationsResponse */
public class ValidateContentDocumentAsinRelationsResponse extends AplusResponse {
    @SerializedName("errors")
    private List<Error> errors = new ArrayList<Error>();

    public ValidateContentDocumentAsinRelationsResponse errors(List<Error> errors) {
        this.errors = errors;
        return this;
    }

    public ValidateContentDocumentAsinRelationsResponse addErrorsItem(Error errorsItem) {
        this.errors.add(errorsItem);
        return this;
    }

    /**
     * A list of error responses that are returned when a request is unsuccessful.
     *
     * @return errors
     */
    @Schema(
            required = true,
            description = "A list of error responses that are returned when a request is unsuccessful.")
    public List<Error> getErrors() {
        return errors;
    }

    public void setErrors(List<Error> errors) {
        this.errors = errors;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ValidateContentDocumentAsinRelationsResponse validateContentDocumentAsinRelationsResponse =
                (ValidateContentDocumentAsinRelationsResponse) o;
        return Objects.equals(this.errors, validateContentDocumentAsinRelationsResponse.errors) && super.equals(o);
    }

    @Override
    public int hashCode() {
        return Objects.hash(errors, super.hashCode());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ValidateContentDocumentAsinRelationsResponse {\n");
        sb.append("    ").append(toIndentedString(super.toString())).append("\n");
        sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
