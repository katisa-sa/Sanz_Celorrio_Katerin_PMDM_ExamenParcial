import { Producto } from './../interfaces/mis-interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionListaService {

  


  // Array con los productos almacenados
  private listaProductos: Producto[] = []


  constructor() {
    
  }

  // Método para añadir un producto al array
  // Si el producto ya existe, avisa de ello. En caso contrario lo añade
  public addProducto(producto: Producto) {
    //Abrimos una condicion para que si no existe el producto lo añada
    if (this.buscarIdProducto) {
      let mensaje: String = "El producto ya existe";
      return mensaje;
    } else {
      //copiamos el producto por seguridad
      let productoString = JSON.stringify(producto);
      producto = JSON.parse(productoString);
      // añadimos el producto al array list
      this.listaProductos.push(producto);
    }
  }

  // Método que copia un objeto
  private copiarProducto(producto: Producto): Producto {
    let productoString: string = JSON.stringify(producto);
    let nuevoProducto: Producto = JSON.parse(productoString);
    return nuevoProducto;
  }

  // Método que busca un producto en el array
  private buscarIdProducto(id: number) {
    const encontrado = this.listaProductos.find(elemento => elemento.id == id);
    console.log(encontrado);
    if (encontrado) {
      return true;
    }
    return false;
  }

  // Método que dvuelve el array de productos
  public getLista(): Producto[] {
    return this.listaProductos;
  }
}
