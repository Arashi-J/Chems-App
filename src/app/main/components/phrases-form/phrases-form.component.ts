import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phrases-form',
  templateUrl: './phrases-form.component.html',
  styles: [
  ]
})
export class PhrasesFormComponent {

  @Input() fGroup!: FormGroup;
  @Input() phrases!: string;

  get phrasesArray(){
    return this.fGroup.get(this.phrases) as FormArray<FormGroup>
  }


  newPhrase = this.fb.group({
    code: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  addPhrase() {
    if (this.newPhrase.invalid) { return; }

    this.phrasesArray.push(this.fb.group({
      code: [this.newPhrase.value.code, Validators.required],
      description: [this.newPhrase.value.description, Validators.required]
    }));
    
    this.newPhrase.reset();
  }

  deletePhrase(index: number){
    this.phrasesArray.removeAt(index);
  }
}
