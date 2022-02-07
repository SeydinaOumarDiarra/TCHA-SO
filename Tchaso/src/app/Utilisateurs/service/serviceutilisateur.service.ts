import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilisateurService {

  host = environment.URL
  constructor(private http: HttpClient) { }

  // Gestion Administrateur
  public addAdmin(admin: any) {
    return this.http.post(this.host+"/administrateur/ajout", admin)
  }
  public getAllAdmins(){
    return this.http.get(this.host+"/administrateur/all")
  }
  public updateAdmin(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updateadmin/${id}`, utilisateur);
  }
  detailAdmin(id:any){
    return this.http.get(this.host+"/administrateur/"+id)
  }
  public deleteAdmin(id:any) {
    return this.http.delete(this.host+"/administrateur/delette/"+id);
  }

  // Gestion Travailleur
  public addTravailleur(travailleur: any) {
    return this.http.post(this.host+"/travailleur/ajout", travailleur)
  }
  public getAllTravailleurs(){
    return this.http.get(this.host+"/travailleur/all")
  }
  public updateTravailleur(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updatetravailleur/${id}`, utilisateur);
  }
  detailTravailleur(id:any){
    return this.http.get(this.host+"/travailleur/"+id)
  }
  public deleteTravailleur(id:any) {
    return this.http.delete(this.host+"/travailleur/delette/"+id);
  }

  // Gestion Clients
  public addClient(client: any) {
    return this.http.post(this.host+"/client/ajout", client)
  }
  public getAllClients(){
    return this.http.get(this.host+"/client/all")
  }
  public updateClient(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updateclient${id}`, utilisateur);
  }
  detailClient(id:any){
    return this.http.get(this.host+"/client/"+id)
  }
  public deleteClient(id:any) {
    return this.http.delete(this.host+"/client/delette/"+id);
  }


}
