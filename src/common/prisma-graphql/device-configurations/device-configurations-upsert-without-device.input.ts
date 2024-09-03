import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceConfigurationsUpdateWithoutDeviceInput } from './device-configurations-update-without-device.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsCreateWithoutDeviceInput } from './device-configurations-create-without-device.input';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';

@InputType()
export class DeviceConfigurationsUpsertWithoutDeviceInput {

    @Field(() => DeviceConfigurationsUpdateWithoutDeviceInput, {nullable:false})
    @Type(() => DeviceConfigurationsUpdateWithoutDeviceInput)
    update!: DeviceConfigurationsUpdateWithoutDeviceInput;

    @Field(() => DeviceConfigurationsCreateWithoutDeviceInput, {nullable:false})
    @Type(() => DeviceConfigurationsCreateWithoutDeviceInput)
    create!: DeviceConfigurationsCreateWithoutDeviceInput;

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    where?: DeviceConfigurationsWhereInput;
}
