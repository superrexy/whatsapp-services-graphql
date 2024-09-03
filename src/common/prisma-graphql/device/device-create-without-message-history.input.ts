import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceStatus } from '../prisma/device-status.enum';
import { UserCreateNestedOneWithoutDeviceInput } from '../user/user-create-nested-one-without-device.input';
import { DeviceConfigurationsCreateNestedOneWithoutDeviceInput } from '../device-configurations/device-configurations-create-nested-one-without-device.input';

@InputType()
export class DeviceCreateWithoutMessageHistoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone_number!: string;

    @Field(() => DeviceStatus, {nullable:true})
    status?: keyof typeof DeviceStatus;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    last_seen?: Date | string;

    @Field(() => Date, {nullable:true})
    disconnected_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutDeviceInput, {nullable:false})
    user!: UserCreateNestedOneWithoutDeviceInput;

    @Field(() => DeviceConfigurationsCreateNestedOneWithoutDeviceInput, {nullable:true})
    DeviceConfigurations?: DeviceConfigurationsCreateNestedOneWithoutDeviceInput;
}
