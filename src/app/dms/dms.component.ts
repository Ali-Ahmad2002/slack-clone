import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { DataService } from '../data.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dms',
  templateUrl: './dms.component.html',
  styleUrls: ['./dms.component.scss']
})
export class DmsComponent implements OnInit {


  test: any;
  user!: User[];
  userTest!: any;
  dmsMessage!: any;



  constructor(
    public data: DataService,
    public router: Router,
    public firestore: AngularFirestore,
    public authService: AuthService) { }

  ngOnInit(): void {

    this.firestore
    
      .collection('users')
      .valueChanges()
      .subscribe((users: any) => {
        this.test = users
        console.log('chats', this.test);

      })

  }


  showDms(us: any) {
    console.log('Halo DMS', us);

    this.userTest = us;
    this.firestore
      .collection('messages', ref => ref.where('chatId', '==', this.userTest.uid))
      .valueChanges()
      .subscribe((users: any) => {
       // this.user = users.map((users: any) => new User(users))
        console.log('user1234',users)
      });

    // this.userTest = us;
    // this.firestore
    //   .collection('dms')
    //   .valueChanges({ idField: 'id' })
    //   .subscribe((us: any) => {
        //  this.myDMS = us.filter( m => m.users.contains(MEINE_USER_ID))
        //this.user = users.map((users: any) => new User(users))
      //   console.log('user2', us)
      //   this.test = us

      // });



    const newThreadMsg = new User();
    console.log('neetreas', newThreadMsg);

    // newThreadMsg.text = this.dmsMessage;
    newThreadMsg.displayName = this.authService.userData.multiFactor.user.email;
    newThreadMsg.id = this.authService.userData.multiFactor.user.uid;
    newThreadMsg.uid = this.userTest.uid;
    newThreadMsg.email = this.userTest.email;
    newThreadMsg.text =  'Halo ALi'


    this.firestore.collection('dms')
      .add(newThreadMsg.toJson())
    console.log('ANSWER', newThreadMsg);

  }






}
