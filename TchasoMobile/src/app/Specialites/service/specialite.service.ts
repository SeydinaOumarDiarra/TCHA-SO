import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  host = environment.URL;
  
  constructor(private http: HttpClient) { }

   // Get travailleurs par spécialité
   public getTravailleur(id: any) {
    return this.http.get(this.host+`/trava/${id}`);
  }
  
}
