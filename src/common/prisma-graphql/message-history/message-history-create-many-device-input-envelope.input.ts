import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageHistoryCreateManyDeviceInput } from './message-history-create-many-device.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageHistoryCreateManyDeviceInputEnvelope {

    @Field(() => [MessageHistoryCreateManyDeviceInput], {nullable:false})
    @Type(() => MessageHistoryCreateManyDeviceInput)
    data!: Array<MessageHistoryCreateManyDeviceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
