import { Injectable } from '@angular/core';
import { Chats } from 'src/models/chat';
import { Users } from 'src/models/users';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  chats = new Chats();
  newChanels: any = ['Allgemein'];
  userChat: any = [];
  active: boolean = false;
  user = new Users();




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




