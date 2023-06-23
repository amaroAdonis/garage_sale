package garage.project.controller;

import garage.project.dao.UserDao;
import garage.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserDao userDao;

    @GetMapping("")
    public List<User> getUsers() {return userDao.findAll();}

    @GetMapping(value = "/{id}")
    public User getById(@PathVariable Integer id) throws SQLException {
        return userDao.findById(id);
    }





}
