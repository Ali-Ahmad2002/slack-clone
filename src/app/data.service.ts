import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  nameChanel: any = [];

  clickedMsg!: any;
  clickedChat!: any;
  constructor() { }


  showThreads(msg: any, chat:any) {
    
 this.clickedMsg = msg;
 this.clickedChat = chat;



  }






}




