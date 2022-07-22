import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { Hazard, Ppe } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent implements OnInit {

  ppes$!: Observable<Ppe[]>;
  hazards$!: Observable<Hazard[]>;

  chemicalForm: FormGroup = this.fb.group({
    chemical: ['', [Validators.required]],
    hazards: [[]],
    providers: [[]],
    manufacturers: [[]],
    p_phrases: this.fb.array([]),
    h_phrases: this.fb.array([]),
    ppes: [[]],
    sds: this.fb.array([]),
  });


  constructor(
    private fb: FormBuilder,
    private dataSrv: DataFetchService) { }

  ngOnInit(): void {
    this.ppes$ = this.dataSrv.get_items<Ppe>('chemicals/ppes');
    this.hazards$ = this.dataSrv.get_items<Hazard>('chemicals/hazards');

  }

  submit() {

  }


  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }

  get manufacturers(): FormControl {
    return this.chemicalForm.get('manufacturers') as FormControl;
  }






}

