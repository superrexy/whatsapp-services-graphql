import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageStatus } from '../prisma/message-status.enum';

@ObjectType()
export class MessageHistoryMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    device_id?: number;

    @Field(() => String, {nullable:true})
    target_number?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => MessageStatus, {nullable:true})
    status?: keyof typeof MessageStatus;

    @Field(() => Date, {nullable:true})
    delivered_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
