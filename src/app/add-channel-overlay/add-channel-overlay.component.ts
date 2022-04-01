import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-channel-overlay',
  templateUrl: './add-channel-overlay.component.html',
  styleUrls: ['./add-channel-overlay.component.scss'],
})



export class AddChannelOverlayComponent implements OnInit {
 
  name:any = '';


  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<AddChannelOverlayComponent>) {
  }

  ngOnInit(): void {
  
  }

  onNoClick():void{
    this.dialogRef.close();
  }
}