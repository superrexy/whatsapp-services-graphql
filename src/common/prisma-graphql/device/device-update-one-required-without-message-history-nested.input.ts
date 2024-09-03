import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutMessageHistoryInput } from './device-create-without-message-history.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutMessageHistoryInput } from './device-create-or-connect-without-message-history.input';
import { DeviceUpsertWithoutMessageHistoryInput } from './device-upsert-without-message-history.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateToOneWithWhereWithoutMessageHistoryInput } from './device-update-to-one-with-where-without-message-history.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutMessageHistoryNestedInput {

    @Field(() => DeviceCreateWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceCreateWithoutMessageHistoryInput)
    create?: DeviceCreateWithoutMessageHistoryInput;

    @Field(() => DeviceCreateOrConnectWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutMessageHistoryInput)
    connectOrCreate?: DeviceCreateOrConnectWithoutMessageHistoryInput;

    @Field(() => DeviceUpsertWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceUpsertWithoutMessageHistoryInput)
    upsert?: DeviceUpsertWithoutMessageHistoryInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceUpdateToOneWithWhereWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceUpdateToOneWithWhereWithoutMessageHistoryInput)
    update?: DeviceUpdateToOneWithWhereWithoutMessageHistoryInput;
}
