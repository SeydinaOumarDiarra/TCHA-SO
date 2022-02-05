import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServivesserviceService {
  host = environment.URL
  constructor(private http: HttpClient) { }

  public addService(service: any) {
    return this.http.post(this.host+"/service/ajout", service)
  }

  public getAllServices(){
    return this.http.get(this.host+"/service/all")
  }

  public updateService(id: any, service: any) {
    return this.http.put(this.host+`/updateservice/${id}`, service);
  }

  detailService(id:any){
    return this.http.get(this.host+"/service/"+id)
  }

  public deleteService(id:any) {
    return this.http.delete(this.host+"/service/delette/"+id);
  }
}
