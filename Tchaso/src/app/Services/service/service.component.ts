import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  searchText= '';
  listeServices: any = [];
  iconimage = environment.ICONIMAGE;
  constructor(
    public service: ServivesserviceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllService();
    this.iconimage;
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      for(let i = 0; i< data.length; i ++){
        if(data[i].etat == 'actif'){
          this.listeServices.push(data[i]);
        }
      }
    })
  }

  deleteService(id: any){
    this.service.deleteService(id).subscribe((data: any)=>{})
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer cette ville ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.deleteService(id);
        Swal.fire('Suppression!', 'Service supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('services', {skipLocationChange: true}).then(()=>
        this.router.navigate(['services']));
      }
    });
  }
}
