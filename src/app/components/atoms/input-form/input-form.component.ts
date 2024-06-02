import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
