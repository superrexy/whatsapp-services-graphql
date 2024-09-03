import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceStatus } from './device-status.enum';
import { NestedEnumDeviceStatusFilter } from './nested-enum-device-status-filter.input';

@InputType()
export class EnumDeviceStatusFilter {

    @Field(() => DeviceStatus, {nullable:true})
    equals?: keyof typeof DeviceStatus;

    @Field(() => [DeviceStatus], {nullable:true})
    in?: Array<keyof typeof DeviceStatus>;

    @Field(() => [DeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof DeviceStatus>;

    @Field(() => NestedEnumDeviceStatusFilter, {nullable:true})
    not?: NestedEnumDeviceStatusFilter;
}
