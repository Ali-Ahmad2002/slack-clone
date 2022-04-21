import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AngularFireStorageModule, BUCKET   } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelsDmsComponent } from './channels-dms/channels-dms.component';
import { ChatsComponent } from './chats/chats.component';
import { ThreadsComponent } from './threads/threads.component';
import { AddChannelOverlayComponent } from './add-channel-overlay/add-channel-overlay.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DmsComponent } from './dms/dms.component';
 




@NgModule({
  declarations: [
    AppComponent,
    ChannelsDmsComponent,
    ChatsComponent,
    ThreadsComponent,
    AddChannelOverlayComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    DmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatDialogModule,
    CdkTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
    FirebaseAppModule,
    AngularFireAuthModule,
    AngularFireStorageModule

   
  
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
