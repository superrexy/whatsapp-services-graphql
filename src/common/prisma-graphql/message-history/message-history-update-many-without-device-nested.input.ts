import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageHistoryCreateWithoutDeviceInput } from './message-history-create-without-device.input';
import { Type } from 'class-transformer';
import { MessageHistoryCreateOrConnectWithoutDeviceInput } from './message-history-create-or-connect-without-device.input';
import { MessageHistoryUpsertWithWhereUniqueWithoutDeviceInput } from './message-history-upsert-with-where-unique-without-device.input';
import { MessageHistoryCreateManyDeviceInputEnvelope } from './message-history-create-many-device-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { MessageHistoryUpdateWithWhereUniqueWithoutDeviceInput } from './message-history-update-with-where-unique-without-device.input';
import { MessageHistoryUpdateManyWithWhereWithoutDeviceInput } from './message-history-update-many-with-where-without-device.input';
import { MessageHistoryScalarWhereInput } from './message-history-scalar-where.input';

@InputType()
export class MessageHistoryUpdateManyWithoutDeviceNestedInput {

    @Field(() => [MessageHistoryCreateWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryCreateWithoutDeviceInput)
    create?: Array<MessageHistoryCreateWithoutDeviceInput>;

    @Field(() => [MessageHistoryCreateOrConnectWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: Array<MessageHistoryCreateOrConnectWithoutDeviceInput>;

    @Field(() => [MessageHistoryUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryUpsertWithWhereUniqueWithoutDeviceInput)
    upsert?: Array<MessageHistoryUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => MessageHistoryCreateManyDeviceInputEnvelope, {nullable:true})
    @Type(() => MessageHistoryCreateManyDeviceInputEnvelope)
    createMany?: MessageHistoryCreateManyDeviceInputEnvelope;

    @Field(() => [MessageHistoryWhereUniqueInput], {nullable:true})
    @Type(() => MessageHistoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [MessageHistoryWhereUniqueInput], {nullable:true})
    @Type(() => MessageHistoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [MessageHistoryWhereUniqueInput], {nullable:true})
    @Type(() => MessageHistoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [MessageHistoryWhereUniqueInput], {nullable:true})
    @Type(() => MessageHistoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>>;

    @Field(() => [MessageHistoryUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryUpdateWithWhereUniqueWithoutDeviceInput)
    update?: Array<MessageHistoryUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [MessageHistoryUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    @Type(() => MessageHistoryUpdateManyWithWhereWithoutDeviceInput)
    updateMany?: Array<MessageHistoryUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [MessageHistoryScalarWhereInput], {nullable:true})
    @Type(() => MessageHistoryScalarWhereInput)
    deleteMany?: Array<MessageHistoryScalarWhereInput>;
}
