import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AccessTokenCountAggregate } from './access-token-count-aggregate.output';
import { AccessTokenAvgAggregate } from './access-token-avg-aggregate.output';
import { AccessTokenSumAggregate } from './access-token-sum-aggregate.output';
import { AccessTokenMinAggregate } from './access-token-min-aggregate.output';
import { AccessTokenMaxAggregate } from './access-token-max-aggregate.output';

@ObjectType()
export class AggregateAccessToken {

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
