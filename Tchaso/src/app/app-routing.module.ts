import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './Services/service/service.component';
import { SpecialiteComponent } from './Specialites/specialite/specialite.component';
import { UtilisateurComponent } from './Utilisateurs/utilisateur/utilisateur.component';
import { VilleComponent } from './Villes/ville/ville.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'specialites', component: SpecialiteComponent },
  { path: 'villes', component: VilleComponent },
  { path: 'utilisateurs', component: UtilisateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
