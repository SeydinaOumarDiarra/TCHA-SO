import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceutilisateurService } from '../service/serviceutilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  searchText = '';
  utilisateurs: any;
  admins: any;
  workers: any;
  customers: any ;
  adminEtat = false;
  clientEtat = false;
  travailleurEtat = false;
  travailleurs: any;
  clients: any;
  photo = environment.PHOTO;

  constructor(
    private userService: ServiceutilisateurService,
  ) { }

  ngOnInit(): void {
    this.photo
    this.userService.getAllAdmins().subscribe((data: any)=>{
      this.admins = data;
  });
  this.userService.getAllTravailleurs().subscribe((data: any)=>{
    this.workers = data;
    
  });
  this.userService.getAllClients().subscribe((data: any)=>{
    this.customers = data;
  });
    this.adminEtat;
    this.clientEtat;
    this.travailleurEtat; 
    
  }

  users(event: any){
    console.log(event.target.value);
    this.utilisateurs=[];
    if(event.target.value == 'Clients' || event.target.value == ''){
      this.adminEtat = false;
      this.travailleurEtat = false;
      this.clientEtat = true;
      this.utilisateurs = this.customers;
    }
    if(event.target.value == 'Administrateurs'){
      this.clientEtat = false;
      this.travailleurEtat = false;
      this.adminEtat = true;
      this.utilisateurs = this.admins;
    }

    if(event.target.value == 'Travailleurs'){
      this.clientEtat = false;
      this.adminEtat = false;
      this.travailleurEtat = true;
      this.utilisateurs = this.workers;    
    }
  }
    
    
}
