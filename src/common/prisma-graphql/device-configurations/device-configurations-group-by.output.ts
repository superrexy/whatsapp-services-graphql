import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceConfigurationsCountAggregate } from './device-configurations-count-aggregate.output';
import { DeviceConfigurationsAvgAggregate } from './device-configurations-avg-aggregate.output';
import { DeviceConfigurationsSumAggregate } from './device-configurations-sum-aggregate.output';
import { DeviceConfigurationsMinAggregate } from './device-configurations-min-aggregate.output';
import { DeviceConfigurationsMaxAggregate } from './device-configurations-max-aggregate.output';

@ObjectType()
export class DeviceConfigurationsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => Boolean, {nullable:false})
    is_delayed_on_send!: boolean;

    @Field(() => Int, {nullable:true})
    delay_on_send?: number;

    @Field(() => Boolean, {nullable:false})
    notify_when_disconnect!: boolean;

    @Field(() => Boolean, {nullable:false})
    notify_when_connect!: boolean;

    @Field(() => Boolean, {nullable:false})
    notify_when_error!: boolean;

    @Field(() => String, {nullable:true})
    telegram_chat_id?: string;

    @Field(() => String, {nullable:true})
    telegram_bot_token?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
