package garage.project.service;

import garage.project.dao.UserDao;
import garage.project.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileService {

    @Autowired
    UserDao userDao;

    public UserProfile getUserProfile(String email){

        UserProfile userProfile = new UserProfile();
        var user = userDao.getUserByEmail(email);
        userProfile.setUserName(user.getUserName());
        userProfile.setFirstName(user.getFirstName());
        userProfile.setEmail(user.getEmail());
        userProfile.setRole(userDao.getAuthorityByEmail(user.getEmail()));

        return userProfile;
    }


}
