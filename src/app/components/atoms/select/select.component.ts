import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  // padrão
  genderOptions = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outros', label: 'Outros' },
  ];

  @Input() label!: string;
  @Input() options: { value: string; label: string }[] = this.genderOptions;
  @Input() control!: FormControl;
  @Input() holderName: string = 'gênero';
  constructor() {}

  ngOnInit(): void {}
}
