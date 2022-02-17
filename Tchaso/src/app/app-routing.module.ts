import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { AjoutCompetenceComponent } from './Competence/ajout-competence/ajout-competence.component';
import { ModifierCompetenceComponent } from './Competence/modifier-competence/modifier-competence.component';
import { GuardService } from './Guard/guard.service';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { AjoutServiceComponent } from './Services/ajout-service/ajout-service.component';
import { ModifierServiceComponent } from './Services/modifier-service/modifier-service.component';
import { ServiceComponent } from './Services/service/service.component';
import { AjoutSpecialiteComponent } from './Specialites/ajout-specialite/ajout-specialite.component';
import { DetailSpecialiteComponent } from './Specialites/detail-specialite/detail-specialite.component';
import { ModifierSpecialiteComponent } from './Specialites/modifier-specialite/modifier-specialite.component';
import { SpecialiteComponent } from './Specialites/specialite/specialite.component';
import { StatistiquesComponent } from './Statistique/statistiques/statistiques.component';
import { AjoutAdminComponent } from './Utilisateurs/Administrateur/ajout-admin/ajout-admin.component';
import { DetailAdminComponent } from './Utilisateurs/Administrateur/detail-admin/detail-admin.component';
import { ModifierAdminComponent } from './Utilisateurs/Administrateur/modifier-admin/modifier-admin.component';
import { DetailClientComponent } from './Utilisateurs/Client/detail-client/detail-client.component';
import { AjoutTravailleurComponent } from './Utilisateurs/Travailleur/ajout-travailleur/ajout-travailleur.component';
import { DetailTravailleurComponent } from './Utilisateurs/Travailleur/detail-travailleur/detail-travailleur.component';
import { ModifierTravailleurComponent } from './Utilisateurs/Travailleur/modifier-travailleur/modifier-travailleur.component';
import { TravailleursAttenteComponent } from './Utilisateurs/Travailleur/travailleurs-attente/travailleurs-attente.component';
import { UtilisateurComponent } from './Utilisateurs/utilisateur/utilisateur.component';
import { AjoutVilleComponent } from './Villes/ajout-ville/ajout-ville.component';
import { ModifierVilleComponent } from './Villes/modifier-ville/modifier-ville.component';
import { VilleComponent } from './Villes/ville/ville.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate:[GuardService] },

  // Gestion services
  { path: 'services', component: ServiceComponent },
  { path: 'ajoutservice', component: AjoutServiceComponent },
  { path: 'modifierservice/:id', component: ModifierServiceComponent },

  // Gestion specialités
  { path: 'specialites', component: SpecialiteComponent },
  { path: 'ajoutspecialite', component: AjoutSpecialiteComponent },
  { path: 'modifierspecialite/:id', component: ModifierSpecialiteComponent },
  { path: 'detailspecialite/:id', component: DetailSpecialiteComponent },

  // Gestion villes
  { path: 'villes', component: VilleComponent },
  { path: 'ajoutville', component: AjoutVilleComponent },
  { path: 'modifierville/:id', component: ModifierVilleComponent },

  // Gestion utilisateurs
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'profil', component: ProfilComponent },

  { path: 'ajoutadmin', component: AjoutAdminComponent },
  { path: 'modifieradmin/:id', component: ModifierAdminComponent },
  { path: 'detailadmin/:id', component: DetailAdminComponent },

  { path: 'ajouttravailleur', component: AjoutTravailleurComponent },
  { path: 'modifiertravailleur/:id', component: ModifierTravailleurComponent },
  { path: 'detailtravailleur/:id', component: DetailTravailleurComponent },
  { path: 'travailleur-attente', component: TravailleursAttenteComponent },

  { path: 'detailclient/:id', component: DetailClientComponent },

  // Gestion competences
  { path: 'ajoutcompetence/:id', component: AjoutCompetenceComponent },
  { path: 'modifiercompetence/:id', component: ModifierCompetenceComponent },

   // Gestion statistiques
   { path: 'statistiques', component: StatistiquesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
