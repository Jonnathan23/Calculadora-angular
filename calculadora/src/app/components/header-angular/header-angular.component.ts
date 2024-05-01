import { Component } from '@angular/core';

@Component({
  selector: 'app-header-angular',
  standalone: true,
  imports: [],
  templateUrl: './header-angular.component.html',
  styleUrl: './header-angular.component.scss'
})
export class HeaderAngularComponent {
  enlaces = [
    {
      nombre: 'Inicio',
      direccion:'',
      activo: true
    },
    {
      nombre: 'Operaciones',
      direccion:'',
      activo: false
    },
    {
      nombre: 'Calculadora',
      direccion:'',
      activo: false
    },
    {
      nombre: 'Sobre nosotros',
      direccion:'',
      activo: false
    }
  ]  

}
