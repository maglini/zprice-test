import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersApiService} from '../../services/UsersApiService';
import {Helper} from '../../helpers/helper';

@Component({
  selector: 'app-create-user',
  templateUrl: './userCreate.component.html'
})
export class UserCreateComponent implements OnInit {
  @Input() users: User[];
  form: FormGroup;
  isUserExist: Boolean;

  constructor(private http: UsersApiService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      patronymic: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.pattern('^\\+380\\d{9}$')]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  getLastPossibleId() {
    let maxId = 0;
    this.users.forEach(u => {
      if (u.id > maxId) {
        maxId = u.id;
      }
    });
    return ++maxId;
  }

  onSubmit() {
    if (this.form.valid) {
      let helper = new Helper()
      let user: User = {...this.form.value};
      // Obviously, it should check server but let be)
      this.isUserExist = helper.isUserExist(this.users,user)
      if (!this.isUserExist) {
         user.id = helper.getLastPossibleId(this.users);
        this.http.post(user);
        this.users.push(user);
      }
    }
  }
}
