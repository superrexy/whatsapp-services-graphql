import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceStatus } from './device-status.enum';
import { NestedEnumDeviceStatusWithAggregatesFilter } from './nested-enum-device-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDeviceStatusFilter } from './nested-enum-device-status-filter.input';

@InputType()
export class EnumDeviceStatusWithAggregatesFilter {

    @Field(() => DeviceStatus, {nullable:true})
    equals?: keyof typeof DeviceStatus;

    @Field(() => [DeviceStatus], {nullable:true})
    in?: Array<keyof typeof DeviceStatus>;

    @Field(() => [DeviceStatus], {nullable:true})
    notIn?: Array<keyof typeof DeviceStatus>;

    @Field(() => NestedEnumDeviceStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDeviceStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDeviceStatusFilter, {nullable:true})
    _min?: NestedEnumDeviceStatusFilter;

    @Field(() => NestedEnumDeviceStatusFilter, {nullable:true})
    _max?: NestedEnumDeviceStatusFilter;
}
