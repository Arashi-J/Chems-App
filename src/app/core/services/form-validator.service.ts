import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  formValidation(form: FormGroup): boolean{
    if (form.valid){
      return true
    }else{
      return false
    }
  }
}
