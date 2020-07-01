import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {


  assessment:any={};
  candidate:any={};
  success=false;
  successMsg='';
  constructor(private route:ActivatedRoute,private generalService:GeneralService,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.generalService.fetchCandidate(id).subscribe((data:any)=>{
      console.log(data);
      this.candidate=data;
    },(error:any)=>{
      alert('Something went wrong.Try again')
    });
  }

  onSubmitForm(){
     this.generalService.updateAssessment(this.candidate.id,this.assessment).subscribe((response:any)=>{
          if(response.status==200){
              this.router.navigateByUrl("/candidates");
          }
     },(err:any)=>{
       alert("Something went wrong.Please try again")
     });
  }
showSuccess(msg){
  this.success=true;
  this.successMsg=msg;
}

}
