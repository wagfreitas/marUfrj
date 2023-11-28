
import { Component, OnInit } from '@angular/core';
import { ViewChild, TemplateRef } from '@angular/core';
import { Subject, map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,compareAsc, format 
} from 'date-fns';
import {
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEvent,
  CalendarEventAction
} from 'angular-calendar';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { EventsService } from 'src/app/_services/events.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public breadcrumb: any;
  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  @BlockUI('events') blockUIEvents: NgBlockUI;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('modalIcons', { static: true }) modalIcons: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  activeDayIsOpen = true;
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  refresh: Subject<any> = new Subject();

 events: CalendarEvent[] = [];


  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Calendario de Eventos',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/dashboard/sales'
        },
        
        {
          name: 'Eventos',
          isLink: false,
          link: '#'
        }
      ]
    };

    this.eventService.getAll().snapshotChanges()
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
  constructor(
    private modal: NgbModal,
    private eventService: EventsService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged(
    {
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next({});
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  reloadEvents() {
    this.blockUIEvents.start('Loading..');

    setTimeout(() => {
      this.blockUIEvents.stop();
    }, 2500);
  }
}
