import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServivesserviceService } from 'src/app/Services/servivesservice.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeil',
  templateUrl: './corbeil.component.html',
  styleUrls: ['./corbeil.component.scss']
})
export class CorbeilComponent implements OnInit {
  searchText= '';
  listeServices: any = [];
  iconimage = environment.ICONIMAGE;

  constructor(public service: ServivesserviceService, public router: Router) { }

  ngOnInit(): void {
    this.getAllService();
    this.iconimage;
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      for(let i=0; i <= data.length; i++){
        if(data[i].etat=='inactif'){
          this.listeServices.push(data[i]);
        }
      }
      
    })
  }

  restaurerService(id: any){
    this.service.detailService(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.service.updateService(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer ce service ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.restaurerService(id);
        Swal.fire('Restauration!', 'Le service est restauré avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil']));
      }
    });
  }

}
