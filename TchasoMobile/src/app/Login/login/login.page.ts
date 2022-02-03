import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigate(['/accueilclient']);
  }

  async reset(){
    const alertForm = await this.alertController.create({
      header: 'Mot de passe oublié ?',
      subHeader: 'Récuperation de mot de passe',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Saisissez votre email'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Valider',
          handler:(data) => {

          }
        }
      ]
    });
    await alertForm.present();
  }

  async onSignIn(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Je m\'inscris en tant que : ',
      buttons: [
        {
          text: 'TCHA-GNININA (Client)',
          handler:()=>{
            this.router.navigate(['/inscriptionclient']);
          }
        },
        {
          text: 'TCHA-KELA (Tavailleur)',
          handler:()=>{
            this.router.navigate(['/inscriptiontravailleur']);
          }
        },
        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler:()=>{}
        },
      ]
    });
    await actionSheet.present();
  }

}
