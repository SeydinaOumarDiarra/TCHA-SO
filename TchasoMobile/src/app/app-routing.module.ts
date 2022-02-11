import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./Accueil/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'inscriptionclient',
    loadChildren: () => import('./Inscription/inscriptionclient/inscriptionclient.module').then( m => m.InscriptionclientPageModule)
  },
  {
    path: 'inscriptiontravailleur',
    loadChildren: () => import('./Inscription/inscriptiontravailleur/inscriptiontravailleur.module').then( m => m.InscriptiontravailleurPageModule)
  },
  {
    path: 'accueilclient',
    loadChildren: () => import('./Accueil/accueilclient/accueilclient.module').then( m => m.AccueilclientPageModule)
  },
  {
    path: 'popupservice',
    loadChildren: () => import('./Popups/popupservice/popupservice.module').then( m => m.PopupservicePageModule)
  },
  {
    path: 'specialite',
    loadChildren: () => import('./Specialites/specialite/specialite.module').then( m => m.SpecialitePageModule)
  },
  {
    path: 'travailleur/:id',
    loadChildren: () => import('./Specialites/travailleur/travailleur.module').then( m => m.TravailleurPageModule)
  },
  {
    path: 'ajout-demande',
    loadChildren: () => import('./Demande/ajout-demande/ajout-demande.module').then( m => m.AjoutDemandePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
