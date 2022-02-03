import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popupservice',
  templateUrl: './popupservice.page.html',
  styleUrls: ['./popupservice.page.scss'],
})
export class PopupservicePage implements OnInit {

  constructor(
    public router: Router,
    private popoverC: PopoverController
  ) { }

  ngOnInit() {
  }

  async close(){
    await this.popoverC.dismiss();
  }

  async specialite(){
    await this.popoverC.dismiss();
    this.router.navigate(['specialite']);
  }

}
