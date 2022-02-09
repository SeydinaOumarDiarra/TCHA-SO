import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { environment } from 'src/environments/environment';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-popupservice',
  templateUrl: './popupservice.page.html',
  styleUrls: ['./popupservice.page.scss'],
})
export class PopupservicePage implements OnInit {
serviceP: any;
serv: any;
iconimage = environment.ICONIMAGE;
  constructor(
    public router: Router,
    private popoverC: PopoverController,
    public serviceAccueil: AccueilService,
    public servicePopup: PopupService
  ) { }

  ngOnInit() {
    this.serv = this.serviceAccueil.getByServ();    
    this.serviceP = this.serviceAccueil.getByServicePopup();
    this.iconimage;
  }

  async close(){
    await this.popoverC.dismiss();
  }

  async travailleur(data: any){
    this.servicePopup.setTravailleurs(data);
    await this.popoverC.dismiss();
    this.router.navigate(['specialite']);
  }

}
