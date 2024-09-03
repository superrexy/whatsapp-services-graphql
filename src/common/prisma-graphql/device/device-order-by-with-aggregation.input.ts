import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DeviceCountOrderByAggregateInput } from './device-count-order-by-aggregate.input';
import { DeviceAvgOrderByAggregateInput } from './device-avg-order-by-aggregate.input';
import { DeviceMaxOrderByAggregateInput } from './device-max-order-by-aggregate.input';
import { DeviceMinOrderByAggregateInput } from './device-min-order-by-aggregate.input';
import { DeviceSumOrderByAggregateInput } from './device-sum-order-by-aggregate.input';

@InputType()
export class DeviceOrderByWithAggregationInput {

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

    @Field(() => DeviceCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceCountOrderByAggregateInput;

    @Field(() => DeviceAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceAvgOrderByAggregateInput;

    @Field(() => DeviceMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceMaxOrderByAggregateInput;

    @Field(() => DeviceMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceMinOrderByAggregateInput;

    @Field(() => DeviceSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceSumOrderByAggregateInput;
}
