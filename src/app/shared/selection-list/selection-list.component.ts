import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styles: [
  ]
})
export class SelectionListComponent implements OnInit {

  @Input() items!: any[];
  @Input() itemName!: string;
  @Input() control!: string;
  @Input() img!: string;

  form!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootformGroup.control;
  }

}
