import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutDeviceConfigurationsInput } from './device-create-without-device-configurations.input';

@InputType()
export class DeviceCreateOrConnectWithoutDeviceConfigurationsInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceCreateWithoutDeviceConfigurationsInput, {nullable:false})
    @Type(() => DeviceCreateWithoutDeviceConfigurationsInput)
    create!: DeviceCreateWithoutDeviceConfigurationsInput;
}
