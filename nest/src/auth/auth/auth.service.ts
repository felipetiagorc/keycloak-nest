import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

//bcrypt
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8080/auth/realms/sap/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: '46c070ff-040a-4170-bff0-bd6dda0d46a7',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
