import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  travailleurs: any;
  travailleur: any;
  photo = environment.PHOTO;
  constructor() { }

  ngOnInit() {
    this.travailleurs =  localStorage.getItem('user');
    this.travailleur = JSON.parse(this.travailleurs);
    this.photo
  }

}
