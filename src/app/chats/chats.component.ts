import { Component, Input, OnInit } from '@angular/core';
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
  message!:any;



  constructor(public data: DataService) { }

  ngOnInit(): void {

    this.data.load();
    console.log('Data', this.data);

    console.log('User', this.user);
  }



  
  showtext() {

    this.data.userChat.push(this.message);
    this.data.save();
    this.message = "";
  }

}
