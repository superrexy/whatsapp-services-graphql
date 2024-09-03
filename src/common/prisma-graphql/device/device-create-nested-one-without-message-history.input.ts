import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutMessageHistoryInput } from './device-create-without-message-history.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutMessageHistoryInput } from './device-create-or-connect-without-message-history.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutMessageHistoryInput {

    @Field(() => DeviceCreateWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceCreateWithoutMessageHistoryInput)
    create?: DeviceCreateWithoutMessageHistoryInput;

    @Field(() => DeviceCreateOrConnectWithoutMessageHistoryInput, {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutMessageHistoryInput)
    connectOrCreate?: DeviceCreateOrConnectWithoutMessageHistoryInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;
}
