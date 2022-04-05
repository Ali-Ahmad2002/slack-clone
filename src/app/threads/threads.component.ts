import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Message } from 'src/models/message';
import { Threads } from 'src/models/threads';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  chatId!: any;
  message!: string;
  threads!: Threads[];
 
 

  constructor(
    public firestore: AngularFirestore,
    public data: DataService,
    public route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    
    // this.firestore.collection('messages')
    // .valueChanges({idField: 'id'})
    // .subscribe(answer =>{
    //   this.data.answer = answer.map( answe => new Message(answe))
    //   console.log('data', this.data.answer);
    // });


  

  }

  closeThread() {
    this.data.thread = false;
  }

  showThreadMessage() {
  
    const newThreadMsg = new Threads();
    newThreadMsg.text = this.message;
    newThreadMsg.chatId = this.data.clickedMsg.id
    newThreadMsg.timeStamp = new Date().getTime();

    this.message = ''
    this.firestore.collection('threads')
      .add(newThreadMsg.toJson())
      console.log('ANSWER', newThreadMsg);
  }
 
  

}
