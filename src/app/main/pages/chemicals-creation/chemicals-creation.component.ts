import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { Ppe } from 'src/app/core/interfaces/interfaces';

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


  constructor(
    private fb: FormBuilder,
    private dataSrv: DataFetchService) { }

  ngOnInit(): void {
    this.ppes$ = this.dataSrv.get_items<Ppe>('chemicals/ppes');
  }

  submit() {

  }


  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }






}

