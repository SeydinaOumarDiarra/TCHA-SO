import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { DemandeService } from 'src/app/Demande/service/demande.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-travailleur-notify',
  templateUrl: './travailleur-notify.page.html',
  styleUrls: ['./travailleur-notify.page.scss'],
})
export class TravailleurNotifyPage implements OnInit {
  notify: any;
  id: any;
  image = environment.PHOTO;

  constructor(
    public serviceA: AccueilService,
    public serviceD: DemandeService,
    private route: ActivatedRoute,
    public popover: PopoverController,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.serviceA.getAllNotifyTravailleur(this.id).subscribe((dt:any)=>{
      this.notify = dt;
      console.log(dt);
    });
    this.image;
  }

  // Lecture de la notification;
  async lirenotify(data: any) {
    this.serviceD.DetailDemande(data).subscribe((demande: any)=>{
      demande.statutdemande = "lu";
      this.serviceD.ModifierDemande(demande, demande.id).subscribe((dt: any)=>{
        this.serviceD.setNotifyTravailleur(data);
        this.router.navigate(['lire-notify-travailleur']);
      });
    })
  }


}
