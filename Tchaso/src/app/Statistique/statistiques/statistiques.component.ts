import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { StatistiqueService } from '../service/statistique.service';
import { map, retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DocTypeToken } from '@angular/compiler/src/ml_parser/tokens';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  customers: any;
  outsideData: number = 0;

  tab: any = [];
  hom: any = [];
  fem: any = [];
  cpteHom: any;
  cpteFem: any;

  tab2: any = [];
  hom2: any = [];
  fem2: any = [];
  cpteHom2: any;
  cpteFem2: any;

  barChartOptions!: ChartOptions;
  barChartLabels!: Label[];
  barChartType!: ChartType;
  barChartLegend: any;
  barChartPlugins: any;
  barChartData!: ChartDataSets[]

  barChartOptions2!: ChartOptions;
  barChartLabels2!: Label[];
  barChartType2!: ChartType;
  barChartLegend2: any;
  barChartPlugins2: any;
  barChartData2!: ChartDataSets[]
  
  constructor(
    public statservive: StatistiqueService,
    public userService: ServiceutilisateurService,
    ) {}

  ngOnInit() {  
    this.getClient();
    this.getTravailleur();
  }

 
 getClient(){
  this.userService.getAllClients().subscribe((dat: any)=>{
    for(let i=0; i<dat.length; i++){
      if(dat[i].genre == "Homme"){
        this.hom.push(dat[i]);
      }
      if(dat[i].genre == 'Femme'){
        this.fem.push(dat[i]);
      }        
      this.cpteHom = this.hom.length;
      this.cpteFem = this.fem.length;
    }
    this.barChartOptions = {
      responsive: true,
    };
    this.barChartLabels = ['Total Clients', 'Hommes', 'Femmes'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = [];
    this.barChartData = [
      {data:[dat.length, this.cpteHom, this.cpteFem], label: 'Statistique Clients' ,backgroundColor: ['black', '#f5bb20', '#684f0e'], hoverBackgroundColor: ['black','#f5bb20','#684f0e'] }
    ]; 

  })
 

}

getTravailleur(){
  this.userService.getAllTravailleurs().subscribe((dat: any)=>{
    for(let i=0; i<dat.length; i++){
      if(dat[i].genre == "Homme"){
        this.hom2.push(dat[i]);
      }
      if(dat[i].genre == 'Femme'){
        this.fem2.push(dat[i]);
      }        
      this.cpteHom2 = this.hom2.length;
      this.cpteFem2 = this.fem2.length;
    }
    this.barChartOptions2 = {
      responsive: true,
    };
    this.barChartLabels2 = ['Total Travailleurs', 'Hommes', 'Femmes'];
    this.barChartType2 = 'bar';
    this.barChartLegend2 = true;
    this.barChartPlugins2 = [];
    this.barChartData2 = [
      {data:[dat.length, this.cpteHom2, this.cpteFem2], label: 'Statistique Travailleurs' ,backgroundColor: ['black', '#f5bb20', '#684f0e'], hoverBackgroundColor: ['black','#f5bb20','#684f0e'] }
    ]; 
  })
}
  
 
}
