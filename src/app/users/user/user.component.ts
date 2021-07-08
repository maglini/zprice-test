import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() surname: string;
  @Input() patronymic: string;
  @Input() number: string;
  @Input() address: string;
  @Input() email: string;
}
