import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, {SwiperOptions, Autoplay, Pagination, EffectCoverflow} from 'swiper';

SwiperCore.use([Autoplay, Pagination, EffectCoverflow])

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit, AfterContentChecked {
  details: any[]= [];
  detailConfig: SwiperOptions;
  constructor() { }

  ngOnInit() {
    this.details = [
      {detail : 'assets/images/logo.png'},
      {detail : 'assets/images/logo.png'},
      {detail : 'assets/images/logo.png'},
    ];
  }

  ngAfterContentChecked() {
    this.detailConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      initialSlide: this.details?.length > 1 ? 1 : 0,
      centeredSlides: true,
      autoplay: {
        delay: 3000
      },
      pagination: { clickable: true}
      // effect: 'coverflow'
    };
    
}

}
