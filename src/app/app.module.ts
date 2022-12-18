import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageContainerComponent } from './login-page/login-page-container/login-page-container.component';
import { UsersListComponent } from './login-page/users-list/users-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginPageContainerComponent, UsersListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
