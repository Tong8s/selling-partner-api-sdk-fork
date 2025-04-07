/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/**
 * Contains information regarding the Shipping Settings Automation program, such as whether the order&#x27;s shipping
 * settings were generated automatically, and what those settings are.
 */
@Schema(
        description =
                "Contains information regarding the Shipping Settings Automation program, such as whether the order's shipping settings were generated automatically, and what those settings are.")
public class AutomatedShippingSettings {
    @SerializedName("HasAutomatedShippingSettings")
    private Boolean hasAutomatedShippingSettings = null;

    @SerializedName("AutomatedCarrier")
    private String automatedCarrier = null;

    @SerializedName("AutomatedShipMethod")
    private String automatedShipMethod = null;

    public AutomatedShippingSettings hasAutomatedShippingSettings(Boolean hasAutomatedShippingSettings) {
        this.hasAutomatedShippingSettings = hasAutomatedShippingSettings;
        return this;
    }

    /**
     * When true, this order has automated shipping settings generated by Amazon. This order could be identified as an
     * SSA order.
     *
     * @return hasAutomatedShippingSettings
     */
    @Schema(
            description =
                    "When true, this order has automated shipping settings generated by Amazon. This order could be identified as an SSA order.")
    public Boolean isHasAutomatedShippingSettings() {
        return hasAutomatedShippingSettings;
    }

    public void setHasAutomatedShippingSettings(Boolean hasAutomatedShippingSettings) {
        this.hasAutomatedShippingSettings = hasAutomatedShippingSettings;
    }

    public AutomatedShippingSettings automatedCarrier(String automatedCarrier) {
        this.automatedCarrier = automatedCarrier;
        return this;
    }

    /**
     * Auto-generated carrier for SSA orders.
     *
     * @return automatedCarrier
     */
    @Schema(description = "Auto-generated carrier for SSA orders.")
    public String getAutomatedCarrier() {
        return automatedCarrier;
    }

    public void setAutomatedCarrier(String automatedCarrier) {
        this.automatedCarrier = automatedCarrier;
    }

    public AutomatedShippingSettings automatedShipMethod(String automatedShipMethod) {
        this.automatedShipMethod = automatedShipMethod;
        return this;
    }

    /**
     * Auto-generated ship method for SSA orders.
     *
     * @return automatedShipMethod
     */
    @Schema(description = "Auto-generated ship method for SSA orders.")
    public String getAutomatedShipMethod() {
        return automatedShipMethod;
    }

    public void setAutomatedShipMethod(String automatedShipMethod) {
        this.automatedShipMethod = automatedShipMethod;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AutomatedShippingSettings automatedShippingSettings = (AutomatedShippingSettings) o;
        return Objects.equals(this.hasAutomatedShippingSettings, automatedShippingSettings.hasAutomatedShippingSettings)
                && Objects.equals(this.automatedCarrier, automatedShippingSettings.automatedCarrier)
                && Objects.equals(this.automatedShipMethod, automatedShippingSettings.automatedShipMethod);
    }

    @Override
    public int hashCode() {
        return Objects.hash(hasAutomatedShippingSettings, automatedCarrier, automatedShipMethod);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class AutomatedShippingSettings {\n");

        sb.append("    hasAutomatedShippingSettings: ")
                .append(toIndentedString(hasAutomatedShippingSettings))
                .append("\n");
        sb.append("    automatedCarrier: ")
                .append(toIndentedString(automatedCarrier))
                .append("\n");
        sb.append("    automatedShipMethod: ")
                .append(toIndentedString(automatedShipMethod))
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
