import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageStatus } from '../prisma/message-status.enum';

@InputType()
export class MessageHistoryCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => String, {nullable:false})
    target_number!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => MessageStatus, {nullable:true})
    status?: keyof typeof MessageStatus;

    @Field(() => Date, {nullable:true})
    delivered_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
