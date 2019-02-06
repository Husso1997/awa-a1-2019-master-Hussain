import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:
    {
      id?:string,
      firstname:string,
      lastname:string,
    };
  userCollection;

  constructor(private db: AngularFirestore)
  {

  }

  addUser(user:any):Promise<any>
  {
    const userCollection = this.db.collection<any>('users')
    return userCollection.add({firstname: user.firstName, lastname: user.lastName});
  }

  removeUser(id:string):Promise<any>
  {
    return this.db.collection('users').doc(id).delete();
  }

  getUsers()
  {

    this.userCollection = this.db.collection<any>('users').snapshotChanges().pipe(map(action =>
    {return action.map(action =>{const data = action.payload.doc.data(); const id = action.payload.doc.id;
    return {data, id}})}));
    return this.userCollection;
  }

}
