package abisoft.api.repository;

import abisoft.api.entity.Plato;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Ricardo Bejarano Espinoza
 */
@Repository
public interface PlatoRepository extends PagingAndSortingRepository<Plato, Long>, JpaSpecificationExecutor<Plato> {
    
    @Query("select p from Plato p where p.estado=0")
    List<Plato> findAllActive();

}
