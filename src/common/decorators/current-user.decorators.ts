import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import type { User } from '@prisma/client';

type UserRecord = keyof User;

export const CurrentUser = createParamDecorator(
  (data: UserRecord, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return data ? request.user[data] : request.user;
  },
);
