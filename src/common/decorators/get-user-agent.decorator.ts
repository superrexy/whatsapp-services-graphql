import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetUserAgent = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx);
    return context.getContext().req.headers['user-agent'];
  },
);
