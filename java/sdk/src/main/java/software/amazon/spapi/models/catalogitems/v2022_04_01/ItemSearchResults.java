/*
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.catalogitems.v2022_04_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** Items in the Amazon catalog and search-related metadata. */
@Schema(description = "Items in the Amazon catalog and search-related metadata.")
public class ItemSearchResults {
    @SerializedName("numberOfResults")
    private Integer numberOfResults = null;

    @SerializedName("pagination")
    private Pagination pagination = null;

    @SerializedName("refinements")
    private Refinements refinements = null;

    @SerializedName("items")
    private List<Item> items = new ArrayList<Item>();

    public ItemSearchResults numberOfResults(Integer numberOfResults) {
        this.numberOfResults = numberOfResults;
        return this;
    }

    /**
     * For searches that are based on &#x60;identifiers&#x60;, &#x60;numberOfResults&#x60; is the total number of Amazon
     * catalog items found. For searches that are based on &#x60;keywords&#x60;, &#x60;numberOfResults&#x60; is the
     * estimated total number of Amazon catalog items that are matched by the search query. Only results up to the page
     * count limit are returned per request regardless of the number found. **Note:** The maximum number of items
     * (ASINs) that can be returned and paged through is 1,000.
     *
     * @return numberOfResults
     */
    @Schema(
            required = true,
            description =
                    "For searches that are based on `identifiers`, `numberOfResults` is the total number of Amazon catalog items found. For searches that are based on `keywords`, `numberOfResults` is the estimated total number of Amazon catalog items that are matched by the search query. Only results up to the page count limit are returned per request regardless of the number found.  **Note:** The maximum number of items (ASINs) that can be returned and paged through is 1,000.")
    public Integer getNumberOfResults() {
        return numberOfResults;
    }

    public void setNumberOfResults(Integer numberOfResults) {
        this.numberOfResults = numberOfResults;
    }

    public ItemSearchResults pagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }

    /**
     * Get pagination
     *
     * @return pagination
     */
    @Schema(required = true, description = "")
    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    public ItemSearchResults refinements(Refinements refinements) {
        this.refinements = refinements;
        return this;
    }

    /**
     * Get refinements
     *
     * @return refinements
     */
    @Schema(required = true, description = "")
    public Refinements getRefinements() {
        return refinements;
    }

    public void setRefinements(Refinements refinements) {
        this.refinements = refinements;
    }

    public ItemSearchResults items(List<Item> items) {
        this.items = items;
        return this;
    }

    public ItemSearchResults addItemsItem(Item itemsItem) {
        this.items.add(itemsItem);
        return this;
    }

    /**
     * A list of items from the Amazon catalog.
     *
     * @return items
     */
    @Schema(required = true, description = "A list of items from the Amazon catalog.")
    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemSearchResults itemSearchResults = (ItemSearchResults) o;
        return Objects.equals(this.numberOfResults, itemSearchResults.numberOfResults)
                && Objects.equals(this.pagination, itemSearchResults.pagination)
                && Objects.equals(this.refinements, itemSearchResults.refinements)
                && Objects.equals(this.items, itemSearchResults.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(numberOfResults, pagination, refinements, items);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemSearchResults {\n");

        sb.append("    numberOfResults: ")
                .append(toIndentedString(numberOfResults))
                .append("\n");
        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
        sb.append("    refinements: ").append(toIndentedString(refinements)).append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
