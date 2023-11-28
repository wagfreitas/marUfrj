import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { map } from 'rxjs';
import { EventsService } from 'src/app/_services/events.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alunos-atividades',
  templateUrl: './alunos-atividades.component.html',
  styleUrls: ['./alunos-atividades.component.css']
})
export class AlunosAtividadesComponent implements OnInit{

  public breadcrumb: any;

  events: CalendarEvent[] = [];

  constructor(
    private eventsService: EventsService
  ){}

  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Atividades Disponíveis',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/dashboard/sales'
        },
      
        {
          name: 'Atividades dos alunos',
          isLink: false,
          link: '#'
        }
      ]
    };

    this.eventsService.getAll().snapshotChanges()
    .pipe(
      map(changes => 
        changes.map(c => (
          {id: c.payload.doc.id, 
           ...c.payload.doc.data()
          }
        )
        
      )
        
      )
    ).subscribe(data => {
      data.forEach(res => {
       const dtini = res.start['seconds'];
       const dtfim = res.end['seconds'];

       res.end   = new Date(dtfim * 1000); 
       res.start = new Date(dtini * 1000)
       
      })
      this.events = data
    })


  }

  inscrever(evento){

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Você está inscrito nessa atividade",
      showConfirmButton: false,
      timer: 1500
    });
    
  }

}
