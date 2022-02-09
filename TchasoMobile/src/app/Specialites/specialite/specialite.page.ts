import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/Popups/service/popup.service';
import { environment } from 'src/environments/environment';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.page.html',
  styleUrls: ['./specialite.page.scss'],
})
export class SpecialitePage implements OnInit {
tr: any;
travailleurs: any;
image = environment.PHOTO;
  constructor(
    public router: Router,
    public service: SpecialiteService,
    public servicePopup: PopupService
  ) { }

  ngOnInit() {
    this.tr = this.servicePopup.getTravailleurs();
    this.service.getTravailleur(this.tr).subscribe((data: any)=>{
      this.travailleurs = data;
      console.log(this.travailleurs);
    });
    this.image;
  }

  detailTravailleur(){
    this.router.navigate(['travailleur'])
  }
}
