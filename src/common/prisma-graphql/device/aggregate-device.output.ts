import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeviceCountAggregate } from './device-count-aggregate.output';
import { DeviceAvgAggregate } from './device-avg-aggregate.output';
import { DeviceSumAggregate } from './device-sum-aggregate.output';
import { DeviceMinAggregate } from './device-min-aggregate.output';
import { DeviceMaxAggregate } from './device-max-aggregate.output';

@ObjectType()
export class AggregateDevice {

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
