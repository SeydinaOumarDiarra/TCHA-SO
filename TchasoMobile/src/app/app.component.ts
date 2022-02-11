import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor(
    public router: Router
  ) {
    this.sideMenu();
    
  }

  sideMenu(){
    this.navigate = [
      {
        title : "Accueil",
        icon: "home",
        url : "/accueil"
      },
      {
        title : "services",
        icon:  "person-circle-outline",
        url : "/profile"
      },
     
      {
        title : "Reset Password",
        icon:  "bag-handle-outline",
        url : "/reset"
      },
      {
        title : "Déconnexion",
        icon: "log-out-outline",
        url : "/home"
      },
      
    ]
  }

  deconnexion(){
    localStorage.removeItem('userClient');
    localStorage.clear();
    this.router.navigateByUrl('/accueilclient')
  }
}
