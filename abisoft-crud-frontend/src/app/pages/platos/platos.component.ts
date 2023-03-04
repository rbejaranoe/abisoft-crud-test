import {Component, OnInit} from '@angular/core';
import {PlatoService} from "../../core/services/plato.service";
import {PlatoDto} from "../../core/dto/plato-dto";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.scss']
})
export class PlatosComponent implements OnInit {

  // @ts-ignore
  dialogo: boolean;
  isEdit = false;

  platos: PlatoDto[] = [];
  platosSeleccionados: PlatoDto[] = [];
  // @ts-ignore
  plato: PlatoDto;
  // @ts-ignore
  submitted: boolean;


  constructor(private platoService: PlatoService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.platoService.getAll().subscribe(response => {
      this.platos = response;
    })
  }

  openNew() {
    this.dialogo = true;
    this.submitted = false;
    this.clearModel();
  }

  hideDialog() {
    this.dialogo = false;
  }

  clearModel() {
    this.plato = {
      color: "",
      estado: 0,
      fecha: "",
      id: 0,
      inicioActividad: "",
      nombre: "",
      oferta: false,
      precio: 0
    };
  }

  entre(a: number, b: number) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return this.plato.precio >= min && this.plato.precio <= max;
  }

  validaRules() {
    if (this.plato.nombre.length <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'El nombre es requerido'
      });
      return false;
    }
    if (this.plato.nombre.trim().indexOf(' ') == -1) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'El nombre debe tener al menos dos palabras'
      });
      return false;
    }
    if (!this.entre(9, 25)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'El precio debe ser entre 9 y 25 USD'
      });
      return false;
    }
    if (this.plato.color.length <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'El color es requerido'
      });
      return false;
    }
    if (this.plato.fecha.length <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'La fecha es requerida'
      });
      return false;
    }
    if (this.plato.inicioActividad.length <= 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Información',
        detail: 'El inicio de actividad es requerido'
      });
      return false;
    }
    return true;
  }

  save() {
    this.submitted = true;
    if (this.validaRules()) {
      if (this.isEdit) {
        this.isEdit = false;
        this.platoService.edit(this.plato.id, this.plato).subscribe(response => {
          this.messageService.add({severity: 'success', summary: 'Información', detail: 'Plato editado correctamente'});
        });
        this.clearModel();
        this.loadData();
        this.dialogo = false;
      } else {
        this.platoService.create(this.plato).subscribe(response => {
          this.messageService.add({severity: 'success', summary: 'Información', detail: 'Plato creado correctamente'});
          this.clearModel();
          this.loadData();
          this.dialogo = false;
        });
      }
    }

  }

  editDialog(plato: PlatoDto) {
    this.plato = plato;
    this.dialogo = true;
    this.isEdit = true;

  }

  delete(plato: PlatoDto) {
    this.confirmationService.confirm({
      message: 'Seguro que deseas eliminar ' + plato.nombre + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.platoService.delete(plato.id).subscribe(response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Información',
            detail: 'Plato inactivado correctamente'
          });
          this.loadData();
        })
      }
    });

  }
}
