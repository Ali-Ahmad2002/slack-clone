import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chats } from 'src/models/chat';
import { Users } from 'src/models/users';
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
  chatId!:any;



  constructor(public router: ActivatedRoute, public data: DataService) { }

  ngOnInit(): void {


    console.log('chaaaa',this.chats);
    
    this.router.paramMap.subscribe( paramMap => {
      
       this.chats.chats_id[0].chaa = paramMap.get('id');
       console.log('chatid',this.chats.chats_id);
      
    
  })
    console.log('Data', this.data);

    console.log('User', this.user);
  }




  showtext(chatName: any) {

    console.log('NAMECHAT', chatName)
    this.chats.chats.push(this.message);
    this.message = "";
  }


}
