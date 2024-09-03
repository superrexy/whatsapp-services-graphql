import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';
import { Type } from 'class-transformer';
import { MessageHistoryOrderByWithAggregationInput } from './message-history-order-by-with-aggregation.input';
import { MessageHistoryScalarFieldEnum } from './message-history-scalar-field.enum';
import { MessageHistoryScalarWhereWithAggregatesInput } from './message-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessageHistoryCountAggregateInput } from './message-history-count-aggregate.input';
import { MessageHistoryAvgAggregateInput } from './message-history-avg-aggregate.input';
import { MessageHistorySumAggregateInput } from './message-history-sum-aggregate.input';
import { MessageHistoryMinAggregateInput } from './message-history-min-aggregate.input';
import { MessageHistoryMaxAggregateInput } from './message-history-max-aggregate.input';

@ArgsType()
export class MessageHistoryGroupByArgs {

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    @Type(() => MessageHistoryWhereInput)
    where?: MessageHistoryWhereInput;

    @Field(() => [MessageHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageHistoryOrderByWithAggregationInput>;

    @Field(() => [MessageHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageHistoryScalarFieldEnum>;

    @Field(() => MessageHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessageHistoryScalarWhereWithAggregatesInput;

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
