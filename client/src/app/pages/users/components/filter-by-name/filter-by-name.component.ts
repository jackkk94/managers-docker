import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, filter } from 'rxjs';


const MIN_TEXT_LENGTH = 2;
const DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-filter-by-name',
  templateUrl: './filter-by-name.component.html',
  styleUrls: ['./filter-by-name.component.scss']
})
export class FilterByNameComponent implements OnDestroy {
  public control = new FormControl('');
  public subscription = new Subscription();

  @Output()
  public changed = new EventEmitter<string>();

  constructor() {
    this.subscription = this.control.valueChanges.pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
      filter(z => !z?.length || z.length >= MIN_TEXT_LENGTH)
    )
    .subscribe(value=> this.changed.emit(value))
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
