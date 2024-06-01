import { Component, OnInit, Input } from '@angular/core';
import { DashboardRelatory } from 'src/app/models/dashboard-relatory..model';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent implements OnInit {
  @Input() dashboardRelatory!: DashboardRelatory;

  constructor() {}

  ngOnInit(): void {}
}
