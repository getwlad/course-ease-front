import { Component, OnInit } from '@angular/core';
import { DashboardRelatory } from 'src/app/models/dashboard-relatory..model';
import { RelatoryService } from 'src/app/services/relatory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardRelatory!: DashboardRelatory;

  constructor(private relatoryService: RelatoryService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.relatoryService.getDashboardRelatory().subscribe({
      next: (data) => {
        this.dashboardRelatory = data;
      },
      error: (err) => {
        console.error('Error fetching dashboard data', err);
      },
    });
  }
}
