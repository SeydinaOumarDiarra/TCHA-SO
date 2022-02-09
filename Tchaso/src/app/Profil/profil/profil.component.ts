import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  adminConnect: any;
  admin: any;

  constructor() { }

  ngOnInit(): void {
    this.adminConnect =  localStorage.getItem('userData');
    this.admin = JSON.parse(this.adminConnect)
  }
  
 

}
