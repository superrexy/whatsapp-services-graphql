import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DeviceConfigurationsCountOrderByAggregateInput } from './device-configurations-count-order-by-aggregate.input';
import { DeviceConfigurationsAvgOrderByAggregateInput } from './device-configurations-avg-order-by-aggregate.input';
import { DeviceConfigurationsMaxOrderByAggregateInput } from './device-configurations-max-order-by-aggregate.input';
import { DeviceConfigurationsMinOrderByAggregateInput } from './device-configurations-min-order-by-aggregate.input';
import { DeviceConfigurationsSumOrderByAggregateInput } from './device-configurations-sum-order-by-aggregate.input';

@InputType()
export class DeviceConfigurationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_delayed_on_send?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    delay_on_send?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    notify_when_disconnect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notify_when_connect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notify_when_error?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    telegram_chat_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    telegram_bot_token?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => DeviceConfigurationsCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceConfigurationsCountOrderByAggregateInput;

    @Field(() => DeviceConfigurationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceConfigurationsAvgOrderByAggregateInput;

    @Field(() => DeviceConfigurationsMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceConfigurationsMaxOrderByAggregateInput;

    @Field(() => DeviceConfigurationsMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceConfigurationsMinOrderByAggregateInput;

    @Field(() => DeviceConfigurationsSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceConfigurationsSumOrderByAggregateInput;
}
