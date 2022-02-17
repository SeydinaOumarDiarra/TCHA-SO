import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetenceService } from 'src/app/Competence/service/competence.service';
import { environment } from 'src/environments/environment';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-detail-travailleur',
  templateUrl: './detail-travailleur.component.html',
  styleUrls: ['./detail-travailleur.component.scss']
})
export class DetailTravailleurComponent implements OnInit {
  searchText = '';
  id: any;
  travailleur: any;
  photo = environment.PHOTO;
  piece = environment.PIECE;
  competences: any;
  admin: any;
  adminConnect: any

  constructor(
    private service: ServiceutilisateurService,
    private serviceC: CompetenceService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)

    this.id = this.route.snapshot.params['id'];
    this.service.detailTravailleur(this.id).subscribe((data: any)=>{
    this.travailleur = data;
    });

    this.serviceC.getCompetenceByTravailleur(this.id).subscribe((dt: any)=>{
      this.competences = dt;
    })

    this.photo;
    this.piece;
  }

  activer(data: any){
    this.travailleur.etat = "actif";
    this.travailleur.administrateur = this.adminConnect;
    this.travailleur.password = "Tcha"+ (this.travailleur.prenom).substr(0, 3)+(this.travailleur.numWhasapp).substr(1, 2) + this.travailleur.nom.substr(0, 3),
    this.service.updateTravailleur(this.travailleur.id, this.travailleur).subscribe((tra: any)=>{
      let url: string = "/detail-travailleur/" + tra.id
    window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['detail-travailleur', tra.id]));
    })
    
  }
  desactiver(data: any){
    this.travailleur.etat = "inactif";
    this.service.updateTravailleur(this.travailleur.id, this.travailleur).subscribe((tra: any)=>{
      let url: string = "/detail-travailleur/" + tra.id
    window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['detail-travailleur', tra.id]));
    })
  }

}
