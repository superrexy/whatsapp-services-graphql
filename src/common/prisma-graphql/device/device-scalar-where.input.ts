import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDeviceStatusFilter } from '../prisma/enum-device-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DeviceScalarWhereInput {

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    AND?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    OR?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
