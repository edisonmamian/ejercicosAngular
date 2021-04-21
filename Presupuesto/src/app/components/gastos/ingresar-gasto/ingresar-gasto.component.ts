import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = '';
  }

  ngOnInit(): void {
  }

  crearGasto() {
    if (this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Cantidad ingresada es mayor al presupuesto restante';
      return;
    }
    if(this.nombreGasto == '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';
    } else {
      //Se crea el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }
      this._presupuestoService.agregarGasto(GASTO);
      //reset formulario
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

}
