import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Area, Chemical, Column, User } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataSource!: MatTableDataSource<Area | Chemical | User>
  @Input() columns!: Column[]
  @ViewChild('input') inputFilter!: ElementRef<HTMLInputElement>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns =  this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    this.dataSource.filter = this.inputFilter.nativeElement.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
