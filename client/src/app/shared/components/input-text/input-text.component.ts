import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'input-control',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';

  public value = '';
  onChange = (value: string) => { };
  onTouched = () => { };

  constructor(
    @Self() public control: NgControl
  ) {
    this.control.valueAccessor = this;

  }

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.value = value;
    //this.control.control?.setValue(value);
    this.onChange(value);
  }

  onChanged(e: any) {
    this.value = e.target.value;
    this.onChange(this.value);
  }

  clear(): void{
    this.value = '';
    this.onChange(this.value);
  }
}