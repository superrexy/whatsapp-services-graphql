import { registerEnumType } from '@nestjs/graphql';

export enum DeviceScalarFieldEnum {
    id = "id",
    name = "name",
    phone_number = "phone_number",
    user_id = "user_id",
    status = "status",
    token = "token",
    last_seen = "last_seen",
    disconnected_at = "disconnected_at",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(DeviceScalarFieldEnum, { name: 'DeviceScalarFieldEnum', description: undefined })
