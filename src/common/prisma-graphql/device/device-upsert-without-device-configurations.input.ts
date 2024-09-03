import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutDeviceConfigurationsInput } from './device-update-without-device-configurations.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutDeviceConfigurationsInput } from './device-create-without-device-configurations.input';
import { DeviceWhereInput } from './device-where.input';

@InputType()
export class DeviceUpsertWithoutDeviceConfigurationsInput {

    @Field(() => DeviceUpdateWithoutDeviceConfigurationsInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutDeviceConfigurationsInput)
    update!: DeviceUpdateWithoutDeviceConfigurationsInput;

    @Field(() => DeviceCreateWithoutDeviceConfigurationsInput, {nullable:false})
    @Type(() => DeviceCreateWithoutDeviceConfigurationsInput)
    create!: DeviceCreateWithoutDeviceConfigurationsInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;
}
