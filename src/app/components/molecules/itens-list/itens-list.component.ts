import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrls: ['./itens-list.component.scss'],
})
export class ItensListComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() label: string = '';
  searchTerm: string = '';

  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  filteredItems: any[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  highlightedItem: any;

  highlightItem(item: any) {
    this.highlightedItem = item;
  }

  resetHighlight() {
    this.highlightedItem = null;
  }

  selectItem(item: any) {
    console.log('Item selecionado:', item);
  }
  filterItems() {
    if (this.items.length > 0) {
      if ('name' in this.items[0]) {
        this.filteredItems = this.items.filter((item) =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
        );
      } else if ('personData' in this.items[0]) {
        this.filteredItems = this.items.filter((item) =>
          item.personData.name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()),
        );
      }
    }
  }
}
