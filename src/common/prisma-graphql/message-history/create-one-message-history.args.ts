import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryCreateInput } from './message-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessageHistoryArgs {

    @Field(() => MessageHistoryCreateInput, {nullable:false})
    @Type(() => MessageHistoryCreateInput)
    data!: MessageHistoryCreateInput;
}
