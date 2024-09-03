import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageHistoryCreateWithoutDeviceInput } from './message-history-create-without-device.input';
import { Type } from 'class-transformer';
import { MessageHistoryCreateOrConnectWithoutDeviceInput } from './message-history-create-or-connect-without-device.input';
import { MessageHistoryCreateManyDeviceInputEnvelope } from './message-history-create-many-device-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';

@InputType()
export class MessageHistoryUncheckedCreateNestedManyWithoutDeviceInput {

    @Field(() => [MessageHistoryCreateWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryCreateWithoutDeviceInput)
    create?: Array<MessageHistoryCreateWithoutDeviceInput>;

    @Field(() => [MessageHistoryCreateOrConnectWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: Array<MessageHistoryCreateOrConnectWithoutDeviceInput>;

    @Field(() => MessageHistoryCreateManyDeviceInputEnvelope, {nullable:true})
    @Type(() => MessageHistoryCreateManyDeviceInputEnvelope)
    createMany?: MessageHistoryCreateManyDeviceInputEnvelope;

    @Field(() => [MessageHistoryWhereUniqueInput], {nullable:true})
    @Type(() => MessageHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>>;
}
