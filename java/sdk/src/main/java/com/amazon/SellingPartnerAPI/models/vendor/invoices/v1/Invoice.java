/*
 * Vendor Invoices v1
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.invoices.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.AdditionalDetails;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.AllowanceDetails;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.ChargeDetails;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.InvoiceItem;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.Money;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.PartyIdentification;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.PaymentTerms;
import com.amazon.SellingPartnerAPI.models.vendor.invoices.v1.TaxDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * Represents an invoice or credit note document with details about the transaction, parties involved, and line items.
 */
@Schema(description = "Represents an invoice or credit note document with details about the transaction, parties involved, and line items.")


public class Invoice {
  /**
   * Identifies the type of invoice.
   */
  @JsonAdapter(InvoiceTypeEnum.Adapter.class)
  public enum InvoiceTypeEnum {
    @SerializedName("Invoice")
    INVOICE("Invoice"),
    @SerializedName("CreditNote")
    CREDITNOTE("CreditNote");

    private String value;

    InvoiceTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static InvoiceTypeEnum fromValue(String input) {
      for (InvoiceTypeEnum b : InvoiceTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<InvoiceTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final InvoiceTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public InvoiceTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return InvoiceTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("invoiceType")
  private InvoiceTypeEnum invoiceType = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("referenceNumber")
  private String referenceNumber = null;

  @SerializedName("date")
  private OffsetDateTime date = null;

  @SerializedName("remitToParty")
  private PartyIdentification remitToParty = null;

  @SerializedName("shipToParty")
  private PartyIdentification shipToParty = null;

  @SerializedName("shipFromParty")
  private PartyIdentification shipFromParty = null;

  @SerializedName("billToParty")
  private PartyIdentification billToParty = null;

  @SerializedName("paymentTerms")
  private PaymentTerms paymentTerms = null;

  @SerializedName("invoiceTotal")
  private Money invoiceTotal = null;

  @SerializedName("taxDetails")
  private List<TaxDetails> taxDetails = null;

  @SerializedName("additionalDetails")
  private List<AdditionalDetails> additionalDetails = null;

  @SerializedName("chargeDetails")
  private List<ChargeDetails> chargeDetails = null;

  @SerializedName("allowanceDetails")
  private List<AllowanceDetails> allowanceDetails = null;

  @SerializedName("items")
  private List<InvoiceItem> items = null;

  public Invoice invoiceType(InvoiceTypeEnum invoiceType) {
    this.invoiceType = invoiceType;
    return this;
  }

   /**
   * Identifies the type of invoice.
   * @return invoiceType
  **/
  @Schema(required = true, description = "Identifies the type of invoice.")
  public InvoiceTypeEnum getInvoiceType() {
    return invoiceType;
  }

  public void setInvoiceType(InvoiceTypeEnum invoiceType) {
    this.invoiceType = invoiceType;
  }

  public Invoice id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
   * @return id
  **/
  @Schema(required = true, description = "Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Invoice referenceNumber(String referenceNumber) {
    this.referenceNumber = referenceNumber;
    return this;
  }

   /**
   * An additional unique reference number used for regulatory or other purposes.
   * @return referenceNumber
  **/
  @Schema(description = "An additional unique reference number used for regulatory or other purposes.")
  public String getReferenceNumber() {
    return referenceNumber;
  }

  public void setReferenceNumber(String referenceNumber) {
    this.referenceNumber = referenceNumber;
  }

  public Invoice date(OffsetDateTime date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @Schema(required = true, description = "")
  public OffsetDateTime getDate() {
    return date;
  }

  public void setDate(OffsetDateTime date) {
    this.date = date;
  }

  public Invoice remitToParty(PartyIdentification remitToParty) {
    this.remitToParty = remitToParty;
    return this;
  }

   /**
   * Get remitToParty
   * @return remitToParty
  **/
  @Schema(required = true, description = "")
  public PartyIdentification getRemitToParty() {
    return remitToParty;
  }

  public void setRemitToParty(PartyIdentification remitToParty) {
    this.remitToParty = remitToParty;
  }

  public Invoice shipToParty(PartyIdentification shipToParty) {
    this.shipToParty = shipToParty;
    return this;
  }

   /**
   * Get shipToParty
   * @return shipToParty
  **/
  @Schema(description = "")
  public PartyIdentification getShipToParty() {
    return shipToParty;
  }

  public void setShipToParty(PartyIdentification shipToParty) {
    this.shipToParty = shipToParty;
  }

  public Invoice shipFromParty(PartyIdentification shipFromParty) {
    this.shipFromParty = shipFromParty;
    return this;
  }

   /**
   * Get shipFromParty
   * @return shipFromParty
  **/
  @Schema(description = "")
  public PartyIdentification getShipFromParty() {
    return shipFromParty;
  }

  public void setShipFromParty(PartyIdentification shipFromParty) {
    this.shipFromParty = shipFromParty;
  }

  public Invoice billToParty(PartyIdentification billToParty) {
    this.billToParty = billToParty;
    return this;
  }

   /**
   * Get billToParty
   * @return billToParty
  **/
  @Schema(description = "")
  public PartyIdentification getBillToParty() {
    return billToParty;
  }

  public void setBillToParty(PartyIdentification billToParty) {
    this.billToParty = billToParty;
  }

  public Invoice paymentTerms(PaymentTerms paymentTerms) {
    this.paymentTerms = paymentTerms;
    return this;
  }

   /**
   * Get paymentTerms
   * @return paymentTerms
  **/
  @Schema(description = "")
  public PaymentTerms getPaymentTerms() {
    return paymentTerms;
  }

  public void setPaymentTerms(PaymentTerms paymentTerms) {
    this.paymentTerms = paymentTerms;
  }

  public Invoice invoiceTotal(Money invoiceTotal) {
    this.invoiceTotal = invoiceTotal;
    return this;
  }

   /**
   * Get invoiceTotal
   * @return invoiceTotal
  **/
  @Schema(required = true, description = "")
  public Money getInvoiceTotal() {
    return invoiceTotal;
  }

  public void setInvoiceTotal(Money invoiceTotal) {
    this.invoiceTotal = invoiceTotal;
  }

  public Invoice taxDetails(List<TaxDetails> taxDetails) {
    this.taxDetails = taxDetails;
    return this;
  }

  public Invoice addTaxDetailsItem(TaxDetails taxDetailsItem) {
    if (this.taxDetails == null) {
      this.taxDetails = new ArrayList<TaxDetails>();
    }
    this.taxDetails.add(taxDetailsItem);
    return this;
  }

   /**
   * Total tax amount details for all line items.
   * @return taxDetails
  **/
  @Schema(description = "Total tax amount details for all line items.")
  public List<TaxDetails> getTaxDetails() {
    return taxDetails;
  }

  public void setTaxDetails(List<TaxDetails> taxDetails) {
    this.taxDetails = taxDetails;
  }

  public Invoice additionalDetails(List<AdditionalDetails> additionalDetails) {
    this.additionalDetails = additionalDetails;
    return this;
  }

  public Invoice addAdditionalDetailsItem(AdditionalDetails additionalDetailsItem) {
    if (this.additionalDetails == null) {
      this.additionalDetails = new ArrayList<AdditionalDetails>();
    }
    this.additionalDetails.add(additionalDetailsItem);
    return this;
  }

   /**
   * Additional details provided by the selling party, for tax related or other purposes.
   * @return additionalDetails
  **/
  @Schema(description = "Additional details provided by the selling party, for tax related or other purposes.")
  public List<AdditionalDetails> getAdditionalDetails() {
    return additionalDetails;
  }

  public void setAdditionalDetails(List<AdditionalDetails> additionalDetails) {
    this.additionalDetails = additionalDetails;
  }

  public Invoice chargeDetails(List<ChargeDetails> chargeDetails) {
    this.chargeDetails = chargeDetails;
    return this;
  }

  public Invoice addChargeDetailsItem(ChargeDetails chargeDetailsItem) {
    if (this.chargeDetails == null) {
      this.chargeDetails = new ArrayList<ChargeDetails>();
    }
    this.chargeDetails.add(chargeDetailsItem);
    return this;
  }

   /**
   * Total charge amount details for all line items.
   * @return chargeDetails
  **/
  @Schema(description = "Total charge amount details for all line items.")
  public List<ChargeDetails> getChargeDetails() {
    return chargeDetails;
  }

  public void setChargeDetails(List<ChargeDetails> chargeDetails) {
    this.chargeDetails = chargeDetails;
  }

  public Invoice allowanceDetails(List<AllowanceDetails> allowanceDetails) {
    this.allowanceDetails = allowanceDetails;
    return this;
  }

  public Invoice addAllowanceDetailsItem(AllowanceDetails allowanceDetailsItem) {
    if (this.allowanceDetails == null) {
      this.allowanceDetails = new ArrayList<AllowanceDetails>();
    }
    this.allowanceDetails.add(allowanceDetailsItem);
    return this;
  }

   /**
   * Total allowance amount details for all line items.
   * @return allowanceDetails
  **/
  @Schema(description = "Total allowance amount details for all line items.")
  public List<AllowanceDetails> getAllowanceDetails() {
    return allowanceDetails;
  }

  public void setAllowanceDetails(List<AllowanceDetails> allowanceDetails) {
    this.allowanceDetails = allowanceDetails;
  }

  public Invoice items(List<InvoiceItem> items) {
    this.items = items;
    return this;
  }

  public Invoice addItemsItem(InvoiceItem itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<InvoiceItem>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * The list of invoice items.
   * @return items
  **/
  @Schema(description = "The list of invoice items.")
  public List<InvoiceItem> getItems() {
    return items;
  }

  public void setItems(List<InvoiceItem> items) {
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
    Invoice invoice = (Invoice) o;
    return Objects.equals(this.invoiceType, invoice.invoiceType) &&
        Objects.equals(this.id, invoice.id) &&
        Objects.equals(this.referenceNumber, invoice.referenceNumber) &&
        Objects.equals(this.date, invoice.date) &&
        Objects.equals(this.remitToParty, invoice.remitToParty) &&
        Objects.equals(this.shipToParty, invoice.shipToParty) &&
        Objects.equals(this.shipFromParty, invoice.shipFromParty) &&
        Objects.equals(this.billToParty, invoice.billToParty) &&
        Objects.equals(this.paymentTerms, invoice.paymentTerms) &&
        Objects.equals(this.invoiceTotal, invoice.invoiceTotal) &&
        Objects.equals(this.taxDetails, invoice.taxDetails) &&
        Objects.equals(this.additionalDetails, invoice.additionalDetails) &&
        Objects.equals(this.chargeDetails, invoice.chargeDetails) &&
        Objects.equals(this.allowanceDetails, invoice.allowanceDetails) &&
        Objects.equals(this.items, invoice.items);
  }

  @Override
  public int hashCode() {
    return Objects.hash(invoiceType, id, referenceNumber, date, remitToParty, shipToParty, shipFromParty, billToParty, paymentTerms, invoiceTotal, taxDetails, additionalDetails, chargeDetails, allowanceDetails, items);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Invoice {\n");
    
    sb.append("    invoiceType: ").append(toIndentedString(invoiceType)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    referenceNumber: ").append(toIndentedString(referenceNumber)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    remitToParty: ").append(toIndentedString(remitToParty)).append("\n");
    sb.append("    shipToParty: ").append(toIndentedString(shipToParty)).append("\n");
    sb.append("    shipFromParty: ").append(toIndentedString(shipFromParty)).append("\n");
    sb.append("    billToParty: ").append(toIndentedString(billToParty)).append("\n");
    sb.append("    paymentTerms: ").append(toIndentedString(paymentTerms)).append("\n");
    sb.append("    invoiceTotal: ").append(toIndentedString(invoiceTotal)).append("\n");
    sb.append("    taxDetails: ").append(toIndentedString(taxDetails)).append("\n");
    sb.append("    additionalDetails: ").append(toIndentedString(additionalDetails)).append("\n");
    sb.append("    chargeDetails: ").append(toIndentedString(chargeDetails)).append("\n");
    sb.append("    allowanceDetails: ").append(toIndentedString(allowanceDetails)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
