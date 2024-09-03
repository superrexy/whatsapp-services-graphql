import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenWhereInput } from './access-token-where.input';

@InputType()
export class AccessTokenListRelationFilter {

    @Field(() => AccessTokenWhereInput, {nullable:true})
    every?: AccessTokenWhereInput;

    @Field(() => AccessTokenWhereInput, {nullable:true})
    some?: AccessTokenWhereInput;

    @Field(() => AccessTokenWhereInput, {nullable:true})
    none?: AccessTokenWhereInput;
}
