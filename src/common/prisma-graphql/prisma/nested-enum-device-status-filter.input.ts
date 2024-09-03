import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceStatus } from './device-status.enum';

@InputType()
export class NestedEnumDeviceStatusFilter {

    @Field(() => DeviceStatus, {nullable:true})
    equals?: keyof typeof DeviceStatus;

    @Field(() => [DeviceStatus], {nullable:true})
    in?: Array<keyof typeof DeviceStatus>;

    @Field(() => [DeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof DeviceStatus>;

    @Field(() => NestedEnumDeviceStatusFilter, {nullable:true})
    not?: NestedEnumDeviceStatusFilter;
}
