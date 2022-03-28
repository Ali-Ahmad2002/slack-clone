import { Injectable } from '@angular/core';
import { Users } from 'src/models/users';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  newChanels:any = ['Allgemein'];
  userChat:any = [];
  active: boolean = false;
  user = new Users();
  
  
 

  constructor( ) { }



  
  save() {
    let savedChannel = JSON.stringify(this.newChanels);
    let userChat = JSON.stringify(this.user.users_chat);
    localStorage.setItem('channel', savedChannel);
    localStorage.setItem('chat', userChat);
  }

  load() {
    let loadedChannel: any = localStorage.getItem('channel');
    let loadedChat: any = localStorage.getItem('chat');
    if (loadedChannel && loadedChat) {
      this.newChanels = JSON.parse(loadedChannel);
      this.userChat = JSON.parse(loadedChat);
    } else {
      console.log('TEST');
    }
  }

  }
  



