import { registerEnumType } from '@nestjs/graphql';

export enum MessageHistoryScalarFieldEnum {
    id = "id",
    device_id = "device_id",
    target_number = "target_number",
    message = "message",
    status = "status",
    delivered_at = "delivered_at",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(MessageHistoryScalarFieldEnum, { name: 'MessageHistoryScalarFieldEnum', description: undefined })
