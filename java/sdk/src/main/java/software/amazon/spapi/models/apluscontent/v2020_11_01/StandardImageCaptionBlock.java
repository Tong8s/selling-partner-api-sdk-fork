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

/** The A+ Content standard image and caption block. */
@Schema(description = "The A+ Content standard image and caption block.")
public class StandardImageCaptionBlock {
    @SerializedName("image")
    private ImageComponent image = null;

    @SerializedName("caption")
    private TextComponent caption = null;

    public StandardImageCaptionBlock image(ImageComponent image) {
        this.image = image;
        return this;
    }

    /**
     * Get image
     *
     * @return image
     */
    @Schema(description = "")
    public ImageComponent getImage() {
        return image;
    }

    public void setImage(ImageComponent image) {
        this.image = image;
    }

    public StandardImageCaptionBlock caption(TextComponent caption) {
        this.caption = caption;
        return this;
    }

    /**
     * Get caption
     *
     * @return caption
     */
    @Schema(description = "")
    public TextComponent getCaption() {
        return caption;
    }

    public void setCaption(TextComponent caption) {
        this.caption = caption;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        StandardImageCaptionBlock standardImageCaptionBlock = (StandardImageCaptionBlock) o;
        return Objects.equals(this.image, standardImageCaptionBlock.image)
                && Objects.equals(this.caption, standardImageCaptionBlock.caption);
    }

    @Override
    public int hashCode() {
        return Objects.hash(image, caption);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class StandardImageCaptionBlock {\n");

        sb.append("    image: ").append(toIndentedString(image)).append("\n");
        sb.append("    caption: ").append(toIndentedString(caption)).append("\n");
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
