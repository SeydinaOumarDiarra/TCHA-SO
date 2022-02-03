import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionclient',
  templateUrl: './inscriptionclient.page.html',
  styleUrls: ['./inscriptionclient.page.scss'],
})
export class InscriptionclientPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }

}
