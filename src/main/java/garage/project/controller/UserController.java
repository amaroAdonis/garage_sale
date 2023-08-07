package garage.project.controller;

import garage.project.dao.UserDao;
import garage.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserDao userDao;

    @GetMapping("")
    public List<User> getUsers() {return userDao.findAll();}

    @GetMapping(value = "/{id}")
    public User getById(@PathVariable Integer id) throws SQLException {
        return userDao.findById(id);
    }

    @PostMapping("")
    public void createUser(@RequestBody User user) {
        userDao.newUser(user);
    }

    @DeleteMapping
    public void deleteUser(@RequestBody Integer id) {userDao.deleteById(id);}

    @PutMapping
    public void update(@PathVariable Integer id, @RequestBody User user) {
        userDao.update(user);
    }




}
