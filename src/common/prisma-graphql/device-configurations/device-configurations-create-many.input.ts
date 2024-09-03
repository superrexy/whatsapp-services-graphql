import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DeviceConfigurationsCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => Boolean, {nullable:true})
    is_delayed_on_send?: boolean;

    @Field(() => Int, {nullable:true})
    delay_on_send?: number;

    @Field(() => Boolean, {nullable:true})
    notify_when_disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    notify_when_connect?: boolean;

    @Field(() => Boolean, {nullable:true})
    notify_when_error?: boolean;

    @Field(() => String, {nullable:true})
    telegram_chat_id?: string;

    @Field(() => String, {nullable:true})
    telegram_bot_token?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
