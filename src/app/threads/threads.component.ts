import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/models/chat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  

  constructor(public firestore: AngularFirestore, public data: DataService) { }

  ngOnInit(): void {

  }


}
