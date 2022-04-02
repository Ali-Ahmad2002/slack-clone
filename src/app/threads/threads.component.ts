import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  chatId!: any;
  message!: string;

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
    setTimeout(() => {
      console.log(this.data);
      console.log(this.data.clickedChat);
    }, 3000);
  }

  closeThread() {
    this.data.thread = false;
  }

  showThreadMessage() {
    console.log(this.message);
    this.message = '';
  }

}
