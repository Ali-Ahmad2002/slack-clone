import { Injectable } from '@angular/core';
import { Chat } from 'src/models/chat';
import { User } from 'src/models/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  chats = new Chat(Object);
  newChanels: any = ['Allgemein'];
  userChat: any = [];
  active: boolean = false;
  user = new User();




  constructor() { }




  // save() {
  //   let savedChannel = JSON.stringify(this.chats.chats_name);
  //   let userChat = JSON.stringify(this.chats.chats);
  //   localStorage.setItem('channel', savedChannel);
  //   localStorage.setItem('chat', userChat);
  // }

  // load() {
  //   let loadedChannel: any = localStorage.getItem('channel');
  //   let loadedChat: any = localStorage.getItem('chat');
  //   if (loadedChannel && loadedChat) {
  //     this.chats.chats_name = JSON.parse(loadedChannel);
  //     this.chats.chats = JSON.parse(loadedChat);
  //   } else {
  //     console.log('TEST');
  //   }
  // }

}




