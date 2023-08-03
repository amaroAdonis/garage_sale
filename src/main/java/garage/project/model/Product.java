package garage.project.model;

public class Product {

    private Integer id;
    private Integer garageId;
    private String category;
    private String title;
    private String description;
    private Double price;
    private String profileImage1;
    private String profileImage2;
    private String profileImage3;
    private String profileImage4;
    private Boolean delivery;
    private Boolean noDelivery;
    private Boolean newOne;
    private Boolean used;
    private Boolean fiscal;

    public Product() {
    }

    public Product(Integer id, Integer garageId, String category, String title, String description, Double price, String profileImage1, String profileImage2, String profileImage3, String profileImage4, Boolean delivery, Boolean noDelivery, Boolean newOne, Boolean used, Boolean fiscal) {
        this.id = id;
        this.garageId = garageId;
        this.category = category;
        this.title = title;
        this.description = description;
        this.price = price;
        this.profileImage1 = profileImage1;
        this.profileImage2 = profileImage2;
        this.profileImage3 = profileImage3;
        this.profileImage4 = profileImage4;
        this.delivery = delivery;
        this.noDelivery = noDelivery;
        this.newOne = newOne;
        this.used = used;
        this.fiscal = fiscal;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGarageId() {
        return garageId;
    }

    public void setGarageId(Integer garageId) {
        this.garageId = garageId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getProfileImage1() {
        return profileImage1;
    }

    public void setProfileImage1(String profileImage1) {
        this.profileImage1 = profileImage1;
    }

    public String getProfileImage2() {
        return profileImage2;
    }

    public void setProfileImage2(String profileImage2) {
        this.profileImage2 = profileImage2;
    }

    public String getProfileImage3() {
        return profileImage3;
    }

    public void setProfileImage3(String profileImage3) {
        this.profileImage3 = profileImage3;
    }

    public String getProfileImage4() {
        return profileImage4;
    }

    public void setProfileImage4(String profileImage4) {
        this.profileImage4 = profileImage4;
    }

    public Boolean getDelivery() {
        return delivery;
    }

    public void setDelivery(Boolean delivery) {
        this.delivery = delivery;
    }

    public Boolean getNoDelivery() {
        return noDelivery;
    }

    public void setNoDelivery(Boolean noDelivery) {
        this.noDelivery = noDelivery;
    }

    public Boolean getNewOne() {
        return newOne;
    }

    public void setNewOne(Boolean newOne) {
        this.newOne = newOne;
    }

    public Boolean getUsed() {
        return used;
    }

    public void setUsed(Boolean used) {
        this.used = used;
    }

    public Boolean getFiscal() {
        return fiscal;
    }

    public void setFiscal(Boolean fiscal) {
        this.fiscal = fiscal;
    }
}
