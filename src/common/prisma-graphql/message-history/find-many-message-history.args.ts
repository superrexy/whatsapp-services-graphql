import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryWhereInput } from './message-history-where.input';
import { Type } from 'class-transformer';
import { MessageHistoryOrderByWithRelationInput } from './message-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MessageHistoryWhereUniqueInput } from './message-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageHistoryScalarFieldEnum } from './message-history-scalar-field.enum';

@ArgsType()
export class FindManyMessageHistoryArgs {

    @Field(() => MessageHistoryWhereInput, {nullable:true})
    @Type(() => MessageHistoryWhereInput)
    where?: MessageHistoryWhereInput;

    @Field(() => [MessageHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessageHistoryOrderByWithRelationInput>;

    @Field(() => MessageHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MessageHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageHistoryScalarFieldEnum>;
}
