import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Device } from '../device/device.model';

@ObjectType()
export class DeviceConfigurations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_delayed_on_send!: boolean;

    @Field(() => Int, {nullable:true})
    delay_on_send!: number | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    notify_when_disconnect!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    notify_when_connect!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    notify_when_error!: boolean;

    @Field(() => String, {nullable:true})
    telegram_chat_id!: string | null;

    @Field(() => String, {nullable:true})
    telegram_bot_token!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Device, {nullable:false})
    device?: Device;
}
