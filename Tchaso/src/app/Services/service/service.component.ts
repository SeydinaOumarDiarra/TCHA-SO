import { Component, OnInit } from '@angular/core';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  searchText= '';
  listeServices: any;
  constructor(
    public service: ServivesserviceService
  ) { }

  ngOnInit(): void {
    this.getAllService();
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      this.listeServices = data;
    })
  }
}
