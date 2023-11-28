import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CalendarEvent } from 'angular-calendar';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private dbPath = '/eventos'

  eventosRef: AngularFirestoreCollection<CalendarEvent>;

  constructor(private db: AngularFirestore) {
    this.eventosRef = this.db.collection(this.dbPath)
   }

   getAll(): AngularFirestoreCollection<CalendarEvent>{
    return this.eventosRef;
   }

   create(eventos: CalendarEvent): any {
    return this.eventosRef.add({...eventos})
   }

   update(id:string, data: CalendarEvent): Promise<void> {
    return this.eventosRef.doc(id).update(data);
   }

   delete(id:string): Promise<void>{
    return this.eventosRef.doc(id).delete();
   }
}
