// src/app/componentes/button/button.component.ts
import { Component, Input } from '@angular/core';
import { CounterApiService, CounterResponse } from '../../services/counter-api.service';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="performAction()">{{ label }}</button>
  `,
  styleUrls: ['./button.component.css']
})  
export class ButtonComponent {
  @Input() action!: 'increment' | 'decrement' | 'reset' | 'getValue';
  @Input() label!: string;


  constructor(private _counterApiService: CounterApiService) {}

  performAction(): void {
    switch (this.action) {
      case 'increment':
        this._counterApiService.increment().subscribe((response: CounterResponse) => {
          console.log('Valor después de incrementar:', response.value);
        });
        break;
      case 'decrement':
        this._counterApiService.decrement().subscribe((response: CounterResponse) => {
          console.log('Valor después de decrementar:', response.value);
        });
        break;
      case 'reset':
        this._counterApiService.reset().subscribe(() => {
          console.log('Contador reseteado.');
        });
        break;
      case 'getValue':
        this._counterApiService.getValue().subscribe((response: CounterResponse) => {
          console.log('Valor actual del contador:', response.value);
        });
        break;
      default:
        console.error('Acción desconocida:', this.action);
    }
  }
}
