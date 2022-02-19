import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceComponent } from './Services/service/service.component';
import { SpecialiteComponent } from './Specialites/specialite/specialite.component';
import { UtilisateurComponent } from './Utilisateurs/utilisateur/utilisateur.component';
import { VilleComponent } from './Villes/ville/ville.component';
import { AjoutServiceComponent } from './Services/ajout-service/ajout-service.component';
import { ModifierServiceComponent } from './Services/modifier-service/modifier-service.component';
import { AjoutSpecialiteComponent } from './Specialites/ajout-specialite/ajout-specialite.component';
import { ModifierSpecialiteComponent } from './Specialites/modifier-specialite/modifier-specialite.component';
import { AjoutVilleComponent } from './Villes/ajout-ville/ajout-ville.component';
import { ModifierVilleComponent } from './Villes/modifier-ville/modifier-ville.component';
import { AjoutAdminComponent } from './Utilisateurs/Administrateur/ajout-admin/ajout-admin.component';
import { ModifierAdminComponent } from './Utilisateurs/Administrateur/modifier-admin/modifier-admin.component';
import { ModifierTravailleurComponent } from './Utilisateurs/Travailleur/modifier-travailleur/modifier-travailleur.component';
import { AjoutTravailleurComponent } from './Utilisateurs/Travailleur/ajout-travailleur/ajout-travailleur.component';
import { DetailClientComponent } from './Utilisateurs/Client/detail-client/detail-client.component';
import { DetailAdminComponent } from './Utilisateurs/Administrateur/detail-admin/detail-admin.component';
import { DetailSpecialiteComponent } from './Specialites/detail-specialite/detail-specialite.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { DetailTravailleurComponent } from './Utilisateurs/Travailleur/detail-travailleur/detail-travailleur.component';
import { AjoutCompetenceComponent } from './Competence/ajout-competence/ajout-competence.component';
import { ModifierCompetenceComponent } from './Competence/modifier-competence/modifier-competence.component';
import { TravailleursAttenteComponent } from './Utilisateurs/Travailleur/travailleurs-attente/travailleurs-attente.component';
import { StatistiquesComponent } from './Statistique/statistiques/statistiques.component';
import { ModifierClientComponent } from './Utilisateurs/Client/modifier-client/modifier-client.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    MenuComponent,
    ServiceComponent,
    SpecialiteComponent,
    UtilisateurComponent,
    VilleComponent,
    AjoutServiceComponent,
    ModifierServiceComponent,
    AjoutSpecialiteComponent,
    ModifierSpecialiteComponent,
    AjoutVilleComponent,
    ModifierVilleComponent,
    AjoutAdminComponent,
    ModifierAdminComponent,
    ModifierTravailleurComponent,
    AjoutTravailleurComponent,
    DetailClientComponent,
    DetailAdminComponent,
    DetailSpecialiteComponent,
    ProfilComponent,
    DetailTravailleurComponent,
    AjoutCompetenceComponent,
    ModifierCompetenceComponent,
    TravailleursAttenteComponent,
    StatistiquesComponent,
    ModifierClientComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DialogModule, 
    ButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
