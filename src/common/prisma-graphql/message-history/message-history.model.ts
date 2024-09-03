import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageStatus } from '../prisma/message-status.enum';
import { Device } from '../device/device.model';

@ObjectType()
export class MessageHistory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    device_id!: number;

    @Field(() => String, {nullable:false})
    target_number!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => MessageStatus, {nullable:false,defaultValue:'sent'})
    status!: keyof typeof MessageStatus;

    @Field(() => Date, {nullable:true})
    delivered_at!: Date | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Device, {nullable:false})
    device?: Device;
}
