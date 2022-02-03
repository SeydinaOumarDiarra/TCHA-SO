import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, {SwiperOptions, Autoplay, Pagination, EffectCoverflow} from 'swiper';

SwiperCore.use([Autoplay, Pagination, EffectCoverflow])

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
 
  constructor() { }

  ngOnInit() {
    
  }

  

}
