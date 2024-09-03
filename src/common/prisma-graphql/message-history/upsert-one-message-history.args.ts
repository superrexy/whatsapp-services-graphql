import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { Type } from 'class-transformer';
import { MessageHistoryCreateInput } from './message-history-create.input';
import { MessageHistoryUpdateInput } from './message-history-update.input';

@ArgsType()
export class UpsertOneMessageHistoryArgs {

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:false})
    @Type(() => MessageHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;

    @Field(() => MessageHistoryCreateInput, {nullable:false})
    @Type(() => MessageHistoryCreateInput)
    create!: MessageHistoryCreateInput;

    @Field(() => MessageHistoryUpdateInput, {nullable:false})
    @Type(() => MessageHistoryUpdateInput)
    update!: MessageHistoryUpdateInput;
}
