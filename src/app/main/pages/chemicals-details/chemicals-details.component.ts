import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Chemical } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chemicals-details',
  templateUrl: './chemicals-details.component.html',
  styleUrls: ['./chemicals-details.component.scss']
})
export class ChemicalsDetailsComponent implements OnInit {

  chemical!: Chemical;

  baseUrl: string = environment.baseUrl

  constructor(
    private data: DataFetchService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.data.get_item<Chemical>(`chemicals/${ id }`))
      )
      .subscribe(chemical => this.chemical = chemical);
  }


  back() {
    this.router.navigateByUrl('main/chemicals')
  }
}
