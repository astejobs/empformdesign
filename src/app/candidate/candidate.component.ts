import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor() { }

  @ViewChild('myForm') myForm:NgForm;

  
  ratingData = ["am the life of the party", "feel little concern for others","am always prepared","get stressed out easily","have a rich vocabulary","dont talk a lot","am interested in people","leave my belongings around",
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
  "sget chores done right away",
  "am easily disturbed",
  "have excellent ideas",
  "have little to say",
  "have a soft heart",
  "often forgot to put things back in their proper place",
  "Get upset easily",
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
  "am full of idaes"
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
  ratingQuestions:any=[];
  panels:any = ['start','pp','bd','fp','eb','eh','lp','cp','ms','cr','ra','pd','dec','rq']
  currentPanel = 'start';
  panelIndex=12;
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
      this.ratingQuestions=Array(50).fill(0)
  }

  onSubmitForm(){

  }

  onNext(index){
      
      this.panelIndex++;
      this.currentPanel = this.panels[+index+1];
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

  onRate(index,value){
    //this.ratingQuestions
  }
}