import { registerEnumType } from '@nestjs/graphql';

export enum DeviceConfigurationsScalarFieldEnum {
    id = "id",
    device_id = "device_id",
    is_delayed_on_send = "is_delayed_on_send",
    delay_on_send = "delay_on_send",
    notify_when_disconnect = "notify_when_disconnect",
    notify_when_connect = "notify_when_connect",
    notify_when_error = "notify_when_error",
    telegram_chat_id = "telegram_chat_id",
    telegram_bot_token = "telegram_bot_token",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(DeviceConfigurationsScalarFieldEnum, { name: 'DeviceConfigurationsScalarFieldEnum', description: undefined })
