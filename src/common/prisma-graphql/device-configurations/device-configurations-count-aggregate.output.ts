import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceConfigurationsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => Int, {nullable:false})
    is_delayed_on_send!: number;

    @Field(() => Int, {nullable:false})
    delay_on_send!: number;

    @Field(() => Int, {nullable:false})
    notify_when_disconnect!: number;

    @Field(() => Int, {nullable:false})
    notify_when_connect!: number;

    @Field(() => Int, {nullable:false})
    notify_when_error!: number;

    @Field(() => Int, {nullable:false})
    telegram_chat_id!: number;

    @Field(() => Int, {nullable:false})
    telegram_bot_token!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
