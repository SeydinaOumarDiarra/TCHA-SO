import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-detatil-service',
  templateUrl: './detatil-service.component.html',
  styleUrls: ['./detatil-service.component.scss']
})
export class DetatilServiceComponent implements OnInit {
  searchText= '';
  service: any;
  listeSpecialites: any;
  iconimage = environment.ICONIMAGE;
  id: any;

  constructor(
    private services: ServivesserviceService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.services.detailService(this.id).subscribe((data: any)=>{
      this.service = data;
    });

    this.services.SpecialitesByService(this.id).subscribe((data: any)=>{
      this.listeSpecialites = data;
    });

    this.iconimage;
  }

}
