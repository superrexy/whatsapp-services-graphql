import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AccessTokenOrderByRelationAggregateInput } from '../access-token/access-token-order-by-relation-aggregate.input';
import { DeviceOrderByRelationAggregateInput } from '../device/device-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => AccessTokenOrderByRelationAggregateInput, {nullable:true})
    sessions?: AccessTokenOrderByRelationAggregateInput;

    @Field(() => DeviceOrderByRelationAggregateInput, {nullable:true})
    Device?: DeviceOrderByRelationAggregateInput;
}
