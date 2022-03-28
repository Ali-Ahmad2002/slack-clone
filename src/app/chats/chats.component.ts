import { Component, ElementRef, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/models/users';
import { DataService } from '../data.service';



@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],

})
export class ChatsComponent implements OnInit {


  @Input() name: any;


  @ViewChild('text')
  text!: ElementRef;

  userChat: any = [];

  user = new Users();



  constructor(public data: DataService) { }

  ngOnInit(): void {

    this.load();
    console.log('Data', this.data);

    console.log('User', this.user);
  }



  value = '';
  showtext() {
    this.user.users_chat.push(this.value);
    
    // this.user.users_chat = text;
    // this.userChat.push(text);
    // this.text.nativeElement.value = '';
    this.save();
    // this.value = "";
  }

  save() {
    let userChat = JSON.stringify(this.user.users_chat);
    localStorage.setItem('chat', userChat);
  }

  load() {
    let loadedChat: any = localStorage.getItem('chat');
    if (loadedChat) {
      this.userChat = JSON.parse(loadedChat);
    } else {
      console.log('TEST');
    }
  }

}
