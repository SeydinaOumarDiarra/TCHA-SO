import { Component, OnInit } from '@angular/core';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  searchText= '';
  listeSpecialites: any;
  constructor(public service: ServicespecialiteService) { }

  ngOnInit(): void {
    this.getAllSpecialite();
    console.log(this.listeSpecialites);
    
  }

  getAllSpecialite(){
    this.service.getAllSpecialites().subscribe((data:any)=> {
      this.listeSpecialites = data;
    })
  }
}
