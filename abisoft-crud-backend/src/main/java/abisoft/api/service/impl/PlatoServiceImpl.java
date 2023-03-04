package abisoft.api.service.impl;

import abisoft.api.entity.Plato;
import abisoft.api.exception.NoSuchEntityExistsException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import abisoft.api.repository.PlatoRepository;
import abisoft.api.service.PlatoService;
import java.util.Date;

/**
 *
 * @author Ricardo Bejarano Espinoza
 */
@Service
public class PlatoServiceImpl implements PlatoService {

    @Autowired
    private PlatoRepository repository;

    @Override
    public void create(Plato object) {
        repository.save(object);
    }

    @Override
    public void update(Long id, Plato entity) {
        try {
            Plato plato = this.findById(id);
            if (plato == null) {
                throw new NoSuchEntityExistsException("Plato no encontrado");
            }
            plato.setNombre(entity.getNombre());
            plato.setOferta(entity.isOferta());
            plato.setColor(entity.getColor());
            plato.setEstado(entity.getEstado());
            plato.setFecha(entity.getFecha());
            plato.setInicioActividad(entity.getInicioActividad());
            plato.setPrecio(entity.getPrecio());
            repository.save(plato);
        } catch (NoSuchEntityExistsException e) {
            throw e;
        }
    }

    @Override
    public Iterable<Plato> listAll() {
        return this.repository.findAllActive();
    }

    @Override
    public Plato findById(Long id) {
        Optional<Plato> plato = this.repository.findById(id);
        if (plato.isPresent()) {
            return plato.get();
        }
        throw new NoSuchEntityExistsException("Plato no encontrado");
    }

    @Override
    public void delete(Long id) {
        Plato findById = this.findById(id);
        if (findById == null) {
            throw new NoSuchEntityExistsException("Plato no encontrado");
        }
        findById.setEstado((short) 1);
        this.repository.save(findById);
    }
}
