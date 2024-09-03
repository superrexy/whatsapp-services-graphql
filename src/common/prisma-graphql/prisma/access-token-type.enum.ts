import { registerEnumType } from '@nestjs/graphql';

export enum AccessTokenType {
    login = "login",
    refresh_token = "refresh_token"
}


registerEnumType(AccessTokenType, { name: 'AccessTokenType', description: undefined })
