import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsCreateWithoutDeviceInput } from './device-configurations-create-without-device.input';

@InputType()
export class DeviceConfigurationsCreateOrConnectWithoutDeviceInput {

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:false})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;

    @Field(() => DeviceConfigurationsCreateWithoutDeviceInput, {nullable:false})
    @Type(() => DeviceConfigurationsCreateWithoutDeviceInput)
    create!: DeviceConfigurationsCreateWithoutDeviceInput;
}
