import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:false})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;
}
