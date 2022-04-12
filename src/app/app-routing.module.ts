import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelOverlayComponent } from './add-channel-overlay/add-channel-overlay.component';
import { ChannelsDmsComponent } from './channels-dms/channels-dms.component';
import { ChatsComponent } from './chats/chats.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'chats/:id', component: ChatsComponent },

  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  { path: 'threads/:id', component: ThreadsComponent },
  { path: 'channelsDms', component: ChannelsDmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
