import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';

@InputType()
export class AccessTokenCreateOrConnectWithoutUserInput {

    @Field(() => AccessTokenWhereUniqueInput, {nullable:false})
    @Type(() => AccessTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>;

    @Field(() => AccessTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create!: AccessTokenCreateWithoutUserInput;
}
