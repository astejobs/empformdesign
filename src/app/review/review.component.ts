import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {

  review:any={};
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
    this.generalService.updateReview(this.candidate.id,this.review).subscribe((response:any)=>{
         if(response.status==200){
             this.router.navigateByUrl("/candidates");
         }
    },(err:any)=>{
      alert("Something went wrong.Please try again")
    });
 }

}
