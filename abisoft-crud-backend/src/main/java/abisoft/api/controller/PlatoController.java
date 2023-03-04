package abisoft.api.controller;

import abisoft.api.entity.Plato;
import abisoft.api.exception.NoSuchEntityExistsException;
import abisoft.api.service.PlatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ricardo Bejarano Espinoza
 * @version 1.0
 * @email <rbejaranoe@gmail.com>
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/platos")
public class PlatoController {

    @Autowired
    private PlatoService platoService;

    @GetMapping
    public Iterable<Plato> findAll() {
        return this.platoService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plato> findById(@PathVariable Long id) {
        return ResponseEntity.ok(this.platoService.findById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Void> create(@RequestBody Plato plato) {
        this.platoService.create(plato);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody Plato plato) {
        try {
            this.platoService.update(id, plato);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            this.platoService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @ExceptionHandler(NoSuchEntityExistsException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> handleNoSuchElementFoundException(
            NoSuchEntityExistsException exception
    ) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(exception.getMessage());
    }
}
