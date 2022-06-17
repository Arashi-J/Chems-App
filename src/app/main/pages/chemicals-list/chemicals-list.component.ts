import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Chemical } from 'src/app/core/interfaces/interfaces';
import { DataFetchService } from 'src/app/core/services/data-fetch.service';

@Component({
  selector: 'app-chemicals-list',
  templateUrl: './chemicals-list.component.html',
  styleUrls: ['./chemicals-list.component.scss']
})
export class ChemicalsListComponent implements OnInit, AfterViewInit {




  columns = [
    {
      columnDef: 'chemical',
      header: 'Sustancia Química',
      cell: (chemical: Chemical) => chemical.chemical,
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'fsms',
      header: 'Aprobación SGIA',
      cell: (chemical: Chemical) => chemical.fsms?.approval ? 'Aprobado' : 'No Aprobado',
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'ems',
      header: 'Aprobación SGA',
      cell: (chemical: Chemical) => chemical.ems?.approval ? 'Aprobado' : 'No Aprobado',
      link: (chemical: Chemical) => chemical._id
    },
    {
      columnDef: 'ohsms',
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

  displayedColumns = this.columns.map(c => c.columnDef);
  displayedColumnsExpanded = [this.displayedColumns, 'details'];

  dataSource!: MatTableDataSource<Chemical>;

  @ViewChild('input') inputFilter!: ElementRef<HTMLInputElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private data: DataFetchService) { }

  ngOnInit(): void {
    this.data.get_items<Chemical>('chemicals')
      .subscribe(resp => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit(): void {

  }

  applyFilter() {
    this.dataSource.filter = this.inputFilter.nativeElement.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
