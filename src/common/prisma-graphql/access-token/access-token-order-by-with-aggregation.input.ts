import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AccessTokenCountOrderByAggregateInput } from './access-token-count-order-by-aggregate.input';
import { AccessTokenAvgOrderByAggregateInput } from './access-token-avg-order-by-aggregate.input';
import { AccessTokenMaxOrderByAggregateInput } from './access-token-max-order-by-aggregate.input';
import { AccessTokenMinOrderByAggregateInput } from './access-token-min-order-by-aggregate.input';
import { AccessTokenSumOrderByAggregateInput } from './access-token-sum-order-by-aggregate.input';

@InputType()
export class AccessTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    session_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_agent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => AccessTokenCountOrderByAggregateInput, {nullable:true})
    _count?: AccessTokenCountOrderByAggregateInput;

    @Field(() => AccessTokenAvgOrderByAggregateInput, {nullable:true})
    _avg?: AccessTokenAvgOrderByAggregateInput;

    @Field(() => AccessTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: AccessTokenMaxOrderByAggregateInput;

    @Field(() => AccessTokenMinOrderByAggregateInput, {nullable:true})
    _min?: AccessTokenMinOrderByAggregateInput;

    @Field(() => AccessTokenSumOrderByAggregateInput, {nullable:true})
    _sum?: AccessTokenSumOrderByAggregateInput;
}
