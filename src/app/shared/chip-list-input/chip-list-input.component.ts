import { Component, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chip-list-input',
  templateUrl: './chip-list-input.component.html',
  styles: [
  ]
})
export class ChipListInputComponent  {

  @Input() control!: FormControl
  @Input() label!: string

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.control.value.push( value );
    }

    event.chipInput!.clear();
  }

  remove(data: string): void {
    const index = this.control.value.indexOf(data);

    if (index >= 0) {
      this.control.value.splice(index, 1);
    }
  }



}
