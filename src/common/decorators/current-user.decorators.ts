import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { User } from '@prisma/client';

type UserRecord = keyof User;

export const CurrentUser = createParamDecorator(
  (data: UserRecord, ctx: ExecutionContext) => {
    const request = GqlExecutionContext.create(ctx).getContext().req;
    return data ? request.user[data] : request.user;
  },
);
