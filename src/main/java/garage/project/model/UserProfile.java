package garage.project.model;

import java.util.Date;

public class UserProfile {

    private String email;
    private String UserName;
    private String firstName;
    private String role;
    private Date createdOn;

    public UserProfile() {
    }

    public UserProfile(String email, String userName, String firstName, String role, Date createdOn) {
        this.email = email;
        UserName = userName;
        this.firstName = firstName;
        this.role = role;
        this.createdOn = createdOn;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
