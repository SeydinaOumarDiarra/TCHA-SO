import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-detail-specialite',
  templateUrl: './detail-specialite.component.html',
  styleUrls: ['./detail-specialite.component.scss']
})
export class DetailSpecialiteComponent implements OnInit {
  id: any;
  specialite: any
  constructor(
    private service: ServicespecialiteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailSpecialite(this.id).subscribe((data: any)=>{
    this.specialite = data;
    })
  }

}
