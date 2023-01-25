import { GestionListaService } from './../servicios/gestion-lista.service';
import { Producto } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  datosProducto: Producto ;

 constructor(private leerProducto:HttpClient, private lista:GestionListaService) {
    this.cargarProducto();
 }

 // Método que realiza una consulta REST a fakestoreapi.com
 private consultaRest(): void {
    let indice: number = this.generaIndice();
   let datosProducto: Observable<Producto>= this.leerProducto.get<Producto>("https://fakestoreapi.com/products/"+ indice);
   datosProducto.subscribe(datos => {
    console.log(datos);
    this.datosProducto = datos;    
    this.lista.addProducto(datos);
   })
 }
 
  private cargarProducto(){
    return this.lista;
  }

 // Método que genera un número aleatorio entre 1 y 20
 private generaIndice(): number {
   return Math.floor(Math.random() * 19) + 1;
 }
onClick(){
  this.generaIndice();
  
}

}
