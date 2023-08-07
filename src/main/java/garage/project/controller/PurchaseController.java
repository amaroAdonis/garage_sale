package garage.project.controller;

import garage.project.dao.PurchaseDao;
import garage.project.model.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/purchase")
public class PurchaseController {

    @Autowired
    PurchaseDao purchaseDao;

    @PostMapping
    public void createPurchase(@RequestBody Purchase purchase) {
        purchaseDao.newPurchase(purchase);
    }

    @GetMapping("purchases")
    public List<Purchase> getPurchases() {
        return purchaseDao.findAll();
    }

    @GetMapping(value = "/{id}")
    public Purchase getById(@PathVariable Integer id) throws SQLException {
        return purchaseDao.findById(id);
    }

    @PutMapping(value = "/{id}")
    public void update(@PathVariable Integer id, @RequestBody Purchase purchase) {
        purchaseDao.updateValue(purchase);
    }

    @DeleteMapping(value = "/{id}")
    public void deletePurchase(@PathVariable Integer id) {
        purchaseDao.deleteById(id);
    }








}
