import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  searchText= '';
  listeServices: any;
  iconimage = environment.ICONIMAGE;
  constructor(
    public service: ServivesserviceService
  ) { }

  ngOnInit(): void {
    this.getAllService();
    this.iconimage;
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      this.listeServices = data;
    })
  }
}
