import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsUpdateInput } from './device-configurations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';

@ArgsType()
export class UpdateOneDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsUpdateInput, {nullable:false})
    @Type(() => DeviceConfigurationsUpdateInput)
    data!: DeviceConfigurationsUpdateInput;

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:false})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;
}
