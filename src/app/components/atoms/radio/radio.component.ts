import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() options: { value: any; label: string }[] = [
    { value: true, label: 'Ativo' },
    { value: false, label: 'Desativado' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
