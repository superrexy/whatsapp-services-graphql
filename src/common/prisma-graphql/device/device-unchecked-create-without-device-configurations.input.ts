import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceStatus } from '../prisma/device-status.enum';
import { MessageHistoryUncheckedCreateNestedManyWithoutDeviceInput } from '../message-history/message-history-unchecked-create-nested-many-without-device.input';

@InputType()
export class DeviceUncheckedCreateWithoutDeviceConfigurationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone_number!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => DeviceStatus, {nullable:true})
    status?: keyof typeof DeviceStatus;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    last_seen?: Date | string;

    @Field(() => Date, {nullable:true})
    disconnected_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => MessageHistoryUncheckedCreateNestedManyWithoutDeviceInput, {nullable:true})
    MessageHistory?: MessageHistoryUncheckedCreateNestedManyWithoutDeviceInput;
}
