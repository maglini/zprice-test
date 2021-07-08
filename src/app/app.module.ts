import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './users/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule }   from '@angular/common/http';
import {UsersApiService} from './services/UsersApiService';
import { UsersComponents } from './users/users.components'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { UserCreateComponent } from './users/userCreate/userCreate.component';
import {UserInfoComponent} from './users/userInfo/userInfo.component';
import {SmartInputComponent} from './common/smartInputComponent';

const appRoutes: Routes =[
  { path: '', component: UsersComponents},
  { path: 'user/:id', component: UserInfoComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponents,
    UserComponent,
    UserCreateComponent,
    UserInfoComponent,
    SmartInputComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsersApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
