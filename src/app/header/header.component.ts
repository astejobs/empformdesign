import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';


export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  password: string;
  isLoggedIn=false;
  constructor(public dialog: MatDialog,private router:Router,private generalService:GeneralService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    }); 
  }

  ngOnInit(): void {
    this.generalService.menu.subscribe(()=>{
      this.isLoggedIn=!this.isLoggedIn;
    });
    this.isLoggedIn=localStorage.getItem('token') !=null?true:false;
  }

  logout(){
    this.isLoggedIn=false;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigateByUrl("/");
  }

}

