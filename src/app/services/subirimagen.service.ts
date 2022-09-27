import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class SubirimagenService {

  storareref = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string,imgBase64:any)
  {
    try {
      
      let respuesta = await this.storareref.child("users/"+nombre).putString(imgBase64,'data_url');
      return await respuesta.ref.getDownloadURL();
      
    } catch (error) {
      return null;
      
    }
  }
}
