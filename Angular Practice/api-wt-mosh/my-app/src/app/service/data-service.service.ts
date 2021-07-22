import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  postNewData = {
    title: 'my content'
  };


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(url);
  }

  postData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post<any>(url, this.postNewData);

  }
}
