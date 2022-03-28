import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChannelsDmsComponent } from '../channels-dms/channels-dms.component';

//import { DataService } from '../data.service';



// @Injectable({
//   providedIn: "root",
// })

@Component({
  selector: 'app-add-channel-overlay',
  templateUrl: './add-channel-overlay.component.html',
  styleUrls: ['./add-channel-overlay.component.scss'],
})



export class AddChannelOverlayComponent implements OnInit {
 
  name:any = '';


  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddChannelOverlayComponent>) {
   

    // this.data.dataSource.data = this.data.TREE_DATA;
  }


  ngOnInit(): void {
  
  }


  onNoClick():void{
    this.dialogRef.close();
  }
}