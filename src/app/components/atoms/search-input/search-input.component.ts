import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() searchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}
}
