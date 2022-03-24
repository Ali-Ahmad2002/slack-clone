import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  @ViewChild('text')
  text!: ElementRef;

  userChat: string[] = [];

  user = new Users();





  constructor() { }

  ngOnInit(): void {

    console.log('User', this.user)
  }


  

  showtext(text:string){
    
    this.user.users_chat = text
    this.userChat.push(this.user.users_chat);
    this.text.nativeElement.value = '';
    
   
    

  }

}
