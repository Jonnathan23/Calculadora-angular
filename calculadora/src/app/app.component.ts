import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAngularComponent } from "./components/header-angular/header-angular.component";
import { FooterAngularComponent } from "./components/footer-angular/footer-angular.component";
import { CalculadoraComponent } from "./components/calculadora/calculadora.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderAngularComponent, FooterAngularComponent, CalculadoraComponent]
})
export class AppComponent {
  title = 'calculadora';
}
