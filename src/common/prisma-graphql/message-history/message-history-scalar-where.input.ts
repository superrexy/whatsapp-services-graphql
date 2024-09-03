import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMessageStatusFilter } from '../prisma/enum-message-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageHistoryScalarWhereInput {

    @Field(() => [MessageHistoryScalarWhereInput], {nullable:true})
    AND?: Array<MessageHistoryScalarWhereInput>;

    @Field(() => [MessageHistoryScalarWhereInput], {nullable:true})
    OR?: Array<MessageHistoryScalarWhereInput>;

    @Field(() => [MessageHistoryScalarWhereInput], {nullable:true})
    NOT?: Array<MessageHistoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    device_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    target_number?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => EnumMessageStatusFilter, {nullable:true})
    status?: EnumMessageStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    delivered_at?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
