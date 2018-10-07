import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mat-datatable-demo',
  templateUrl: './mat-datatable-demo.component.html',
  styleUrls: ['./mat-datatable-demo.component.css']
})
export class MatDatatableDemoComponent implements OnInit {

  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

    /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onEdit(id){
    console.log("edit id::"+id);
    //this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.success('edit id::'+ id);
  }

  onDelete(id){
    console.log("delete id::"+id);
    this.toastr.error('delete id::'+id);
  }

}

export interface Element {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {id: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {id: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {id: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {id: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
  {id: 6, firstName: 'Neelesh', lastName: 'Gupta', email: 'neelesh@gmail.com'},
  {id: 7, firstName: 'Mark', lastName: 'Paisa', email: 'mark@gmail.com'} 
];
