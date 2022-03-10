import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { StatistiqueService } from '../service/statistique.service';
import { map, retryWhen } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  customers: any;
  outsideData: number = 0;
  basicData: any;
  basicOptions: any;
  
  constructor(
    public statservive: StatistiqueService,
    public userService: ServiceutilisateurService,
    ) {}

  ngOnInit() {  
    //this.getAlerts();    
    // this.basicData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
    //   datasets: [
    //     {
    //       label: 'Vente',
    //       backgroundColor: '#42A5F5',
    //       data: [65, 59, 80, 81, 56, 55, 40,36,67,33,62,56]
    //     },
    //     {
    //       label: 'Achat',
    //       backgroundColor: '#FFA726',
    //       data: [28, 48, 40, 19, 86, 27, 90,65, 59, 80, 81, 56]
    //     }
    //   ]
    // }
  }












    // getAlerts(){
    //   this.userService.getCpteClient().subscribe((data:any) => {
    //            if(data) {
    //             this.getNumberData(data);
    //            }
    //           });
    //  }
     
    //  getNumberData(data:any){
    //    this.outsideData = data;
    //    console.log('outsideData', this.outsideData);
    //  }
 

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  
  // barChartLabels: Label[] = ['Clients', 'Homme', 'Femme'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];
  // barChartData: ChartDataSets[] = [
  //   {data:[this.outsideData, 2, 1], label: 'Clients',backgroundColor: 'blue, green, blue' }
  // ];
 
}
