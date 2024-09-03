import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageStatus } from './message-status.enum';

@InputType()
export class EnumMessageStatusFieldUpdateOperationsInput {

    @Field(() => MessageStatus, {nullable:true})
    set?: keyof typeof MessageStatus;
}
