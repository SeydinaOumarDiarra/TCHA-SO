import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  host = environment.URL
  serviceP: any;
  serv: any;
  constructor(private http: HttpClient) { }
  
  public getAllServices(){
    return this.http.get(this.host+"/service/all")
  }

  public SpecialitesByService(id: any){
    return this.http.get(this.host+`/spec/${id}`)
  }

  setByServ(data: any){
    this.serv = data;
  }

  getByServ(){
    return this.serv;
  }

  setByServicePopup(data: any){
    this.serviceP = data;
  }

  getByServicePopup(){
    return this.serviceP;
  }

}
