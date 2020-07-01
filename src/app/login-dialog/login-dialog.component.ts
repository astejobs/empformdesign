import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../header/header.component';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private generalService:GeneralService,private router:Router) {}

  user:any={};
  showError:boolean=false;
  errorMessage="";
  onNoClick(): void {
    this.dialogRef.close();
    this.showError=false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.showError=false;
    console.log(this.user);
      this.generalService.authenticate(this.user).subscribe((response:any)=>{
        console.log(response.status);
        if(response.status == 200){
          localStorage.setItem('token',response.body.token);
          localStorage.setItem('role',response.body.role);
          this.router.navigateByUrl('/candidates');
          this.generalService.menu.next();
          this.onNoClick();
        }
        
      },(response:any)=>{
        this.showError=true;
        console.log(response);
        if(response.status==401){
          this.errorMessage="Invalid Credentials";
        }else{
          this.errorMessage="Something went wrong,Please try again.";
        }
      });
  }

 

}
