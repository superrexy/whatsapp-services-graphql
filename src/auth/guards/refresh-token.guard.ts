import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshTokenGuard extends AuthGuard('jwt-refresh-token') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    return ctx.req;
  }
}
