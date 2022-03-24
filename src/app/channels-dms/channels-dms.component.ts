import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddChannelOverlayComponent } from '../add-channel-overlay/add-channel-overlay.component';
import { DataService } from '../data.service';



@Component({
  selector: 'app-channels-dms',
  templateUrl: './channels-dms.component.html',
  styleUrls: ['./channels-dms.component.scss']
})
export class ChannelsDmsComponent implements OnInit {

  constructor(public dialog: MatDialog, public data: DataService) {
   
  }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(AddChannelOverlayComponent);
  }


}



