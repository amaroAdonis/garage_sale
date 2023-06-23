package garage.project.model;

public class PurchaseItens {

    private Integer productId;
    private Integer purchaseId;
    private Double quantity;
    private Double price;

    public PurchaseItens() {
    }

    public PurchaseItens(Integer productId, Integer purchaseId, Double quantity, Double price) {
        this.productId = productId;
        this.purchaseId = purchaseId;
        this.quantity = quantity;
        this.price = price;
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
}
