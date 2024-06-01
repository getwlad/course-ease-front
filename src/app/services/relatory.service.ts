import { Injectable } from '@angular/core';
import { DashboardRelatory } from '../models/dashboard-relatory..model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelatoryService {
  constructor(private apiService: ApiService) {}

  getDashboardRelatory(): Observable<DashboardRelatory> {
    return this.apiService.get<DashboardRelatory>('relatory');
  }
}
