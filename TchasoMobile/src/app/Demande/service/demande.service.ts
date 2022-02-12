import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  host = environment.URL;
  notifyClient: any;
  constructor(private http: HttpClient) { }

  // Ajout demande
  public AjoutDemande(demande: any){
    return this.http.post(this.host+'/demande/ajout', demande)
  }

  // Get detail demande
   public DetailDemande(id: any) {
    return this.http.get(this.host+`/demande/${id}`);
  }

  // Modifier demande
  public ModifierDemande(demande: any, id: any) {
    return this.http.put(this.host+`/updatedemande/${id}`, demande);
  }

  setNotifyClient(data: any){this.notifyClient = data}
  getNotifyClient(){return this.notifyClient}

}
