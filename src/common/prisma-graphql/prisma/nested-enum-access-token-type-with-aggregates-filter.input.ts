import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenType } from './access-token-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAccessTokenTypeFilter } from './nested-enum-access-token-type-filter.input';

@InputType()
export class NestedEnumAccessTokenTypeWithAggregatesFilter {

    @Field(() => AccessTokenType, {nullable:true})
    equals?: keyof typeof AccessTokenType;

    @Field(() => [AccessTokenType], {nullable:true})
    in?: Array<keyof typeof AccessTokenType>;

    @Field(() => [AccessTokenType], {nullable:true})
    notIn?: Array<keyof typeof AccessTokenType>;

    @Field(() => NestedEnumAccessTokenTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAccessTokenTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAccessTokenTypeFilter, {nullable:true})
    _min?: NestedEnumAccessTokenTypeFilter;

    @Field(() => NestedEnumAccessTokenTypeFilter, {nullable:true})
    _max?: NestedEnumAccessTokenTypeFilter;
}
