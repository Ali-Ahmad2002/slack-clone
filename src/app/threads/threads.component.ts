import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Message } from 'src/models/message';
import { Threads } from 'src/models/threads';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  chatId!: any;
  message!: string;
  fileVal!: any;
  file!: any;
  downloadUrl!: string;
  fileName !: File | undefined;


  constructor(
    public firestore: AngularFirestore,
    public data: DataService,
    public route: ActivatedRoute,
    public strg: AngularFireStorage
  ) { }

  ngOnInit(): void {

  }

  closeThread() {
    this.data.thread = false;
  }

  showThreadMessage() {
    if (this.fileName) {
      this.upLoadFile();
      setTimeout(() => {
        const newThreadMsg = new Threads();
        newThreadMsg.text = this.message;
        newThreadMsg.chatId = this.data.clickedMsg.id
        newThreadMsg.timeStamp = new Date().getTime();
        newThreadMsg.file = this.downloadUrl || '';
        this.fileVal = '';
        this.message = ''
        this.firestore.collection('threads')
          .add(newThreadMsg.toJson())
        console.log('ANSWER', newThreadMsg);
        this.downloadUrl = "";
      }, 2000);
    }
  }

  onFileSelected(event: any) {
    this.fileName = event.target.files[0];
  }

  upLoadFile() {
    console.log('FILE NAME', this.fileName);
    const filePath = '/cv_Cagri_Avsar.pdf' + Math.random() + this.fileName?.name;
    const fileRef = this.strg.ref(filePath);
    const task = this.strg.upload(filePath, this.fileName);
    // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(async () => {
        this.downloadUrl = await firstValueFrom(fileRef.getDownloadURL());
        console.log('thisurls', this.downloadUrl);
        this.fileName = undefined;
      })
    )
      .subscribe()
  }


}
