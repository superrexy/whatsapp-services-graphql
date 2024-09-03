import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeviceConfigurationsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    device_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_delayed_on_send?: true;

    @Field(() => Boolean, {nullable:true})
    delay_on_send?: true;

    @Field(() => Boolean, {nullable:true})
    notify_when_disconnect?: true;

    @Field(() => Boolean, {nullable:true})
    notify_when_connect?: true;

    @Field(() => Boolean, {nullable:true})
    notify_when_error?: true;

    @Field(() => Boolean, {nullable:true})
    telegram_chat_id?: true;

    @Field(() => Boolean, {nullable:true})
    telegram_bot_token?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
