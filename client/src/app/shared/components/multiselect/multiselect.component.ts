import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export interface ISelectData {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements ControlValueAccessor {
  @Input() data?: ISelectData[];
  @Input() label?: string;

  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }
  writeValue(value: string) {
    this.control.control.setValue(value);
  }
  registerOnChange(fn: any) {}

  registerOnTouched() {}
}
