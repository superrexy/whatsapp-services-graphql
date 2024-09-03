import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsCreateInput } from './device-configurations-create.input';
import { DeviceConfigurationsUpdateInput } from './device-configurations-update.input';

@ArgsType()
export class UpsertOneDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:false})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;

    @Field(() => DeviceConfigurationsCreateInput, {nullable:false})
    @Type(() => DeviceConfigurationsCreateInput)
    create!: DeviceConfigurationsCreateInput;

    @Field(() => DeviceConfigurationsUpdateInput, {nullable:false})
    @Type(() => DeviceConfigurationsUpdateInput)
    update!: DeviceConfigurationsUpdateInput;
}
