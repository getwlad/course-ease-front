import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() redColor: boolean = false;
  @Input() loading: boolean = false;
  @Input() color: string = 'primary';
  @Output() onClick = new EventEmitter<void>();
}
