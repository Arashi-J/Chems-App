import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Phrase, Ppe } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent implements OnInit {

  ppes$!: Observable<Ppe[]>;

  chemicalForm: FormGroup = this.fb.group({
    chemical: ['', [Validators.required]],
    hazards: [[]],
    providers: [[]],
    manufacturer: [[]],
    p_phrases: this.fb.array([]),
    h_phrases: this.fb.array([]),
    ppes: [[]],
    sds: [[]],
  });

  newPPhrase: FormControl = this.fb.control('', Validators.required);

  newHPhrase = this.fb.group({
    code: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private dataSrv: DataFetchService) { }

  ngOnInit(): void {
    this.ppes$ = this.dataSrv.get_items<Ppe>('chemicals/ppes');
  }


  addPPhrase() {
    if (this.newPPhrase.invalid) { return; }
    this.p_phrases.push(this.fb.control(this.newPPhrase.value, Validators.required));
    this.newPPhrase.reset();
  }

  addHPhrase() {
    if (this.newHPhrase.invalid) { return; }
    this.h_phrases.push(this.fb.group({
      code: [this.newHPhrase.value.code, Validators.required],
      description: [this.newHPhrase.value.description, Validators.required]
    }));
    this.newHPhrase.reset();
  }

  deletePPhrase(index: number) {
    this.p_phrases.removeAt(index);
  }

  deleteHPhrase(index: number) {
    this.h_phrases.removeAt(index);
  }


  submit() {

  }


  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }

  get p_phrases() {
    return this.chemicalForm.get('p_phrases') as FormArray;

  }
  get h_phrases() {
    return this.chemicalForm.get('h_phrases') as FormArray<FormGroup>;
  }




}

