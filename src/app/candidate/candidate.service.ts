import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  constructor(private http:HttpClient) { }

   BASE_URL = "http://localhost:8081/";

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
}
