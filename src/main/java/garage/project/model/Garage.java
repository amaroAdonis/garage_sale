package garage.project.model;

public class Garage {

    private Integer id;
    private Integer userId;
    private String description;
    private Integer zipcode;
    private String profileImage;
    private String backgroundImage;

    public Garage() {
    }

    public Garage(Integer id, Integer userId, String description, Integer zipcode, String profileImage, String backgroundImage) {
        this.id = id;
        this.userId = userId;
        this.description = description;
        this.zipcode = zipcode;
        this.profileImage = profileImage;
        this.backgroundImage = backgroundImage;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getZipcode() {
        return zipcode;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getBackgroundImage() {
        return backgroundImage;
    }

    public void setBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
    }
}
