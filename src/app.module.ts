import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HttpException, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import {
  AcceptLanguageResolver,
  CookieResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import {
  CustomPrismaModule,
  PrismaModule,
  loggingMiddleware,
} from 'nestjs-prisma';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import config from './common/configs/config';
import { LoggerModule } from './common/logger/logger.module';
import { extendedPrismaClient } from './common/prisma-extensions/prisma.extension';
import { DevicesModule } from './devices/devices.module';
import { MessagesModule } from './messages/messages.module';
import { ProfileModule } from './profile/profile.module';
import { UsersListener } from './users/users.listener';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
          // Users Listeners
          UsersListener.passwordHashed(),
        ],
      },
    }),
    CustomPrismaModule.forRootAsync({
      isGlobal: true,
      name: 'PrismaServiceExtended',
      useFactory: () => extendedPrismaClient,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '..', '/common/i18n/'),
        watch: true,
      },
      resolvers: [
        new QueryResolver(['lang', 'l']),
        new HeaderResolver(['x-custom-lang']),
        new CookieResolver(),
        AcceptLanguageResolver,
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'storage', 'public'),
      serveStaticOptions: { index: false },
      serveRoot: '/public',
      renderPath: '/public',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV === 'development',
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      formatError: (error) => {
        const originalError = error.extensions?.originalError as any;

        if (!originalError) {
          return new HttpException(
            error.message || error.extensions?.code,
            500,
          );
        }

        return new HttpException(
          originalError.message,
          originalError.statusCode,
        );
      },
    }),
    LoggerModule,
    AuthModule,
    UsersModule,
    ProfileModule,
    DevicesModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
