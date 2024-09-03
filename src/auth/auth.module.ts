import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';

@Module({
  imports: [JwtModule.register({ global: true }), UsersModule],
  providers: [
    AuthService,
    PasswordService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    AuthResolver,
  ],
})
export class AuthModule {}
