import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { AjoutServiceComponent } from './Services/ajout-service/ajout-service.component';
import { ModifierServiceComponent } from './Services/modifier-service/modifier-service.component';
import { ServiceComponent } from './Services/service/service.component';
import { AjoutSpecialiteComponent } from './Specialites/ajout-specialite/ajout-specialite.component';
import { ModifierSpecialiteComponent } from './Specialites/modifier-specialite/modifier-specialite.component';
import { SpecialiteComponent } from './Specialites/specialite/specialite.component';
import { AjoutAdminComponent } from './Utilisateurs/Administrateur/ajout-admin/ajout-admin.component';
import { ModifierAdminComponent } from './Utilisateurs/Administrateur/modifier-admin/modifier-admin.component';
import { AjoutTravailleurComponent } from './Utilisateurs/Travailleur/ajout-travailleur/ajout-travailleur.component';
import { ModifierTravailleurComponent } from './Utilisateurs/Travailleur/modifier-travailleur/modifier-travailleur.component';
import { UtilisateurComponent } from './Utilisateurs/utilisateur/utilisateur.component';
import { AjoutVilleComponent } from './Villes/ajout-ville/ajout-ville.component';
import { ModifierVilleComponent } from './Villes/modifier-ville/modifier-ville.component';
import { VilleComponent } from './Villes/ville/ville.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  // Gestion services
  { path: 'services', component: ServiceComponent },
  { path: 'ajoutservice', component: AjoutServiceComponent },
  { path: 'modifierservice/:id', component: ModifierServiceComponent },

  // Gestion specialités
  { path: 'specialites', component: SpecialiteComponent },
  { path: 'ajoutspecialite', component: AjoutSpecialiteComponent },
  { path: 'modifierspecialite/:id', component: ModifierSpecialiteComponent },

  // Gestion villes
  { path: 'villes', component: VilleComponent },
  { path: 'ajoutville', component: AjoutVilleComponent },
  { path: 'modifierville/:id', component: ModifierVilleComponent },

  // Gestion utilisateurs
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'ajoutadmin', component: AjoutAdminComponent },
  { path: 'modifieradmin/:id', component: ModifierAdminComponent },
  { path: 'ajouttravailleur', component: AjoutTravailleurComponent },
  { path: 'modifiertravailleur/:id', component: ModifierTravailleurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
