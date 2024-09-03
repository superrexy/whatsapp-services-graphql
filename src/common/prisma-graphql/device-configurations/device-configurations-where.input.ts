import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';

@InputType()
export class DeviceConfigurationsWhereInput {

    @Field(() => [DeviceConfigurationsWhereInput], {nullable:true})
    AND?: Array<DeviceConfigurationsWhereInput>;

    @Field(() => [DeviceConfigurationsWhereInput], {nullable:true})
    OR?: Array<DeviceConfigurationsWhereInput>;

    @Field(() => [DeviceConfigurationsWhereInput], {nullable:true})
    NOT?: Array<DeviceConfigurationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    device_id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_delayed_on_send?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    delay_on_send?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    notify_when_disconnect?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    notify_when_connect?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    notify_when_error?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telegram_chat_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telegram_bot_token?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;
}
