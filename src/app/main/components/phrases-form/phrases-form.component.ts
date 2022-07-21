import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phrases-form',
  templateUrl: './phrases-form.component.html',
  styles: [
  ]
})
export class PhrasesFormComponent implements OnInit {

  @Input() fGroup!: FormGroup;


  newPhrase = this.fb.group({
    code: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addPhrase() {

  }
}
