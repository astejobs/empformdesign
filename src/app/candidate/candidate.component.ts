import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StarRatingColor } from '../star-rating/star-rating.component';
import { GeneralService } from '../general.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private generalService:GeneralService, private dialog: MatDialog) { }
  rating = [];
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
  fileData: File = null;
  previewUrl:any = '/assets/images/image-picker.png';
  stepErrors = false;
  submitted = true;
  @ViewChild('myForm') myForm:NgForm;

  
  ratingData = ["am the life of the party", "feel little concern for others","am always prepared","get stressed out easily","have a rich vocabulary","don't talk a lot","am interested in people","leave my belongings around",
  "am relaxed most of the time",
   "have difficulty understanding abstract ideas",
   "feel confortable around people",
   "insult people",
   "pay attention to detail",
   "worry about things", 
   "have a vivid imagination",
   "keep in the background",
   "sympathize with others' feelings",
   "make a mess of things",
   "seldom feel blue",
  "am not interested in abstract ideas",
  "start conversations",
  "am not interested in other people's problems",
  "get chores done right away",
  "am easily disturbed",
  "have excellent ideas",
  "have little to say",
  "have a soft heart",
  "often forgot to put things back in their proper place",
  "get upset easily",
  "do not have a good imagination",
  "talk to a lot of different people at parties",
  "am really interested in others",
  "like order",
  "change my mood a lot",
  "am quick to understand things",
  "don't like to draw attention to myself",
  "take time out for others",
  "shirk my duties",
  "have a frequent mood swings",
  "use difficult words",
  "don't mind being the center of attention",
  "feel others' emotions",
  "follow a schedule",
  "get irritated easily",
  "spend time reflecting on things",
  "am quiet around strangers",
  "make people at ease",
  "am exacting in my work",
  "often feel blue",
  "am full of ideas"
]
  candidate:any;
  referralEmployee:any;
  personalDetails:any;
  familyDetails:any= [];
  educations:any=[];
  employmentHistories:any=[];
  languages:any=[];
  computerProficiencies:any=[];
  memberships:any=[];
  references:any=[];
  ratingQuestions:any={};
  panels:any = ['start','pp','bd','fp','eb','eh','lp','cp','ms','cr','ra','pd','dec','rq']
  currentPanel = 'start';
  panelIndex=0;
  ratingQuestionsSize=0;
  image:string;
  user:any={};
  successMsg='';
  showSucessMsg=false;
  errorMsg='';
  showErrorMsg=false;

  ngOnInit(): void {
      this.candidate = new Object();
      this.referralEmployee=new Object();
      this.personalDetails= new Object();
      this.familyDetails.push(new Object());
      this.educations.push(new Object());
      this.employmentHistories.push(new Object());  
      this.computerProficiencies.push(new Object());
      this.memberships.push(new Object());
      this.references.push(new Object());
      this.references.push(new Object());
      this.languages.push(new Object());
  }
 
  onSubmitForm(){
      this.candidate.referralEmployee=this.referralEmployee;
      this.candidate.personalDetails=this.personalDetails;
      this.candidate.familyDetails=this.familyDetails;
      this.candidate.educations=this.educations;
      this.candidate.employmentHistories=this.employmentHistories;
      this.candidate.computerProficiencies=this.computerProficiencies;
      this.candidate.memberships=this.memberships;
      this.candidate.references=this.references;
      this.candidate.ratingQuestions=this.ratingQuestions;
      this.candidate.languages=this.languages;
      console.log(this.candidate);
      this.generalService.save(this.candidate).subscribe((response:any)=>{
            if(response.status == 200){
              console.log(response.body);
            let img={
                'id':response.body,
                'image':this.image
            }
              this.generalService.saveImage(img).subscribe((response:any)=>{
                  
              });
              Swal.fire('Welcome', 'Data saved successfully', 'success');
              this.showMessage('Data saved successfully')
            }else{
              Swal.fire('oops', 'Data was not saved successfully', 'error')
              this.showErrorMessage('Something went wrong.Please try again')
            }
      });
    
    }
 

  onNext(index){
    if(this.validationCheck())
    {
      return; 
    }
    else{
      this.panelIndex++;
      this.currentPanel = this.panels[+index+1];
    }
  }
  validationCheck() {
    if(this.myForm.invalid) {
      this.stepErrors = true;
      return true;
    } 
    else {
      this.stepErrors = false;
      return false;
    }
  }

  onPrevious(index){
      this.panelIndex--;
      this.currentPanel=this.panels[+index-1];
  }

  addFamilyMember(){
    var obj={};
    this.familyDetails.push(obj);
  }

  removeFamilyMember(index,id){
    this.familyDetails.splice(+index,1)
  }

  addEducation(){
    var obj={};
    this.educations.push(obj);
  }

  removeEducation(index,id){
    this.educations.splice(+index,1)
  }

  addHistory(){
    var obj={};
    this.employmentHistories.push(obj);
  }

  removeHistory(index,id){
    this.employmentHistories.splice(+index,1)
  }

  addLanguage(){
    var obj={};
    this.languages.push(obj);
  }

  removeLanguage(index,id){
    this.languages.splice(+index,1)
  }


  addComputerProficiency(){
    var obj={};
    this.computerProficiencies.push(obj);
  }

  removeComputerProficiency(index,id){
    this.computerProficiencies.splice(+index,1)
  }


  addMembership(){
    var obj={};
    this.memberships.push(obj);
  }

  removeMembership(index,id){
    this.memberships.splice(+index,1)
  }


  addReference(){
    var obj={};
    this.references.push(obj);
  }

  removeReference(index,id){
    this.references.splice(+index,1)
  }

  
  onRatingChanged(event){
    this.rating[event.index] = event.rating;
    let property='rating'+(++event.index);
    this.ratingQuestions[property]=event.rating;
    this.ratingQuestionsSize=Object.keys(this.ratingQuestions).length;
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }
  preview() {
  // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => { 
    this.previewUrl = reader.result;
    this.image=this.previewUrl;
    }
  }
  
  showMessage(msg){
    this.showErrorMsg=false;
    this.showSucessMsg=true;
    this.successMsg=msg;
  }

  showErrorMessage(msg){
    this.showSucessMsg=false;
    this.showErrorMsg=true;
    this.errorMsg=msg;
  }

  openDialogCancel() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Are you sure want to Cancel?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
   

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('Cancelled');
        this.myForm.resetForm();
        this.currentPanel = 'start';
        this.panelIndex=0;
      }
    });
  }
  openDialogSubmit() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Click Yes to Submit the Form, Please Check details before proceeding?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
   

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
       this.onSubmitForm();
       
       
      }
    });
  }

  myAgeFunction(dob){
    var date = new Date(dob);
        var ageDifMs = Date.now() - date.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
