import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  chatId!: any;
  message!: string;
  answer!: Message[];
  threadMsg: any = [];

  constructor(
    public firestore: AngularFirestore,
    public data: DataService,
    public route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    // this.route.paramMap.subscribe(paramMap => {
    //   this.chatId = paramMap.get('id');
    //   console.log(this.chatId)
    // });
    console.log(this.data);
    console.log(this.data.clickedChat);
  }

  closeThread() {
    this.data.thread = false;
  }

  showThreadMessage() {
    // console.log(this.message);
    const newThreadMsg = new Message();
    newThreadMsg.text = this.message;
    this.message = '';
    console.log('MSG', newThreadMsg)
  }

}
