package garage.project.dao;

import garage.project.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PurchaseDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Purchase getPurchaseFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        Purchase purchase = new Purchase();
        purchase.setId(rs.getInt("id"));
        purchase.setUserId(rs.getInt("user_id"));
        purchase.setTotalValue(rs.getDouble("total_value"));
        purchase.setCreatedOn(rs.getDate("created_on"));

        return purchase;
    }

    public List<Purchase> findAll(){
        String sql = "SELECT * FROM purchase";
        return jdbcTemplate.query(sql, this::getPurchaseFromResultSet);
    }

    public Purchase findById(Integer id) throws SQLException {
        String sql = "SELECT * FROM purchase WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, this::getPurchaseFromResultSet);
    }

    public void deleteById(Integer id) {
        String sql = "DELETE FROM purchase WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }



}
