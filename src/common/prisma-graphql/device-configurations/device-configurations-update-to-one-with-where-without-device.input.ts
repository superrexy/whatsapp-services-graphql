import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsUpdateWithoutDeviceInput } from './device-configurations-update-without-device.input';

@InputType()
export class DeviceConfigurationsUpdateToOneWithWhereWithoutDeviceInput {

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    where?: DeviceConfigurationsWhereInput;

    @Field(() => DeviceConfigurationsUpdateWithoutDeviceInput, {nullable:false})
    @Type(() => DeviceConfigurationsUpdateWithoutDeviceInput)
    data!: DeviceConfigurationsUpdateWithoutDeviceInput;
}
