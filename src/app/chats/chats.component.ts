import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat, Chats } from 'src/models/chat';
import { Message, Users } from 'src/models/users';
import { DataService } from '../data.service';



@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],

})
export class ChatsComponent implements OnInit {


  @Input() nameChat: any;


  user = new Users();
  chats = new Chats();
  message!: any;
  chatId!: any;
  chat!: Chat;
  messegase!: Message[] = [];


  constructor(public router: ActivatedRoute, public data: DataService) { }

  ngOnInit(): void {


    console.log('chaaaa', this.router);

    this.router.paramMap.subscribe(paramMap => {
      this.chatId =  paramMap.get('id');

      this.fs.collection('chats').doc(this.chatId).subscribe((chatasjson : any)=>{
          this.chat = new Chat(chatasjson);
      });

      this.fs.collection('messages', ref => ref.where('chatId', '==', this.chatId)).valueChanges({ idField : "customId" }).subscribe( messages =>{
          messages.forEach( m =>{
               this.messegase.push( new Message(m) );
          } )
      } )


    })
    console.log('Data', this.data);

    console.log('User', this.user);




  }




  showtext() {
   
    console.log('NAMECHAT', this.message);
   this.chats.message.push(this.message);
    console.log('CHATS', this.chats.chats);
  
    console.log('chatName', this.chats.message);
    this.message = "";
  
  }


}
