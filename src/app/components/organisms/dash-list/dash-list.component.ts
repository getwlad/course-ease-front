import { Component, Input, OnInit } from '@angular/core';
import { DashboardRelatory } from 'src/app/models/dashboard-relatory..model';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss'],
})
export class DashListComponent implements OnInit {
  @Input() dashboardRelatory!: DashboardRelatory;

  constructor() {}

  ngOnInit(): void {
    this.dashboardRelatory.recentlyRegistered =
      this.dashboardRelatory.recentlyRegistered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }
}
