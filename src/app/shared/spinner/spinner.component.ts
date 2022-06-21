import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="flex flex-row h-full justify-center items-center">

      <mat-spinner *ngIf="true" mode="indeterminate"></mat-spinner>

    </div>
  `,
  styles: [
  ]
})
export class SpinnerComponent {

}
