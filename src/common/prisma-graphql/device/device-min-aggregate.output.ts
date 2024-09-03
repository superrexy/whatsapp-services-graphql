import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceStatus } from '../prisma/device-status.enum';

@ObjectType()
export class DeviceMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone_number?: string;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => DeviceStatus, {nullable:true})
    status?: keyof typeof DeviceStatus;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    last_seen?: Date | string;

    @Field(() => Date, {nullable:true})
    disconnected_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
