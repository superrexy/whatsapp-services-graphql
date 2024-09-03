import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { logger } from 'nestjs-i18n';

@Catch(HttpException)
export class ErrorHandlerLoggerFilter implements GqlExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    logger.error(exception, { context: ErrorHandlerLoggerFilter.name });
    // const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}
