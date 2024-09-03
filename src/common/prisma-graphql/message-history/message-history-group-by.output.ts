import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageStatus } from '../prisma/message-status.enum';
import { MessageHistoryCountAggregate } from './message-history-count-aggregate.output';
import { MessageHistoryAvgAggregate } from './message-history-avg-aggregate.output';
import { MessageHistorySumAggregate } from './message-history-sum-aggregate.output';
import { MessageHistoryMinAggregate } from './message-history-min-aggregate.output';
import { MessageHistoryMaxAggregate } from './message-history-max-aggregate.output';

@ObjectType()
export class MessageHistoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => String, {nullable:false})
    target_number!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => MessageStatus, {nullable:false})
    status!: keyof typeof MessageStatus;

    @Field(() => Date, {nullable:true})
    delivered_at?: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
