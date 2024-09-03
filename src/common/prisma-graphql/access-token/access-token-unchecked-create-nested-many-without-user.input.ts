import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateOrConnectWithoutUserInput } from './access-token-create-or-connect-without-user.input';
import { AccessTokenCreateManyUserInputEnvelope } from './access-token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';

@InputType()
export class AccessTokenUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AccessTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create?: Array<AccessTokenCreateWithoutUserInput>;

    @Field(() => [AccessTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccessTokenCreateOrConnectWithoutUserInput>;

    @Field(() => AccessTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccessTokenCreateManyUserInputEnvelope)
    createMany?: AccessTokenCreateManyUserInputEnvelope;

    @Field(() => [AccessTokenWhereUniqueInput], {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>>;
}
