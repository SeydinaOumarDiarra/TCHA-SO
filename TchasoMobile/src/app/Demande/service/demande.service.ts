import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  host = environment.URL
  constructor(private http: HttpClient) { }

  // Ajout demande
  public AjoutDemande(demande: any){
    return this.http.post(this.host+'/demande/ajout', demande)
  }
}
