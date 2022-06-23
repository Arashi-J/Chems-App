import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, forkJoin, of } from 'rxjs';

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

  areas!: string[];

  baseUrl: string = environment.baseUrl;

  managementSystems: string[] = ['SGIA', 'SGA', 'SGSST'];

  phrasesTitles: string[] = ['Indicación de Peligro', 'Frase de Prudencia']

  infoTitles: string[] = ['Fabricantes', 'Proveedores', 'Areas']


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
            fsms: chemical.fsms.approval ?
              this.dataSrv.get_item<User>(`users/${ chemical.fsms.approbed_by }`) : of(null),

            ems: chemical.ems.approval ?
              this.dataSrv.get_item<User>(`users/${ chemical.ems.approbed_by }`) : of(null),

            ohsms: chemical.ohsms.approval ?
              this.dataSrv.get_item<User>(`users/${ chemical.ohsms.approbed_by }`) : of(null),

            updatedBy: this.dataSrv.get_item<User>(`users/${ chemical.last_update_by._id }`),

            areas: this.dataSrv.get_items<Area>(`chemicals/areas/${ chemical._id }`)
          });
        })
      ).subscribe(({ fsms, ems, ohsms, updatedBy, areas }) => {
        if (fsms) {
          this.chemical.fsms.approbed_by = `${ fsms.firstname } ${ fsms.lastname }`;
        }
        if (ems) {
          this.chemical.ems.approbed_by = `${ ems.firstname } ${ ems.lastname }`;
        }
        if (ohsms) {
          this.chemical.ohsms.approbed_by = `${ ohsms.firstname } ${ ohsms.lastname }`;
        }
        this.chemical.last_update_by.full_user_name = `${ updatedBy.firstname } ${ updatedBy.lastname }`;

        this.areas =  areas.map(area => area.area)

      });
  };

  edit() {
    this.router.navigateByUrl('main/chemicals/new');
  }
  back() {
    this.router.navigateByUrl('main/chemicals');
  }

}
