import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  displayValue: string = '0';

  public setNumber(number): void {
    if (this.displayValue === '0') {      
      this.displayValue = '';
    }

    this.displayValue = '' + this.displayValue + number;
  }

  public operation(operation): void {
    this.displayValue = this.displayValue + operation;
  }

  public calcOperation(): void {
    let result = eval(this.displayValue.replace('÷', '/'));
    this.displayValue = result.toString().replace('/', '÷');
  }

  public clear(): void {
    this.displayValue = '0';
  }

  private getOperation(operation): string {
    return operation == '÷' ? '/' : operation;
  }
}
