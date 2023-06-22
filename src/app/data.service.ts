import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {    
  }

  postData(formData: any): Observable<any>{
    const url = 'http://localhost:3000/signup';
    return this.http.post<any>(url, formData);
  }
}
