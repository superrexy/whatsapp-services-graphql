import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutMessageHistoryInput } from './device-create-without-message-history.input';

@InputType()
export class DeviceCreateOrConnectWithoutMessageHistoryInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceCreateWithoutMessageHistoryInput, {nullable:false})
    @Type(() => DeviceCreateWithoutMessageHistoryInput)
    create!: DeviceCreateWithoutMessageHistoryInput;
}
