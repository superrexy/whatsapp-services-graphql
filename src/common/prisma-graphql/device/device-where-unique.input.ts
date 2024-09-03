import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDeviceStatusFilter } from '../prisma/enum-device-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DeviceConfigurationsNullableRelationFilter } from '../device-configurations/device-configurations-nullable-relation-filter.input';
import { MessageHistoryListRelationFilter } from '../message-history/message-history-list-relation-filter.input';

@InputType()
export class DeviceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DeviceWhereInput], {nullable:true})
    AND?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    OR?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    NOT?: Array<DeviceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone_number?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => EnumDeviceStatusFilter, {nullable:true})
    status?: EnumDeviceStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    last_seen?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    disconnected_at?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => DeviceConfigurationsNullableRelationFilter, {nullable:true})
    DeviceConfigurations?: DeviceConfigurationsNullableRelationFilter;

    @Field(() => MessageHistoryListRelationFilter, {nullable:true})
    MessageHistory?: MessageHistoryListRelationFilter;
}
