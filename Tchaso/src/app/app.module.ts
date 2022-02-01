import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    VilleComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
