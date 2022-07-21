import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url:string = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {}
  getstudents(){
    return this.http.get(`${this.url}getstudents`);
  }
  createstu(data:any){
    return this.http.post(`${this.url}createstudents`, data);
  }
  deletedata(id:any){
    return this.http.delete(`${this.url}deletestudent/${id}`);
  }
  updatedata(id:any, data:any){
    return this.http.patch(`${this.url}updatestudent/${id}`, data);
  }
}
