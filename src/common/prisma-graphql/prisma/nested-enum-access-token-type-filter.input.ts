import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenType } from './access-token-type.enum';

@InputType()
export class NestedEnumAccessTokenTypeFilter {

    @Field(() => AccessTokenType, {nullable:true})
    equals?: keyof typeof AccessTokenType;

    @Field(() => [AccessTokenType], {nullable:true})
    in?: Array<keyof typeof AccessTokenType>;

    @Field(() => [AccessTokenType], {nullable:true})
    notIn?: Array<keyof typeof AccessTokenType>;

    @Field(() => NestedEnumAccessTokenTypeFilter, {nullable:true})
    not?: NestedEnumAccessTokenTypeFilter;
}
