import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pojo } from './pojo';

@Injectable({
  providedIn: 'root'
})
export class RecruitmnetService {

  constructor(private http : HttpClient) { }
  postData(data){
    return this.http.post("http://localhost:8080/company/employees/",data);
  }

  putDatat(data){
 return this.http.put(`http://localhost:8080/company/employees/${data.id}`, data);
  }

  public findAll(): Observable <any> {
    return this.http.get<Pojo[]>(`http://localhost:8080/company/employees`);
  }

  deleteCandidate(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/company/employees/${id}`);
  }
}