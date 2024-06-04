import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form[control]',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  @Input() date: boolean = false;
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() errors: { type: string; message: string }[] = [];
  @Input() showErrors: boolean = false;
}
