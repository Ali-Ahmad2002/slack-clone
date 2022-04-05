import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from 'src/models/message';
import { Threads } from 'src/models/threads';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  nameChanel: any = [];
  thread: boolean = false;
  clickedMsg!: any;
  clickedChat!: any;
  answer!: Threads;
  
  constructor(public firestore: AngularFirestore) { }



  showThreads(msg:any, chat:any) {

    this.clickedMsg = msg;
    this.clickedChat = chat;
   
    this.thread = true;

    this.firestore
    .collection('threads', ref => ref.where('messageId', '==', this.clickedMsg.id))
    .valueChanges({ idField: 'id' })
    .subscribe((answer: any) => {
      this.answer = answer.map((messa: any) => new Threads(messa))
      console.log(this.answer)
    });


  }






}




