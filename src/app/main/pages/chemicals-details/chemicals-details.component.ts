import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Area, Chemical } from 'src/app/core/interfaces/interfaces';
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

  approvers: string[] = [];

  constructor(
    private dataSrv: DataFetchService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.dataSrv.get_item<Chemical>(`chemicals/${ id }`))
      )
      .subscribe(chemical => {
        this.chemical = chemical;

        // const approversIds = [
        //   this.chemical.fsms?.approbed_by,
        //   this.chemical.ems?.approbed_by,
        //   this.chemical.ohsms?.approbed_by]

        // this.dataSrv.get_item(`users/${ this.chemical.fsms?.approbed_by }`)
        //   .subscribe(console.log);
      });



  }


  back() {
    this.router.navigateByUrl('main/chemicals');
  }
}
