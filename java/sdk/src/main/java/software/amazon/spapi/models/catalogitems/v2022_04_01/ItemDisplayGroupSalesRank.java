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
import java.util.Objects;

/** Sales rank of an Amazon catalog item, grouped by website display group. */
@Schema(description = "Sales rank of an Amazon catalog item, grouped by website display group.")
public class ItemDisplayGroupSalesRank {
    @SerializedName("websiteDisplayGroup")
    private String websiteDisplayGroup = null;

    @SerializedName("title")
    private String title = null;

    @SerializedName("link")
    private String link = null;

    @SerializedName("rank")
    private Integer rank = null;

    public ItemDisplayGroupSalesRank websiteDisplayGroup(String websiteDisplayGroup) {
        this.websiteDisplayGroup = websiteDisplayGroup;
        return this;
    }

    /**
     * Name of the website display group that is associated with the sales rank
     *
     * @return websiteDisplayGroup
     */
    @Schema(required = true, description = "Name of the website display group that is associated with the sales rank")
    public String getWebsiteDisplayGroup() {
        return websiteDisplayGroup;
    }

    public void setWebsiteDisplayGroup(String websiteDisplayGroup) {
        this.websiteDisplayGroup = websiteDisplayGroup;
    }

    public ItemDisplayGroupSalesRank title(String title) {
        this.title = title;
        return this;
    }

    /**
     * Name of the sales rank.
     *
     * @return title
     */
    @Schema(required = true, description = "Name of the sales rank.")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ItemDisplayGroupSalesRank link(String link) {
        this.link = link;
        return this;
    }

    /**
     * Corresponding Amazon retail website URL for the sales rank.
     *
     * @return link
     */
    @Schema(description = "Corresponding Amazon retail website URL for the sales rank.")
    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public ItemDisplayGroupSalesRank rank(Integer rank) {
        this.rank = rank;
        return this;
    }

    /**
     * Sales rank.
     *
     * @return rank
     */
    @Schema(required = true, description = "Sales rank.")
    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemDisplayGroupSalesRank itemDisplayGroupSalesRank = (ItemDisplayGroupSalesRank) o;
        return Objects.equals(this.websiteDisplayGroup, itemDisplayGroupSalesRank.websiteDisplayGroup)
                && Objects.equals(this.title, itemDisplayGroupSalesRank.title)
                && Objects.equals(this.link, itemDisplayGroupSalesRank.link)
                && Objects.equals(this.rank, itemDisplayGroupSalesRank.rank);
    }

    @Override
    public int hashCode() {
        return Objects.hash(websiteDisplayGroup, title, link, rank);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemDisplayGroupSalesRank {\n");

        sb.append("    websiteDisplayGroup: ")
                .append(toIndentedString(websiteDisplayGroup))
                .append("\n");
        sb.append("    title: ").append(toIndentedString(title)).append("\n");
        sb.append("    link: ").append(toIndentedString(link)).append("\n");
        sb.append("    rank: ").append(toIndentedString(rank)).append("\n");
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
