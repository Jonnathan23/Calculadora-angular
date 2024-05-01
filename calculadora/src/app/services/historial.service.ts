import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historialOperaciones: string[] = []
  constructor() {}

  set(total:string){
    this.historialOperaciones.push(total)
  }

  get(){
    return this.historialOperaciones
  }
}
