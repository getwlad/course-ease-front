import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss'],
})
export class DashListComponent implements OnInit {
  @Input() tipo: string = 'Alunos';
  @Input() pessoas: any[] = [
    {
      nome: 'Fabio',
      curso: null,
      ativo: true,
      createdAt: new Date('2023-05-01'),
    },
    {
      nome: 'Ana',
      curso: 'Matemática',
      ativo: false,
      createdAt: new Date('2023-04-01'),
    },
    {
      nome: 'Ana',
      curso: 'Matemática',
      ativo: false,
      createdAt: new Date('2023-04-01'),
    },
  ];

  pessoasFiltradas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.pessoasFiltradas = this.pessoas
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 50);
  }
}
