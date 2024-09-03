import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAccessTokenArgs {

    @Field(() => AccessTokenWhereUniqueInput, {nullable:false})
    @Type(() => AccessTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>;
}
