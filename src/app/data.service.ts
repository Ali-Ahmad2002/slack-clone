import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Threads } from 'src/models/threads';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  thread: boolean = false;
  clickedMsg!: any;
  clickedChat!: any;
  threads!: Threads[];
  isLoggedIn = false;
  
  constructor(public firestore: AngularFirestore) { }



  showThreads(msg:any, chat:any) {

    this.clickedMsg = msg;
    this.clickedChat = chat;
  
    this.firestore
    .collection('threads', ref => ref.where('chatId', '==', this.clickedMsg.id))
    .valueChanges({ idField: 'id' })
    .subscribe((threads: any) => {
      this.threads = threads.map((messa: any) => new Threads(messa))
      console.log(this.threads)
    });

    this.thread = true;

  }






}




