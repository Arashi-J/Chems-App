import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';
import { Chemical } from 'src/app/core/interfaces/interfaces';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-chemicals-list',
  templateUrl: './chemicals-list.component.html',
  styleUrls: ['./chemicals-list.component.scss']
})
export class ChemicalsListComponent implements OnInit {

  chemicals!: Chemical[];

  columns = [
    {
      columnDef: 'chemical',
      header: 'Sustancia Química',
      cell: (chemical: Chemical) => `${ chemical.chemical }`,
    },
    {
      columnDef: 'fsms',
      header: 'Aprobación SGIA',
      cell: (chemical: Chemical) => `${ chemical.fsms?.approval ? 'Aprobado' : 'No Aprobado' }`,
    },
    {
      columnDef: 'ems',
      header: 'Aprobación SGA',
      cell: (chemical: Chemical) => `${ chemical.ems?.approval ? 'Aprobado' : 'No Aprobado' }`,
    },
    {
      columnDef: 'ohsms',
      header: 'Aprobación SGSST',
      cell: (chemical: Chemical) => `${ chemical.ohsms?.approval ? 'Aprobado' : 'No Aprobado' }`,
    },
    {
      columnDef: 'status',
      header: 'Estado de la Sustancia Química',
      cell: (chemical: Chemical) => `${ chemical.status ? 'Activo' : 'Inactivo' }`,
    },

  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  dataSource = new MatTableDataSource(this.chemicals);

  constructor(
    private data: DataFetchService) { }

  ngOnInit(): void {
    this.data.get_items<Chemical>('chemicals')
      .subscribe(resp => this.chemicals = resp);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
