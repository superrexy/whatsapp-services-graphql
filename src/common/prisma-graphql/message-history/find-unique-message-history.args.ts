import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMessageHistoryArgs {

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:false})
    @Type(() => MessageHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;
}
