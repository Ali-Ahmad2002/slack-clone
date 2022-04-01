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

  
  user = new User();
  message!: any;
  chatId!: any;
  chat!: Chat;
  messages!: Message[];


  constructor(
    public router: ActivatedRoute, 
    public data: DataService, 
    public firestore: AngularFirestore) { }

  ngOnInit(): void {
   
  // ID holen
    this.router.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('id');
     
    });
  // Chats hollen für Chats
      this.firestore
        .collection('chats')
        .doc(this.chatId)
        .valueChanges()
        .subscribe((chat: any) => {
          this.chat = new Chat(chat)
        })

  //  Nachrichten holen
      this.firestore
        .collection('messages', ref => ref.where('chatId', '==', this.chatId))
        .valueChanges({ idField: 'id ' })
        .subscribe((messages: any) => {
          this.messages = messages.map( (message:any) => new Message(message))
        })
  
  }

 

  showtext() {
    const newMessage = new Message();
    newMessage.chatId = this.chatId;
    newMessage.text = this.message;
    newMessage.timeStamp = new Date().getTime();

    this.firestore.collection('messages')
      .add(newMessage.toJson())

  }

}
