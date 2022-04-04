import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from 'src/models/message';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  nameChanel: any = [];
  thread: boolean = false;
  clickedMsg!: any;
  clickedChat!: any;
  answer!: Message[];
  
  constructor(public firestore: AngularFirestore) { }



  showThreads() {

    // this.clickedMsg = msg;
    // this.clickedChat = chat;
    // console.log(msg)
    this.thread = true;

    this.firestore.collection('threads')
      .valueChanges({ idField: 'id' })
      .subscribe(answer => {
        this.answer = answer.map(chat => new Message(chat))
      })


  }






}




