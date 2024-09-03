import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryUpdateInput } from './message-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';

@ArgsType()
export class UpdateOneMessageHistoryArgs {

    @Field(() => MessageHistoryUpdateInput, {nullable:false})
    @Type(() => MessageHistoryUpdateInput)
    data!: MessageHistoryUpdateInput;

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:false})
    @Type(() => MessageHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;
}
