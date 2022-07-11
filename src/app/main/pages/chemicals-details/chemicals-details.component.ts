import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap, Observable, map, forkJoin } from 'rxjs';

import { Area, Chemical, User } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chemicals-details',
  templateUrl: './chemicals-details.component.html',
  styles: []
})
export class ChemicalsDetailsComponent implements OnInit {

  chemical$!: Observable<Chemical>;

  baseUrl: string = environment.baseUrl;

  managementSystems: string[] = ['SGIA', 'SGA', 'SGSST'];

  phrasesTitles: string[] = ['Indicación de Peligro', 'Frase de Prudencia'];

  chemicalSource: string[] = ['Fabricantes', 'Proveedores'];


  constructor(
    private dataSrv: DataFetchService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.chemical$ = forkJoin({
      chemical: this.dataSrv.get_item<Chemical>(`chemicals/${ id }`),
      areas: this.dataSrv.get_items<Area>(`chemicals/areas/${ id }`)
    }).pipe(
      map(({ chemical, areas }) => {
        chemical.areas = areas;
        return chemical;
      })
    );

  };

  edit() {
    this.router.navigateByUrl('main/chemicals/new');
  }
  back() {
    this.router.navigateByUrl('main/chemicals');
  }

}
