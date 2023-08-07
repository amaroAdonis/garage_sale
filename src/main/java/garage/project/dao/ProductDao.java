package garage.project.dao;

import garage.project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ProductDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private Product getProductFromResultset(ResultSet rs, int rowNum) throws SQLException {

        Product product = new Product();
        product.setId(rs.getInt("id"));
        product.setGarageId(rs.getInt("garage_id"));
        product.setCategory(rs.getString("category"));
        product.setTitle(rs.getString("title"));
        product.setDescription(rs.getString("description"));
        product.setPrice(rs.getDouble("price"));
        product.setProfileImage1(rs.getString("image1"));
        product.setProfileImage2(rs.getString("image2"));
        product.setProfileImage3(rs.getString("image3"));
        product.setProfileImage4(rs.getString("image4"));
        product.setUsed(rs.getBoolean("used"));
        product.setNewOne(rs.getBoolean("newOne"));
        product.setDelivery(rs.getBoolean("delivery"));
        product.setNoDelivery(rs.getBoolean("noDelivery"));
        product.setFiscal(rs.getBoolean("fiscal"));

        return product;
    }

    public void newProduct(Product product) {
        String sql = "INSERT INTO garage_product(garage_id, category, title, description, price, image1, image2, image3, image4, delivery, noDelivery, newOne, used, fiscal) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql, product.getGarageId(), product.getCategory(), product.getTitle(), product.getDescription(), product.getPrice(), product.getProfileImage1(), product.getProfileImage2(), product.getProfileImage3(), product.getProfileImage4(), product.getDelivery(), product.getNoDelivery(), product.getNewOne(), product.getUsed(), product.getFiscal());
    }

    public List<Product> listAll(){
        String sql = "SELECT * FROM garage_product";
        return jdbcTemplate.query(sql, this::getProductFromResultset);
    }

    public void deleteById(Integer id){
        String sql = "DELETE FROM garage_product WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    public Product findById(Integer id){
        String sql = "SELECT * FROM garage_product WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, this::getProductFromResultset, id);
    }

    public void update(Product product) {
        String sql = "UPDATE garage_product SET category = ?, title = ?, description = ?, price = ?, image1 = ?, image2 = ?, image3 = ?, image4 = ?, used = ?, newOne = ?, delivery = ?, noDelivery = ?, fiscal = ? WHERE id = ?";
        jdbcTemplate.update(sql, product.getCategory(), product.getTitle(), product.getDescription(), product.getPrice(), product.getProfileImage1(), product.getProfileImage2(), product.getProfileImage3(), product.getProfileImage4(), product.getUsed(), product.getNewOne(), product.getDelivery(), product.getNoDelivery(), product.getFiscal(), product.getId());
    }


}
