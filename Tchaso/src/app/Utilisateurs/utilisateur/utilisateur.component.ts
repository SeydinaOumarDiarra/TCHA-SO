import { Component, OnInit } from '@angular/core';
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
  adminEtat = false;
  clientEtat = false;
  travailleurEtat = false;
  travailleurs: any;
  clients: any;

  constructor(
    private userService: ServiceutilisateurService,
  ) { }

  ngOnInit(): void {
    this.userService.getAllAdmins().subscribe((data: any)=>{
      this.admins = data;
  });
    this.adminEtat;
    this.clientEtat;
  }

  users(event: any){
    console.log(event.target.value);
    this.utilisateurs=[];
    if(event.target.value == 'Clients' || event.target.value == ''){
      this.adminEtat = false;
      this.travailleurEtat = false;
      this.clientEtat = true;
    }
    if(event.target.value == 'Administrateurs'){
      this.clientEtat = false;
      this.travailleurEtat = false;
      this.adminEtat = true;
      this.utilisateurs = this.admins;
      console.log(this.utilisateurs);
      
    }

    if(event.target.value == 'Travailleurs'){
      this.clientEtat = false;
      this.adminEtat = false;
      this.travailleurEtat = true;
      this.utilisateurs = this.admins;
      console.log(this.utilisateurs);
      
    }
  }
    
    
}
