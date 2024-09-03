import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceConfigurationsInput } from './device-create-without-device-configurations.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutDeviceConfigurationsInput } from './device-create-or-connect-without-device-configurations.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutDeviceConfigurationsInput {

    @Field(() => DeviceCreateWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceCreateWithoutDeviceConfigurationsInput)
    create?: DeviceCreateWithoutDeviceConfigurationsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutDeviceConfigurationsInput)
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceConfigurationsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;
}
