import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ViewWillEnter } from '@ionic/angular';
import { ModifierCompetencePage } from '../modifier-competence/modifier-competence.page';
import { CompetenceService } from '../service/competence.service';
import { SupprimerCompetencePage } from '../supprimer-competence/supprimer-competence.page';

@Component({
  selector: 'app-detail-competence',
  templateUrl: './detail-competence.page.html',
  styleUrls: ['./detail-competence.page.scss'],
})
export class DetailCompetencePage implements OnInit, ViewWillEnter {
id: any;
comp: any
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: CompetenceService,
    public popover: PopoverController,
  ) {}

  ionViewWillEnter(): void {
   
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.detailCompetence(this.id).subscribe((data: any)=>{
    this.comp = data;
    console.log("comppp ",this.comp);
    })
  }
  


  async updateDemande(data: any){
    this.service.setIdComp(data);
    const popover = await this.popover.create({
      component: ModifierCompetencePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
    this.router.navigate(['detail-competence', this.id])
  }

  async deleteDemande(data: any){
    this.service.setIdComp(data);
    const popover = await this.popover.create({
      component: SupprimerCompetencePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

}
