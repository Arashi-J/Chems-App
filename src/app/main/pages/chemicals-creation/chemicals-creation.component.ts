import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Phrase } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent {

  chemicalForm: FormGroup = this.fb.group({
    chemical: this.fb.control('', [Validators.required]),
    hazards: this.fb.control<string[]>([]),
    providers: this.fb.control<string[]>([]),
    manufacturer: this.fb.control<string[]>([]),
    p_phrases: this.fb.control<Phrase[]>([]),
    h_phrases: this.fb.control<Phrase[]>([]),
    ppes: this.fb.control<string[]>([]),
    sds: this.fb.control<string[]>([]),
  });

  constructor(
    private fb: FormBuilder) { }



  submit() {

  }

  get chemical(){
    return this.chemicalForm.get('chemical') as FormControl; 
  }

  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }

  


}

