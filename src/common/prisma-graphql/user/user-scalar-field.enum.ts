import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    password = "password",
    avatar = "avatar",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
