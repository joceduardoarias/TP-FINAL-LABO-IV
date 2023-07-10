import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private encuestasCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.encuestasCollection = this.firestore.collection('encuestas');
  }

  guardarEncuesta(encuesta: any) {
    return this.firestore.collection('encuestas').add(encuesta);
  }
  
  obtenerEncuestas(): Observable<any[]> {
    return this.encuestasCollection.valueChanges();
  }
  
}
