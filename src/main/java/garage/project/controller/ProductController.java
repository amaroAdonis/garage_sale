package garage.project.controller;

import garage.project.dao.ProductDao;
import garage.project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/product")
public class ProductController {

    @Autowired
    ProductDao productDao;

    @PostMapping
    public void newProduct (@RequestBody Product product) {
        productDao.newProduct(product);
    }

     @GetMapping("products")
    public List<Product> getProducts(){
        return productDao.listAll();
     }

     @GetMapping(value = "{/id}")
    public void getById(Integer id) {
        productDao.findById(id);
     }

     @PutMapping(value = "{/id}")
    public void update(@PathVariable Integer id, @RequestBody Product product) {
        productDao.update(product);
     }

     @DeleteMapping(value = "{/id}")
    public void deleteById(@PathVariable Integer id) {
        productDao.deleteById(id);
     }
}
