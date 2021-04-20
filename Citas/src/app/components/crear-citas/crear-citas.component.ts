import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioInocrrecto = false;
  @Output() nuevaCita = new EventEmitter<any> ();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita () {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioInocrrecto = true;
      return;
    } else {
      this.formularioInocrrecto = false;
    }

    const cita = {
      nombre : this.nombre,
      fecha : this.fecha,
      hora : this.hora,
      sintomas : this.sintomas
    }
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }

  resetCampos () {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
