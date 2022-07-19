import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Phrase, Ppe } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent implements OnInit {

  ppes$!: Observable<Ppe[]>

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
    private fb: FormBuilder,
    private dataSrv: DataFetchService) { }

  ngOnInit(): void {
    this.ppes$ = this.dataSrv.get_items<Ppe>('chemicals/ppes')
  }



  submit() {

  }

  get chemical(): FormControl {
    return this.chemicalForm.get('chemical') as FormControl;
  }

  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }

  get ppes(): FormControl {
    return this.chemicalForm.get('ppes') as FormControl;
  }




}

