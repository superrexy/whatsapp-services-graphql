import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryUpdateManyMutationInput } from './message-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessageHistoryWhereInput } from './message-history-where.input';

@ArgsType()
export class UpdateManyMessageHistoryArgs {

    @Field(() => MessageHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageHistoryUpdateManyMutationInput)
    data!: MessageHistoryUpdateManyMutationInput;

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    @Type(() => MessageHistoryWhereInput)
    where?: MessageHistoryWhereInput;
}
