import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('api/leads')
  async getLeads(@Req() request: Request) {
    const query = request.query['query'];
    let res: AxiosResponse;
    if (query) {
      res = await this.appService.getLeads(query);
    }
    res = await this.appService.getLeads();
    res['_embedded']['managers'] = await this.appService.getUsers();
    res['_embedded']['statuses'] = await this.appService.getStatuses();
    return res;
  }

  @Get('api/statuses')
  getStatuses() {
    return this.appService.getStatuses();
  }

  @Get('/api/users')
  getUsers() {
    return this.appService.getUsers();
  }
}
