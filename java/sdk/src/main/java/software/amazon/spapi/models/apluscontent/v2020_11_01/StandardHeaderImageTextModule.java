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
import java.util.Objects;

/** Standard headline text, an image, and body text. */
@Schema(description = "Standard headline text, an image, and body text.")
public class StandardHeaderImageTextModule {
    @SerializedName("headline")
    private TextComponent headline = null;

    @SerializedName("block")
    private StandardImageTextBlock block = null;

    public StandardHeaderImageTextModule headline(TextComponent headline) {
        this.headline = headline;
        return this;
    }

    /**
     * Get headline
     *
     * @return headline
     */
    @Schema(description = "")
    public TextComponent getHeadline() {
        return headline;
    }

    public void setHeadline(TextComponent headline) {
        this.headline = headline;
    }

    public StandardHeaderImageTextModule block(StandardImageTextBlock block) {
        this.block = block;
        return this;
    }

    /**
     * Get block
     *
     * @return block
     */
    @Schema(description = "")
    public StandardImageTextBlock getBlock() {
        return block;
    }

    public void setBlock(StandardImageTextBlock block) {
        this.block = block;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        StandardHeaderImageTextModule standardHeaderImageTextModule = (StandardHeaderImageTextModule) o;
        return Objects.equals(this.headline, standardHeaderImageTextModule.headline)
                && Objects.equals(this.block, standardHeaderImageTextModule.block);
    }

    @Override
    public int hashCode() {
        return Objects.hash(headline, block);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class StandardHeaderImageTextModule {\n");

        sb.append("    headline: ").append(toIndentedString(headline)).append("\n");
        sb.append("    block: ").append(toIndentedString(block)).append("\n");
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
