import { Component } from '@angular/core';
import { CounterApiService, CounterResponse } from './services/counter-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterFront';
  counterValue: number | null = null;

  constructor(private counterApiService: CounterApiService) {}

  mostrarContador(): void {
    this.counterApiService.getValue().subscribe(
      (response: CounterResponse) => {
        this.counterValue = response.value;
      },
      error => {
        console.error('Error al obtener el contador:', error);
      }
    );
  }
}
