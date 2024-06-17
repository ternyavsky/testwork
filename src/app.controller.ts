import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJlOWY1NmYxZjVmNDZiMWQ0YTI4ZGQwZjhkYjc0MjRlM2Y2Y2MxMTcyNzEyMzVjZTdiYWMzNjllNTk2MmNkNDcwODc1NzgxZjgwYTZlM2Y1In0.eyJhdWQiOiI0MzMyYWU0ZC0zYTdhLTQ4MTMtOWRhNS1hMTI5MjNiZjcyNDQiLCJqdGkiOiIyZTlmNTZmMWY1ZjQ2YjFkNGEyOGRkMGY4ZGI3NDI0ZTNmNmNjMTE3MjcxMjM1Y2U3YmFjMzY5ZTU5NjJjZDQ3MDg3NTc4MWY4MGE2ZTNmNSIsImlhdCI6MTcxODU4OTAzMywibmJmIjoxNzE4NTg5MDMzLCJleHAiOjE3MzUxNzEyMDAsInN1YiI6IjExMTY0NjU0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODAzNTE4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMzUwODBiMjEtOWQ0YS00YWNlLWExMDQtMTkzN2NkNmYzNzBiIn0.kd4UWAx3vvZSO2luKlisQMZSve2AOss-nKkObYzSX-gtMRmIQIa4ezxyyUZX2TbqG8Iu6vKmxY0NYBpEdMDeZNXVJM26SX1FPERqqxCgCWHGWBQhRY97jRcU5xlV1ote7r0g4E4VhRi6qpzHirR7umZbKZXq29w5o_yMieByZc8xoAYh0O-t5-YfBIQbZWHyJ_0BVA8SBfX5MZty2MdMcAKaQ-Ne1ErgXJTFD0nCj0O4AG-XgqvyNiGS0xoIUbdT9hNobyaaqUcoWKILeD_lYTWe2oqZIK7KMpWD9bnNAPSPSd7ZiEKFJEghssIGAgc2ngEiemep5s4pFJJpYe21aw';
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
