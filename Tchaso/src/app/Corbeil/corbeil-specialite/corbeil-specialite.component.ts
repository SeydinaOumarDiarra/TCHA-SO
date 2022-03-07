import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeil-specialite',
  templateUrl: './corbeil-specialite.component.html',
  styleUrls: ['./corbeil-specialite.component.scss']
})
export class CorbeilSpecialiteComponent implements OnInit {
  searchText= '';
  listeSpecialites: any = [];
  constructor(public service: ServicespecialiteService, public router: Router) { }

  ngOnInit(): void {
    this.getAllSpecialite(); 
  }

  getAllSpecialite(){
    this.service.getAllSpecialites().subscribe((data:any)=> {
      for (let i = 0; i<= data.length; i++){
        if(data[i].etat == 'inactif'){
          this.listeSpecialites.push(data[i]);
        }
      }
    })
  }

  restaurerSpecialite(id: any){
    this.service.detailSpecialite(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.service.updateSpecialite(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer cette spécialité ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.restaurerSpecialite(id);
        Swal.fire('Restauration!', 'Spécialité est restaurée avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil-specialite', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil-specialite']));
      }
    });
  }

}
