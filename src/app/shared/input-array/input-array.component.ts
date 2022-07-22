import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styles: [
  ]
})
export class InputArrayComponent {

  @Input() fGroup!: FormGroup;
  @Input() arrayName!: string;
  @Input() label!: string;

  inputField = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder) { }

  get fieldArray() {
    return this.fGroup.get(this.arrayName) as FormArray;
  }

  addField() {
    if (this.inputField.invalid) { return; }
    this.fieldArray.push(this.fb.control(this.inputField.value, Validators.required));
    this.inputField.reset();
  }

  deleteField(index: number) {
    this.fieldArray.removeAt(index);
  }

}
