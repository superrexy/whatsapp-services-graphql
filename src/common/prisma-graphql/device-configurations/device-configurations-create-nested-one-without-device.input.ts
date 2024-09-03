import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceConfigurationsCreateWithoutDeviceInput } from './device-configurations-create-without-device.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsCreateOrConnectWithoutDeviceInput } from './device-configurations-create-or-connect-without-device.input';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';

@InputType()
export class DeviceConfigurationsCreateNestedOneWithoutDeviceInput {

    @Field(() => DeviceConfigurationsCreateWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsCreateWithoutDeviceInput)
    create?: DeviceConfigurationsCreateWithoutDeviceInput;

    @Field(() => DeviceConfigurationsCreateOrConnectWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: DeviceConfigurationsCreateOrConnectWithoutDeviceInput;

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;
}
