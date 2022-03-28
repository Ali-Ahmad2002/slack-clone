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

  userChat: string[] = [];

  user = new Users();


  constructor( public data: DataService  ) { }

  ngOnInit(): void {
    
    console.log('Data', this.data);
    
    console.log('User', this.user)
  }


  

  showtext(text:string){
    
    this.user.users_chat = text
    this.userChat.push(this.user.users_chat);
    this.text.nativeElement.value = '';
    
  }

}
