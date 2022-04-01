import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from 'src/models/chat';
import { Message } from 'src/models/message';
import { User } from 'src/models/user';
import { DataService } from '../data.service';







@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],

})
export class ChatsComponent implements OnInit {


  @Input() nameChat: any;

  userid: any = '';

  user = new User();

  message!: any;
  chatId!: any;



  dataSource!: any;


  chat = new Chat();


  constructor(public router: ActivatedRoute, public data: DataService, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.newChats();

    this.router.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('id');
      console.log('ChatId', this.chat.id);


      this.firestore
        .collection('chats')
        .doc(this.chatId)
        .valueChanges()
        .subscribe((chat: any) => {
          this.chat = new Chat(chat)
        })

      this.firestore
        .collection('messages', ref => ref.where('chatId', '==', this.chatId))
        .valueChanges({ idField: 'id ' })
        .subscribe((message: any) => {
          const tmp = [] as Message[];
          message.forEach((m: any) => {
            tmp.push(new Message(m))
          })

        })
    });
  }

  newChats() {
    this.chat = new Chat();
  }

  showtext() {
    const newMessage = new Message();
    newMessage.author = this.userid;
    newMessage.chatId = this.chatId;
    newMessage.text = this.message;
    newMessage.timeStamp = new Date().getTime();

    this.firestore.collection('messages')
      .add(newMessage.toJson())

    // this.chat.message.push(this.message)
    // this.firestore
    //   .collection('chats')
    //   .add(this.chat.toJson())

    // this.message = 
    // this.message = '';
  }



}
