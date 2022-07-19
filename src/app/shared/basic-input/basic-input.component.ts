import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styles: [
  ]
})
export class BasicInputComponent implements OnInit {

  @Input() label!: string;
  @Input() control!: string;

  form!: FormGroup;

  constructor(
    private rootformGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootformGroup.control;
  }



}
