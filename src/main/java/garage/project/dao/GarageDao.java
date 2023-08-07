package garage.project.dao;

import garage.project.model.Garage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class GarageDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Garage getGarageFromResultSet(ResultSet rs, int rowNum) throws SQLException {
        Garage garage = new Garage();
        garage.setId(rs.getInt("id"));
        garage.setUserId(rs.getInt("user_id"));
        garage.setTitle(rs.getString("title"));
        garage.setDescription(rs.getString("description"));
        garage.setZipcode(rs.getInt("zipcode"));
        garage.setProfileImage(rs.getString("profile_image"));
        garage.setBackgroundImage(rs.getString("background_image"));

        return garage;
    }

    public void newGarage(Garage garage) {
        String sql = "INSERT INTO garage(user_id, title, description, zipcode, profile_image, background_image) values(?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, garage.getUserId(), garage.getTitle(), garage.getDescription(), garage.getZipcode(), garage.getProfileImage(), garage.getBackgroundImage());
    }

    public List<Garage> findAll() {
        String sql = "SELECT * FROM garage";
        return jdbcTemplate.query(sql, this::getGarageFromResultSet);
    }

    public Garage findById(Integer id) {
        String sql = "SELECT * FROM garage WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, this::getGarageFromResultSet, id);
    }

    public void deleteById(Integer id){
        String sql = "DELETE FROM garage WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    public void update(Garage garage) {
        String sql = "UPDATE garage SET title = ?, description = ?, zipcode = ?, profile_image = ?, background_image = ? WHERE id = ?";
        jdbcTemplate.update(sql, garage.getTitle(), garage.getDescription(), garage.getZipcode(), garage.getProfileImage(), garage.getBackgroundImage());
    }



}
