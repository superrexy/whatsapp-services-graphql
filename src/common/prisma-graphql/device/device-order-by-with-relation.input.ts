import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DeviceConfigurationsOrderByWithRelationInput } from '../device-configurations/device-configurations-order-by-with-relation.input';
import { MessageHistoryOrderByRelationAggregateInput } from '../message-history/message-history-order-by-relation-aggregate.input';

@InputType()
export class DeviceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    last_seen?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    disconnected_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => DeviceConfigurationsOrderByWithRelationInput, {nullable:true})
    DeviceConfigurations?: DeviceConfigurationsOrderByWithRelationInput;

    @Field(() => MessageHistoryOrderByRelationAggregateInput, {nullable:true})
    MessageHistory?: MessageHistoryOrderByRelationAggregateInput;
}
