import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { Chemical, Hazard, Ppe } from 'src/app/core/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chemicals-creation',
  templateUrl: './chemicals-creation.component.html',
  styles: []
})
export class ChemicalsCreationComponent implements OnInit {

  ppes$!: Observable<Ppe[]>;
  hazards$!: Observable<Hazard[]>;

  urlRegex = "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";

  chemicalForm: FormGroup = this.fb.group({
    chemical: ['', [Validators.required, Validators.minLength(3)]],
    hazards: [[]],
    providers: [[]],
    manufacturers: [[]],
    p_phrases: this.fb.array([]),
    h_phrases: this.fb.array([]),
    ppes: [[]],
    sds: this.fb.array([], [Validators.pattern(this.urlRegex)]),
  });


  constructor(
    private fb: FormBuilder,
    private dataSrv: DataFetchService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ppes$ = this.dataSrv.getItems<Ppe>('chemicals/ppes');
    this.hazards$ = this.dataSrv.getItems<Hazard>('chemicals/hazards');

  }

  submit() {
    if (this.chemicalForm.invalid) {
      this.submitError();
      console.log(this.chemicalForm.errors)
      return;
    }
    
    this.dataSrv.postItem<Chemical>('chemicals', this.chemicalForm.value)
      .subscribe({
        next: (chemical: Chemical) => this.router.navigateByUrl(`/main/chemicals/${ chemical._id }`),
        error: (err) => {
          console.log(err);
          this.submitError();
        }
      });

  }

  submitError() {
    this.snackBar.open('Error en uno o varios campos del formulario', 'Cerrar', { duration: 3000 });
  }

  clearForm() {
    this.chemicalForm.reset();
    const sds = this.chemicalForm.get('sds') as FormArray;
  }

  get providers(): FormControl {
    return this.chemicalForm.get('providers') as FormControl;
  }

  get manufacturers(): FormControl {
    return this.chemicalForm.get('manufacturers') as FormControl;
  }






}

