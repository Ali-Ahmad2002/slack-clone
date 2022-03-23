import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelsDmsComponent } from './channels-dms/channels-dms.component';
import { ChatsComponent } from './chats/chats.component';
import { ThreadsComponent } from './threads/threads.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsDmsComponent,
    ChatsComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
