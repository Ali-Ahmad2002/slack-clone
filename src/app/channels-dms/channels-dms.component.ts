//import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { AddChannelOverlayComponent } from '../add-channel-overlay/add-channel-overlay.component';
import { DataService } from '../data.service';
import { Chats } from 'src/models/chat';




@Injectable({
  providedIn: "root",
})

@Component({
  selector: 'app-channels-dms',
  templateUrl: './channels-dms.component.html',
  styleUrls: ['./channels-dms.component.scss'],
})



export class ChannelsDmsComponent implements OnInit {
  
  chats = new Chats();
 
  constructor(public dialog: MatDialog, public data: DataService ) {
  }



  ngOnInit(): void {
     this.data.load();
  }

   
 
  // dialog: any;
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelOverlayComponent);

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed', result);
      if(result && result.length > 0){
        this.chats.chats_name.push(result);
        console.log('funktiion',this.chats.chats_name);
        this.data.save();
      }     
    });
  
  }  

  filterdProjects = this.chats.chats_name;
 
  
  newChanelIndex(newChanel: any){
    console.log('newChanel ',newChanel);
    
    if ( newChanel !== '') {
      console.log('log filter',this.filterdProjects);
      
      this.filterdProjects = this.chats.chats_name.filter(
        (p: { newChanel: any; }) => p === newChanel );
        console.log(this.filterdProjects);
        
        
    } else {
     this.filterdProjects = this.chats.chats_name;
    }
   
  }   
 
      
    
    

   
    
  }



