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



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelsDmsComponent } from './channels-dms/channels-dms.component';
import { ChatsComponent } from './chats/chats.component';
import { ThreadsComponent } from './threads/threads.component';
import { AddChannelOverlayComponent } from './add-channel-overlay/add-channel-overlay.component';



@NgModule({
  declarations: [
    AppComponent,
    ChannelsDmsComponent,
    ChatsComponent,
    ThreadsComponent,
    AddChannelOverlayComponent
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
    MatButtonToggleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
