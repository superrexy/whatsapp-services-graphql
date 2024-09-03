import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateInput } from './device-create.input';
import { DeviceUpdateInput } from './device-update.input';

@ArgsType()
export class UpsertOneDeviceArgs {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceCreateInput, {nullable:false})
    @Type(() => DeviceCreateInput)
    create!: DeviceCreateInput;

    @Field(() => DeviceUpdateInput, {nullable:false})
    @Type(() => DeviceUpdateInput)
    update!: DeviceUpdateInput;
}
