import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { I18nService } from 'nestjs-i18n';
import { PrismaService } from 'nestjs-prisma';
import { JwtPayload } from '../common/interfaces/jwt-payload.interfaces';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly i18n: I18nService,
    private readonly passwordService: PasswordService,
  ) {}

  async login({
    payload,
    userAgent,
  }: {
    payload: LoginDto;
    userAgent: string;
  }) {
    const user = await this.userService.findOneByEmail(payload.email);

    if (!user)
      throw new UnauthorizedException(
        this.i18n.t('message.EMAIL_NOT_REGISTERED'),
      );

    const isPasswordValid = await this.passwordService.validatePassword(
      payload.password,
      user.password,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException(
        this.i18n.t('message.CREDENTIALS_INVALID'),
      );

    const token = await this.prisma.$transaction(async (tx) => {
      const session = await this.generateUserAccess({
        user_id: user.id,
        status_login: true,
        status_token: true,
        user_agent: userAgent,
        type: 'login',
      });

      const token = await this.generateTokens({
        sub: session.session_id,
      });

      return {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    });

    return {
      user,
      token,
    };
  }

  async register({
    payload,
    userAgent,
  }: {
    payload: RegisterDto;
    userAgent: string;
  }) {
    const user = await this.userService.findOneByEmail(payload.email, false);
    if (user)
      throw new ForbiddenException(this.i18n.t('message.EMAIL_CONFLICT'));

    if (payload.password !== payload.password_confirmation)
      throw new ForbiddenException(
        this.i18n.t('message.PASSWORD_CONFIRMATION_INVALID'),
      );

    const data = await this.userService.create({
      email: payload.email,
      name: payload.name,
      password: payload.password,
    });

    const session = await this.generateUserAccess({
      user_id: data.id,
      status_login: true,
      status_token: true,
      user_agent: userAgent,
      type: 'login',
    });

    const token = await this.generateTokens({
      sub: session.session_id,
    });

    return {
      user: data,
      token,
    };
  }

  async logout(user: any) {
    const sessionId = user['sub'];

    const userAccess = await this.prisma.accessToken.findFirst({
      where: {
        session_id: sessionId,
        status_token: true,
      },
    });

    if (!userAccess) {
      throw new ForbiddenException('JWT_EXPIRED');
    }

    await this.prisma.accessToken.update({
      where: {
        id: userAccess.id,
      },
      data: {
        status_token: false,
        status_login: false,
      },
    });
  }

  async refreshTokens(user: any, userAgent: string) {
    const sessionId = user['sub'];
    if (!sessionId) throw new UnauthorizedException();

    const userAccess = await this.prisma.accessToken.findFirst({
      where: {
        session_id: sessionId,
      },
    });

    if (!userAccess) throw new UnauthorizedException();

    if (userAccess.user_agent !== userAgent)
      throw new UnauthorizedException(
        this.i18n.t('message.TOKEN_FROM_OTHER_DEVICE'),
      );

    const getLatestToken = await this.prisma.accessToken.findFirst({
      where: {
        id: userAccess.id,
        status_token: true,
      },
    });
    if (!getLatestToken) throw new ForbiddenException('JWT_EXPIRED');

    const userAccessUpdate = await this.prisma.accessToken.update({
      where: {
        id: getLatestToken.id,
      },
      data: {
        status_token: false,
      },
    });

    await this.generateUserAccess({
      user_id: userAccessUpdate.user_id,
      session_id: userAccessUpdate.session_id,
      status_login: false,
      status_token: true,
      // user_agent: this.req.headers['user-agent'],
      user_agent: 'user-agent',
      type: 'refresh_token',
    });

    const token = await this.generateTokens({
      sub: userAccess.session_id,
    });

    return token;
  }

  private async generateTokens(payload: JwtPayload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
      }),
      this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async generateUserAccess(payload: Prisma.AccessTokenUncheckedCreateInput) {
    const userAccess = await this.prisma.accessToken.create({
      data: {
        ...payload,
      },
    });

    return userAccess;
  }
}
