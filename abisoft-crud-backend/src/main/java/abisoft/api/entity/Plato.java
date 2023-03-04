package abisoft.api.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 *
 * @author Ricardo Bejarano Espinoza
 *
 */
@Entity
@Table(name = "platos")
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Plato implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "color")
    private String color;

    @Column(name = "precio")
    private Double precio;

    @Column(name = "fecha")
    private Date fecha;

    @Column(name = "inicio_actividad")
    private Date inicioActividad;

    @Column(name = "oferta")
    private boolean oferta;

    @Column(name = "estado")
    private Short estado;
}
