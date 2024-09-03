import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceConfigurationsInput } from './device-create-without-device-configurations.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutDeviceConfigurationsInput } from './device-create-or-connect-without-device-configurations.input';
import { DeviceUpsertWithoutDeviceConfigurationsInput } from './device-upsert-without-device-configurations.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateToOneWithWhereWithoutDeviceConfigurationsInput } from './device-update-to-one-with-where-without-device-configurations.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutDeviceConfigurationsNestedInput {

    @Field(() => DeviceCreateWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceCreateWithoutDeviceConfigurationsInput)
    create?: DeviceCreateWithoutDeviceConfigurationsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutDeviceConfigurationsInput)
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceConfigurationsInput;

    @Field(() => DeviceUpsertWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceUpsertWithoutDeviceConfigurationsInput)
    upsert?: DeviceUpsertWithoutDeviceConfigurationsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceUpdateToOneWithWhereWithoutDeviceConfigurationsInput, {nullable:true})
    @Type(() => DeviceUpdateToOneWithWhereWithoutDeviceConfigurationsInput)
    update?: DeviceUpdateToOneWithWhereWithoutDeviceConfigurationsInput;
}
