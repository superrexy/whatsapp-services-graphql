import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceUpdateWithoutDeviceConfigurationsInput } from './device-update-without-device-configurations.input';

@InputType()
export class DeviceUpdateToOneWithWhereWithoutDeviceConfigurationsInput {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;

    @Field(() => DeviceUpdateWithoutDeviceConfigurationsInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutDeviceConfigurationsInput)
    data!: DeviceUpdateWithoutDeviceConfigurationsInput;
}
