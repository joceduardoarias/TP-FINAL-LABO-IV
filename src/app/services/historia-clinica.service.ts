import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private dbPath = '/historiaClinica';

  MensajesRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<any> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef;
  }

  create(mensajes: any): any {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: any): Promise<void> {
 this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).update({
      comentarioadmin:data.comentarioadmin,
      comentarioespecialista: data.comentarioespecialista,
      comentariopaciente:data.comentariopaciente,
      diagnostico:data.diagnostico,
      estado:data.estado,

    });
  }

  delete(id: string): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).delete();
  }
}
