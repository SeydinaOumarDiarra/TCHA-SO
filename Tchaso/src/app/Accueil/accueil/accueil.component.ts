import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  admin: any;
  adminConnect: any;
  constructor() { }

  ngOnInit() {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    console.log("okkkkkkkkkkkkk",this.adminConnect);
  }

}
