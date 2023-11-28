import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import Swal from 'sweetalert2'

import { EventsService } from 'src/app/_services/events.service';

@Component({
  selector: 'app-cad-eventos',
  templateUrl: './cad-eventos.component.html',
  styleUrls: ['./cad-eventos.component.css']
})
export class CadEventosComponent implements OnInit {
  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @BlockUI('userProfile') blockUIUserProfile: NgBlockUI;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };


  cadEventos: FormGroup;
 

  public isFormActionInfo1 = false;
  public isFormActionInfo2 = false;
  public isFormActionInfo3 = false;
  public isFormActionInfo4 = false;
  public isFormActionInfo5 = false;
  public isFormActionInfo6 = false;
  public isFormActionInfo7 = false;
  public isFormActionInfo8 = false;

  public breadcrumb: any;

  interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
  budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  priority = ['Interno', 'Externo'];
  status = ['Interno', 'Externo'];

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventsService) { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Cadastros',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Admin',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Cadastro de Eventos',
          'isLink': true
        }
      ]
    };


    this.cadEventos = this.formBuilder.group({
      title: ['', Validators.required],
      professor: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      color: ['', Validators.required],
      vacanciesNumber: ['', Validators.required],
      descricao: ['', Validators.required],
      targetPublic: ['', Validators.required],
      icon: ['', Validators.required]
    });

  }

  eventSave(){
    this.cadEventos
    const dataini = this.cadEventos.get('start').value
    const datafim = this.cadEventos.get('end').value
    const dataStart = `${dataini.year}/${dataini.month}/${dataini.day}`
    const dataFinal= `${datafim.year}/${datafim.month}/${datafim.day}`

    const dataEvent: CalendarEvent = {
      title: this.cadEventos.get('title').value, 
      professor: this.cadEventos.get('professor').value, 
      start: new Date(dataStart), 
      end: new Date(dataFinal),
      targetAudience: this.cadEventos.get('targetPublic').value,
      descricao: this.cadEventos.get('descricao').value,
      vacanciesNumber: this.cadEventos.get('vacanciesNumber').value, 
      color: this.cadEventos.get('color').value, 
      icon: this.cadEventos.get('icon').value
    }

    this.eventService.create(dataEvent).then(() => {
      Swal.fire({
        title: 'Tudo Certo!',
        text: 'Cadastro efetuado com sucesso',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      this.cadEventos.reset()
    })


   


  }

  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }

  reloadUserProfile() {
    this.blockUIUserProfile.start('Loading..');

    setTimeout(() => {
      this.blockUIUserProfile.stop();
    }, 2500);
  }
}
