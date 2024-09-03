import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DeviceConfigurationsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_delayed_on_send?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delay_on_send?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notify_when_disconnect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notify_when_connect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notify_when_error?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegram_chat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegram_bot_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
