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




@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-channels-dms',
  templateUrl: './channels-dms.component.html',
  styleUrls: ['./channels-dms.component.scss'],
})



export class ChannelsDmsComponent implements OnInit {

  chats = new Chat(Object.name);

  constructor(public dialog: MatDialog, public data: DataService) {
  }



  ngOnInit(): void {
    console.log('chatOBJ', this.chats)
  }



  // dialog: any;


  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelOverlayComponent);

    dialogRef.afterClosed().subscribe((channelName: any) => {
      console.log('The dialog was closed', channelName);
      if (channelName && channelName.length > 0) {
        this.chats.name = channelName;
        console.log('funktiion', this.chats.name);
      }
    });
  }



}