import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
  baseUrl = 'https://jsonplaceholder.typicode.com/comments'

  getdata(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}
