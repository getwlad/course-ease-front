import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  alunos: any[] = [
    {
      nome: 'Carlos',
      curso: 'Matemática',
      ativo: true,
      createdAt: new Date('2023-05-01'),
    },
    {
      nome: 'Agustinho',
      curso: null,
      ativo: true,
      createdAt: new Date('2023-04-01'),
    },
  ];
  professores: any[] = [
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
