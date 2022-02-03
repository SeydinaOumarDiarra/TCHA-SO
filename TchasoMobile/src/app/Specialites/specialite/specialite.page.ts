import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.page.html',
  styleUrls: ['./specialite.page.scss'],
})
export class SpecialitePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  detailTravailleur(){
    this.router.navigate(['travailleur'])
  }
}
