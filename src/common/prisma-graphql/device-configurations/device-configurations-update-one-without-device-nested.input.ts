import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceConfigurationsCreateWithoutDeviceInput } from './device-configurations-create-without-device.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsCreateOrConnectWithoutDeviceInput } from './device-configurations-create-or-connect-without-device.input';
import { DeviceConfigurationsUpsertWithoutDeviceInput } from './device-configurations-upsert-without-device.input';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { DeviceConfigurationsUpdateToOneWithWhereWithoutDeviceInput } from './device-configurations-update-to-one-with-where-without-device.input';

@InputType()
export class DeviceConfigurationsUpdateOneWithoutDeviceNestedInput {

    @Field(() => DeviceConfigurationsCreateWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsCreateWithoutDeviceInput)
    create?: DeviceConfigurationsCreateWithoutDeviceInput;

    @Field(() => DeviceConfigurationsCreateOrConnectWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: DeviceConfigurationsCreateOrConnectWithoutDeviceInput;

    @Field(() => DeviceConfigurationsUpsertWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsUpsertWithoutDeviceInput)
    upsert?: DeviceConfigurationsUpsertWithoutDeviceInput;

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    disconnect?: DeviceConfigurationsWhereInput;

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    delete?: DeviceConfigurationsWhereInput;

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;

    @Field(() => DeviceConfigurationsUpdateToOneWithWhereWithoutDeviceInput, {nullable:true})
    @Type(() => DeviceConfigurationsUpdateToOneWithWhereWithoutDeviceInput)
    update?: DeviceConfigurationsUpdateToOneWithWhereWithoutDeviceInput;
}
