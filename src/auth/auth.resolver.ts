import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { CurrentUser } from '../common/decorators/current-user.decorators';
import { GetUserAgent } from '../common/decorators/get-user-agent.decorator';
import { RefreshToken } from '../common/decorators/refresh-token.decorators';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginEntity } from './entities/login.entity';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@Resolver(() => LoginEntity)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginEntity, { name: 'loginAccount', nullable: true })
  async login(
    @Args('payload') payload: LoginDto,
    @GetUserAgent() userAgent: string,
  ) {
    const data = await this.authService.login({ payload, userAgent });
    return new LoginEntity(data);
  }

  @Mutation(() => LoginEntity, { name: 'registerAccount', nullable: true })
  async register(
    @Args('payload') payload: RegisterDto,
    @GetUserAgent() userAgent: string,
  ) {
    const data = await this.authService.register({ payload, userAgent });
    return new LoginEntity(data);
  }

  @Authenticated()
  @Mutation(() => Boolean, { name: 'logoutAccount', nullable: true })
  async logout(@CurrentUser() user: any) {
    await this.authService.logout(user);
  }

  @UseGuards(RefreshTokenGuard)
  @RefreshToken()
  @Mutation(() => LoginEntity, { name: 'refreshToken', nullable: true })
  async refreshToken(
    @CurrentUser() user: any,
    @GetUserAgent() userAgent: string,
  ) {
    const data = await this.authService.refreshTokens(user, userAgent);
    return new LoginEntity({ token: data });
  }
}
