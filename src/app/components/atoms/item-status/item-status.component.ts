import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.component.html',
  styleUrls: ['./item-status.component.scss'],
})
export class ItemStatusComponent implements OnInit {
  @Input() ativo: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
