import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable:MdbTableDirective;
  elements: any = [];
  previous: any = [];
  searchText: string = ''; 
  headElements = ['Id', 'Name', 'Username', 'Email'];

  @HostListener('input') oninput() 
  { 
    this.searchItems();
  } 

  constructor(private cdRef: ChangeDetectorRef, private es:EmployeeService) { }

  ngOnInit() {
    
      this.es.getEmployees().subscribe(data => {
        this.elements = data; 
       // console.log(this.elements);
       this.mdbTable.setDataSource(this.elements);
       this.elements = this.mdbTable.getDataSource();
       this.previous = this.mdbTable.getDataSource();
      })  

  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateLastItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  searchItems() { 
    const prev = this.mdbTable.getDataSource(); 
      if (!this.searchText) {
        this.mdbTable.setDataSource(this.previous); 
        this.elements =this.mdbTable.getDataSource(); 
      } 
  if (this.searchText) { 
    this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
    this.mdbTable.setDataSource(prev); 
    } 
  }
 
  
}
