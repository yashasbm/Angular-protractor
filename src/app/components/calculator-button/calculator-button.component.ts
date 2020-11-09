import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent {

  @Input('name')
  name: string;

  @Input('col-size')
  colSize: string;

  @Input('class-style')
  classStyle: string;

  @Output('value')
  value = new EventEmitter<string>();

  public getClass(): string {
    return this.classStyle === undefined ? 'waves-effect waves-light btn' : 'waves-effect waves-light ' + this.classStyle;
  }

  public getCol(): string {
    return this.colSize === undefined ? 'col s3' : this.colSize;
  }

  public onClick(): void {
    this.value.emit(this.name);
  }
}
