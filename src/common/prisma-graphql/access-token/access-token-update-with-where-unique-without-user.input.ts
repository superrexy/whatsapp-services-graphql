import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { Type } from 'class-transformer';
import { AccessTokenUpdateWithoutUserInput } from './access-token-update-without-user.input';

@InputType()
export class AccessTokenUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AccessTokenWhereUniqueInput, {nullable:false})
    @Type(() => AccessTokenWhereUniqueInput)
    where!: Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>;

    @Field(() => AccessTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => AccessTokenUpdateWithoutUserInput)
    data!: AccessTokenUpdateWithoutUserInput;
}
