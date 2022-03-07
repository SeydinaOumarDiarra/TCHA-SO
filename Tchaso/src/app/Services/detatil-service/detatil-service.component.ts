import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AjoutSpecialiteComponent } from 'src/app/Specialites/ajout-specialite/ajout-specialite.component';
import { Ajout2SpecialiteComponent } from 'src/app/Specialites/ajout2-specialite/ajout2-specialite.component';
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
  ref: DynamicDialogRef | undefined;

  constructor(
    private services: ServivesserviceService,
    private route: ActivatedRoute,
    public dialoService: DialogService
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

  show(id: any) {
    this.services.setIdService(id);
    this.ref = this.dialoService.open(Ajout2SpecialiteComponent, {
        header: 'Ajouter une spécialité',
        width: '30%',
        // contentStyle: {"max-height": "500px", "overflow": "auto"},
        // baseZIndex: 10000
    });
  }

}
