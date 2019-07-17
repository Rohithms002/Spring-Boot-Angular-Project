import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewRecruitmentService {

  constructor(private http: HttpClient) { }

  postData(data){
    return this.http.post("",data);
  }
}
