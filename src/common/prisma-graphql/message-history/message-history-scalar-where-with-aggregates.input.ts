import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumMessageStatusWithAggregatesFilter } from '../prisma/enum-message-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MessageHistoryScalarWhereWithAggregatesInput {

    @Field(() => [MessageHistoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [MessageHistoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [MessageHistoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageHistoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    device_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    target_number?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: StringWithAggregatesFilter;

    @Field(() => EnumMessageStatusWithAggregatesFilter, {nullable:true})
    status?: EnumMessageStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    delivered_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
