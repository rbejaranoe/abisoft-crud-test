package abisoft.api.service;

import java.util.List;

/**
 *
 * @author Ricardo Bejarano Espinoza
 * @param <T>
 * @param <ID>
 */
public interface CrudBasic<T, ID> {

    public void create(T object);

    public void update(ID id, T object);

    public Iterable<T> listAll();

    public T findById(ID id);

    public void delete(ID id);
}
