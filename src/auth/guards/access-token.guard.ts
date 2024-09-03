import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_UNAUTHORIZED_KEY } from '../../common/decorators/allow-unauthorized.decorators';
import { REFRESH_TOKEN } from '../../common/decorators/refresh-token.decorators';

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt-access-token') {
  constructor(private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return req;
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const accessToken = req.headers.authorization?.split(' ')[1];
    const isAllowUnauthorizedRequest = this.reflector.get<boolean>(
      ALLOW_UNAUTHORIZED_KEY,
      context.getHandler(),
    );

    const isRefreshToken = this.reflector.get<boolean>(
      REFRESH_TOKEN,
      context.getHandler(),
    );

    if (isRefreshToken) {
      if (err || !user) return null;
    }

    if (isAllowUnauthorizedRequest) {
      if (context.switchToHttp().getRequest().headers.authorization) {
        return super.handleRequest(err, user, info, context, status);
      }

      if (err || !user) return null;
    }

    if (!accessToken) throw new UnauthorizedException();

    return super.handleRequest(err, user, info, context, status);
  }
}
