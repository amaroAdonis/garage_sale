package garage.project.controller;

import garage.project.dao.ProductDao;
import garage.project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/product")
public class ProductController {

    @Autowired
    ProductDao productDao;

    @PostMapping
    public void newProduct (@RequestBody Product product) {
        productDao.newProduct(product);
    }


}
