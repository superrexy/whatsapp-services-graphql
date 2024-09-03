import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceUpdateInput } from './device-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@ArgsType()
export class UpdateOneDeviceArgs {

    @Field(() => DeviceUpdateInput, {nullable:false})
    @Type(() => DeviceUpdateInput)
    data!: DeviceUpdateInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;
}
