import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-channel-overlay',
  templateUrl: './add-channel-overlay.component.html',
  styleUrls: ['./add-channel-overlay.component.scss']
})
export class AddChannelOverlayComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    console.log('treeData', this.data.TREE_DATA[0].children[0]);

  }

  createChannelName(channelName: any) {

    for (let i = 0; i < this.data.TREE_DATA[0].children; i++) {
      let childrenName = this.data.TREE_DATA[0].children[i];
      console.log('names', childrenName);
    }

  }

}
