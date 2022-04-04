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
 
 

  constructor(
    public firestore: AngularFirestore,
    public data: DataService,
    public route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('id');
      console.log('init', this.chatId)
    });


    
    // this.firestore.collection('messages')
    // .valueChanges({idField: 'id'})
    // .subscribe(answer =>{
    //   this.data.answer = answer.map( answe => new Message(answe))
    //   console.log('data', this.data.answer);
    // });


    this.firestore
    .collection('threads', ref => ref.where('chatId', '==', this.chatId))
    .valueChanges({ idField: 'id' })
    .subscribe((answer: any) => {
      this.data.answer = answer.map((messa: any) => new Message(messa))
      console.log(this.data.answer)
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
