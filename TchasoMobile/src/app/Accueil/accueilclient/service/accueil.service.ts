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
  
  // Get tous les services
  public getAllServices(){
    return this.http.get(this.host+"/service/all")
  }

  // Get specialites par service
  public SpecialitesByService(id: any){
    return this.http.get(this.host+`/spec/${id}`)
  }

  // Get travailleurs par spécialité
  public getTravailleur(id: any) {
    return this.http.get(this.host+`/trava/${id}`);
  }

   // Get notify client
   public getNotifyClient(id: any) {
    return this.http.get(this.host+`/getNotifyClient/${id}`);
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
