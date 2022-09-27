import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class HorariosturnosService {


  public dbPath = '/MensajesGeneral';

  MensajesRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    
   }
   getAll(): AngularFireList<any> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef;
  }

  create(unMensajes: any): any {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.push(unMensajes);
  }

  update(key: string, value: any): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove();
  }
}
