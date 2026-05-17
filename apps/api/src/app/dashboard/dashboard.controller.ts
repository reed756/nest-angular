import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  findAll(@Query('userID') userID: string) {
    return this.dashboardService.getDashboardData(userID);
  }
}
