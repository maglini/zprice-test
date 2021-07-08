import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersApiService {

  private url: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .pipe(map((data: any) => {
        return data.map(function(user: User): User {
          return new User(user.name, user.surname, user.patronymic, user.number, user.address, user.email, user.id);
        });
      }));
  }

  getById(id: string): Observable<User> {
    return this.http.get(`${this.url}${id}`)
      .pipe(map((user: User) => {
        debugger
        return {
          ...user
        };
      }));
  }

  post(user: User) {
    return this.http.post(`${this.url}`, user)
      .subscribe(
        data => {
          //  debugger
        },
        error => {
          debugger
          console.log('Error', error);
        }
      );
  }

  put(id:any, user: User) {
    return this.http.put(`${this.url}${id}`, user)
      .subscribe(
        data => {

        },
        error => {

        });
  }

  delete(id) {
    return this.http.delete(`${this.url}${id}`).subscribe(data=>{

    })
  }


}
