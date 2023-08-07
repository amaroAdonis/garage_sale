package garage.project.controller;

import garage.project.dao.GarageDao;
import garage.project.model.Garage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/garage")
public class GarageController {
    @Autowired
    GarageDao garageDao;

    @PostMapping
    public void createGarage(@RequestBody Garage garage) {
        garageDao.newGarage(garage);
    }

    @GetMapping("garages")
    public List<Garage> getGarages() {
        return garageDao.findAll();
    }

    @GetMapping(value = "{/id}")
    public Garage getById(@PathVariable Integer id) {
       return garageDao.findById(id);
    }

    @PutMapping(value = "{/id}")
    public void update (@PathVariable Integer id, @RequestBody Garage garage) {
        garageDao.update(garage);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteGarage (@PathVariable Integer id) {
        garageDao.deleteById(id);
    }


}
