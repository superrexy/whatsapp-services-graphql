import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceStatus } from '../prisma/device-status.enum';
import { User } from '../user/user.model';
import { DeviceConfigurations } from '../device-configurations/device-configurations.model';
import { MessageHistory } from '../message-history/message-history.model';
import { DeviceCount } from './device-count.output';

@ObjectType()
export class Device {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone_number!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => DeviceStatus, {nullable:false,defaultValue:'waiting_for_qr_scan'})
    status!: keyof typeof DeviceStatus;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    last_seen!: Date | null;

    @Field(() => Date, {nullable:true})
    disconnected_at!: Date | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => DeviceConfigurations, {nullable:true})
    DeviceConfigurations?: DeviceConfigurations | null;

    @Field(() => [MessageHistory], {nullable:true})
    MessageHistory?: Array<MessageHistory>;

    @Field(() => DeviceCount, {nullable:false})
    _count?: DeviceCount;
}
