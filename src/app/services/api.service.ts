import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url='http://localhost:3000'

  constructor(private http: HttpClient) { }

  getallproductapi(){
    return this.http.get(`${this.server_url}/all-products`)
  }

  registerapi(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }

  loginapi(user:any){
     return this.http.post(`${this.server_url}/login`,user)
  }
}
