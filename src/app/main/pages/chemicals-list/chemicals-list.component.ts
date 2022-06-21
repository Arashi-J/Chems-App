import { Component, OnInit } from '@angular/core';

import { Chemical, Column } from 'src/app/core/interfaces/interfaces';

import { DataFetchService } from 'src/app/core/services/data-fetch.service';

@Component({
  selector: 'app-chemicals-list',
  templateUrl: './chemicals-list.component.html',
  styles: []
})
export class ChemicalsListComponent implements OnInit {

  columns: Column<Chemical>[] = [
    {
      columnDef: 'chemical',
      header: 'Sustancia Química',
      cell: (chemical: Chemical) => chemical.chemical,
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'fsms.approval',
      header: 'Aprobación SGIA',
      cell: (chemical: Chemical) => chemical.fsms?.approval ? 'Aprobado' : 'No Aprobado',
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'ems.approval',
      header: 'Aprobación SGA',
      cell: (chemical: Chemical) => chemical.ems?.approval ? 'Aprobado' : 'No Aprobado',
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'ohsms.approval',
      header: 'Aprobación SGSST',
      cell: (chemical: Chemical) => chemical.ohsms?.approval ? 'Aprobado' : 'No Aprobado',
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'status',
      header: 'Estado de la Sustancia Química',
      cell: (chemical: Chemical) => chemical.status ? 'Activo' : 'Inactivo',
      link: (chemical: Chemical) => chemical._id
    },

  ];

  chemicals!: Chemical[];

  constructor(
    private data: DataFetchService) { }

  ngOnInit(): void {
    this.data.get_items<Chemical>('chemicals')
      .subscribe(chemicals => this.chemicals = chemicals);
  }

}
