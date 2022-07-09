import {  Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { Column } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, OnChanges {


  @Input() data!: T[];
  @Input() columns!: Column<T>[];
  @Input() defaultSortValue!: string;
  @ViewChild('input') inputFilter!: ElementRef<HTMLInputElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  data$ = new BehaviorSubject([]);
  
  dataSource!: NestedMatTableDataSource<T>;

  displayedColumns!: string[];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { data } = changes;
    if (data) {
      this.data$.next(data.currentValue);
      this.dataSource = new NestedMatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }



  applyFilter() {
    this.dataSource.filter = this.inputFilter.nativeElement.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


class NestedMatTableDataSource<T> extends MatTableDataSource<T> {

  constructor(initialData: T[] = []) {
    super(initialData);
  }

  override sortingDataAccessor = (data: any, sortHeaderId: string): string | number => {
    const value = sortHeaderId.split('.')
      .reduce((accumulator, key) => accumulator && accumulator[key], data) as | string | number;

    if (typeof (value) === 'boolean') {
      if (value === true) {
        return 0;
      } else if (value === false) {
        return 1;
      } else {
        return value;
      }
    }
    return value;
  };

}



