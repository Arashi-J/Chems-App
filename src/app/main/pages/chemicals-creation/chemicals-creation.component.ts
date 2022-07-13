import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent implements OnInit {

  chemicalForm: FormGroup = this.fb.group({
    chemical: this.fb.control('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}

// {
//   "chemical": "string",
//   "hazards": [],
//   "providers": [],
//   "manufacturers": [],
//   "p_phrases": [],
//   "h_phrases": [],
//   "ppes": [],
//   "sds": []
// }