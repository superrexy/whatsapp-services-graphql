import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';

@InputType()
export class MessageHistoryListRelationFilter {

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    every?: MessageHistoryWhereInput;

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    some?: MessageHistoryWhereInput;

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    none?: MessageHistoryWhereInput;
}
