import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeviceConfigurationsCountAggregate } from './device-configurations-count-aggregate.output';
import { DeviceConfigurationsAvgAggregate } from './device-configurations-avg-aggregate.output';
import { DeviceConfigurationsSumAggregate } from './device-configurations-sum-aggregate.output';
import { DeviceConfigurationsMinAggregate } from './device-configurations-min-aggregate.output';
import { DeviceConfigurationsMaxAggregate } from './device-configurations-max-aggregate.output';

@ObjectType()
export class AggregateDeviceConfigurations {

    @Field(() => DeviceConfigurationsCountAggregate, {nullable:true})
    _count?: DeviceConfigurationsCountAggregate;

    @Field(() => DeviceConfigurationsAvgAggregate, {nullable:true})
    _avg?: DeviceConfigurationsAvgAggregate;

    @Field(() => DeviceConfigurationsSumAggregate, {nullable:true})
    _sum?: DeviceConfigurationsSumAggregate;

    @Field(() => DeviceConfigurationsMinAggregate, {nullable:true})
    _min?: DeviceConfigurationsMinAggregate;

    @Field(() => DeviceConfigurationsMaxAggregate, {nullable:true})
    _max?: DeviceConfigurationsMaxAggregate;
}
