import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private username="webname";
  
  constructor(private http:HttpClient ) { 
    }
  getUser(){
      return this.http.get('https://api.github.com/users/'+this.username)
      /*.map(res => res.json());*/
      
  }
}
