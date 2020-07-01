import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:8081/";
  menu=new Subject<any>();


 save(data){
   const url = this.BASE_URL+"candidate"
   return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
          return response;
    }));      
}

saveImage(data){
 const url = this.BASE_URL+"image"
 return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
        return response;
  }));      
}

 authenticate(data){
   const url=this.BASE_URL+"authenticate";
   return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
     return response;
   })); 
 }
 
 fetchCandidate(id){
   const url=this.BASE_URL+"candidate/"+id;
   return this.http.get(url);
 }

 fetchCandidates(){
  const url=this.BASE_URL+"candidates";
  return this.http.get(url);
 }

 fetchCandidatesForAssessment(){
  const url=this.BASE_URL+"candidates/assessment";
  return this.http.get(url);
 }

 fetchCandidatesForReview(){
  const url=this.BASE_URL+"candidates/review";
  return this.http.get(url);
 }

 updateAssessment(id,data){
    const url =this.BASE_URL+"assessment/"+id;
    return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
      return response;
    }));
 }

 updateReview(id,data){
  const url =this.BASE_URL+"review/"+id;
    return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
      return response;
    }));
 } 
}
