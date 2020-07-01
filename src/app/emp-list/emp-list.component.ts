import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';



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
  headElements = ['Name', 'Post Applied For','Project Site', 'Company'];
  link:any;
  role:string='';

  @HostListener('input') oninput() 
  { 
    this.searchItems();
  } 

  constructor(private cdRef: ChangeDetectorRef, private generalService:GeneralService,private router:Router) {
     this.role=localStorage.getItem('role');
   }

  ngOnInit() {
      if(this.role == 'Interviewer'){
        this.generalService.fetchCandidatesForAssessment().subscribe(data => {
          this.setTableData(data);
          this.link='/assessment';
       })
      }
      else if(this.role=='HR'){
        this.generalService.fetchCandidatesForReview().subscribe(data => {
          this.setTableData(data);
          this.link='/review';
       })
      }
      else{
        this.generalService.fetchCandidates().subscribe(data => {
          this.setTableData(data);
          this.link='#';
       })
      }
        

  }

  setTableData(data){
    this.elements = data; 
    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
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
