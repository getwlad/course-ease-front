import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent implements OnInit {
  totalCursos: number = 10;
  novosCursos: number = 2;
  totalAlunos: number = 200;
  alunosMatriculados: number = 150;
  totalProfessores: number = 15;
  professoresAtivos: number = 12;

  constructor() {}

  ngOnInit(): void {}
}
