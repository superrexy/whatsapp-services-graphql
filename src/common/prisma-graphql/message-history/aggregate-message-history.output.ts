import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageHistoryCountAggregate } from './message-history-count-aggregate.output';
import { MessageHistoryAvgAggregate } from './message-history-avg-aggregate.output';
import { MessageHistorySumAggregate } from './message-history-sum-aggregate.output';
import { MessageHistoryMinAggregate } from './message-history-min-aggregate.output';
import { MessageHistoryMaxAggregate } from './message-history-max-aggregate.output';

@ObjectType()
export class AggregateMessageHistory {

    @Field(() => MessageHistoryCountAggregate, {nullable:true})
    _count?: MessageHistoryCountAggregate;

    @Field(() => MessageHistoryAvgAggregate, {nullable:true})
    _avg?: MessageHistoryAvgAggregate;

    @Field(() => MessageHistorySumAggregate, {nullable:true})
    _sum?: MessageHistorySumAggregate;

    @Field(() => MessageHistoryMinAggregate, {nullable:true})
    _min?: MessageHistoryMinAggregate;

    @Field(() => MessageHistoryMaxAggregate, {nullable:true})
    _max?: MessageHistoryMaxAggregate;
}
