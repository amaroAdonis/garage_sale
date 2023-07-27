package garage.project.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class GarageDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;



}
