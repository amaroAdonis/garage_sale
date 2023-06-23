package garage.project.controller;


import garage.project.dao.UserDao;
import garage.project.model.UserProfile;
import garage.project.service.UserProfileService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userprofile")
public class UserProfileController {

    @Autowired
    UserDao userDao;

    @Autowired
    UserProfileService userProfileService;

    @GetMapping("")
    public UserProfile getUserProfile(HttpServletRequest httpServletRequest) {
        var user = httpServletRequest.getUserPrincipal();
        var userEmail = user.getName();
        return userProfileService.getUserProfile(userEmail);
    }

}
