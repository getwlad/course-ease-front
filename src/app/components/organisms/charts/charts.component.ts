import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public charOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public charType: ChartType = 'pie';
  public courseChartData: ChartData<'pie'> = {
    labels: ['Curso A', 'Curso A', 'Curso A', 'Curso A', 'Curso A'],
    datasets: [
      {
        label: 'alunos',
        data: [50, 30, 20],
      },
    ],
  };

  public genderChartData: ChartData<'pie'> = {
    labels: ['Masculino', 'Feminino'],
    datasets: [
      {
        data: [60, 40],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
