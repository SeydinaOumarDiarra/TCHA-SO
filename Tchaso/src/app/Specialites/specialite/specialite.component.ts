import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  searchText= '';
  listeSpecialites: any = [];
  constructor(public service: ServicespecialiteService, public router: Router) { }

  ngOnInit(): void {
    this.getAllSpecialite();    
  }

  getAllSpecialite(){
    this.service.getAllSpecialites().subscribe((data:any)=> {
      for (let i = 0; i<= data.length; i++){
        if(data[i].etat == 'actif'){
          this.listeSpecialites.push(data[i]);
        }
      }
    })
  }

  deleteSpecialite(id: any){
    this.service.deleteSpecialite(id).subscribe((data: any)=>{})
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer cette spécialité ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.deleteSpecialite(id);
        Swal.fire('Suppression!', 'Spécialité supprimée avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('specialites', {skipLocationChange: true}).then(()=>
        this.router.navigate(['specialites']));
      }
    });
  }
}
