import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMessageStatusFilter } from '../prisma/enum-message-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';

@InputType()
export class MessageHistoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MessageHistoryWhereInput], {nullable:true})
    AND?: Array<MessageHistoryWhereInput>;

    @Field(() => [MessageHistoryWhereInput], {nullable:true})
    OR?: Array<MessageHistoryWhereInput>;

    @Field(() => [MessageHistoryWhereInput], {nullable:true})
    NOT?: Array<MessageHistoryWhereInput>;

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

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;
}
