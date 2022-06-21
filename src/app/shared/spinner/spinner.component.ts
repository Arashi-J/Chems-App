import { Component } from '@angular/core';
import { LoadingRequestService } from 'src/app/core/services/loading-request.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="isLoading | async" 
          class="flex flex-row h-full justify-center items-center bg-primary-50">
    <p class="col-span-1 text-5xl font-black text-center uppercase italic text-primary-500">
      Chem Manager
    </p>
      <mat-spinner mode="indeterminate" class="mx-8"></mat-spinner>
    </div>
  `,
  styles: [
  ]
})
export class SpinnerComponent {

  isLoading = this.loadingRqSrv.isLoading;

  constructor(private loadingRqSrv: LoadingRequestService) { }

}
