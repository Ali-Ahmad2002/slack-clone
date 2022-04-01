import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { AddChannelOverlayComponent } from '../add-channel-overlay/add-channel-overlay.component';
import { DataService } from '../data.service';
import { Chat } from 'src/models/chat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-channels-dms',
  templateUrl: './channels-dms.component.html',
  styleUrls: ['./channels-dms.component.scss'],
})


export class ChannelsDmsComponent implements OnInit {

  chats!: Chat[];

  constructor(
    public dialog: MatDialog, 
    public data: DataService, 
    public router: Router, 
    public firestore: AngularFirestore) {
  }

  ngOnInit(): void {
      this.firestore.collection('chats')
      .valueChanges({idField: 'id'})
      .subscribe(chats =>{
        this.chats = chats.map( chat => new Chat(chat))
      })
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelOverlayComponent);

    dialogRef.afterClosed().subscribe((channelName: any) => {
      console.log('The dialog was closed', channelName);
      if (channelName && channelName.length > 0) {
        const newChanel = new Chat();
        newChanel.name = channelName;
        newChanel.timeStamp = new Date().getTime();
        this.firestore.collection('chats')
          .add(newChanel.toJson())
      }
    });
  }
}