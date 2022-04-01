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

  
  
  dataSource!:any;
  

  chat = new Chat();
 

  constructor(public router: ActivatedRoute, public data: DataService, public  firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.newChats();

   this.router.paramMap.subscribe(paramMap => {
       this.chatId = paramMap.get('id');
      console.log('ChatId', this.chat.id);


      this.firestore
    .collection('chats')
    .doc(this.chatId)    
    .valueChanges()
    .subscribe((chat:any) => {
      this.chat = new Chat(chat)
    })

    this.firestore
    .collection('messages', ref => ref.where('chatId', '==', this.chatId))   
    .valueChanges( { idField: 'id '})
    .subscribe((message:any) => {
      const tmp = [] as Message[];
      message.forEach((m:any) => {
        tmp.push( new Message(tmp))
      })
     
    })

      
   });

    

  //   this.router.paramMap.subscribe(paramMap => {
  //     this.chatId = paramMap.get('id');

  //     // this.fs.collection('chats').doc(this.chatId).subscribe((chatasjson: any) => {
  //     //   this.chat = new Chat(chatasjson);
  //     // });

  //     // this.fs.collection('messages', ref => ref.where('chatId', '==', this.chatId)).valueChanges({ idField: "customId" }).subscribe(messages => {
  //     //   messages.forEach(m => {
  //     //     this.messegase.push(new Message(m));
  //     //   })
  //     // })
  //   })
 


  } 

  newChats(){
    this.chat = new Chat();
  }

  showtext(){

  
   
   this.message  = ''
  }



}
