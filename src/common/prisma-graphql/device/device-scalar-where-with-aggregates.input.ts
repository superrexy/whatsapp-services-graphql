import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDeviceStatusWithAggregatesFilter } from '../prisma/enum-device-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DeviceScalarWhereWithAggregatesInput {

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone_number?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => EnumDeviceStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDeviceStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    last_seen?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    disconnected_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
