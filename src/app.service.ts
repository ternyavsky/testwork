import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  api = 'https://pppoker2015.amocrm.ru';
  accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJlOWY1NmYxZjVmNDZiMWQ0YTI4ZGQwZjhkYjc0MjRlM2Y2Y2MxMTcyNzEyMzVjZTdiYWMzNjllNTk2MmNkNDcwODc1NzgxZjgwYTZlM2Y1In0.eyJhdWQiOiI0MzMyYWU0ZC0zYTdhLTQ4MTMtOWRhNS1hMTI5MjNiZjcyNDQiLCJqdGkiOiIyZTlmNTZmMWY1ZjQ2YjFkNGEyOGRkMGY4ZGI3NDI0ZTNmNmNjMTE3MjcxMjM1Y2U3YmFjMzY5ZTU5NjJjZDQ3MDg3NTc4MWY4MGE2ZTNmNSIsImlhdCI6MTcxODU4OTAzMywibmJmIjoxNzE4NTg5MDMzLCJleHAiOjE3MzUxNzEyMDAsInN1YiI6IjExMTY0NjU0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODAzNTE4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMzUwODBiMjEtOWQ0YS00YWNlLWExMDQtMTkzN2NkNmYzNzBiIn0.kd4UWAx3vvZSO2luKlisQMZSve2AOss-nKkObYzSX-gtMRmIQIa4ezxyyUZX2TbqG8Iu6vKmxY0NYBpEdMDeZNXVJM26SX1FPERqqxCgCWHGWBQhRY97jRcU5xlV1ote7r0g4E4VhRi6qpzHirR7umZbKZXq29w5o_yMieByZc8xoAYh0O-t5-YfBIQbZWHyJ_0BVA8SBfX5MZty2MdMcAKaQ-Ne1ErgXJTFD0nCj0O4AG-XgqvyNiGS0xoIUbdT9hNobyaaqUcoWKILeD_lYTWe2oqZIK7KMpWD9bnNAPSPSd7ZiEKFJEghssIGAgc2ngEiemep5s4pFJJpYe21aw';
  instance = axios.create({
    baseURL: this.api,
    headers: {
      Authorization: `Bearer ${this.accessToken}`,
    },
  });
  async getLeads(query?) {
    const res = await this.instance.get(`/api/v4/leads`, {
      params: {
        query: query,
      },
    });
    return res.data;
  }

  async getUsers() {
    const res = await this.instance.get(`/api/v4/users/`);
    return res.data['_embedded']['users'];
  }

  async getStatuses() {
    const res = await this.instance.get(
      `api/v4/leads/pipelines/8286182/statuses`,
    );
    return res.data['_embedded']['statuses'];
  }
}
