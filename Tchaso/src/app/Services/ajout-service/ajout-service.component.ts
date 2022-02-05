import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.scss']
})
export class AjoutServiceComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  constructor(
    private service: ServivesserviceService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

  showToastSuccess() {
    this.toast.success('Service ajouté avec succès !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutService(form: NgForm) {    
    if(form.valid){
      this.services = {'nomser': form.value['nom'], 'description': form.value['description'], 'administrateur': this.adminConnect}
      this.service.addService(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
      })
    }else{
      this.showToastError();
    }
  }

}
