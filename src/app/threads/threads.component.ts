import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  chatId!: any;
  message!: string;
  answer!: Message[];
 

  constructor(
    public firestore: AngularFirestore,
    public data: DataService,
    public route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('id');
      console.log(this.chatId)
    });
    this.firestore.collection('threads')
    .valueChanges({idField: 'id'})
    .subscribe(answer =>{
      this.answer = answer.map( answe => new Message(answe))

      
 
    });

  }

  closeThread() {
    this.data.thread = false;
  }

  showThreadMessage() {
  
    const newThreadMsg = new Message();
    newThreadMsg.text = this.message;
    newThreadMsg.chatId = this.chatId
    newThreadMsg.timeStamp = new Date().getTime();

    this.message = ''
    this.firestore.collection('threads')
      .add(newThreadMsg.toJson())


      console.log(newThreadMsg)
   
  }

}
