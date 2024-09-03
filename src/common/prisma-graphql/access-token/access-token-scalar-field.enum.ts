import { registerEnumType } from '@nestjs/graphql';

export enum AccessTokenScalarFieldEnum {
    id = "id",
    session_id = "session_id",
    user_id = "user_id",
    type = "type",
    status_token = "status_token",
    status_login = "status_login",
    user_agent = "user_agent",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(AccessTokenScalarFieldEnum, { name: 'AccessTokenScalarFieldEnum', description: undefined })
