import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UsersApiService} from '../services/UsersApiService';

@Component({
  selector: 'app-users',
  templateUrl: './users.components.html',

})

export class UsersComponents implements OnInit {
   users: User[] = [];


  constructor(private http: UsersApiService) {
    this.http.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

  ngOnInit() {


  }
}
