import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';
import { Type } from 'class-transformer';
import { MessageHistoryOrderByWithRelationInput } from './message-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageHistoryCountAggregateInput } from './message-history-count-aggregate.input';
import { MessageHistoryAvgAggregateInput } from './message-history-avg-aggregate.input';
import { MessageHistorySumAggregateInput } from './message-history-sum-aggregate.input';
import { MessageHistoryMinAggregateInput } from './message-history-min-aggregate.input';
import { MessageHistoryMaxAggregateInput } from './message-history-max-aggregate.input';

@ArgsType()
export class MessageHistoryAggregateArgs {

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    @Type(() => MessageHistoryWhereInput)
    where?: MessageHistoryWhereInput;

    @Field(() => [MessageHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageHistoryOrderByWithRelationInput>;

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageHistoryCountAggregateInput, {nullable:true})
    _count?: MessageHistoryCountAggregateInput;

    @Field(() => MessageHistoryAvgAggregateInput, {nullable:true})
    _avg?: MessageHistoryAvgAggregateInput;

    @Field(() => MessageHistorySumAggregateInput, {nullable:true})
    _sum?: MessageHistorySumAggregateInput;

    @Field(() => MessageHistoryMinAggregateInput, {nullable:true})
    _min?: MessageHistoryMinAggregateInput;

    @Field(() => MessageHistoryMaxAggregateInput, {nullable:true})
    _max?: MessageHistoryMaxAggregateInput;
}
