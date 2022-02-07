import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceInscriptionService {

  host = environment.URL

  constructor(private http: HttpClient) { }

  // Gestion Clients
  public inscriptionClient(client: any) {
    return this.http.post(this.host+"/client/ajout", client)
  }
}
