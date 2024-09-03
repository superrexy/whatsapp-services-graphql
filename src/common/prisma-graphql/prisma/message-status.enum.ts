import { registerEnumType } from '@nestjs/graphql';

export enum MessageStatus {
    sent = "sent",
    failed = "failed"
}


registerEnumType(MessageStatus, { name: 'MessageStatus', description: undefined })
