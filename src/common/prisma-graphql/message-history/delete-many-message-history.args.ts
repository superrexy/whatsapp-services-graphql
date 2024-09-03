import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessageHistoryArgs {

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    @Type(() => MessageHistoryWhereInput)
    where?: MessageHistoryWhereInput;
}
