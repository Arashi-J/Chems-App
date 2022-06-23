import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, map, switchMap, forkJoin, of } from 'rxjs';

import { Area, Chemical, User } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chemicals-details',
  templateUrl: './chemicals-details.component.html',
  styles: []
})
export class ChemicalsDetailsComponent implements OnInit {

  chemical!: Chemical;

  areas!: Area[];

  baseUrl: string = environment.baseUrl;

  managementSystems: string[] = ['SGIA', 'SGA', 'SGSST'];

  fsmsApprover!: User;
  emsApprover!: User;
  ohsmsApprover!: User;

  approvers: any;

  constructor(
    private dataSrv: DataFetchService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.dataSrv.get_item<Chemical>(`chemicals/${ id }`))
      ).pipe(
        map(chemical => this.chemical = chemical),
        switchMap(chemical => {
          return forkJoin({
            fsms: chemical.fsms?.approval ? this.dataSrv.get_item<User>(`users/${ chemical.fsms?.approbed_by }`) : of(null),
            ems: chemical.ems?.approval ? this.dataSrv.get_item<User>(`users/${ chemical.ems?.approbed_by }`) : of(null),
            ohsms: chemical.ohsms?.approval ? this.dataSrv.get_item<User>(`users/${ chemical.ohsms?.approbed_by }`) : of(null),
          });
        })
      ).subscribe(approvers => {
        this.approvers = approvers
        console.log(this.approvers)
      });



  };


  // .subscribe(chemical => this.chemical = chemical);



  // this.dataSrv.get_item<User>(`users/${ this.chemical.fsms?.approbed_by }`)
  //   .subscribe(user => this.fsmsApprover = user);

  // this.dataSrv.get_item<User>(`users/${ this.chemical.ems?.approbed_by }`)
  //   .subscribe(user => this.emsApprover = user);

  // this.dataSrv.get_item<User>(`users/${ this.chemical.ohsms?.approbed_by }`)
  //   .subscribe(user => this.ohsmsApprover = user);

  // console.log(this.fsmsApprover);
  // this.approvers = [this.fsmsApprover, this.emsApprover, this.ohsmsApprover];

  // console.log(this.approvers);


  back() {
    this.router.navigateByUrl('main/chemicals');
  }

}
