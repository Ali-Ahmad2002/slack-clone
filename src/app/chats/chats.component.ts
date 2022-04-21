import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';


import { ActivatedRoute, Router } from '@angular/router';
import { finalize, firstValueFrom } from 'rxjs';
import { Chat } from 'src/models/chat';
import { Message } from 'src/models/message';
import { User } from 'src/models/user';
import { DataService } from '../data.service';
import { AuthService } from '../shared/services/auth.service';




@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],

})
export class ChatsComponent implements OnInit {


  user = new User();
  message!: any;
  chatId!: any;
  chat!: Chat;
  messages!: Message[];
  isdms = false;
  file!: any;
  downloadUrl!:string;
  fileName !: File;


  // Dummy  User
  author: string = 'Sani';
  userImg: string = 'assets/img/profile/1.webp';





  constructor(
    public router: ActivatedRoute,
    public data: DataService,
    public firestore: AngularFirestore,
    public router2: Router,
    public authService: AuthService,
    public strg: AngularFireStorage
  ) { }

  ngOnInit(): void {
    console.log('auth', this.authService)

    // console.log('emilaUserauto', this.authService.userData.multiFactor.user.uid);




    this.data.isLoggedIn = true;
    // ID holen
    this.router.paramMap.subscribe(paramMap => {
      this.chatId = paramMap.get('id');
      if (this.chatId == this.authService.userData.multiFactor.user.uid) {
        this.messages = [];
        return;
      }


      // Chats hollen für Chats
      this.firestore
        .collection('chats')
        .doc(this.chatId) //Mit .doc holt man sich die Daten
        .valueChanges()
        .subscribe((chat: any) => {
          this.chat = new Chat(chat)
        })

      // check if id coresponds to a user id
      console.log(this.chatId)
      this.firestore
        .collection('users', ref => ref.where('uid', '==', this.chatId))
        .valueChanges()
        .subscribe((usUid: any) => {

          this.isdms = usUid.length > 0;
          if (!this.isdms) {
            console.log("not dms!!!")
            this.firestore
              .collection('messages', ref => ref.where('chatId', '==', this.chatId))
              .valueChanges({ idField: 'id' })
              .subscribe((messages: any) => {
                console.log('Received message update: ', messages);
                this.messages = messages.map((message: any) => new Message(message))

                this.messages = this.messages.filter(m => {
                  return m.chatId == this.chatId || m.author == this.authService.userData.multiFactor.user.email
                }
                );
              })
          }
          else {
            this.firestore
              .collection('messages')
              .valueChanges()
              .subscribe((messages: any) => {
                console.log('Received message update1: ', messages);
                messages = messages.filter((m: any) => {
                  return (m.chatId == this.chatId && m.author == this.authService.userData.multiFactor.user.email)
                    || (m.chatId = this.authService.userData.multiFactor.user.uid && m.id == this.chatId)
                }
                );
                this.messages = messages.map((message: any) => new Message(message))

              })

          }

        })

      //  Nachrichten holen



    });

  }



  showtext() {
    console.log('FILE', this.file);
    const newMessage = new Message();
    newMessage.chatId = this.chatId;
    newMessage.text = this.message;
    newMessage.author = this.authService.userData.multiFactor.user.email;
    newMessage.userImg = this.userImg;
    newMessage.timeStamp = new Date().getTime();
    newMessage.file.push(this.fileName);
    newMessage.id = this.authService.userData.multiFactor.user.uid;
    console.log('new msg FILE', newMessage);
    this.message = ''
    this.firestore.collection('messages')
      .add(newMessage.toJson())

  }


  onFileSelected(event: any) {
    this.fileName = event.target.files[0];
   // let filePath  = event.target.files[0].name;
   // let ref = this.strg.ref(filePath);
   // let task = ref.put(file);
 
     // console.log('MY TASK', task);
 }

 upLoadFile() {
   console.log('FILE NAME',this.fileName);
   const filePath = '/cv_Cagri_Avsar.pdf' + Math.random() + this.fileName.name;
   const fileRef = this.strg.ref(filePath);
   const task = this.strg.upload(filePath, this.fileName);

   
 // observe percentage changes
 // this.uploadPercent = task.percentageChanges();
 // get notified when the download URL is available
 task.snapshotChanges().pipe(
     finalize(async () => {
       this.downloadUrl = await firstValueFrom( fileRef.getDownloadURL() );
       console.log('thisurls',this.downloadUrl);

     } )
  )
 .subscribe()
}



}
