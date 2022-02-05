import { Component, OnInit } from '@angular/core';
import { ServivevilleService } from '../serviveville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit {
  searchText= '';
  listeVilles: any;
  constructor(
    public service: ServivevilleService
  ) { }

  ngOnInit(): void {
    this.getAllVille();
  }

  getAllVille(){
    this.service.getAllVilles().subscribe((data:any)=> {
      this.listeVilles = data;
    })
  }

}
