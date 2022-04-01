//import { Component, OnInit } from '@angular/core';
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

  chats: Chat[] = [];
 

  constructor(public dialog: MatDialog,  public data: DataService, public router: Router, public  firestore: AngularFirestore) {
  }


  ngOnInit(): void {
    console.log('chatOBJ', this.chats)
    this.firestore.collection('chats')
    .valueChanges({idField: 'id'})
    .subscribe(chats  => {
     chats.forEach(c => {
    this.chats.push(new Chat(c));

     })
      
    })
  }


  
  // dialog: any;


  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelOverlayComponent);

    dialogRef.afterClosed().subscribe((channelName: any) => {
      console.log('The dialog was closed', channelName);
      if (channelName && channelName.length > 0) {
      
      

  }
});

    
   
  }


  chatrooms(){
 
  }


}