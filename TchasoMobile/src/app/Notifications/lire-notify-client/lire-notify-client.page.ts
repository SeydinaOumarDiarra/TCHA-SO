import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DemandeService } from 'src/app/Demande/service/demande.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lire-notify-client',
  templateUrl: './lire-notify-client.page.html',
  styleUrls: ['./lire-notify-client.page.scss'],
})
export class LireNotifyClientPage implements OnInit {
notify: any;
photo= environment.PHOTO;
  constructor(
    public serviceD: DemandeService,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.notify = this.serviceD.getNotifyClient();
    console.log(this.notify);
    
    this.photo;
  }

  async close(){
    await this.popover.dismiss();
  }

}
