import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceStatus } from '../prisma/device-status.enum';
import { DeviceCountAggregate } from './device-count-aggregate.output';
import { DeviceAvgAggregate } from './device-avg-aggregate.output';
import { DeviceSumAggregate } from './device-sum-aggregate.output';
import { DeviceMinAggregate } from './device-min-aggregate.output';
import { DeviceMaxAggregate } from './device-max-aggregate.output';

@ObjectType()
export class DeviceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone_number!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => DeviceStatus, {nullable:false})
    status!: keyof typeof DeviceStatus;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    last_seen?: Date | string;

    @Field(() => Date, {nullable:true})
    disconnected_at?: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => DeviceCountAggregate, {nullable:true})
    _count?: DeviceCountAggregate;

    @Field(() => DeviceAvgAggregate, {nullable:true})
    _avg?: DeviceAvgAggregate;

    @Field(() => DeviceSumAggregate, {nullable:true})
    _sum?: DeviceSumAggregate;

    @Field(() => DeviceMinAggregate, {nullable:true})
    _min?: DeviceMinAggregate;

    @Field(() => DeviceMaxAggregate, {nullable:true})
    _max?: DeviceMaxAggregate;
}
