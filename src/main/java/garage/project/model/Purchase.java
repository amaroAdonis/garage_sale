package garage.project.model;


import java.util.Date;

public class Purchase {

    private Integer id;
    private Integer userId;
    private Double totalValue;
    private Date createdOn;

    public Purchase() {
    }

    public Purchase(Integer id, Integer userId, Double totalValue, Date createdOn) {
        this.id = id;
        this.userId = userId;
        this.totalValue = totalValue;
        this.createdOn = createdOn;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(Double totalValue) {
        this.totalValue = totalValue;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
