import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { Type } from 'class-transformer';
import { MessageHistoryCreateWithoutDeviceInput } from './message-history-create-without-device.input';

@InputType()
export class MessageHistoryCreateOrConnectWithoutDeviceInput {

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:false})
    @Type(() => MessageHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;

    @Field(() => MessageHistoryCreateWithoutDeviceInput, {nullable:false})
    @Type(() => MessageHistoryCreateWithoutDeviceInput)
    create!: MessageHistoryCreateWithoutDeviceInput;
}
