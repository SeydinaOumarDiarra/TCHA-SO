import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  host = environment.URL
  constructor(private http: HttpClient) { }

  // Gestion Clients
  public loginClient(username: any, password: any) {
    return this.http.get(this.host+`log-client/${username}/${password}`)
  }
}
