import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() errors: { type: string; message: string }[] = [];
  @Input() disabled: boolean = false;
}
