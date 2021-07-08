import { Component } from '@angular/core';
import { User } from './models/user';
import {UsersApiService} from './services/UsersApiService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zprice';
  // users: User[] = [];

  constructor(private http: UsersApiService) {
    // this.http.getUsers()
    //   .subscribe((users: User[]) => this.users = users);


  }

  ngOnInit() {

  }
}
