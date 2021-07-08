import {User} from '../../models/user';
import {UsersApiService} from '../../services/UsersApiService';
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Helper} from '../../helpers/helper';

//
// PAGE with detail info about user such bio, etc
//
@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html',

})
export class UserInfoComponent {
  user: User;
  id;
  isEditableMode: Boolean = false;
  form: FormGroup;

  constructor(private http: UsersApiService, private activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.params.subscribe(params => this.id = params['id']);

  }

  ngOnInit() {
    this.http.getById(this.id).subscribe((user: User) => {
      this.user = user
      this.form = new FormGroup({
        name: new FormControl(this.user.name, [Validators.required]),
        surname: new FormControl(this.user.surname, [Validators.required]),
        patronymic: new FormControl(this.user.patronymic, [Validators.required]),
        number: new FormControl(this.user.number, [Validators.required, Validators.pattern('^\\+380\\d{9}$')]),
        address: new FormControl(this.user.address, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required])
      });
    });

    debugger
  }

  onEdit() {
    this.isEditableMode = !this.isEditableMode
  }
  onDel() {
    this.http.delete(this.id).subscribe(data=>{
      this.router.navigate([''])
    })

  }

  onSubmit() {
    if (this.form.valid) {
      let user: User = {...this.form.value};
      this.http.put(this.id, user)
    }
  }
}
