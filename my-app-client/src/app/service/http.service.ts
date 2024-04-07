import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const HTTP_OPTIONS = {
  withCredentials: false,
  params: new HttpParams(),
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, params?:HttpParams): Observable<T> {
    const requestOptions = { ...HTTP_OPTIONS, params: params};
    const response = this.httpClient.get<T>(url, requestOptions);
    return response;
  }
}
