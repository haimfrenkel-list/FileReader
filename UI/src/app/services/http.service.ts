import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }    

  runFileReader(body: any): Observable<any> {
    return this.http.post(`http://localhost:5001/api/start`, body)
  }
}
