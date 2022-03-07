import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { StatistiqueService } from '../service/statistique.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  customers: any;
  copte: any = [];
  nbreClient = 0;
  dats: any;
  tab: any = new Array;
  ac:any;
valeur!:any;
ListClient:any=[];
  agenciesData: number = 0;
  valueObj: any;
  useralerts: any;
  constructor(
    public statservive: StatistiqueService,
    public userService: ServiceutilisateurService,
      ) 
  {}


  //  cpteKal(): Observable<number>{     
  //   return this.userService.getAllClients() as any;
  //   //console.log("========",parseInt(data.toString()));
     
  //       }
  ngOnInit() {  
    this.getAlerts();
    // this.cpte()
    // this.userService.getCpteClient().subscribe(data =>{    
    //   });
    // this.someMethod().subscribe(val => {
    //   // console.log(val); // here the value is available
    //   this.ac = val;
    //   console.log(this.ac);
    // });
    // console.log("valllllllllllllllll==",this.cpteKal().toPromise());
    
    
  }
  // someMethod() {
  //   return this.userService.getCpteClient().pipe(map((value: any) => {
  //          return this.valueObj = value; 
  //      }));
  //   };

    getAlerts(){
      this.userService.getCpteClient()
             .subscribe((data) => {
                     console.log('Init', data);
                     this.setUsersArray(+data);
                      console.log('Inside', this.useralerts);
     
                 },
                 (error) => console.log(error));
         console.log('Outside', this.useralerts);
     };
     
     setUsersArray(data:number){
        this.useralerts= data;
        this.ac = this.useralerts;
     }
  
//   async get(){
//     var data = await this.userService.getCpteClient().toPromise(); //returns a json 
//     // var dataString = data.toString(); //Stringify the json to turn it to object
//     // var dataObj = JSON.parse(data.toString());

//     this.agenciesData = JSON.parse(data.toString()); //assign your variable to it
//     console.log(this.agenciesData);
// }
  //  cpte(){
  //   //this.ac = 0
    
  //    this.userService.getCpteClient().subscribe(data =>{
  //    this.ac = data;       
  //    });
  //   // console.log("second value", JSON.stringify(this.ac));
  //   // return this.ac;
  //  }

  
 
 

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  barChartLabels: Label[] = ['Clients', 'Homme', 'Femme'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data:[3, 2, 1], label: 'Clients',backgroundColor: 'blue, green, blue' }
  ];
 
}
