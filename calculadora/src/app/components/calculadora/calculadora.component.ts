import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  resultado: string = ""
  botones = [
    {
      id: 1,
      valor: '1'
    },
    {
      id: 2,
      valor: '2'
    },
    {
      id: 3,
      valor: '3'
    },
    {
      id: 'mas',
      valor: '+'
    },
    {
      id: 4,
      valor: '4'
    },
    {
      id: 5,
      valor: '5'
    },
    {
      id: 6,
      valor: '6'
    },
    {
      id: 'menos',
      valor: '-'
    },
    {
      id: 7,
      valor: '7'
    },
    {
      id: 8,
      valor: '8'
    },
    {
      id: 9,
      valor: '9'
    },
    {
      id: 'mul',
      valor: 'x'
    },
    {
      id: 'C',
      valor: 'C'
    },
    {
      id: 'punto',
      valor: ' . '
    },
    {
      id: 'igual',
      valor: '='
    },
    {
      id: 'div',
      valor: '÷'
    },
  ]
  total = 0

  calcular(valor: string){
    //alert('Clic')
    switch(valor){
      case '=':
        this.resultado = eval( this.resultado); break;
      case 'C':
        this.resultado = ''; break;
      case '÷':
        this.resultado += '/'; break;
      default:
        this.resultado += valor;
    }
  }

}
