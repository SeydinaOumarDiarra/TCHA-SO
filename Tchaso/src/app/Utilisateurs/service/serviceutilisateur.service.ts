import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilisateurService {

  host = environment.URL
  constructor(private http: HttpClient) { }

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
}
