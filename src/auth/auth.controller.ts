import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApiMessage } from '../common/decorators/api-message.decorators';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { RefreshToken } from '../common/decorators/refresh-token.decorators';
import { UserEntity } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@ApiTags('Authentications')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiMessage('message.SUCCESS_LOGIN')
  @ApiOkResponse()
  @Post('login')
  async login(@Body() payload: LoginDto) {
    const data = await this.authService.login({ payload });

    return Promise.resolve({
      ...data,
      user: new UserEntity(data.user),
    });
  }

  @ApiOperation({ summary: 'Register' })
  @ApiMessage('message.SUCCESS_REGISTER')
  @ApiCreatedResponse()
  @Post('register')
  async register(@Body() payload: RegisterDto) {
    const data = await this.authService.register({ payload });

    return Promise.resolve({
      ...data,
      user: new UserEntity(data.user),
    });
  }

  @Authenticated()
  @ApiOperation({ summary: 'Logout' })
  @ApiMessage('Logout success')
  @ApiOkResponse()
  @Get('logout')
  async logout() {
    const data = await this.authService.logout();

    return data;
  }

  @ApiBearerAuth()
  @RefreshToken()
  @UseGuards(RefreshTokenGuard)
  @ApiOperation({ summary: 'Refresh Token' })
  @ApiMessage('Refresh token success')
  @ApiOkResponse()
  @Get('refresh-token')
  async refreshToken() {
    const data = await this.authService.refreshTokens();

    return data;
  }
}
