package garage.project.dao;


import garage.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private User getUserFromResultSet(ResultSet resultSet, int rowNum) throws SQLException {

        User user = new User();
      user.setId(resultSet.getInt("id"));
      user.setUserName(resultSet.getString("username"));
      user.setFirstName(resultSet.getString("first_name"));
      user.setLastName(resultSet.getString("last_name"));
      user.setEmail(resultSet.getString("email"));
      user.setBirthday(resultSet.getString("birthday"));
      user.setUf(resultSet.getString("uf"));
      user.setCity(resultSet.getString("city"));
      user.setProfileImage("profile_image");

      return user;

    }

    public void newUser(User user) {
        String sql = "INSERT INTO user(username, first_name, last_name, email, birthday, uf, city, profile_image) " +
                "values(?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getUserName(), user.getFirstName(), user.getLastName(),
                user.getEmail(), user.getBirthday(), user.getUf(), user.getCity(), user.getProfileImage());
    }

    public List<User> findAll() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, this::getUserFromResultSet);
    }

    public User findById(Integer id) throws SQLException {
        String sql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, this::getUserFromResultSet);
    }

    public void deleteById(Integer id) {
        String sql = "DELETE FROM user WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    public String getAuthorityByEmail(String email) {
        String sql = "SELECT authority FROM authorities WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, String.class, email);
    }

    public User getUserByEmail(String email) {
        String sql = "SELECT * FROM user WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, this::getUserFromResultSet, email);
    }



}
