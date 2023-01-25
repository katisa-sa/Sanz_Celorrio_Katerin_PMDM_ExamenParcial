import { Producto } from './../interfaces/mis-interfaces';
import { GestionListaService } from './../servicios/gestion-lista.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listaProductos: Producto[] = [];
  
  constructor(private lista: GestionListaService) {
    lista.getLista();
  }


}
