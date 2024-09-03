import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageStatus } from './message-status.enum';
import { NestedEnumMessageStatusWithAggregatesFilter } from './nested-enum-message-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMessageStatusFilter } from './nested-enum-message-status-filter.input';

@InputType()
export class EnumMessageStatusWithAggregatesFilter {

    @Field(() => MessageStatus, {nullable:true})
    equals?: keyof typeof MessageStatus;

    @Field(() => [MessageStatus], {nullable:true})
    in?: Array<keyof typeof MessageStatus>;

    @Field(() => [MessageStatus], {nullable:true})
    notIn?: Array<keyof typeof MessageStatus>;

    @Field(() => NestedEnumMessageStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMessageStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMessageStatusFilter, {nullable:true})
    _min?: NestedEnumMessageStatusFilter;

    @Field(() => NestedEnumMessageStatusFilter, {nullable:true})
    _max?: NestedEnumMessageStatusFilter;
}
