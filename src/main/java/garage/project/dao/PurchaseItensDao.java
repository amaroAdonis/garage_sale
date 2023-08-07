package garage.project.dao;

import garage.project.model.Purchase;
import garage.project.model.PurchaseItens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class PurchaseItensDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private PurchaseItens getPurchaseItensFromResultSet(ResultSet rs, int rowNum) throws SQLException {

        PurchaseItens purchaseItens = new PurchaseItens();
        purchaseItens.setPurchaseId(rs.getInt("purchase_id"));
        purchaseItens.setProductId(rs.getInt("product_id"));
        purchaseItens.setQuantity(rs.getDouble("quantity"));
        purchaseItens.setPrice(rs.getDouble("price"));
        purchaseItens.setDiscount(rs.getDouble("discount"));

        return purchaseItens;
    }

    public void newPurchaseItens(PurchaseItens purchaseItens) {
        String sql = "INSERT INTO purchase_itens(purchase_id, product_id, quantity, price, discount) values(?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, purchaseItens.getPurchaseId(), purchaseItens.getProductId(), purchaseItens.getQuantity(), purchaseItens.getPrice(), purchaseItens.getDiscount());
    }

    public List<PurchaseItens> findAll(){
        String sql = "SELECT * FROM purchase_itens";
        return jdbcTemplate.query(sql, this::getPurchaseItensFromResultSet);
    }

    public void deleteById(Integer id) {
        String sql = "DELETE FROM purchase_itens WHERE purchase_id = ? AND product_id = ?";
        jdbcTemplate.update(sql, id);
    }



}
