import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageHistoryScalarWhereInput } from './message-history-scalar-where.input';
import { Type } from 'class-transformer';
import { MessageHistoryUpdateManyMutationInput } from './message-history-update-many-mutation.input';

@InputType()
export class MessageHistoryUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => MessageHistoryScalarWhereInput, {nullable:false})
    @Type(() => MessageHistoryScalarWhereInput)
    where!: MessageHistoryScalarWhereInput;

    @Field(() => MessageHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageHistoryUpdateManyMutationInput)
    data!: MessageHistoryUpdateManyMutationInput;
}
