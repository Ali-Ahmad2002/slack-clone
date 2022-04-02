import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelOverlayComponent } from './add-channel-overlay/add-channel-overlay.component';
import { ChatsComponent } from './chats/chats.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  { path: 'chats/:id', component: ChatsComponent }, 
  {path: 'threads/:id', component: ThreadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
