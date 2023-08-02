package garage.project.model;

public class PurchaseItens {

    private Integer productId;
    private Integer purchaseId;
    private Double quantity;
    private Double price;
    private Double discount;

    public PurchaseItens() {
    }

    public PurchaseItens(Integer productId, Integer purchaseId, Double quantity, Double price, Double discount) {
        this.productId = productId;
        this.purchaseId = purchaseId;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(Integer purchaseId) {
        this.purchaseId = purchaseId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }
}
