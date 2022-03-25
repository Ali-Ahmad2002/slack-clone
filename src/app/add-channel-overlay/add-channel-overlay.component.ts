import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';






@Component({
  selector: 'app-add-channel-overlay',
  templateUrl: './add-channel-overlay.component.html',
  styleUrls: ['./add-channel-overlay.component.scss']
})


export class AddChannelOverlayComponent implements OnInit {
  lala: any = [];

  constructor() { 
   // this.data.dataSource.data = this.data.TREE_DATA;
  }

  ngOnInit(): void {
  

  }

  createChannelName(channelName: any) {
   console.log('chanelName', channelName);
  }



}
