/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** GetInboundOperationStatus response. */
@Schema(description = "GetInboundOperationStatus response.")
public class InboundOperationStatus {
    @SerializedName("operation")
    private String operation = null;

    @SerializedName("operationId")
    private String operationId = null;

    @SerializedName("operationProblems")
    private List<OperationProblem> operationProblems = new ArrayList<OperationProblem>();

    @SerializedName("operationStatus")
    private OperationStatus operationStatus = null;

    public InboundOperationStatus operation(String operation) {
        this.operation = operation;
        return this;
    }

    /**
     * The name of the operation in the asynchronous API call.
     *
     * @return operation
     */
    @Schema(required = true, description = "The name of the operation in the asynchronous API call.")
    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public InboundOperationStatus operationId(String operationId) {
        this.operationId = operationId;
        return this;
    }

    /**
     * The operation ID returned by the asynchronous API call.
     *
     * @return operationId
     */
    @Schema(required = true, description = "The operation ID returned by the asynchronous API call.")
    public String getOperationId() {
        return operationId;
    }

    public void setOperationId(String operationId) {
        this.operationId = operationId;
    }

    public InboundOperationStatus operationProblems(List<OperationProblem> operationProblems) {
        this.operationProblems = operationProblems;
        return this;
    }

    public InboundOperationStatus addOperationProblemsItem(OperationProblem operationProblemsItem) {
        this.operationProblems.add(operationProblemsItem);
        return this;
    }

    /**
     * The problems in the processing of the asynchronous operation.
     *
     * @return operationProblems
     */
    @Schema(required = true, description = "The problems in the processing of the asynchronous operation.")
    public List<OperationProblem> getOperationProblems() {
        return operationProblems;
    }

    public void setOperationProblems(List<OperationProblem> operationProblems) {
        this.operationProblems = operationProblems;
    }

    public InboundOperationStatus operationStatus(OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }

    /**
     * Get operationStatus
     *
     * @return operationStatus
     */
    @Schema(required = true, description = "")
    public OperationStatus getOperationStatus() {
        return operationStatus;
    }

    public void setOperationStatus(OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InboundOperationStatus inboundOperationStatus = (InboundOperationStatus) o;
        return Objects.equals(this.operation, inboundOperationStatus.operation)
                && Objects.equals(this.operationId, inboundOperationStatus.operationId)
                && Objects.equals(this.operationProblems, inboundOperationStatus.operationProblems)
                && Objects.equals(this.operationStatus, inboundOperationStatus.operationStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(operation, operationId, operationProblems, operationStatus);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class InboundOperationStatus {\n");

        sb.append("    operation: ").append(toIndentedString(operation)).append("\n");
        sb.append("    operationId: ").append(toIndentedString(operationId)).append("\n");
        sb.append("    operationProblems: ")
                .append(toIndentedString(operationProblems))
                .append("\n");
        sb.append("    operationStatus: ")
                .append(toIndentedString(operationStatus))
                .append("\n");
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
