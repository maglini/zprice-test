import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smartInputComponent.html'
})

export class SmartInputComponent {
  @Input() title: string;
  @Input() form: FormGroup;
  @Input() isEditableMode: Boolean;
  @Input() value:any
  @Input() name: string;
}
