import {
  Component,
  OnInit,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DashboardRelatory } from 'src/app/models/dashboard-relatory..model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() dashboardRelatory!: DashboardRelatory;
  public charOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public charType: ChartType = 'pie';
  public courseChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        label: 'alunos',
        data: [],
      },
    ],
  };

  public genderChartData: ChartData<'pie'> = {
    labels: ['Masculino', 'Feminino', 'Outros'],
    datasets: [
      {
        data: [],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dashboardRelatory'] && this.dashboardRelatory) {
      this.courseChartData.labels =
        this.dashboardRelatory.coursesMostEnrolled.map((course) => course.name);
      this.courseChartData.datasets[0].data =
        this.dashboardRelatory.coursesMostEnrolled.map(
          (course) => course.students,
        );

      this.genderChartData.datasets[0].data = [
        this.dashboardRelatory.totalGender.male,
        this.dashboardRelatory.totalGender.female,
        this.dashboardRelatory.totalGender.others,
      ];
    }
  }
}
