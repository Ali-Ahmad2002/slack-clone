import { Component, Input, OnInit } from '@angular/core';
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



  constructor(public data: DataService) { }

  ngOnInit(): void {

    this.data.load();
    console.log('Data', this.data);

    console.log('User', this.user);
  }




  showtext(chatName: any) {

    console.log('NAMECHAT', chatName)
    this.chats.chats.push(this.message);
    this.data.save();
    this.message = "";
  }


}
