import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccessTokenType } from '../prisma/access-token-type.enum';
import { AccessTokenCountAggregate } from './access-token-count-aggregate.output';
import { AccessTokenAvgAggregate } from './access-token-avg-aggregate.output';
import { AccessTokenSumAggregate } from './access-token-sum-aggregate.output';
import { AccessTokenMinAggregate } from './access-token-min-aggregate.output';
import { AccessTokenMaxAggregate } from './access-token-max-aggregate.output';

@ObjectType()
export class AccessTokenGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => AccessTokenType, {nullable:false})
    type!: keyof typeof AccessTokenType;

    @Field(() => Boolean, {nullable:false})
    status_token!: boolean;

    @Field(() => Boolean, {nullable:false})
    status_login!: boolean;

    @Field(() => String, {nullable:false})
    user_agent!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => AccessTokenCountAggregate, {nullable:true})
    _count?: AccessTokenCountAggregate;

    @Field(() => AccessTokenAvgAggregate, {nullable:true})
    _avg?: AccessTokenAvgAggregate;

    @Field(() => AccessTokenSumAggregate, {nullable:true})
    _sum?: AccessTokenSumAggregate;

    @Field(() => AccessTokenMinAggregate, {nullable:true})
    _min?: AccessTokenMinAggregate;

    @Field(() => AccessTokenMaxAggregate, {nullable:true})
    _max?: AccessTokenMaxAggregate;
}
