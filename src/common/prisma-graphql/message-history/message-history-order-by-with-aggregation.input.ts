import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MessageHistoryCountOrderByAggregateInput } from './message-history-count-order-by-aggregate.input';
import { MessageHistoryAvgOrderByAggregateInput } from './message-history-avg-order-by-aggregate.input';
import { MessageHistoryMaxOrderByAggregateInput } from './message-history-max-order-by-aggregate.input';
import { MessageHistoryMinOrderByAggregateInput } from './message-history-min-order-by-aggregate.input';
import { MessageHistorySumOrderByAggregateInput } from './message-history-sum-order-by-aggregate.input';

@InputType()
export class MessageHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    target_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    delivered_at?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => MessageHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: MessageHistoryCountOrderByAggregateInput;

    @Field(() => MessageHistoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessageHistoryAvgOrderByAggregateInput;

    @Field(() => MessageHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageHistoryMaxOrderByAggregateInput;

    @Field(() => MessageHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: MessageHistoryMinOrderByAggregateInput;

    @Field(() => MessageHistorySumOrderByAggregateInput, {nullable:true})
    _sum?: MessageHistorySumOrderByAggregateInput;
}
