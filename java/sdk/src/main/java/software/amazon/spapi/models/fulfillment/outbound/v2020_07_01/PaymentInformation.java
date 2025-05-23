/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.outbound.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** The attributes related to the payment made from customer to seller for this order. */
@Schema(description = "The attributes related to the payment made from customer to seller for this order.")
public class PaymentInformation {
    @SerializedName("paymentTransactionId")
    private String paymentTransactionId = null;

    @SerializedName("paymentMode")
    private String paymentMode = null;

    @SerializedName("paymentDate")
    private OffsetDateTime paymentDate = null;

    public PaymentInformation paymentTransactionId(String paymentTransactionId) {
        this.paymentTransactionId = paymentTransactionId;
        return this;
    }

    /**
     * The transaction identifier of this payment.
     *
     * @return paymentTransactionId
     */
    @Schema(required = true, description = "The transaction identifier of this payment.")
    public String getPaymentTransactionId() {
        return paymentTransactionId;
    }

    public void setPaymentTransactionId(String paymentTransactionId) {
        this.paymentTransactionId = paymentTransactionId;
    }

    public PaymentInformation paymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
        return this;
    }

    /**
     * The transaction mode of this payment.
     *
     * @return paymentMode
     */
    @Schema(required = true, description = "The transaction mode of this payment.")
    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public PaymentInformation paymentDate(OffsetDateTime paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }

    /**
     * Get paymentDate
     *
     * @return paymentDate
     */
    @Schema(required = true, description = "")
    public OffsetDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(OffsetDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PaymentInformation paymentInformation = (PaymentInformation) o;
        return Objects.equals(this.paymentTransactionId, paymentInformation.paymentTransactionId)
                && Objects.equals(this.paymentMode, paymentInformation.paymentMode)
                && Objects.equals(this.paymentDate, paymentInformation.paymentDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(paymentTransactionId, paymentMode, paymentDate);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PaymentInformation {\n");

        sb.append("    paymentTransactionId: ")
                .append(toIndentedString(paymentTransactionId))
                .append("\n");
        sb.append("    paymentMode: ").append(toIndentedString(paymentMode)).append("\n");
        sb.append("    paymentDate: ").append(toIndentedString(paymentDate)).append("\n");
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
